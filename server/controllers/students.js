'use strict';

const Students = require('../models/student');
const getUserName = require('../../scripts/getGitHubName');
const updateStatus = require('../../scripts/updateStatus');
const mongoose = require('mongoose');

let statusList = [];

exports.refresh = (req, res) => {
    if (statusList.length === 0) {
        updateStatus.getStatusses()
            .then(updateStatusses => {
                statusList = updateStatusses;
                // очистить через 10 минут
                setTimeout(() => {
                    statusList.length = 0;
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
        pr: req.body.pr
    };

    const newStudent = new Students(student);
    return newStudent.addTask(task)
        .then(() => newStudent.updateResult(statusList))
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
        pr: req.body.pr
    };
    const query = {
        'tasks.taskType': req.body.type,
        'tasks.number': req.body.number,
        'login': req.body.login
    };

    return Students.findStudent(query)
        .then(foundStudent => {
            if (foundStudent) {
                student = foundStudent;
                return foundStudent.updateTask(task);
            } else {
                return student.addTask(task);
            }
        })
        .then(() => student.updateResult(statusList));
}
