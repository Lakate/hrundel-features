'use strict';

require('chai').should();
const request = require('supertest');
const app = require('../app');

describe('Main page', function () {
    this.timeout(200000);

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

    it.only('should return bad request error', done => {
        request(app)
            .post('/students/refresh')
            .send({})
            .expect(400)
            .end((err, res) => {
                done(err);
            });
    });

    it('should return student', done => {
        // nock('https://api.github.com')
        //     .get('/repos/urfu-2015/webdev-tasks-5/pulls/22/comments?page=1&per_page=100')
        //     .query(true)
        //     .reply(200, {body: REPLY_COMMENT});

        request(app)
            .get('/students/5767be18f991d3700494ef2e')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
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
            .expect(200, done);
    });
});

const REPLY_COMMENT = [
    {
        url: 'https://api.github.com/repos/urfu-2015/webdev-tasks-5/pulls/comments/58338251',
        id: 58338251,
        diff_hunk: '@@ -0,0 +1,14 @@\n+<component name="libraryTable">',
        path: '.idea/libraries/webdev_tasks_5_node_modules.xml',
        position: null,
        original_position: 1,
        commit_id: '2e27443824fb27aec64776b818ae6349d7a25604',
        original_commit_id: 'd5da4937704ea4c7721c3d010e3bca743bb3b687',
        user: {
            login: 'i4got10',
            id: 1151154,
            avatar_url: 'https://avatars.githubusercontent.com/u/1151154?v=3',
            gravatar_id: '',
            url: 'https://api.github.com/users/i4got10',
            html_url: 'https://github.com/i4got10',
            followers_url: 'https://api.github.com/users/i4got10/followers',
            following_url: 'https://api.github.com/users/i4got10/following{/other_user}',
            gists_url: 'https://api.github.com/users/i4got10/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/i4got10/starred{/owner}{/repo}',
            type: 'User'
        },
        body: 'чето лишнее',
        created_at: '2016-04-04T07:43:55Z',
        updated_at: '2016-04-13T07:37:17Z',
        html_url: 'https://github.com/urfu-2015/webdev-tasks-5/pull/22#discussion_r58338251',
        pull_request_url: 'https://api.github.com/repos/urfu-2015/webdev-tasks-5/pulls/22',
        _links: {
            html: {
                href: 'https://github.com/urfu-2015/webdev-tasks-5/pull/22#discussion_r58338251'
            },
            pull_request: {
                href: 'https://api.github.com/repos/urfu-2015/webdev-tasks-5/pulls/22'
            }
        }
    }];
