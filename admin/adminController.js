// Controllers for admin api
const adminModel = require('./adminModel');

// Controllers, exported to adminRoutes
module.exports = {
  // Method renders the admin panel
  adminPanel: (req, res) => {
    res.render('adminPanel/adminPanel', {title: 'Панель администратора', layout: 'adminLayout.hbs', message: req.cookies.user_info_message})
  },
  // Method renders the list of anime items for handling
  animeHandle: (req, res) => {
    adminModel.allAnime((err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('adminPanel/animeHandle', {title: 'Управление аниме', layout: 'adminLayout.hbs', anime: result, message: req.cookies.user_info_message})
      }
    })
  },
  // Method renders the list of users for handling
  userHandle: (req, res) => {
    adminModel.allUsers((err, result) => {
      if (err) {
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.status(200).render('adminPanel/userHandle', {title: 'Управление пользователями', layout: 'adminLayout.hbs', users: result, message: req.cookies.user_info_message})
      }
    })
  }
}
