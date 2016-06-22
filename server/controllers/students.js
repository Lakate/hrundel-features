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

/**
 * Функция, выполняющая обновление бд.
 * Сначала получаем статусы всех коммитов в организации и записываем их в кеш,
 * после ищем студента - если нашли, то обновляем данные о нем,
 * иначе - создаем нового и записываем в бд
 *
 * @param req - информация о коммите от хрюнделя
 * @param res
 */

exports.refresh = (req, res) => {
    if (!req.body.login || !req.body.mentor || !req.body.number ||
        !req.body.type || !req.body.status || !req.body.pr) {
        res.status(400).send('Bad request');
        return;
    }

    // assert(req.body.login, 'Login is invalid', 400);

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
                .then(() => res.send('OK'));// 204
        })
    .catch(err => res.status(500).send(err));
};

exports.getStudent = (req, res) => {
    const query = {_id: req.params.id};
    Students.findStudent(query)
        .then(student => res.json(student));
};

/**
 * Функция, необходимая для рисования графиков.
 * Возвращает данные о студенте, его задачах, коммитах
 */
exports.getCommentsAndCommits = (req, res) => {
    updateStudent(req)
        .then(student => res.json(student));
};

/**
 * Функция, которая для задачи возвращает время создания репазитория,
 * чтобы была точка отсчета дедлайнов
 *
 * @param taskName - название задачи
 * @returns Date - дата создания репазитория
 */
// TODO: вынести стартовую дату задачи в конфиг
function getStartDate(taskName) {
    const repos = cache.reposList;
    const length = repos.length;
    for (let i = 0; i < length; i++) {
        if (taskName === repos[i].name) {
            return repos[i].createAt;
        }
    }
}

/**
 * Функция, для вычисления даты текущего дедлайна,
 * и если до него остались примерно сутки - шлет оповещение в слак
 *
 * @param task - задача
 * @param student - студент
 * @param isFoundStudent - обновление студента или его создание
 */
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

/**
 * Функция создания студента и запись данных о нем в бд
 * Сначала для задачи получаем данные о комментариях и коммитах,
 * далее вычисляем его актуальные баллы,
 * далее вычисляем дату текущего дедлайна,
 * далее получаем с гитхаба его email и имя,
 * далее устанавливаем его имя в слаке,
 * и сохраняем результат
 *
 * @param req - данные о студенте и коммите от хрюнделя
 * @param statusList -
 */
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
        mentorEmail: '',
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
        .then(() => github.getUserData(student.login))
        .then(data => {
            newStudent.name = data.name || newStudent.login;
            newStudent.email = data.email || '';
            return github.getUserData(task.mentor);
        })
        .then(() => {
            return cache.memoize('slackUserList', 24 * 60 * 60 * 1000, () => {
                return slack.getUserList();
            });
        })
        .then(userList => {
            newStudent.slackUsername = newStudent.email ? userList[newStudent.email] : '';
            return newStudent.save();
        })
        .catch(err => {
            console.error('Error on user save: ' + err);
        });
}

/**
 * Функция, обновляющая данные о студенте
 * Сначала ищем данного студента в бд,
 * далее получаем все комментарии и коммиты для этой задачи,
 * далее вычисляем текущую дату дедлайна,
 * далее вычисляем его тукущий результат
 * и сохраняем полученные данные
 *
 * @param req - данные о студенте и коммите от хрюнделя
 * @param student
 * @param statusList - статусы всех коммитов
 */
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

/**
 * Функция, вычисляющая дату текущего дедлайна
 * Сначала вычисляем скольо времени осталось у ментора и сколько у студента,
 * далее устанавливаем сколько дней дано на сдачу задачи,
 * далее устанавливаем "на чьей стороне тикают часы" и сколько
 * осталось до дедлайна,
 * и возвращаем результат
 *
 * @param task - задача
 */
function getCurrentDeadline(task) {
    let currentDate = Date.parse(task.startDate);
    let time = {};

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

    let last = task.commentsAndCommits.length - 1;

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
