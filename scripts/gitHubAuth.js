'use strict';

module.exports.auth = github => {
    github.authenticate({
        type: 'basic',
        username: 'lakate',
        password: '87051021004Aa'
    });
    // const token = process.env.TOKEN;
    // github.authenticate({
    //     type: 'token',
    //     token
    // });
};
