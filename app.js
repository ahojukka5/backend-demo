const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const testRouter = require('./controllers/testing');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/testing', testRouter);

module.exports = app;
