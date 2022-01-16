// Controllers for users crud and registration handling
const bcrypt = require('bcrypt');


const usersModel = require('./usersModel');
const tokenConfig = require('../config/tokenConfig');

// Cookie 'userEntered: req.signedCookies.userId' is used for tracking logged in users

// Controllers, exported to 'userRoutes.js'
module.exports = {
  // Method renders the page to create user (registration page)
  createUserGet: (req, res) => {
    res.render('usersAPIViews/createUser', { title: "Регистрация"})
  },
  // Method redirect user to login page after registration
  createUserPost: (req, res) => {
    const files = req.files;
    const body = req.body;
    const salt = bcrypt.genSaltSync(10);
    body.user_password = bcrypt.hashSync(body.user_password, salt);
    usersModel.createUser(body, files, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res
        .cookie('user_info_message', 'registration complete. login now.', {expires: new Date(Date.now() + 3000), encode: String })
        .redirect('/users/login');
      }
    })
  },
  // Method renders the users account page
  readUser: (req, res) => {
    const userId = req.params.user_id;
    usersModel.readUser(userId, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else if (result.length > 0) {
        res.status(200).render('usersAPIViews/accountPage', {title: result[0].user_name, user: result, userEntered: req.signedCookies.userId})
      } else {
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: 'User not found'});
      }
    })
  },
  // Method renders the users update page (get method)
  updateUserGet: (req,res) => {
    const userId = req.params.user_id;
    usersModel.readUser(userId, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({"massage": "error"})
      } else if (result.length > 0) {
        res.status(200).render('usersAPIViews/updateUser', {title: 'Обновить пользователя', layout: 'adminLayout.hbs', user: result, userEntered: req.signedCookies.userId})
      } else {
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: 'User not found'});
      }
    })
  },
  // Method renders the users update page (post method)
  updateUserPost: (req, res) => {
    const userId = req.params.user_id;
    const body = req.body;
    const salt = bcrypt.genSaltSync(10);
    body.user_password = bcrypt.hashSync(body.user_password, salt);
    usersModel.updateUser(body, userId, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else if (result.affectedRows > 0) {
        res
        .cookie('user_info_message', 'user has been updated', {expires: new Date(Date.now() + 3000), encode: String })
        .redirect('/admin/usershandle')
      } else {
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: 'User not found'});
      }
    })
  },
  // Method renders the users delete page (get method)
  deleteUserGet: (req, res) => {
    res.status(200).render('usersAPIViews/deleteUser', {title: 'Удалить пользователя', layout: 'adminLayout.hbs', layout: 'adminLayout.hbs'})
  },
  // Method delete the users (post method)
  deleteUserPost: (req, res) => {
    const userId = req.params.user_id;
    usersModel.deleteUser(userId, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else if (result.affectedRows > 0) {
        res
        .cookie('user_info_message', 'user has been deleted', {expires: new Date(Date.now() + 3000), encode: String })
        .redirect('/admin/usershandle')
      } else {
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: 'User not found'});
      }
    })
  },
  // Method renders the users login page (get method)
  loginGet: (req, res) => {
    res.status(200).render('usersAPIViews/userLogin', {message: req.cookies.user_info_message});
  },
  // The method redirects users to the home page after logging in and creates some credentials for the user (post method)
  loginPost: (req, res) => {
    const body = req.body;
    usersModel.checkUser(body.user_email, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else if (result.length == 0) {
        res.render('usersAPIViews/userLogin', {message: 'Invalid email'})
      } else {
        const passCompare = bcrypt.compareSync(body.user_password, result[0].user_password);
        if (passCompare) {
          result[0].user_password = undefined;
          const accessToken = tokenConfig.generateAccessToken({data: result[0].user_id});
          const refreshToken = tokenConfig.generateRefreshToken({data: result[0].user_email});
          usersModel.tokenInsert(refreshToken, body.user_email, (err, result) => {
            if(err) {
              console.log(err);
              res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
            } else {
              return
            }
          })
          res
          .cookie('accessToken', 'Bearer ' + accessToken, {expires: new Date(Date.now() + 72 * 3600000), encode: String})
          .cookie('userId', result[0].user_id, {expires: new Date(Date.now() + 72 * 3600000), encode: String, signed: true})
          .redirect('/main')
        } else {
          res.render('usersAPIViews/userLogin', {message: 'Invalid password'})
        }
      }
    })
  },
  // The method renders log out page (get method)
  logoutGet: (req, res) => {
    res.status(200).render('usersAPIViews/userLogout', {title: 'Выход', userEntered: req.signedCookies.userId});
  },
  // The method is used to log out the user and redirect to log in page (post method)
  logoutPost: (req, res) => {
    const user_id = req.signedCookies.userId;
    usersModel.deleteRefresh(user_id, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else if (result.affectedRows > 0) {
        res
        .clearCookie('accessToken')
        .clearCookie('userId')
        res
        .cookie('user_info_message', 'logged out', {expires: new Date(Date.now() + 3000), encode: String })
        .redirect('/users/login')
      } else {
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: 'User not found'});
      }
    })
  },
  // The method is used to render the page with favorites anime in users account
  selectFavorites: (req, res) => {
    const user_id = req.params.user_id;
    usersModel.selectFavorites(user_id, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('animeViews/favoritesAnime', {title: 'Избранное', anime: result, userEntered: req.signedCookies.userId})
      }
    })
  },
  // The method is used to add anime to the favorite in users account and redirects to the favorite page
  addFavorite: (req, res) => {
    const anime_id = req.params.anime_id;
    const user_id = req.signedCookies.userId;
    usersModel.addFavorite(anime_id, user_id, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.redirect(`/users/${user_id}/favorites`)
      }
    })
  },
  // The method is used to render anime that has been viewed
  viewedFavorite: (req, res) => {
    const anime_id = req.params.anime_id;
    const user_id = req.signedCookies.userId;
    usersModel.viewedFavorite(anime_id, user_id, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.redirect(`/users/${user_id}/favorites`)
      }
    })
  },
  // The method is used to render anime that has been viewed
  postComment: (req, res) => {
    const anime_id = req.params.anime_id;
    const user_id = req.signedCookies.userId;
    const user_comment = req.body.user_comment;
    usersModel.postComment(user_id, anime_id, user_comment, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.redirect(`/anime/description/${anime_id}`)
      }
    })
  },
  // The method is used to render all users comments
  allYourComments: (req, res) => {
    const user_id = req.params.user_id;
    usersModel.allYourComments(user_id, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('usersAPIViews/allComments', {title: 'Ваши комментарии', comments: result, userEntered: req.signedCookies.userId})
      }
    })
  },
  // The method is used to delete certain users comment
  deleteComment: (req, res) => {
    const body = req.body;
    const user_id = req.signedCookies.userId;
    usersModel.deleteComment(body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.redirect(`/users/${user_id}/comments`);
      }
    })
  },
  // The method is used to rate the anime
  animeRatingHandler: (req, res) => {
    const anime_id = req.params.anime_id;
    const user_id = req.signedCookies.userId;
    const rating = req.body.rating;
    usersModel.animeRatingHandler(anime_id, user_id, rating, (err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.redirect(`/anime/description/${anime_id}`);
      }
    })
  }
}
