// JWT tokens configuration for authorization and authentication
const jwt = require('jsonwebtoken');
require('dotenv').config()


module.exports = {
  generateAccessToken: (user) => {
    const token = jwt.sign(user, process.env.SECRET_ACCESS, {expiresIn: '15m'});
    return token;
  },
  generateRefreshToken: (user) => {
    const token = jwt.sign(user, process.env.SECRET_REFRESH, {expiresIn: '72h'});
    return token;
  }
}
