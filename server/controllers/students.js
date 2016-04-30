'use strict';

const Students = require('../models/student');
const mongoose = require('mongoose');

exports.refresh = (req, res) => {
    Students.findStudent({login: req.body.login})
        .then(student => {
            if (student) {
                updateStudent(req, res);
            } else {
                createStudent(req, res);
            }
        });
};

exports.getStudent = (req, res) => {
    const query = {_id: req.params.id};
    Students.findStudent(query)
        .then(student => res.json(student));
};

function createStudent(req, res) {
    const student = {
        login: req.body.login,
        mentor: req.body.mentor,
        avatar: 'https://avatars.githubusercontent.com/' + req.body.login
    };
    const task = {
        number: req.body.number,
        taskType: req.body.type,
        mentor: req.body.mentor,
        status: req.body.status
    };

    const newStudent = new Students(student);
    newStudent.addTask(task);

    newStudent.save()
        .then(savedStudent => {
            res.json(savedStudent);
        })
        .catch(err => {
            console.error('Error on user save: ' + err);
        });
}

function updateStudent(req, res) {
    const task = {
        number: req.body.number,
        taskType: req.body.type,
        mentor: req.body.mentor,
        status: req.body.status
    };
    const query = {
        'tasks.taskType': req.body.type,
        'tasks.number': req.body.number,
        'login': req.body.login
    };

    Students.findStudent(query)
        .then(foundStudent => {
            return foundStudent.updateTask(task);
        })
        .then(savedStudent => res.json(savedStudent));
}
