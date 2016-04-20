'use strict';

const pages = require('./server/controllers/pages');
const students = require('./server/controllers/students');
const tasks = require('./server/controllers/tasks');

module.exports = app => {
    app.get('/', pages.index);

    app.get('/students/:id', students.list);

    app.get('/task/:id', tasks.list);

    app.get('*', pages.error404);
};

