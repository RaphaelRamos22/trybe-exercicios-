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

app.get('/simpsons/:id', async (req, res) => {
  try {
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  } catch (error) {
    return res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.some((character) => character.id === id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    return res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
});

app.delete('/simpsons/:id', async (req, res) => {

  const simpsons = await simpsonsUtils.getSimpsons();

  const simpson = simpsons.findIndex(({ id }) => id === req.params.id)
  if (simpson === -1) return res.status(404).json({ message: 'Recipe not found!' });
  simpsons.splice(simpson, 1);
  await simpsonsUtils.setSimpsons(simpsons);

  res.status(204).end();
});


app.listen(3000, () => console.log('ouvindo na porta 3000!'));