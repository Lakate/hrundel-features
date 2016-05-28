'use strict';

module.exports.auth = github => {
    const token = process.env.TOKEN;
    github.authenticate({
        type: 'token',
        token
    });
};
