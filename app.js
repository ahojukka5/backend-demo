const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const testRouter = require('./controllers/testing');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/testing', testRouter);

module.exports = app;
