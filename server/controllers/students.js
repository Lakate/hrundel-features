'use strict';

const Students = require('../models/student');
const Tasks = require('../models/tasks');
const mongoose = require('mongoose');

mongoose.connect('mongodb://<login>:<password>@ds013951.mlab.com:13951/hrundelboard');
mongoose.connection.on('error', console.error.bind(console, 'connection error'));

exports.create = (req, res) => {
    const data = {
        login: req.body.login,
        mentor: req.body.mentor,
        stars: 0
    };

    const newStudent = new Students(data);
    newStudent.save(err => {
        if (err) {
            console.error('Error on user save: ' + err);
        } else {
            res.json(data);
        }
    });
};

exports.update = (req, res) => {
    res.send('Обновлять ментора, так как храним текущего?');
};

exports.getStudent = (req, res) => {
    const query = {_id: req.params.id};
    Students.findStudent(query, student => res.json(student));
};

exports.getStudentTasks = (req, res) => {
    const query = {_id: req.params.id};
    Students.findStudent(query, students => {
        const student = students.pop();
        student.getStudentTasks(tasks => res.json(tasks));
    });
};

exports.setStudentTasks = (req, res) => {
    const data = {
        name: req.body.name,
        userId: req.params.id,
        status: req.body.status
    };

    console.log(req.params.id);
    const newTask = new Tasks(data);
    newTask.save(err => {
        if (err) {
            console.error('Error on task save: ' + err);
        } else {
            res.json(data);
        }
    });
};
