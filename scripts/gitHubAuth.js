'use strict';

const config = require('config');
const GITHUB_SETTINGS = config.get('github');
GITHUB_SETTINGS.headers = {'user-agent': 'Honest Hrundel'};

const GitHubApi = require('github');

let github = new GitHubApi(GITHUB_SETTINGS);

const token = process.env.TOKEN;

github.authenticate({
    type: 'token',
    token
});

module.exports = github;
