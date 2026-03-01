'use strict';

const express = require('express');
const morgan = require('morgan');
const routes = require('./server/routes/ipsum');
const app = express();
const port = process.env.PORT || 3000;

process.env.NODE_ENV === 'production' &&
	// Request logger
	app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/ipsum', routes);

if (process.env.NODE_ENV === 'production') {
	console.log(`\n|| App starting in production mode\n`);
}
app.use(express.static('./public'));
app.get('/', (req, res) => {
	res.sendFile('./public/index.html');
});

// Route fail catch-all
app.use(function (req, res) {
	res.status(404).send('Page not found');
});

// listen for requests
app.listen(port, '0.0.0.0', function () {
	console.log(`Server is listening on port ${port}`);
});

module.exports = app;
