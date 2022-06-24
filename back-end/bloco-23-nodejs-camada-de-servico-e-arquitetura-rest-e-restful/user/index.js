const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const UserModel = require('./models/User');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.post('/user', middlewares.createUser, async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	const newUser = await UserModel.create({ firstName, lastName, email, password });
	res.status(201).json(newUser);
})

app.get('/user', async (_req, res) => {
	const allUsers = await UserModel.userAll();
	res.status(200).json(allUsers)
})
app.get('/user/:id', async (req, res) => {
	const { id } = req.params;
	const user = await UserModel.userFildById(id);
	return res.status(200).json(user);
})

 app.use(middlewares.error);

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });