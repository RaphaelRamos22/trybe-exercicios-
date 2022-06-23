const connection = require('./connection');

const formatUser =({ id, first_name: firstName, last_name: lastName, email }) => {

return {
	id,
	firstName,
	lastName,
	email,
};

}
const create = async({ firstName, lastName, email, password }) => {
const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';

return await connection.execute(query, [firstName, lastName, email, password])
}

const userAll = async () => {
	const [user] = await connection.execute('SELECT * from users;')
	return user
}  

module.exports = { formatUser, create, userAll  };