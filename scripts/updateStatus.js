'use strict';

const ORGANIZATION = 'urfu-2015';
const GitHubApi = require('github');
const PAGE_LIST = 2;

const async = require('async');
const Promise = require('bluebird');

const gitHubAuth = require('./gitHubAuth');

let github = new GitHubApi({
    version: '3.0.0',
    debug: true,
    protocol: 'https',
    host: 'api.github.com',
    timeout: 5000,
    headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 ' +
            'KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36'
    }
});

gitHubAuth.auth(github);

function parseReposList(list) {
    let reposList = list.filter(repo => {
        return repo.name.includes('webdev-tasks');
    });
    reposList = reposList.map(repo => {
        return {name: repo.name, createAt: repo.created_at};
    });

    return reposList;
}

function getRepos(cb) {
    github.repos.getFromOrg({
        org: ORGANIZATION,
        page: PAGE_LIST
    }, function (err, res) {
        cb(err, parseReposList(res));
    });
}

function parseDataIssues(data) {
    let labels = [];

    if (!data) {
        return labels;
    }

    data.forEach(pr => {
        if (pr.event === 'labeled') {
            labels.push({
                login: pr.issue.user.login,
                labels: pr.issue.labels,
                state: pr.issue.state
            });
        }
    });

    return labels;
}

function mergeDataToOneObject(statusList) {
    let newStatusList = [];

    statusList.forEach(status => {
        newStatusList = newStatusList.concat(status);
    });

    return newStatusList;
}

function getEventsPagesCount(links) {
    let pagesNumber = links.match(/(page=[\w+]*&)/g);
    return pagesNumber[1].match(/(\d+)/)[0];
}

function setBindingFunction(pagesCount, repo) {
    let functions = [];

    for (let i = 2; i <= pagesCount; i++) {
        functions.push(getFromRepoIssues.bind(null, {repo, page: i}));
    }

    return functions;
}

function getFromRepoIssues(data, cb) {
    github.events.getFromRepoIssues({
        user: ORGANIZATION,
        repo: data.repo,
        page: data.page,
        per_page: 100
    }, function (err, res) {
        let parsedData = parseDataIssues(res);
        cb(err, parsedData);
    });
}

function getInitialDataFromIssues(repo, callback) {
    github.events.getFromRepoIssues({
        user: ORGANIZATION,
        repo: repo,
        page: 1,
        per_page: 100
    }, function (err, res) {
        let parsedData = parseDataIssues(res);

        if (!res.meta.link) {
            callback(err, parsedData);
            return;
        }
        let pageCount = getEventsPagesCount(res.meta.link);
        let functions = setBindingFunction(parseInt(pageCount, 10), repo);

        async.parallel(functions, (err, res) => {
            let statusList = mergeDataToOneObject(parsedData.concat(res));
            callback(err, statusList);
        });
    });
}

function getStatusFromRepo(reposList, cb) {
    let functions = reposList.map(repo => {
        return getInitialDataFromIssues.bind(null, repo.name);
    });

    async.parallel(functions, (err, body) => {
        cb(err, body);
    });
}

module.exports.getStatusses = () => {
    let getReposFromGH = Promise.promisify(getRepos);
    let getStatussesFromGH = Promise.promisify(getStatusFromRepo);

    let repos = [];

    return getReposFromGH()
            .then(reposList => {
                repos = reposList;
                return getStatussesFromGH(reposList);
            })
            .then(updateStatusses => [repos, updateStatusses]);
};
