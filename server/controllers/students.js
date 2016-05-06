'use strict';

const Students = require('../models/student');
const getUserName = require('../../scripts/getGitHubName');
const mongoose = require('mongoose');
const co = require('co');

exports.refresh = (req, res) => {
    let pullRequests = req.body;

    co(function * () {
        for (let i = 0; i < pullRequests.length; i++) {
            yield Students.findStudent({login: pullRequests[i].login})
                .then(student => {
                    if (student) {
                        return updateStudent({body: pullRequests[i]}, student);
                    } else {
                        return createStudent({body: pullRequests[i]}, res);
                    }
                });
        }
        res.send('OK');
    });

    // Students.findStudent({login: pullRequests.login})
    //     .then(student => {
    //         if (student) {
    //             console.log(pullRequests.login, 'FIND');
    //             return updateStudent({body: pullRequests}, student);
    //         } else {
    //             console.log(pullRequests.login, 'NOT FIND');
    //             return createStudent({body: pullRequests}, res);
    //         }
    //     }).then(() => res.send('OK'));
};

exports.getStudent = (req, res) => {
    const query = {_id: req.params.id};
    Students.findStudent(query)
        .then(student => res.json(student));
};

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
        pr: req.body.pr
    };

    const newStudent = new Students(student);
    return newStudent.addTask(task)
        .then(() => newStudent.updateResult())
        .then(() => {
            getUserName(newStudent, (student, name) => {
                student.name = name;
                student.save();
            });
        })
        .then(() => newStudent.save())
        .then(savedStudent => {
            return savedStudent;
        })
        .catch(err => {
            console.error('Error on user save: ' + err);
        });
}

function updateStudent(req, student) {
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
        }).then(() => {
            return student.updateResult();
        });
}
