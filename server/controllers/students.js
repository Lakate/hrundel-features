'use strict';

const Students = require('../models/student');
const mongoose = require('mongoose');

exports.create = (req, res) => {
    const student = {
        login: req.body.login,
        mentor: req.body.mentor
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
};

exports.getStudent = (req, res) => {
    const query = {_id: req.params.id};
    Students.findStudent(query)
        .then(student => res.json(student));
};

exports.updateTask = (req, res) => {
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
};
