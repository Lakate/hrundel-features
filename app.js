const webpack = require('webpack');
const config = require('./webpack.config');

const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');
const argv = require('minimist')(process.argv.slice(2));
const favicon = require('express-favicon');

const viewsDir = path.join(__dirname, 'server/bundles');
const publicDir = path.join(__dirname, 'public');

const mongoose = require('./scripts/mongooseConnect');

app.set('views', viewsDir);
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.static(publicDir));
app.use(favicon('./favicon.ico'));

hbs.registerPartials(path.join(__dirname, 'server/blocks'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    req.commonData = {
        meta: {
            description: 'Hrundel-board',
            charset: 'utf-8'
        },
        page: {
            title: 'Hrundel-board'
        },
        host: (argv.NODE_ENV === 'development') ? '' : '//hrundel-board.surge.sh'
    };

    next();
});

require('./server/routes')(app);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'),
    () => console.log(`Listening on port ${app.get('port')}`));

module.exports = app;
