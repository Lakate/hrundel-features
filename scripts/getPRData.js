'use strict';

const request = require('request');
const GITHUB_API = 'https://api.github.com';

module.exports.getPRCommits = (task, cb) => {
    request({
        url: GITHUB_API + `/repos/urfu-2015/${task.taskType}-tasks-${task.number}
            /pulls/${task.pr}/commits`,
        method: 'GET',
        headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36' +
            ' (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36'}
    },
        function (err, res, body) {
            if (!err && res.statusCode === 200) {
                body = JSON.parse(body).pop();
                let answer = {
                    login: body.login,
                    text: body.text,
                    createdAt: body.createdAt
                };
                cb(null, answer);
            } else {
                cb(err);
            }
        }
    );
};

module.exports.getPRComments = (task, cb) => {
    request({
        url: GITHUB_API + `/repos/urfu-2015/${task.taskType}-tasks-${task.number}
            /pulls/${task.pr}/comments`,
        method: 'GET',
        headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36' +
            ' (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36'}
    },
        function (err, res, body) {
            if (!err && res.statusCode === 200) {
                body = JSON.parse(body).pop();
                let answer = {
                    login: body.user.login,
                    text: body.body,
                    createdAt: body.created_at
                };
                cb(null, answer);
            } else {
                cb(err);
            }
        }
    );
};
