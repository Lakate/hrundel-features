'use strict';

const request = require('request');
const GITHUB_API = 'https://api.github.com';

function getUserName(student, cb) {
    request({
        url: GITHUB_API + `/users/${student.login}`,
        method: 'GET',
        headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36' +
                ' (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36'}
    },
        function (err, res, body) {
            if (!err && res.statusCode === 200) {
                const user = JSON.parse(body);
                cb(student, user.name);
            } else {
                cb(student, '');
            }
        }
    );
}

module.exports = getUserName;
