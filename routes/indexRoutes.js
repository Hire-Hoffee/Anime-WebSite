// Routes for main categories
const express = require('express');
const router = express.Router();


const mainController = require('../controllers/mainControllers');

// Routes is available at '/main/...'
router.get('/', mainController.getIndexPage);
router.get('/catalog', mainController.getAllAnime);
router.get('/resultsFound', mainController.searchAnime);
router.get('/filter/resultsFound', mainController.animeFilter);
router.get('/randomAnime', mainController.randomAnime);
router.get('/topAnime', mainController.topHundredAnime);

// Routes are exported to app.js
module.exports = router;