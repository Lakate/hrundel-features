'use strict';

require('chai').should();
const request = require('supertest');
const app = require('../app');
const nock = require('nock');

const replies = require('./route-test-replyData');

describe('Main page', function () {
    this.timeout(200000);

    beforeEach(() => {
        nock('http://api.github.com')
            .get('/orgs/urfu-2015/repos?page=1&per_page=100')
            .reply(200, replies.fourthTest.firstReply.body, replies.fourthTest.firstReply.headers);

        nock('https://api.github.com')
            .log(console.log)
            .get('/repos/urfu-2015/webdev-tasks-1/issues/events?page=1&per_page=100')
            .query(true)
            .reply(200, replies.fourthTest.secondReply.body, replies.fourthTest.secondReply.headers);

        nock('https://api.github.com')
            .get('/repos/urfu-2015/webdev-tasks-2/issues/events?page=1&per_page=100')
            .query(true)
            .reply(200, replies.fourthTest.thirdReply.body, replies.fourthTest.thirdReply.headers);

        nock('https://api.github.com')
            .get('/repos/urfu-2015/webdev-tasks-3/issues/events?page=1&per_page=100')
            .query(true)
            .reply(200, replies.fourthTest.fourthReply.body, replies.fourthTest.fourthReply.headers);

        nock('https://api.github.com')
            .get('/repos/urfu-2015/webdev-tasks-4/issues/events?page=1&per_page=100')
            .query(true)
            .reply(200, replies.fourthTest.fifthReply.body, replies.fourthTest.fifthReply.headers);

        nock('https://api.github.com')
            .get('/repos/urfu-2015/webdev-tasks-5/issues/events?page=1&per_page=100')
            .query(true)
            .reply(200, replies.fourthTest.sixthReply.body, replies.fourthTest.sixthReply.headers);

        nock('https://api.github.com')
            .get('/repos/urfu-2015/webdev-tasks-6/issues/events?page=1&per_page=100')
            .query(true)
            .reply(200, replies.fourthTest.seventhReply.body, replies.fourthTest.seventhReply.headers);

        nock('https://api.github.com')
            .get('/repos/urfu-2015/webdev-tasks-7/issues/events?page=1&per_page=100')
            .query(true)
            .reply(200, replies.fourthTest.eightReply.body, replies.fourthTest.eightReply.headers);

        nock('https://api.github.com')
            .get('/repos/urfu-2015/webdev-tasks-1/issues/events?page=2&per_page=100')
            .query(true)
            .reply(200, replies.fourthTest.ninethReply.body, replies.fourthTest.ninethReply.headers);
    });

    it('should respond 404', function (done) {
        request(app)
            .get('/wrongNote')
            .expect(404, done);
    });

    it('should return students data', done => {
        request(app)
            .get('/')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200, done);
    });

    it('should return bad request error', done => {
        request(app)
            .post('/students/refresh')
            .send({})
            .expect(400)
            .end((err, res) => {
                done(err);
            });
    });

    it('should create new student', function (done) {
        request(app)
            .post('/students/refresh')
            .send({
                login: 'Victoria-Vladimirova',
                mentor: 'evilj0e',
                number: 1,
                type: 'webdev',
                status: 'pending',
                pr: 7
            })
            .expect(200, done);
    });

    it('should refresh student', function (done) {
        request(app)
            .post('/students/refresh')
            .send({
                login: 'Victoria-Vladimirova',
                mentor: 'evilj0e',
                number: 1,
                type: 'webdev',
                status: 'accepted',
                pr: 7
            })
            .expect(200, done);
    });

    it.only('should return student', done => {
        request(app)
            .get('/students/5767be18f991d3700494ef2e')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end((err, res) => {
                res.body.login.should.be.equal('Victoria-Vladimirova');
                res.body.mentor.should.be.equal('evilj0e');
                res.body.number.should.be.equal(1);
                res.body.type.should.be.equal('webdev');
                res.body.status.should.be.equal('pending');
                res.body.pr.should.be.equal(7);
                done(err);
            });
    });

    it('should return comments and commits for task', function (done) {
        request(app)
            .put('/students/getCommentsAndCommits')
            .send({
                mentor: 'evilj0e',
                number: 1,
                type: 'webdev',
                status: 'accepted',
                pr: 7,
                login: 'Victoria-Vladimirova'
            })
            .expect(200)
            .end((err, res) => {
                res.body.should.be.equal(replies.commentsAndCommits);
                done(err);
            });
    });
});
