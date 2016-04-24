'use strict';

const pages = require('./controllers/pages');

const studentsRoute = require('./studentsRoute');

module.exports = app => {
    app.get('/', pages.index);

    app.use('/students', studentsRoute);

    app.get('*', pages.error404);
};

