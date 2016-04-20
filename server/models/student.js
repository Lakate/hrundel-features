'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tasks = require('./tasks');

let studentsSchema = new Schema({
    login: String,
    mentor: String,
    stars: Number
});

studentsSchema.statics.findStudent = function (query, cb) {
    return this.find(query, (err, users) => {
        if (err) {
            console.error(err);
        } else {
            cb(users);
        }
    });
};

studentsSchema.methods.getStudentTasks = function (cb) {
    return Tasks.find({userId: this._id}, (err, tasks) => {
        if (err) {
            console.error(err);
        } else {
            cb(tasks);
        }
    });
};

module.exports = mongoose.model('Students', studentsSchema);
