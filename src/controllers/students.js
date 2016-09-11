'use strict';

const Students = require('../models/student');
const github = require('../lib/github');
const slack = require('../lib/slackBot');
const mongoose = require('mongoose');

const cache = require('../helpers/lruCache');

const config = require('../config/default');
const STANDARD_DEADLINE = config.app.standardDeadline;
const EXCEPTIONAL_TASKS = config.app.exceptionalTasks;

/**
 * Функция, выполняющая обнвление бд.
 * Сначала получаем статусы всех коммитов в организации и записываем их в кеш,
 * после ищем студента - если нашли, то обновляем данные о нем,
 * иначе - создаем нового и записываем в бд
 *
 * @param req - информация о коммите от хрюнделя
 * @param res
 */

exports.refresh = (req, res) => {
    return Students.findStudent({login: req.body.login})
        .then(student => {
            if (student) {
                return updateStudent(req, student);
            } else {
                return createStudent(req);
            }
        })
        .then(() => res.send('OK'));
};

exports.getStudent = (req, res) => {
    const query = {_id: req.params.id};
    Students.findStudent(query)
        .then(student => res.json(student));
};

/**
 * Функция, для вычисления даты текущего дедлайна,
 * и если до него остались примерно сутки - шлет оповещение в слак
 *
 * @param task - задача
 * @param student - студент
 */
function setDeadline(task, student) {
    if (task.timeline._timeline.length === 0) {
        return task;
    }

    let reserveDays = getReserveDays(task, student);
    let currentDeadline = getCurrentDeadline(reserveDays, task, student);

    task.deadlineDate = currentDeadline.date;
    if (Date.parse(task.deadlineDate) - Date.now() <= 86400000 &&
        Date.parse(task.deadlineDate) - Date.now() > 82800000) {
        slack.sendMessage(student.login, `${task.taskType}-tasks-${task.number}`);
    }
    task.deadlineUser = currentDeadline.user;
    task.reserveDays = reserveDays;

    return task;
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
 */
function createStudent(req) {
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
        timeline: req.body.timeline
    };

    const newStudent = new Students(student);
    return github.getUserData(newStudent)
        .then(data => {
            newStudent.name = data.name || newStudent.login;
            newStudent.email = data.email || '';
            newStudent.save();
        })
        .then(() => setDeadline(task, newStudent))
        .then(task => newStudent.addTask(task))
        .then(() => newStudent.updateResult())
        .then(() => cache.memoize('slackUserList', 24 * 60 * 60 * 1000, () => {
            return slack.getUserList();
        }))
        .then(userList => {
            newStudent.slackUsername = newStudent.email ? userList[newStudent.email] : '';
            newStudent.save();
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
 */
function updateStudent(req, student) {
    const task = {
        number: req.body.number,
        taskType: req.body.type,
        mentor: req.body.mentor,
        status: req.body.status,
        pr: req.body.pr,
        timeline: req.body.timeline
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
        .then(() => setDeadline(task, student, isFoundStudent))
        .then(task => {
            if (isFoundStudent) {
                return student.updateTask(task);
            } else {
                return student.addTask(task);
            }
        })
        .then(() => student.updateResult());
}

function getTaskCountDays(task) {
    let taskName = `${task.taskType}-tasks-${task.number}`;
    if (taskName in Object.keys(EXCEPTIONAL_TASKS)) {
        return EXCEPTIONAL_TASKS[taskName].deadline;
    } else {
        return STANDARD_DEADLINE;
    }
}

function getReserveDays(task, student) {
    let currentDate = Date.parse(task.timeline._checkDate);
    let taskCountDays = getTaskCountDays(task);
    let time = {};
    let currentUser = '';

    task.timeline._timeline.forEach(comment => {
        if (comment.isMentorsComment) {
            currentUser = task.mentor;
        } else {
            currentDate = student.login;
        }

        if (time[currentUser]) {
            time[currentUser] += Date.parse(comment.date) - currentDate;
        } else {
            time[currentUser] = Date.parse(comment.date) - currentDate;
        }
        currentDate = Date.parse(comment.date);
    });

    for (let user in time) {
        time[user] = taskCountDays - time[user];
    }

    return time;
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
 * @param time
 * @param student
 */
function getCurrentDeadline(time, task, student) {
    let last = task.timeline._timeline.length - 1;
    let taskCountDays = getTaskCountDays(task);

    if (task.timeline._timeline[last].isMentorsComment) {
        return {
            date: new Date(Date.parse(task.timeline._timeline[last].date) +
                (taskCountDays - time[task.mentor])),
            user: task.mentor
        };
    } else {
        return {
            date: new Date(Date.parse(task.timeline._timeline[last].date) +
                (taskCountDays - time[student.login])),
            user: student.login
        };
    }
}
