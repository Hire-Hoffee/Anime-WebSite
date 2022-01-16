// Model for users handling
const async = require('async');


const pool = require('../config/dbConnection'); // DB config import 
const users_SQL = require('./users_SQL');

// The async module is used to call multiple SQL queries.
// Methods, exported to usersController.js
module.exports = {
  createUser: (data, dataIMG, callback) => {
    pool.query(users_SQL.userHandler.createUser, 
      [
        data.user_name, 
        data.user_email, 
        data.user_password, 
        data.user_sex, 
        data.user_age, 
        dataIMG[0].originalname
      ],
      (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  readUser: (data, callback) => {
    pool.query(users_SQL.userHandler.readUser, data, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  updateUser: (data, id, callback) => {
    pool.query(users_SQL.userHandler.updateUser, 
      [
        data.user_name, 
        data.user_email, 
        data.user_password, 
        data.user_sex, 
        data.user_age, 
        id
      ],
      (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  deleteUser: (data, callback) => {
    pool.query(users_SQL.userHandler.deleteUser, data, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  checkUser: (data, callback) => {
    pool.query(users_SQL.userHandler.checkUser, data, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  tokenInsert: (token, data, callback) => {
    pool.query(users_SQL.userHandler.tokenInsert, [token, data], (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result)
      }
    })
  },
  refreshCheck: (data, callback) => {
    pool.query(users_SQL.userHandler.refreshCheck, data, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  deleteRefresh: (data, callback) => {
    pool.query(users_SQL.userHandler.deleteRefresh, data, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  selectFavorites: (data, callback) => {
    pool.query(users_SQL.userHandler.selectFavorites, data, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  addFavorite: (anime_id, user_id, callback) => {
    pool.query(users_SQL.userHandler.addFavorite, [anime_id, user_id], (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  viewedFavorite: (anime_id, user_id, callback) => {
    pool.query(users_SQL.userHandler.viewedFavorite, [anime_id, user_id], (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  isAdmin: (user_id, callback) => {
    pool.query(users_SQL.userHandler.isAdmin, user_id, (err, result) => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, result)
      }
    })
  },
  postComment: (user_id, anime_id, user_comment, callback) => {
    pool.query(users_SQL.userHandler.postComment, [user_id, anime_id, user_comment], (err, result) => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, result)
      }
    })
  },
  allYourComments: (user_id, callback) => {
    pool.query(users_SQL.userHandler.allYourComments, user_id, (err, result) => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, result)
      }
    })
  },
  deleteComment: (data, callback) => {
    pool.query(users_SQL.userHandler.deleteComment, [data.user_id, data.anime_id, data.date_added], (err, result) => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, result)
      }
    })
  },
  animeRatingHandler: (anime_id, user_id, rating, callback) => {
    async.series(
      {
        rateAnime: (callback) => {
          pool.query(users_SQL.userHandler.rateAnime, [anime_id, user_id, rating], (err, result) => {
            if (err) {
              return callback(err)
            } else {
              return callback(null, result)
            }
          })
        },
        insertRating: (callback) => {
          pool.query(users_SQL.userHandler.insertRating, [anime_id, anime_id], (err, result) => {
            if (err) {
              return callback(err)
            } else {
              return callback(null, result)
            }
          })
        }
      }, (err, results) => {
        if(err) {
          return callback(err);
        } else {
          return callback(null, results);
        }
      }
    )
  }
}
