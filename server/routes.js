'use strict';

const pages = require('./controllers/pages');
const tasks = require('./controllers/tasks');

const studentsRoute = require('./studentsRoute');

module.exports = app => {
    app.get('/', pages.index);

    app.use('/students', studentsRoute);

    app.get('/task/:id', tasks.list);

    app.get('*', pages.error404);
};

