const express = require('express');
const app = express();
const router = require('./routers/index');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, DELETE'
	);
	next();
});

app.use('/', router);

module.exports = app;
