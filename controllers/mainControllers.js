// Controllers for main anime pages handling
const mainModel = require('../models/mainModel');

// Cookie 'userEntered: req.signedCookies.userId' is used for tracking logged in users

// Controllers, exported to 'routes/indexRoutes.js'
module.exports = {
  // Method renders the all available anime
  getAllAnime: (req, res) => {
    mainModel.getAllAnime((err, result) => {
      if(err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.render('animeViews/allAnime', {title: 'Каталог аниме', anime: result, userEntered: req.signedCookies.userId})
      }
    })
  },
  // Method renders main page
  getIndexPage: (req,res) => {
    const seasonAnime = 'Весна';
    mainModel.selectSeasonAnime(seasonAnime, (err, result) => {
      if(err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('index', {title: 'AnimeArea', seasonAnime: result, userEntered: req.signedCookies.userId})
      }
    })
  },
  // The method displays the page with the desired anime
  searchAnime: (req, res) => {
    const title = req.query.searchAnime;
    mainModel.searchAnime(title, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('animeViews/findAnimePage', {title: 'Поиск', anime: result, userEntered: req.signedCookies.userId})
      }
    })
  },
  // The method redirect to the page with the random anime
  randomAnime: (req, res) => {
    mainModel.randomAnime((err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        const resultArray = [];
        result.forEach((el) => {
          resultArray.push(el.anime_id);
        })
        const randomElement = resultArray[Math.floor(Math.random() * resultArray.length)];
        res.redirect(`/anime/description/${randomElement}`);
      }
    })
  },
  // The method displays the page with the filtered anime
  animeFilter: (req, res) => {
    const data = req.query;
    mainModel.animeFilter(data, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('animeViews/findAnimePageFilter', {title: 'Поиск по фильтру', anime: result, userEntered: req.signedCookies.userId})
      }
    })
  },
  // The method displays the page with the filtered anime
  topHundredAnime: (req, res) => {
    mainModel.topHundredAnime((err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('animeViews/topAnime', {title: 'Топ 100 аниме', anime: result, userEntered: req.signedCookies.userId})
      }
    })
  }
};
