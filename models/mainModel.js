// Model for anime handling
const pool = require('../config/dbConnection'); // DB config import 
const SQL_Logic = require('./SQL_Logic');

// Methods, exported to mainController
module.exports = {
  getAllAnime: (callback) => {
    pool.query(SQL_Logic.selectAllAnime.selectAllAnime, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  searchAnime: (title, callback) => {
    pool.query(SQL_Logic.searchAnime.searchAnime, `%${title}%`, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  randomAnime: (callback) => {
    pool.query(SQL_Logic.searchAnime.randomAnime, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  selectSeasonAnime: (data, callback) => {
    pool.query(SQL_Logic.selectSeasonAnime.selectSeasonAnime, data, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  animeFilter: (data, callback) => {
    pool.query(SQL_Logic.animeFilter.animeFilter, 
      [
        `%${data.anime_genre}%`, `%${data.sound_name}%`, `%${data.anime_status}%`, `%${data.age_permission}%`, `%${data.anime_type}%`, data.date_start || '1900', data.date_end || '2500'
      ], (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  topHundredAnime: (callback) => {
    pool.query(SQL_Logic.selectAllAnime.topHundredAnime, (err, result) => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, result)
      }
    })
  }
}
