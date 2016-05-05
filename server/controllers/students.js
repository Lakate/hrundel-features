'use strict';

const Students = require('../models/student');
const getUserName = require('../../scripts/getGitHubName');
const mongoose = require('mongoose');
const co = require('co');

exports.refresh = (req, res) => {
    Students.findStudent({login: req.body.login})
        .then(student => {
            console.log(student);
            if (student) {
                return updateStudent(req, student);
            } else {
                return createStudent(req);
            }
        })
        .then(() => {
            res.send('OK');
        });
};

exports.getStudent = (req, res) => {
    const query = {_id: req.params.id};
    Students.findStudent(query)
        .then(student => res.json(student));
};

function createStudent(req) {
    console.log(req.body.login);

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
    getUserName(newStudent, (student, name) => {
        student.name = name;
        student.save();
    });

    newStudent.addTask(task);
    console.log(newStudent);
    return newStudent.save()
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
                foundStudent.updateTask(task);
                return foundStudent.updateResult();
            } else {
                student.addTask(task);
                return student.updateResult();
            }
        });
}
