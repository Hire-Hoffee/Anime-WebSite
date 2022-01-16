// SQL queries for anime handling, exported to mainModel.js and crudModel.js
exports.selectAllAnime = {
  selectAllAnime: `SELECT * FROM anime ORDER BY title;`,

  selectAllGenre: `SELECT * FROM genre ORDER BY anime_genre;`,

  selectAllDirectors: `SELECT * FROM animedirector ORDER BY director_name;`,

  selectAllChar: `SELECT * FROM maincharacters;`,

  selectAllVoiceTeam: `SELECT * FROM voiceacting;`,

  selectAllImg: `SELECT * FROM animeimg;`,

  selectAllVideo: `SELECT * FROM animevideo;`,

  topHundredAnime: `SELECT * FROM anime ORDER BY rating DESC LIMIT 100;`
};

exports.selectSeasonAnime = {
  selectSeasonAnime: `SELECT anime_id, title, anime_poster FROM anime
  WHERE season_of_the_year = ?;`
};

exports.selectAnime = {
  selectAnime: `SELECT *, DATE_FORMAT(date_start, '%d-%m-%Y') AS date_start, DATE_FORMAT(date_end, '%d-%m-%Y') AS date_end FROM anime
  WHERE anime_id = ?;`,

  selectAnimeUpdate: `SELECT *, DATE_FORMAT(date_start, '%Y-%m-%d') AS date_start, DATE_FORMAT(date_end, '%Y-%m-%d') AS date_end FROM anime
  WHERE anime_id = ?;`,

  selectDirector: `SELECT director_name, animedirector.director_id FROM animedirector
  INNER JOIN animedirector_anime
  ON animedirector.director_id = animedirector_anime.director_id
  INNER JOIN anime
  ON anime.anime_id = animedirector_anime.anime_id
  WHERE anime.anime_id = ?;`,

  selectGenre: `SELECT anime_genre, genre.genre_id FROM genre
  INNER JOIN genre_anime
  ON genre_anime.genre_id = genre.genre_id
  INNER JOIN anime
  ON anime.anime_id = genre_anime.anime_id
  WHERE anime.anime_id = ?;`,

  selectVoiceTeam: `SELECT sound_name, voiceacting.sound_id FROM voiceacting
  INNER JOIN voiceacting_anime
  ON voiceacting_anime.sound_id = voiceacting.sound_id
  INNER JOIN anime
  ON anime.anime_id = voiceacting_anime.anime_id
  WHERE anime.anime_id = ?;`,

  selectAnimeIMG: `SELECT img_link, animeimg.img_id FROM animeimg
  INNER JOIN anime
  ON anime.anime_id = animeimg.anime_id
  WHERE anime.anime_id = ?;`,

  selectAnimeVideo: `SELECT video_link, animevideo.video_id FROM animevideo
  INNER JOIN anime
  ON anime.anime_id = animevideo.anime_id
  WHERE anime.anime_id = ?;`,

  selectMainChar: `SELECT char_name, maincharacters.character_id FROM maincharacters
  INNER JOIN anime
  ON maincharacters.anime_id = anime.anime_id
  WHERE anime.anime_id = ?;`,
};


exports.createAnime = {
  createAnime: `INSERT INTO anime 
  (title, anime_description, age_permission, anime_type, studio, anime_status, rating, 
  episodes, duration, date_start, date_end, views, anime_poster, anime_trailer, season_of_the_year) 
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`,
    
  addGenre: `INSERT INTO genre_anime (genre_id, anime_id) 
  VALUES (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?));`,

  addVoiceTeam: `INSERT INTO voiceacting_anime (sound_id, anime_id) 
  VALUES (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?));`,

  addDirector: `INSERT INTO animedirector_anime (director_id, anime_id) 
  VALUES (?, (select anime_id from anime where title=?));`,
  
  addAnimeIMG: `INSERT INTO animeimg (img_link, anime_id) 
  VALUES (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?));`,

  addAnimeVideo: `INSERT INTO animevideo (video_link, anime_id) 
  VALUES (?, (select anime_id from anime where title=?));`,

  addMainChar: `INSERT INTO maincharacters (char_name, anime_id) 
  VALUES (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?)), (?, (select anime_id from anime where title=?));`,


  createDirector: `INSERT INTO animedirector (director_name, director_description) VALUES (?, ?);`
};


