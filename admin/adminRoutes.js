// Routes for admin api
const express = require('express');
const router = express.Router();


// Routes uses the userAuth import for authorization the admin user
// The admin panel is available at '/admin/...'
const adminController = require('./adminController');
const userAuth = require('../usersAPI/userAuth');

router.get('/', userAuth.checkToken, userAuth.isAdmin, adminController.adminPanel);
router.get('/animehandle', userAuth.checkToken, userAuth.isAdmin, adminController.animeHandle);
router.get('/usershandle', userAuth.checkToken, userAuth.isAdmin, adminController.userHandle);

// Routes are exported to app.js
module.exports = router;