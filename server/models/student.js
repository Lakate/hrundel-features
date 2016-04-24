'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tasks = new Schema({
    taskType: String,
    number: Number,
    mentor: String,
    status: String
});

const studentsSchema = new Schema({
    login: String,
    mentor: String,
    avatar: {type: String, default: 'no avatar'},
    stars: {type: Number, default: 0},
    tasks: [Tasks]
});

studentsSchema.statics.findStudent = function (query) {
    return this.findOne(query)
        .exec()
        .then(users => {
            return users;
        });
};

studentsSchema.methods.addTask = function (newTask) {
    this.tasks.push(newTask);

    return this.save()
        .then(savedStudent => {
            return savedStudent;
        });
};

studentsSchema.methods.updateTask = function (newTask) {
    for (let i in this.tasks) {
        if (this.tasks[i].taskType === newTask.taskType &&
            this.tasks[i].number === newTask.number) {
            this.tasks[i].status = newTask.status;
            this.tasks[i].mentor = newTask.mentor;
        }
    }

    return this.save()
        .then(savedStudent => {
            return savedStudent;
        });
};

module.exports = mongoose.model('Students', studentsSchema);
