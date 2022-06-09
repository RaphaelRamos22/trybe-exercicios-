const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.listen(3000, () => console.log('ouvindo na porta 3000!'));