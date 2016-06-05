'use strict';

const Students = require('../models/student');
const getUserName = require('../../scripts/getGitHubName');
const updateStatus = require('../../scripts/updateStatus');
const commentsAndCommits = require('../../scripts/commentsAndCommits');
const mongoose = require('mongoose');

let statusList = [];
let repos = [];

exports.refresh = (req, res) => {
    if (statusList.length === 0) {
        updateStatus.getStatusses()
            .then(data => {
                repos = data[0];
                statusList = data[1];
                // очистить через 10 минут
                setTimeout(() => {
                    statusList = [];
                }, 600000);
            })
            .then(() => {
                return Students.findStudent({login: req.body.login})
                    .then(student => {
                        if (student) {
                            return updateStudent(req, student, statusList);
                        } else {
                            return createStudent(req, statusList);
                        }
                    });
            })
            .then(() => res.send('OK'));
    } else {
        Students.findStudent({login: req.body.login})
            .then(student => {
                if (student) {
                    return updateStudent(req, student, statusList);
                } else {
                    return createStudent(req, statusList);
                }
            })
            .then(() => res.send('OK'));
    }
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
    let length = repos.length;
    for (let i = 0; i < length; i++) {
        if (taskName === repos[i].name) {
            return repos[i].createAt;
        }
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
            newStudent.addTask(task);
        })
        .then(() => newStudent.updateResult(statusList))
        .then(commentsAndCommits => {
            newStudent.commentsAndCommits = commentsAndCommits;
            newStudent.save();
        })
        .then(() => {
            getUserName(newStudent, (student, name) => {
                if (name) {
                    student.name = name;
                } else {
                    student.name = student.login;
                }
                student.save();
            });
        })
        .then(() => newStudent.save())
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

    let isfoundStudent = false;
    return Students.findStudent(query)
        .then(foundStudent => {
            if (foundStudent) {
                student = foundStudent;
                isfoundStudent = true;
            }
        })
        .then(() => {
            return commentsAndCommits.getCommentsAndCommits(task, student.login);
        })
        .then(commentsAndCommits => {
            task.commentsAndCommits = commentsAndCommits;
            if (isfoundStudent) {
                return student.updateTask(task);
            } else {
                return student.addTask(task);
            }
        })
        .then(savedStudent => {
            if (statusList) {
                return student.updateResult(statusList);
            } else {
                return savedStudent;
            }
        });
}
