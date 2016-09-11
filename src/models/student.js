'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('../config/default');
const EXCEPTIONAL_TASKS = config.app.exceptionalTasks;
const STANDARD_POINTS = config.app.standardPoints;
const STANDARD_HALF_POINTS = config.app.standardHalfPoints;

const Tasks = new Schema({
    taskType: String,
    number: Number,
    mentor: String,
    status: String,
    pr: Number,
    deadlineDate: String,
    deadlineUser: String,
    reserveDays: {},
    timeline: Schema.Types.Mixed
});

const studentsSchema = new Schema({
    login: String,
    mentor: String,
    name: String,
    email: String,
    slackUsername: String,
    avatar: {type: String, default: 'no avatar'},
    stars: {type: Number, default: 0},
    tasks: [Tasks],
    result: 0
});

studentsSchema.statics.findAllStudents = function () {
    return this.find({})
        .then(students => students);
};

studentsSchema.statics.findStudent = function (query) {
    return this.findOne(query)
        .then(student => student);
};

studentsSchema.methods.addTask = function (newTask) {
    this.tasks.push(newTask);

    return this.save()
        .then(savedStudent => savedStudent);
};

studentsSchema.methods.updateTask = function (newTask) {
    for (let i in this.tasks) {
        if (this.tasks[i].taskType === newTask.taskType &&
            this.tasks[i].number === newTask.number) {
            this.tasks[i].status = newTask.status;
            this.tasks[i].mentor = newTask.mentor;
            this.tasks[i].commentsAndCommits = newTask.commentsAndCommits;
            this.tasks[i].deadlineDate = newTask.deadlineDate;
            this.tasks[i].deadlineUser = newTask.deadlineUser;
            this.tasks[i].reserveDays = newTask.reserveDays;
            this.tasks[i].timeline = newTask.timeline;
        }
    }

    return this.save()
        .then(savedStudent => savedStudent);
};

studentsSchema.methods.updateResult = function () {
    let currentResult = 0;

    for (let i in this.tasks) {
        let taskName = `${this.tasks[i].taskType}-tasks-${this.tasks[i].number}`;

        if (this.tasks[i].status === null) {
            this.tasks[i].status = 'pending';
        } else if (this.tasks[i].status === 'accepted') {
            let isExceptionalTask = EXCEPTIONAL_TASKS.some(task => {
                if (task.repo === taskName) {
                    currentResult += task.points;
                }

                return task.repo === taskName;
            });

            if (!isExceptionalTask) {
                currentResult += STANDARD_POINTS;
            }
        } else if (this.tasks[i].status === 'half-accepted') {
            let isExceptionalTask = EXCEPTIONAL_TASKS.some(task => {
                if (task.repo === taskName) {
                    currentResult += task.halfPoints;
                }

                return task.repo === taskName;
            });

            if (!isExceptionalTask) {
                currentResult += STANDARD_HALF_POINTS;
            }
        }
    }

    this.result = currentResult;
    return this.save()
        .then(savedStudent => savedStudent);
};

module.exports = mongoose.model('Students', studentsSchema);
