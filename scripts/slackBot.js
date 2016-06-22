'use strict';

const Slack = require('slack-node');
const Promise = require('bluebird');
const apiToken = process.env.SLACK_API_TOKEN;
const webhook = process.env.SLACK_WEBHOOK;

const slack = new Slack(apiToken);
slack.setWebhook(webhook);

module.exports.getUserList = () => {
    let getUsersPromise = Promise.promisify(slack.api.bind(slack, 'users.list'));

    return getUsersPromise()
        .then(data => {
            let list = {};

            data.members.forEach(user => {
                list[user.profile.email] = user.name;
            });

            return list;
        });
};

module.exports.sendMessage = (user, task) => {
    slack.webhook({
        channel: `@${user}`,
        username: 'hrundel',
        text: `Ой все!\nВ задаче ${task} остались сутки до делайна:(`
    }, () => {});
};
