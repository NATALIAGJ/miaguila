const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./app/routes/index');

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.static(
	path.join(__dirname, 'public')
));
app.use(logger('dev'));

// static files
app.use("/static", express.static(path.join(__dirname, "public")))

// redirect
app.get('/', function(req, res) {
	res.send({ 
		title: 'Test trips Mi Aguila'
	})
});

// routes
app.use('/api/v1', routes);

// server
const server = app.listen(8000, function() {
	console.log(`Listening http://localhost:${server.address().port}`);
});

// config mongo ./lib/mongo
require('./lib/mongo');
