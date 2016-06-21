'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('config');
const EXCEPTIONAL_TASKS = config.get('exceptionalTasks');
const STANDARD_POINTS = config.get('standardPoints');
const STANDARD_HALF_POINTS = config.get('standardHalfPoints');

const Tasks = new Schema({
    taskType: String,
    number: Number,
    mentor: String,
    status: String,
    pr: Number,
    commentsAndCommits: [],
    startDate: String,
    deadlineDate: String,
    deadlineUser: String
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
    return this.findOne(query);
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
        }
    }

    return this.save()
        .then(savedStudent => savedStudent);
};

studentsSchema.methods.updateResult = function (statusList) {
    let currentResult = 0;

    for (let i in this.tasks) {
        let newStatus = getNewStatus(this.login, statusList[this.tasks[i].number - 1]);
        let taskName = `${this.tasks[i].taskType}-tasks-${this.tasks[i].number}`;

        this.tasks[i].status = newStatus || this.tasks[i].status;
        if (this.tasks[i].status === null) {
            this.tasks[i].status = 'pending';
        }
        if (this.tasks[i].status === 'accepted') {
            if (taskName in EXCEPTIONAL_TASKS) {
                currentResult += EXCEPTIONAL_TASKS[taskName].points;
            } else {
                currentResult += STANDARD_POINTS;
            }
        } else if (this.tasks[i].status === 'half-accepted') {
            if (taskName in EXCEPTIONAL_TASKS) {
                currentResult += EXCEPTIONAL_TASKS[taskName].halfPoints;
            } else {
                currentResult += STANDARD_HALF_POINTS;
            }
        }
    }

    this.result = currentResult;
    return this.save()
        .then(savedStudent => savedStudent);
};

module.exports = mongoose.model('Students', studentsSchema);

function getNewStatus(login, statusList) {
    let currentStatus;
    let failed = false;
    let mentorRuntime = false;
    let studentRuntime = false;

    let statussesCount = statusList.length;
    for (let i = 0; i < statussesCount; i++) {
        if (statusList[i].login.toLowerCase() === login.toLowerCase()) {
            if (statusList[i].state !== 'closed') {
                return 'pending';
            }
            statusList[i].labels.forEach(label => {
                if (label.name === 'failed') {
                    failed = true;
                }
                if (label.name === 'student-time-run-out') {
                    studentRuntime = true;
                } else if (label.name === 'mentor-time-run-out') {
                    mentorRuntime = true;
                } else {
                    currentStatus = label.name;
                }
            });
            if (failed) {
                return;
            }
        }
    }

    if (mentorRuntime && studentRuntime) {
        currentStatus = 'accepted';
    } else if (mentorRuntime) {
        currentStatus = 'accepted';
    } else if (studentRuntime) {
        currentStatus = 'half-accepted';
    }

    return currentStatus;
}
