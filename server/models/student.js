'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tasks = new Schema({
    taskType: String,
    number: Number,
    mentor: String,
    status: String,
    pr: Number
});

const studentsSchema = new Schema({
    login: String,
    mentor: String,
    name: String,
    avatar: {type: String, default: 'no avatar'},
    stars: {type: Number, default: 0},
    tasks: [Tasks],
    result: 0
});

studentsSchema.statics.findAllStudents = function () {
    return this.find({})
        .then(students => {
            return students;
        });
};

studentsSchema.statics.findStudent = function (query) {
    return this.findOne(query)
        .then(student => {
            return student;
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

studentsSchema.methods.updateResult = function (statusList) {
    let currentResult = 0;

    for (let i in this.tasks) {
        let newStatus = getNewStatus(this.tasks[i], this.login, statusList);
        this.tasks[i].status = newStatus || this.tasks[i].status;
        if (this.tasks[i].status === 'accepted') {
            if (this.tasks[i].number === 5 || this.tasks[i].number === 7) {
                currentResult += 2;
            } else {
                currentResult += 1;
            }
        } else if (this.tasks[i].status === 'half-accepted') {
            if (this.tasks[i].number === 5 || this.tasks[i].number === 7) {
                currentResult += 1;
            } else {
                currentResult += 0.5;
            }
        }
    }

    this.result = currentResult;
    return this.save()
        .then(savedStudent => {
            return savedStudent;
        });
};

module.exports = mongoose.model('Students', studentsSchema);

function getNewStatus(task, login, fullStatusList) {
    let taskStatusList = fullStatusList[task.number - 1];
    let statussesCount = taskStatusList.length;

    let currentStatus;
    let failed = false;
    let mentorRuntime = false;
    let studentRuntime = false;

    for (let i = 0; i < statussesCount; i++) {
        if (taskStatusList[i].login.toLowerCase() === login.toLowerCase()) {
            if (taskStatusList[i].state !== 'closed') {
                continue;
            }
            taskStatusList[i].labels.forEach(label => {
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
