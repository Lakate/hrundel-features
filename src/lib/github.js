'use strict';

const config = require('../config/default');
const githubSetting = config.app.github;

const Promise = require('bluebird');

const GITHUB_SETTINGS = {
    version: githubSetting.version,
    debug: githubSetting.debug,
    protocol: githubSetting.protocol,
    host: githubSetting.host,
    timeout: githubSetting.timeout,
    headers: {'user-agent': 'Honest Hrundel'}
};

const GitHubApi = require('github');

let github = new GitHubApi(GITHUB_SETTINGS);

const token = process.env.TOKEN;
github.authenticate({
    type: 'token',
    token
});

module.exports.getUserData = user => {
    let getUserDataPromise = Promise.promisify(github.user.getFrom.bind(github,
        {user: user.login}));

    return getUserDataPromise()
        .then(data => {
            return {name: data.name, email: data.email};
        })
        .catch(err => {
            console.err(err);
        });
};
