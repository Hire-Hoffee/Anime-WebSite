// Methods for user authentication and admin authorization
const jwt = require('jsonwebtoken');


const usersModel = require('./usersModel');
const tokenConfig = require('../config/tokenConfig'); // Import jwt token configuration


module.exports = {
  // Method used for users authentication
  checkToken: (req, res, next) => {
    let token = req.cookies.accessToken;

    if (token) {
      token = token.split(' ')[1];
      jwt.verify(token, process.env.SECRET_ACCESS, (err, result) => {
        
        if (err) {

          const user_id = req.signedCookies.userId;
          usersModel.refreshCheck(user_id, (err, result) => {
            if (err) {
              console.log(err);
              res
              .cookie('user_info_message', 'bad request', {expires: new Date(Date.now() + 3000), encode: String })
              .redirect('/users/login')
            } else if (result[0]?.user_token == null) {
              res
              .cookie('user_info_message', 'refresh token not found', {expires: new Date(Date.now() + 3000), encode: String })
              .redirect('/users/login')
            } else {
              jwt.verify(result[0].user_token, process.env.SECRET_REFRESH, (err, result) => {
                if (err) {
                  console.log(err);
                  res
                  .cookie('user_info_message', 'token error', {expires: new Date(Date.now() + 3000), encode: String })
                  .redirect('/users/login')
                } else {
                  const accessToken = tokenConfig.generateAccessToken({data: user_id});
                  res
                  .cookie('accessToken', 'Bearer ' + accessToken, {expires: new Date(Date.now() + 72 * 3600000), encode: String})
                  next();
                }
              })
            }
          })

        } else {
          next();
        }
      });

    } else {
      res
      .cookie('user_info_message', 'unauthorized user', {expires: new Date(Date.now() + 3000), encode: String })
      .redirect('/users/login')
    }
  },
  // Method used to authorize the administrator in the admin panel
  isAdmin: (req, res, next) => {
    const user_id = req.signedCookies.userId;
    usersModel.isAdmin(user_id, (err, result) => {
      if (err) {
        console.log(err);
        res
        .cookie('user_info_message', 'bad request', {expires: new Date(Date.now() + 3000), encode: String })
        .redirect('/users/login')
      } else {
        if (result[0].user_role == 'admin') {
          next();
        } else {
          res
          .cookie('user_info_message', 'access denied', {expires: new Date(Date.now() + 3000), encode: String })
          .redirect('/users/login')
        }
      }
    })
  }
}
