'use strict';

const config = require('config');
const ORGANIZATION = config.get('organization');
const REPOS_LIST = config.get('repos');

const async = require('async');
const Promise = require('bluebird');
const cache = require('./lruCache');
const github = require('./gitHubAuth');

function parseReposList(list) {
    let reposList = list.filter(repo => {
        let length = REPOS_LIST.length;
        for (let i = 0; i < length; i++) {
            if (repo.name.includes(REPOS_LIST[i])) {
                return true;
            }
        }
    });
    reposList = reposList.map(repo => {
        return {name: repo.name, createAt: repo.created_at};
    });

    return reposList;
}

function getRepos(cb) {
    github.repos.getFromOrg({
        org: ORGANIZATION,
        page: 1,
        per_page: 100
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
        // будем получать все страницы со статусами параллельно
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

    return cache.memoize('reposList', 2 * 24 * 60 * 60 * 1000, () => {
        return getReposFromGH();
    })
        .then(reposList => getStatussesFromGH(reposList));
};

module.exports.getUserData = user => {
    let getUserDataPromise = Promise.promisify(github.user.getFrom.bind(github,
        {user}));

    return getUserDataPromise()
        .then(data => {
            return {name: data.name, email: data.email};
        })
        .catch(err => {
            console.err(err);
        });
};
