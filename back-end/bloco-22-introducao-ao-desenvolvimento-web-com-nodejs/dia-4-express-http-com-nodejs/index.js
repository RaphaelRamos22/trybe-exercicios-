const express = require('express');
const bodyParser = require('body-parser');
const simpsonsUtils = require('./fs');
const app = express();

app.use(bodyParser.json());
// // Crie uma rota GET /ping

// app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

// // Crie uma rota POST /hello
// app.post('/hello', (req, res) => {
//   const { name } = req.body;
//   return res.status(200).json({ message: `Hello, ${name}!` });
// });

// Crie um endpoint GET /simpsons 🚀
app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await simpsonsUtils.getSimpsons();

    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));