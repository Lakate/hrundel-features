const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.set('view engine', 'hbs');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

require('./routes')(app);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'),
    () => console.log(`Listening on port ${app.get('port')}`));

module.exports = app;
