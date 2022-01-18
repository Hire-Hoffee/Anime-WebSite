// SQL queries for users handling and users anime handling, exported to usersModel.js
exports.userHandler = {
  createUser: `INSERT INTO users (user_name, user_email, user_password, user_sex, user_age, user_avatar) 
  VALUES (?,?,?,?,?,?);`,

  readUser: `SELECT *, DATE_FORMAT( regist_date , '%d-%m-%Y / %H:%i:%s') AS regist_date FROM users WHERE user_id = ?;`,

  updateUser: `UPDATE users 
  SET user_name = ?, user_email = ?, user_password = ?, user_sex = ?, user_age = ?
  WHERE (user_id = ?);`,

  deleteUser: `DELETE FROM users WHERE (user_id = ?);`,

  checkUser: `SELECT * FROM users WHERE user_email = ?;`,

  tokenInsert: `UPDATE users SET user_token = ? WHERE (user_email = ?);`,

  refreshCheck: `SELECT user_token FROM users WHERE user_id = ?;`,

  deleteRefresh: `UPDATE users SET user_token = NULL WHERE (user_id = ?);`,

  selectFavorites: `SELECT anime.anime_id, title, anime_poster, viewed FROM anime 
  INNER JOIN user_favorite_anime
  ON anime.anime_id = user_favorite_anime.anime_id
  INNER JOIN users
  ON users.user_id = user_favorite_anime.user_id
  WHERE users.user_id = ?;`,

  addFavorite: `INSERT INTO user_favorite_anime (anime_id, user_id) VALUES (?, ?);`,

  checkFavorite: `SELECT * FROM user_favorite_anime
  WHERE anime_id = ? AND user_id = ?;`,

  viewedFavorite: `UPDATE user_favorite_anime SET viewed = 'Просмотрено' WHERE (anime_id = ?) and (user_id = ?);`,

  isAdmin: `SELECT user_role FROM users
  WHERE user_id = ?;`,

  postComment: `INSERT INTO comments (user_id, anime_id, user_comment) VALUES (?, ?, ?);`,
  
  allYourComments: `SELECT comments.user_id, comments.anime_id, DATE_FORMAT(date_added, '%Y-%m-%d %H:%i:%s') AS date_added, user_comment, title, user_name FROM comments
  INNER JOIN anime
  ON comments.anime_id = anime.anime_id
  INNER JOIN users
  ON users.user_id = comments.user_id
  WHERE comments.user_id = ?
  ORDER BY date_added DESC;`,

  deleteComment: `DELETE FROM comments WHERE (user_id = ?) and (anime_id = ?) and (date_added = ?);`,

  rateAnime: `INSERT INTO anime_rating (anime_id, user_id, rating) VALUES (?, ?, ?);`,

  insertRating: `UPDATE anime SET rating = (SELECT ROUND(AVG(rating), 1) AS rating FROM anime_rating
  WHERE anime_rating.anime_id = ?)
  WHERE (anime.anime_id = ?);`,

  checkRating: `SELECT * FROM anime_rating
  WHERE anime_id = ? AND user_id = ?;`
};
