'use strict';

const getUserName = require('./getGitHubName');
const mongoose = require('./mongooseConnect');
const clearDB = require('./clearDB');

const Student = require('../server/models/student');

require('chai').should();

clearDB(() => {
    console.log('Done!');
});

const students = ['Lakate', 'danmir', 'Savichev-Igor', 'dotokoto'];
const mentors = ['Zhigalov', 'Mokhov', 'gogoleff', 'xiiivii'];

const taskType1 = [{
    mentor: "Zhigalov",
    number: 1,
    taskType: "webdev",
    status: "pending",
    pr: 1
}, {
    mentor: "Mokhov",
    number: 3,
    taskType: "webdev",
    status: "accepted",
    pr: 2
}, {
    mentor: "gogoleff",
    number: 4,
    taskType: "webdev",
    status: "accepted",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 2,
    taskType: "webdev",
    status: "pending",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 5,
    taskType: "webdev",
    status: "half-points",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 1,
    taskType: "javascript",
    status: "accepted",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 2,
    taskType: "javascript",
    status: "half-points",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 1,
    taskType: "verstka",
    status: "accepted",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 10,
    taskType: "verstka",
    status: "accepted",
    pr: 1
}
];

const taskType2 = [{
    mentor: "Zhigalov",
    number: 1,
    taskType: "webdev",
    status: "pending",
    pr: 1
}, {
    mentor: "Mokhov",
    number: 3,
    taskType: "webdev",
    status: "accepted",
    pr: 1
}, {
    mentor: "gogoleff",
    number: 4,
    taskType: "webdev",
    status: "accepted",
    pr: 1
}, {
    mentor: "Zhigalov",
    number: 2,
    taskType: "webdev",
    status: "accepted",
    pr: 1
}, {
    mentor: "Zhigalov",
    number: 5,
    taskType: "webdev",
    status: "half-points",
    pr: 1
}, {
    mentor: "Zhigalov",
    number: 1,
    taskType: "javascript",
    status: "accepted",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 2,
    taskType: "javascript",
    status: "half-points",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 1,
    taskType: "verstka",
    status: "accepted",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 10,
    taskType: "verstka",
    status: "accepted",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 4,
    taskType: "javascript",
    status: "half-points",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 7,
    taskType: "javascript",
    status: "half-points",
    pr: 1
}, {
    mentor: "xiiivii",
    number: 10,
    taskType: "javascript",
    status: "accepted",
    pr: 1
}];

for (let i = 0; i < students.length; i++) {
    let student = new Student({
        login: students[i],
        mentor: mentors[i],
        avatar: "https://avatars.githubusercontent.com/" + students[i]
    });

    if (i % 2 === 0) {
        taskType1.forEach(task => {
            student.addTask(task);
        });
    } else {
        taskType2.forEach(task => {
            student.addTask(task);
        });
    }
    student.save();

    getUserName(student, (student, name) => {
        student.name = name;
        student.save();
    });
}
