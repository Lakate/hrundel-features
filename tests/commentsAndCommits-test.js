'use strict';

require('chai').should();
const nock = require('nock');
const github = require('../scripts/commentsAndCommits');

const replies = require('./commentsAndCommits-test-replyData');

describe('Main page', function () {
    this.timeout(200000);

    beforeEach(() => {
        nock('http://api.github.com')
            .get('https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7/comments?page=1&per_page=100')
            .reply(200, replies.firstReply);

        nock('http://api.github.com')
            .get('https://api.github.com/repos/urfu-2015/webdev-tasks-1/pulls/7/commits?page=1&per_page=100')
            .reply(200, replies.secondReply);
    });

    it('return comments and commits of task', function (done) {
        let task = {
            number: 1,
            taskType: 'webdev',
            mentor: 'evilj0e',
            status: 'accepted',
            pr: 7
        };
        let student = {
            login: 'Victoria-Vladimirova',
            mentor: 'evilj0e'
        };

        github.getCommentsAndCommits(task, student)
            .then(commentsAndCommits => {
                commentsAndCommits.should.be.equal(replies.firstTest);
                done();
            });
    });

    it('should throw error', function (done) {
        let task = {
            number: 1,
            taskType: 'webdev',
            mentor: 'evilj0e',
            status: null,
            pr: 7
        };
        let student = {
            login: 'Victoria-Vladimirova',
            mentor: 'evilj0e'
        };

        github.getCommentsAndCommits(task, student)
            .catch(err => {
                err.should.be.equal('Error on get Comments and Commits');
                done(err);
            });
    });
});
