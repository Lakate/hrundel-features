'use strict';

const Students = require('../models/student');
const github = require('../../scripts/github');
const commentsAndCommits = require('../../scripts/commentsAndCommits');
const slack = require('../../scripts/slackBot');
const mongoose = require('mongoose');

const cache = require('../../scripts/lruCache');

const config = require('config');
const STANDARD_DEADLINE = config.get('standardDeadline');
const EXCEPTIONAL_TASKS = config.get('exceptionalTasks');

exports.refresh = (req, res) => {
    return cache.memoize('statusList', 60 * 60 * 1000, () => {
        return github.getStatusses();
    })
        .then(statusList => {
            Students.findStudent({login: req.body.login})
                .then(student => {
                    if (student) {
                        return updateStudent(req, student, statusList);
                    } else {
                        return createStudent(req, statusList);
                    }
                })
                .then(() => res.send('OK'));
        });
};

exports.getStudent = (req, res) => {
    const query = {_id: req.params.id};
    Students.findStudent(query)
        .then(student => res.json(student));
};

exports.getCommentsAndCommits = (req, res) => {
    updateStudent(req)
        .then(student => res.json(student));
};

function getStartDate(taskName) {
    const repos = cache.reposList;
    const length = repos.length;
    for (let i = 0; i < length; i++) {
        if (taskName === repos[i].name) {
            return repos[i].createAt;
        }
    }
}

function setDeadline(task, student, isFoundStudent) {
    let currentDeadline = getCurrentDeadline(task);
    task.deadlineDate = currentDeadline.date;
    if (Date.parse(task.deadlineDate) - Date.now() <= 86400000 &&
        Date.parse(task.deadlineDate) - Date.now() > 82800000) {
        slack.sendMessage(student.login, `${task.taskType}-tasks-${task.number}`);
    }
    task.deadlineUser = currentDeadline.user;

    if (isFoundStudent) {
        return student.updateTask(task);
    } else {
        return student.addTask(task);
    }
}

function createStudent(req, statusList) {
    const student = {
        login: req.body.login,
        mentor: req.body.mentor,
        avatar: `https://avatars.githubusercontent.com/${req.body.login}`
    };
    const task = {
        number: req.body.number,
        taskType: req.body.type,
        mentor: req.body.mentor,
        status: req.body.status,
        pr: req.body.pr,
        commentsAndCommits: [],
        startDate: getStartDate(req.body.type + '-tasks-' + req.body.number)
    };

    const newStudent = new Students(student);
    return commentsAndCommits.getCommentsAndCommits(task, student.login)
        .then(commentsAndCommits => {
            task.commentsAndCommits = commentsAndCommits;
            newStudent.save();
        })
        .then(() => newStudent.updateResult(statusList))
        .then(() => setDeadline(task, newStudent))
        .then(() => {
            github.getUserData(newStudent)
                .then(data => {
                    newStudent.name = data.name || newStudent.login;
                    newStudent.email = data.email || '';
                    newStudent.save();
                });
        })
        .then(() => {
            return cache.memoize('slackUserList', 24 * 60 * 60 * 1000, () => {
                return slack.getUserList();
            });
        })
        .then(userList => {
            newStudent.slackUsername = newStudent.email ? userList[newStudent.email] : '';
            newStudent.save();
        })
        .catch(err => {
            console.error('Error on user save: ' + err);
        });
}

function updateStudent(req, student, statusList) {
    const task = {
        number: req.body.number,
        taskType: req.body.type,
        mentor: req.body.mentor,
        status: req.body.status,
        pr: req.body.pr,
        startDate: getStartDate(req.body.type + '-tasks-' + req.body.number)
    };
    const query = {
        'tasks.taskType': req.body.type,
        'tasks.number': req.body.number,
        'login': req.body.login
    };

    let isFoundStudent = false;
    return Students.findStudent(query)
        .then(foundStudent => {
            if (foundStudent) {
                student = foundStudent;
                isFoundStudent = true;
            }
        })
        .then(() => commentsAndCommits
            .getCommentsAndCommits(task, student.login))
        .then(commentsAndCommits => {
            task.commentsAndCommits = commentsAndCommits;
            return setDeadline(task, student, isFoundStudent);
        })
        .then(savedStudent => {
            if (statusList) {
                return student.updateResult(statusList);
            } else {
                return savedStudent;
            }
        });
}

function getCurrentDeadline(task) {
    let currentDate = Date.parse(task.startDate);

    let time = {};
    let last = task.commentsAndCommits.length - 1;

    task.commentsAndCommits.forEach(commentOrCommit => {
        if (time[commentOrCommit.user]) {
            time[commentOrCommit.user] += Date.parse(commentOrCommit.createdAt) - currentDate;
        } else {
            time[commentOrCommit.user] = Date.parse(commentOrCommit.createdAt) - currentDate;
        }
        currentDate = Date.parse(commentOrCommit.createdAt);
    });

    let taskCountDays;
    let taskName = `${task.taskType}-tasks-${task.number}`;
    if (taskName in EXCEPTIONAL_TASKS) {
        taskCountDays = EXCEPTIONAL_TASKS[taskName].deadline;
    } else {
        taskCountDays = STANDARD_DEADLINE;
    }

    for (let user in time) {
        if (user !== task.commentsAndCommits[last].user) {
            return {
                date: new Date(Date.parse(task.commentsAndCommits[last].createdAt) +
                (taskCountDays - time[user])),
                user
            };
        }
    }

    return {
        date: new Date(Date.parse(task.commentsAndCommits[last].createdAt) +
            (taskCountDays - time[task.commentsAndCommits[last].user])),
        user: task.commentsAndCommits[last].user
    };
}
