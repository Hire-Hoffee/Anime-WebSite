// Routes for users api
const express = require('express');
const router = express.Router();


// Routes uses the userAuth import for authorization the user
// The users routes is available at '/users/...'
const usersController = require('./usersController');
const userAuth = require('./userAuth');

router.get('/login',  usersController.loginGet);
router.post('/login', usersController.loginPost);

router.get('/create',  usersController.createUserGet);
router.post('/create', usersController.createUserPost);

router.get('/info/:user_id', userAuth.checkToken, usersController.readUser);

router.get('/update/:user_id', userAuth.checkToken,  usersController.updateUserGet);
router.post('/update/:user_id', userAuth.checkToken,  usersController.updateUserPost);

router.get('/delete/:user_id', userAuth.checkToken,  usersController.deleteUserGet);
router.post('/delete/:user_id', userAuth.checkToken,  usersController.deleteUserPost);

router.get('/logout', userAuth.checkToken,   usersController.logoutGet);
router.post('/logout', userAuth.checkToken,  usersController.logoutPost);

router.get('/:user_id/favorites', userAuth.checkToken,  usersController.selectFavorites);

router.get('/:user_id/comments', userAuth.checkToken,  usersController.allYourComments);
router.post('/:user_id/comments', userAuth.checkToken,  usersController.deleteComment);

// Routes are exported to app.js
module.exports = router;