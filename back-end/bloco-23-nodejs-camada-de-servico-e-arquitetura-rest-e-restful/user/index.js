const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });