'use strict';

const mongoose = require('../server/scripts/mongooseConnect');
const Student = require('../server/models/student');
const clearDB = require('../server/scripts/clearDB');
require('chai').should();

describe('Student model testing', function () {
    this.timeout(200000);
    before(function (done) {
        clearDB(done);
    });

    after(function (done) {
        clearDB(done);
    });

    it('should create a new Student', function (done) {
        const student = new Student({
            login: 'Lakate',
            mentor: 'Zhigalov'
        });

        student.save()
            .then(createdStudent => {
                createdStudent.login.should.equal('Lakate');
                createdStudent.mentor.should.equal('Zhigalov');
                done();
            });
    });

    it('should return Student', done => {
        Student.findStudent({login: 'Lakate'})
            .then(foundStudent => {
                foundStudent.login.should.equal('Lakate');
                foundStudent.mentor.should.equal('Zhigalov');
                done();
            });
    });

    it('should add task to student', function (done) {
        const task = {
            mentor: "i4got10",
            number: 1,
            taskType: "webdev",
            status: "accepted"
        };

        Student.findStudent({login: 'Lakate'})
            .then(foundStudent => {
                return foundStudent.addTask(task);
            })
            .then(savedStudent => {
                savedStudent.tasks.length.should.equal(1);
                savedStudent.tasks[0].taskType.should.equal(task.taskType);
                savedStudent.tasks[0].number.should.equal(task.number);
                savedStudent.tasks[0].mentor.should.equal(task.mentor);
                savedStudent.tasks[0].status.should.equal(task.status);
                done();
            });
    });

    it('should update student task', function (done) {
        const task = {
            number: 1,
            taskType: "webdev",
            mentor: "i4got10",
            status: "pending"
        };

        Student.findStudent({'tasks.taskType': 'webdev', 'tasks.number': 1, 'login': 'Lakate'})
            .then(foundStudent => {
                return foundStudent.updateTask(task);
            })
            .then(savedStudent => {
                savedStudent.tasks[0].taskType.should.equal(task.taskType);
                savedStudent.tasks[0].number.should.equal(task.number);
                savedStudent.tasks[0].status.should.equal('pending');
                done();
            });
    });
});
