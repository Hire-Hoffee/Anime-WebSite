// Routes for crud manipulation with anime
const express = require('express');
const router = express.Router();


const crudController = require('../controllers/crudController');
const userController = require('../usersAPI/usersController'); // For users anime handling (add comment, add favorite etc)

// Routes is available at '/anime/...'
router.get('/description/:anime_id', crudController.readAnime);
router.post('/description/:anime_id', userController.addFavorite);
router.post('/description/viewedFavorite/:anime_id', userController.viewedFavorite);
router.post('/description/rateAnime/:anime_id', userController.animeRatingHandler);
router.post('/:anime_id/createComment', userController.postComment);

router.get('/create', crudController.createAnimeGet);
router.post('/create', crudController.createAnimePost);

router.get('/update/:anime_id',  crudController.updateAnimeGet);
router.post('/update/:anime_id', crudController.updateAnimePost);

router.get('/delete/:anime_id', crudController.deleteAnimeGet);
router.post('/delete/:anime_id', crudController.deleteAnimePost);

router.get('/create/animeDirector', crudController.createDirectorGet);
router.post('/create/animeDirector', crudController.createDirectorPost);

// Routes are exported to app.js
module.exports = router;