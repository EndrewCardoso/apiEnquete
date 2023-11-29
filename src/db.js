const mysql = require('mysql2');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSW,
    database: process.env.DB_NAME
});

con.connect((error)=> {
    if (error) throw error;
    console.log(`Banco ${process.env.DB_NAME} conectado com sucesso.`);
});

module.exports = con;