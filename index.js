'use strict';

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;
const HOST = '0.0.0.0';

const app = express();
//app.get('/', (req, res) => {
//	res.send('Hello world\n');
//	console.log('Running');
//});

var home_today = require('./home_today.json');
var solar_today = require('./solar_today.json');
var powerwall_today = require('./powerwall_today.json');
var grid_today = require('./grid_today.json');

var home_yesterday = require('./home_yesterday.json');
var solar_yesterday = require('./solar_yesterday.json');
var powerwall_yesterday = require('./powerwall_yesterday.json');
var grid_yesterday = require('./grid_yesterday.json');

app.use(cors());//방지
app.all('/api/homeusage/today', function (request, response) {
	response.type("application/json");
    response.send(home_today);
});

app.all('/api/solarusage/today', function (request, response) {
	response.type("application/json");
    response.send(solar_today);
});

app.all('/api/powerwallusage/today', function (request, response) {
	response.type("application/json");
    response.send(powerwall_today);
});

app.all('/api/gridusage/today', function (request, response) {
	response.type("application/json");
    response.send(grid_today);
});

//yesterday

app.all('/api/homeusage/yesterday', function (request, response) {
	response.type("application/json");
    response.send(home_yesterday);
});

app.all('/api/solarusage/yesterday', function (request, response) {
	response.type("application/json");
    response.send(solar_yesterday);
});

app.all('/api/powerwallusage/yesterday', function (request, response) {
	response.type("application/json");
    response.send(powerwall_yesterday);
});

app.all('/api/gridusage/yesterday', function (request, response) {
	response.type("application/json");
    response.send(grid_yesterday);
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');