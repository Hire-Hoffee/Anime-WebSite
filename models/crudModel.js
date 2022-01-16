// Model for handling CRUD operations with anime
const async = require('async');


const pool = require('../config/dbConnection'); // DB config import 
const SQL_Logic = require('./SQL_Logic');
const users_SQL = require('../usersAPI/users_SQL');


// Methods, exported to crudController
// The async module is used to call multiple SQL queries.
module.exports = {
  readAnime: (data, user_id, callback) => {
    async.series(
      {
        getAnime: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectAnime, data, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result)
            }
          })
        },
        getGenre: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectGenre, data, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getVoiceTeam: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectVoiceTeam, data, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getDirector: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectDirector, data, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getAnimeIMG: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectAnimeIMG, data, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getAnimeVideos: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectAnimeVideo, data, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getMainChar: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectMainChar, data, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        readComments: (callback) => {
          pool.query(SQL_Logic.commentsHandler.readComments, data, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        checkFavorite: (callback) => {
          pool.query(users_SQL.userHandler.checkFavorite, [data, user_id], (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        checkRating: (callback) => {
          pool.query(users_SQL.userHandler.checkRating, [data, user_id], (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
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
  },
  createAnimeGet: (callback) => {
    async.parallel(
      {
        selectAllGenre: (callback) => {
          pool.query(SQL_Logic.selectAllAnime.selectAllGenre, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result)
            }
          })
        },
        selectAllDirectors: (callback) => {
          pool.query(SQL_Logic.selectAllAnime.selectAllDirectors, (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result)
            }
          })
        },
        selectAllVoiceTeam: (callback) => {
          pool.query(SQL_Logic.selectAllAnime.selectAllVoiceTeam, (err, result) => {
            if(err) {
              return callback(err);
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
  },
  createDirector: (director_name, director_description, callback) => {
    pool.query(SQL_Logic.createAnime.createDirector, [director_name, director_description], (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  createAnimePost: (data, dataIMG, callback) => {
    async.series(
      [
        (callback) => {
          pool.query(SQL_Logic.createAnime.createAnime,
            [
              data.title, data.anime_description, data.age_permission, data.anime_type, data.studio, data.anime_status, data.rating, 
              data.episodes, data.duration, data.date_start, data.date_end, data.views, dataIMG[0].originalname, data.anime_trailer, data.season_of_the_year
            ],
            (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        (callback) => {
          pool.query(SQL_Logic.createAnime.addGenre,
            [
              data.genre_id_1, data.title, data.genre_id_2, data.title, data.genre_id_3, data.title
            ],
            (err, result) => {
            if (err) {
              return callback(err);
            } else { 
              return callback(null, result)
            }
          })
        },
        (callback) => {
          pool.query(SQL_Logic.createAnime.addDirector,
            [
              data.director_id,
              data.title
            ],
            (err, result) => {
            if (err) {
              return callback(err);
            } else { 
              return callback(null, result)
            }
          })
        },
        (callback) => {
          pool.query(SQL_Logic.createAnime.addVoiceTeam,
            [
              data.sound_id_1, data.title, data.sound_id_2, data.title
            ],
            (err, result) => {
            if (err) {
              return callback(err);
            } else { 
              return callback(null, result)
            }
          })
        },
        (callback) => {
          pool.query(SQL_Logic.createAnime.addAnimeIMG,
            [
              dataIMG[1].originalname, data.title, dataIMG[2].originalname, data.title, dataIMG[3].originalname, data.title, dataIMG[4].originalname, data.title, dataIMG[5].originalname, data.title, dataIMG[6].originalname, data.title, dataIMG[7].originalname, data.title, dataIMG[8].originalname, data.title
            ],
            (err, result) => {
            if (err) {
              return callback(err);
            } else { 
              return callback(null, result)
            }
          })
        },
        (callback) => {
          pool.query(SQL_Logic.createAnime.addAnimeVideo,
            [
              data.video_link,
              data.title
            ],
            (err, result) => {
            if (err) {
              return callback(err);
            } else { 
              return callback(null, result)
            }
          })
        },
        (callback) => {
          pool.query(SQL_Logic.createAnime.addMainChar,
            [
              data.char_name_1, data.title, data.char_name_2, data.title, data.char_name_3, data.title
            ],
            (err, result) => {
            if (err) {
              return callback(err);
            } else { 
              return callback(null, result)
            }
          })
        }
      ], (err, results) => {
        if (err) {
          return callback(err);
        } else {
          return callback(null, results)
        }
      }
    )
  },
  updateAnimeGet: (data, callback) => {
    async.parallel(
      {
        selectAllGenre: (callback) => {
          pool.query(SQL_Logic.selectAllAnime.selectAllGenre, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result)
            }
          })
        },
        selectAllDirectors: (callback) => {
          pool.query(SQL_Logic.selectAllAnime.selectAllDirectors, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result)
            }
          })
        },
        selectAllVoiceTeam: (callback) => {
          pool.query(SQL_Logic.selectAllAnime.selectAllVoiceTeam, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result)
            }
          })
        },
        getAnime: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectAnimeUpdate, data, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result)
            }
          })
        },
        getGenre: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectGenre, data, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getVoiceTeam: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectVoiceTeam, data, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getDirector: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectDirector, data, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getAnimeIMG: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectAnimeIMG, data, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getAnimeVideos: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectAnimeVideo, data, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        },
        getMainChar: (callback) => {
          pool.query(SQL_Logic.selectAnime.selectMainChar, data, (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
        }
      }, (err, results) => {
        if (err) {
          return callback(err);
        } else {
          return callback(null, results);
        }
      }
    )
  },
  updateAnimePost: (data, id, callback) => {
    async.parallel({
      updateAnime: (callback) => {
        pool.query(SQL_Logic.updateAnime.updateAnime,
          [
            data.title, data.anime_description, data.age_permission, data.anime_type, data.studio, data.anime_status, data.rating, 
            data.episodes, data.duration, data.date_start, data.date_end, data.views, data.anime_trailer, id
          ],
          (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
      },
      updateGenre: (callback) => {
        pool.query(SQL_Logic.updateAnime.updateGenre,
          [
            data.genre_id_1_old, data.genre_id_1, data.genre_id_2_old, data.genre_id_2, data.genre_id_3_old, data.genre_id_3, data.genre_id_1_old, data.genre_id_2_old, data.genre_id_3_old, id
          ],
          (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
      },
      updateVoiceTeam: (callback) => {
        pool.query(SQL_Logic.updateAnime.updateVoiceTeam,
          [
            data.sound_id_1_old, data.sound_id_1,  data.sound_id_2_old,  data.sound_id_2, data.sound_id_1_old, data.sound_id_2_old, id
          ],
          (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
      },
      updateDirector: (callback) => {
        pool.query(SQL_Logic.updateAnime.updateDirector,
          [
            data.director_id,
            id,
            data.director_id_old
          ],
          (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
      },
      updateAnimeVideo: (callback) => {
        pool.query(SQL_Logic.updateAnime.updateAnimeVideo,
          [
            data.video_link,
            id,
            data.video_id
          ],
          (err, result) => {
            if (err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
      },
      updateMainChar: (callback) => {
        pool.query(SQL_Logic.updateAnime.updateMainChar,
          [
            data.character_id_1_old, data.char_name_1, data.character_id_2_old, data.char_name_2, data.character_id_3_old, data.char_name_3, data.character_id_1_old, data.character_id_2_old, data.character_id_3_old, id
          ],
          (err, result) => {
            if(err) {
              return callback(err);
            } else {
              return callback(null, result);
            }
          })
      }
    }, (err, results) => {
        if (err) {
          return callback(err);
        } else {
          return callback(null, results);
        }
      }
    )
  },
  deleteAnimeGet: (data, callback) => {
    pool.query(SQL_Logic.selectAnime.selectAnime, data, (err, result) => {
      if (err){
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  deleteAnimePost: (data, callback) => {
    pool.query(SQL_Logic.deleteAnime.deleteAnime, data, (err, result) => {
      if (err){
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  }
}
