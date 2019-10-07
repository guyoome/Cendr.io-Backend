
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/api');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use('/api', apiRouter);

module.exports = app;
