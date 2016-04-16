'use strict';

const pages = require('./controllers/pages');
const students = require('./controllers/students');
const tasks = require('./controllers/tasks');

module.exports = app => {
    app.get('/', pages.index);

    app.get('/students/:id', students.list);

    app.get('/task/:id', tasks.list);

    app.get('*', pages.error404);
};

