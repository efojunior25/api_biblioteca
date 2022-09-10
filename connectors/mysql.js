const mysql = require('mysql');

exports.connection.Mysql = mysql.createConnection({
host: process.env.HOST,
user: process.env.ROOT,
password: process.env.PASSWORD,
database: 'Livro'

})