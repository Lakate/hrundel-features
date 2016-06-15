'use strict';

const config = require('config');
const ORGANIZATION = config.get('organization');

const GitHubApi = require('github');
const Promise = require('bluebird');
const async = require('async');

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

function removeStudentComments(mentor, comments) {
    return comments.filter(comment => {
        return comment.user.toLowerCase() === mentor.toLowerCase();
    });
}

function parseComment(comment) {
    return {
        user: comment.user.login,
        body: comment.body,
        createdAt: comment.created_at,
        createdAtMS: Date.parse(comment.created_at)
    };
}

function parseCommits(data, student) {
    return {
        user: student,
        body: data.commit.message,
        createdAt: data.commit.author.date,
        createdAtMS: Date.parse(data.commit.author.date)
    };
}

function getPagesCount(links) {
    let pagesNumber = links.match(/(page=[\w+]*&)/g);
    return pagesNumber[1].match(/(\d+)/)[0];
}

function setBindingFunction(pagesCount, data, fn) {
    let functions = [];

    for (let i = 2; i <= pagesCount; i++) {
        functions.push(fn.bind(null, {repo: data.repo, page: i, number: data.number}));
    }

    return functions;
}

function mergeDataToOneObject(list) {
    let newList = [];

    list.forEach(status => {
        newList = newList.concat(status);
    });

    return newList;
}

/* eslint max-params: [2, 4] */
function parseData(err, res, data, fn) {
    let response = res;

    if (!res.meta.link || data.page !== 1) {
        data.callback(err, res);
        return;
    }

    let pageCount = getPagesCount(res.meta.link);
    let functions = setBindingFunction(parseInt(pageCount, 10), data, fn);
    async.parallel(functions, (err, res) => {
        let responseList = mergeDataToOneObject(response.concat(res));
        callback(err, responseList);
    });
}

function getIssueCommentsFromGH(data, callback) {
    github.issues.getComments({
        user: ORGANIZATION,
        repo: data.repo,
        number: data.number,
        page: data.page,
        per_page: 100
    }, function (err, res) {
        parseData(err, res, {data, callback}, getIssueCommentsFromGH);
    });
}

function getPRCommentsFromGH(data, callback) {
    github.pullRequests.getComments({
        user: ORGANIZATION,
        repo: data.repo,
        number: data.number,
        page: data.page,
        per_page: 100
    }, function (err, res) {
        parseData(err, res, {data, callback}, getPRCommentsFromGH);
    });
}

function getIssueCommitsFromGH(repo, number, callback) {
    github.pullRequests.getCommits({
        user: ORGANIZATION,
        repo: repo,
        number: number,
        page: 1,
        per_page: 100
    }, function (err, res) {
        callback(err, res);
    });
}

function getComments(task, cb) {
    let repo = task.taskType + '-tasks-' + task.number;
    let pr = task.pr;

    let getIssueComments = Promise.promisify(getIssueCommentsFromGH);
    let getPRComments = Promise.promisify(getPRCommentsFromGH);

    Promise.all([getIssueComments({repo, number: pr, page: 1}),
        getPRComments({repo, number: pr, page: 1})])
        .then(data => {
            let comments = data[0].concat(data[1]);
            return comments.map(comment => parseComment(comment));
        })
        .then(comments => {
            comments = removeStudentComments(task.mentor, comments);
            return comments;
        })
        .then(data => cb(null, data));
}

function sortByCreatedAt(a, b) {
    return a.createdAtMS - b.createdAtMS;
}

function sortData(story) {
    return story.sort(sortByCreatedAt);
}

function getCommits(task, student, cb) {
    let repo = task.taskType + '-tasks-' + task.number;
    let pr = task.pr;

    let getIssueCommits = Promise.promisify(getIssueCommitsFromGH);
    getIssueCommits(repo, pr)
        .then(commits => commits.map(commit => parseCommits(commit, student)))
        .then(data => cb(null, data));
}

module.exports.getCommentsAndCommits = (task, student) => {
    let getIssueComments = Promise.promisify(getComments);
    let getIssueCommits = Promise.promisify(getCommits);

    return Promise.all([getIssueComments(task), getIssueCommits(task, student)])
        .then(data => sortData(data[0].concat(data[1])))
        .catch(err => console.err('Error on get Comments and Commits: ' + err));
};
