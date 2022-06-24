const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password:'rr221981',
	database: 'users_crud'});

module.exports = connection;