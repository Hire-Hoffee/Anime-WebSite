// DB configuration
// Parameters are taken from .env file
const mysql = require('mysql2');
require('dotenv').config()


const pool = mysql.createPool({
  connectionLimit: process.env.DB_LIMIT,
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b1f3e83db74655',
  database: 'heroku_fdcabc02871db7d',
  password: 'a71b00a0',
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected');
  }
})

module.exports = pool;