exports.updateAnime = {
  updateAnime: `UPDATE anime SET title = ?, anime_description = ?, age_permission = ?, anime_type = ?, 
  studio = ?, anime_status = ?, rating = ?, episodes = ?, duration = ?, 
  date_start = ?, date_end = ?, views = ?, anime_trailer = ? 
  WHERE anime_id = ?;`,

  updateGenre: `UPDATE genre_anime
  SET genre_id = (case when genre_id = ? then ?
                       when genre_id = ? then ?
                       when genre_id = ? then ?
                  end)
  WHERE genre_id in (?, ?, ?) AND
        anime_id = ?;`,

  updateVoiceTeam: `UPDATE voiceacting_anime
  SET sound_id = (case when sound_id = ? then ?
                       when sound_id = ? then ?
                  end)
  WHERE sound_id in (?, ?) AND
        anime_id = ?;`,

  updateDirector: `UPDATE animedirector_anime SET director_id = ?
  where anime_id = ? and director_id = ?;`,

  updateAnimeIMG: `UPDATE animeimg
  SET img_link = (case when img_id = ? then ?
                       when img_id = ? then ?
                       when img_id = ? then ?
                       when img_id = ? then ?
                       when img_id = ? then ?
                       when img_id = ? then ?
                       when img_id = ? then ?
                       when img_id = ? then ?
                  end)
  WHERE img_id in (?, ?, ?, ?, ?, ?, ?, ?) AND
        anime_id = ?;`,

  updateAnimeVideo: `UPDATE animevideo SET video_link = ?
  where anime_id = ? and video_id = ?;`,

  updateMainChar: `UPDATE maincharacters
  SET char_name = (case when character_id = ? then ?
                        when character_id = ? then ?
                        when character_id = ? then ?
                  end)
  WHERE character_id in (?, ?, ?) AND
        anime_id = ?;`
};


exports.deleteAnime = {
  deleteAnime: `DELETE FROM anime WHERE (anime_id = ?);`
};


exports.commentsHandler = {
  readComments: `SELECT comments.user_id, comments.anime_id, user_name, user_avatar, DATE_FORMAT(date_added, '%d-%m-%Y / %H:%i:%s') AS date_added, user_comment FROM comments
  INNER JOIN users
  ON users.user_id = comments.user_id
  WHERE comments.anime_id = ?
  ORDER BY date_added DESC;`,

}


exports.searchAnime = {
  searchAnime: `SELECT anime_id, title, anime_poster FROM anime WHERE title LIKE ?;`,

  randomAnime: `SELECT anime_id FROM anime;`
}


exports.animeFilter = {
  animeFilter: `SELECT anime.anime_id, title, anime_poster FROM anime
  INNER JOIN genre_anime
  ON genre_anime.anime_id = anime.anime_id
  INNER JOIN genre
  ON genre_anime.genre_id = genre.genre_id
  INNER JOIN voiceacting_anime
  ON voiceacting_anime.anime_id = anime.anime_id
  INNER JOIN voiceacting
  ON voiceacting_anime.sound_id = voiceacting.sound_id
  WHERE genre.anime_genre LIKE ? AND voiceacting.sound_name LIKE ? AND anime_status LIKE ? 
  AND age_permission LIKE ? AND anime_type LIKE ? AND DATE_FORMAT(date_start, '%Y') BETWEEN ? AND ?
  GROUP BY title
  ORDER BY title;`
}
