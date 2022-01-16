// Model for admin api
const pool = require('../config/dbConnection'); // DB config import 
const admin_SQL = require('./admin_SQL');

// Methods, exported to adminController
module.exports = {
  allAnime: (callback) => {
    pool.query(admin_SQL.allAnime, (err, result) => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, result)
      }
    })
  },
  allUsers: (callback) => {
    pool.query(admin_SQL.allUsers, (err, result) => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, result)
      }
    })
  }
}
