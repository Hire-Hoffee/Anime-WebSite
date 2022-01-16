// Controllers for anime crud handling
const crudModel = require('../models/crudModel');

// Cookie 'userEntered: req.signedCookies.userId' is used for tracking logged in users

// Controllers, exported to 'routes/crudRoutes.js'
module.exports = {
  // Method renders the page with certain anime
  readAnime: (req, res) => {
    const userRequest = req.params.anime_id;
    const user_id = req.signedCookies.userId;
    crudModel.readAnime(userRequest, user_id, (err, results) => {
      if(err){
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('animeViews/animeDescription', {title: results.getAnime[0]?.title, anime: results.getAnime, genre: results.getGenre, voice: results.getVoiceTeam, director: results.getDirector, animeIMG: results.getAnimeIMG, animeVideo: results.getAnimeVideos, mainchar: results.getMainChar, comments: results.readComments, checkFavorite: results.checkFavorite, checkRating: results.checkRating, checkViewed: results.checkFavorite[0]?.viewed, userEntered: req.signedCookies.userId})
      }
    })
  },
  // Method renders the page to handle the creation an anime (get method)
  createAnimeGet: (req, res) => {
    crudModel.createAnimeGet((err, results) => {
      if(err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('crudViews/createAnime', {layout: 'adminLayout.hbs', allGenre: results.selectAllGenre, allDirectors: results.selectAllDirectors, allSound: results.selectAllVoiceTeam})
      }
    })
  },
  // Method renders the page to handle the creation an anime director
  createDirectorGet: (req, res) => {
    res.render('crudViews/createDirector', {title: 'Добавить режиссера', layout: 'adminLayout.hbs'})
  },
  // Method renders the page to handle the creation an anime (post method)
  createDirectorPost: (req, res) => {
    const director_name = req.body.director_name;
    const director_description = req.body.director_description;
    crudModel.createDirector(director_name, director_description, (err, results) => {
      if (err) {
        console.log(err);
        res.render('crudViews/createDirector', {fail: "Произошла ошибка", layout: 'adminLayout.hbs'})
      } else {
        res.status(200).render('crudViews/createDirector', {success: "Режиссер добавлен в БД", layout: 'adminLayout.hbs'})
      }
    })
  },
  // Method renders the page to handle the creation an anime (post method)
  createAnimePost: (req, res) => {
    const files = req.files;
    const body = req.body;
    crudModel.createAnimePost(body, files, (err, result) => {
      if(err) {
        console.log(err);
        res.render('crudViews/createAnime', {layout: 'adminLayout.hbs', fail: "Произошла ошибка.", userEntered: req.signedCookies.userId})
      } else {
        res
        .cookie('user_info_message', 'Anime has been created', {expires: new Date(Date.now() + 3000), encode: String })
        .redirect('/admin/animeHandle')
      }
    })
  },
  // The method displays a page for handling anime update (get method)
  updateAnimeGet: (req, res) => {
    const userRequest = req.params.anime_id;
    crudModel.updateAnimeGet(userRequest, (err, results) => {
      if(err){
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('crudViews/updateAnime', {layout: 'adminLayout.hbs', title: results.getAnime[0].title, anime: results.getAnime, genre: results.getGenre, voice: results.getVoiceTeam, director: results.getDirector, animeIMG: results.getAnimeIMG, animeVideo: results.getAnimeVideos, mainchar: results.getMainChar, allGenre: results.selectAllGenre, allDirectors: results.selectAllDirectors, allSound: results.selectAllVoiceTeam, userEntered: req.signedCookies.userId})
      }
    })
  },
  // The method displays a page for handling anime update (post method)
  updateAnimePost: (req, res) => {
    const userRequest = req.params.anime_id;
    const body = req.body;
    crudModel.updateAnimePost(body, userRequest, (err, result) => {
      if(err) {
        console.log(err);
        res.render('crudViews/updateAnime', {layout: 'adminLayout.hbs', fail: "Произошла ошибка.", userEntered: req.signedCookies.userId})
      } else {
        res
        .cookie('user_info_message', 'Anime has been updated', {expires: new Date(Date.now() + 3000), encode: String })
        .redirect('/admin/animeHandle')
      }
    })
  },
  // The method displays a page for handling anime deletion (get method)
  deleteAnimeGet: (req, res) => {
    const userRequest = req.params.anime_id;
    crudModel.deleteAnimeGet(userRequest, (err, results) => {
      if(err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        console.log(results);
        res.status(200).render('crudViews/deleteAnime', {layout: 'adminLayout.hbs', title: 'Удалить аниме', anime: results, userEntered: req.signedCookies.userId})
      }
    })
  },
  // The method displays a page for handling anime deletion (post method)
  deleteAnimePost: (req, res) => {
    const userRequest = req.params.anime_id;
    crudModel.deleteAnimePost(userRequest, (err, results) => {
      if(err){
        console.log(err);
        res.render('crudViews/deleteAnime', {layout: 'adminLayout.hbs', title: 'Удалить аниме', fail: "Произошла ошибка.", userEntered: req.signedCookies.userId})
      } else {
        res.status(200).render('crudViews/deleteAnime', {layout: 'adminLayout.hbs', title: 'Удалить аниме', success: "Аниме удалено! (или его не существовало)", userEntered: req.signedCookies.userId})
      }
    })
  }
}
