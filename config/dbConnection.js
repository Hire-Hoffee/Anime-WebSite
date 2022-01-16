// DB configuration
// Parameters are taken from .env file
const mysql = require('mysql2');
require('dotenv').config()


const pool = mysql.createPool({
  connectionLimit: process.env.DB_LIMIT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected');
  }
})

module.exports = pool;
