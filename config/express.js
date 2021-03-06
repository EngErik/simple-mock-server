var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;
