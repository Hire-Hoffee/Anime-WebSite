# Anime Website

#### Russian-language [README](https://github.com/Hire-Hoffee/Anime-WebSite/blob/main/README_RU.md).

#### Link to website [AnimeArea](animesite.onrender.com).

<br>
<div style="text-align:center">
  <img src="https://i.imgur.com/zfn9rht.png" width="1000"/>
  <img src="https://i.imgur.com/PhsboHD.png" width="1000"/>
</div>
<br>

## Website functionality

On this site you can **view**, **comment**, **rate** anime.

#### Main pages of the site

- Main page at `/main`
- Catalog of all anime works at `/main/catalog`
- An anime description page at `/anime/description/[anime_id]`
- User account at `/users/info/[user_id]`
- Administrative panel (only for admin) at `/admin`

Further on this site the possibility of **registration** with subsequent **authentication** and **authorization** is implemented.

<div style="text-align:center">
  <img src="https://i.imgur.com/WPB5LOi.png" width="550"/>
  <img src="https://i.imgur.com/00bCjPj.png" width="550"/>
</div>
<br>
<br>

After the login procedure, you have the opportunity to **rate**, **leave comments**, as well as **add anime** to "favourites" and/or "watched".

<div style="text-align:center">
  <img src="https://i.imgur.com/brafpi7.png" width="550"/>
  <img src="https://i.imgur.com/2EUPe8k.png" width="550"/>
</div>
<br>
<br>

Your comments and favorite anime can be viewed in the personal section of the site (account), where you can **delete written comments**.

<div style="text-align:center">
  <img src="https://i.imgur.com/ILxRjNl.png" width="550"/>
  <img src="https://i.imgur.com/6ESzTo6.png" width="550"/>
</div>
<br>
<br>

The site implements a **search** for Japanese animation by name, or by certain parameters in the **filter**. You can also go to the "Top 100" page, which shows the top rated anime and the "Random anime" page, which is a link to a page with a description of the random anime available on the site.

<div style="text-align:center">
  <img src="https://i.imgur.com/meSzSQD.png" width="550"/>
</div>
<br>
<br>

Also, to manage users and anime works on the site, there is an administrative panel at `/admin`, available only to users with site administrator privileges.

<div style="text-align:center">
  <img src="https://i.imgur.com/HdNswZP.png" width="550"/>
  <img src="https://i.imgur.com/hNfeyM5.png" width="550"/>
  <img src="https://i.imgur.com/K3uiGKi.png" width="550"/>
  <img src="https://i.imgur.com/qOZdlHs.png" width="550"/>
</div>
<br>
<br>

## Technologies used in the development of the site

#### The following frameworks and technologies were used for the frontend part

- HTML/CSS/JS
- Bootstrap
- jquery

The site is responsive and is available for comfortable viewing on devices with different screen sizes.

#### The following frameworks and technologies were used for the backend part

- Node.js
- express.js
- MySQL

The application file skeleton was built using the `express-generator` package.

## Logic work in the backend part

The web site is built according to the **MVC** pattern.

The logic will be considered using the example of obtaining and displaying all anime available on the site for viewing.

Anime information is stored in a database.

The connection to the database comes from the file `./config/dbConnection.js` and then importing this file from `./models/mainModel.js`.

```javascript
// DB configuration
// Parameters are taken from .env file
const mysql = require('mysql2');
require('dotenv').config()


const pool = mysql.createPool({
  connectionLimit: process.env.DB_LIMIT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
});

pool.getConnection((err, conn) => {
  if (err) {
    console log(err);
  } else {
    console. log('Database connected');
  }
})

module.exports = pool;
```

The `./models/mainModel.js` file contains methods that use the **npm** `mysql2` module to query the database and get certain information from it, in this case about all anime series contained in the database .

```javascript
// Model for anime handling
const pool = require('../config/dbConnection'); // DB config import
const SQL_Logic = require('./SQL_Logic');

// Methods exported to mainController
module.exports = {
  getAllAnime: (callback) => {
    pool.query(SQL_Logic.selectAllAnime.selectAllAnime, (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    })
  },
  ...
};
```

In order not to clutter up this file, SQL queries have been moved to a separate file `./models/SQL_Logic.js`.

```javascript
exports.selectAllAnime = {
  selectAllAnime: `SELECT * FROM anime ORDER BY title;`,
  ...
};
```

Next, the file `./models/mainModel.js` is exported to the following file `./controllers/mainController.js`. This file consists of methods that are request handlers for a specific URL, in this case, the `/catalog` address will render the `allAnime` view template from the `./views/animeViews` folder to which the results of this method are passed. The **Handlebars** template engine is used to dynamically generate an HTML page.

```javascript
// Controllers for main anime pages handling
const mainModel = require('../models/mainModel');

// Cookie 'userEntered: req.signedCookies.userId' is used for tracking logged in users

// Controllers, exported to 'routes/indexRoutes.js'
module.exports = {
  // Method renders the all available anime
  getAllAnime: (req, res) => {
    mainModel.getAllAnime((err, result) => {
      if(err) {
        console log(err);
        res.status(err.status || 500).render('error', {title: 'Error', userEntered: req.signedCookies.userId, message: `Error code: ${err.status || 500}`} );
      } else {
        res.render('animeViews/allAnime', {title: 'Anime Catalog', anime: result, userEntered: req.signedCookies.userId})
      }
    })
  },
  ...
};
```

`./views/animeViews/allAnime.hbs`

```hbs
<section class="catalog_section">
  <div class="container">
    <div class="row">
      <div class="col-lg-9 mb-5">
        <div class="content_block">
          <h5 class="text-start text-uppercase mb-2 ms-3 favor_h5">All Anime</h5>
          <hr style="color: var(--color_3); opacity:0.8">
          <div class="row row-cols-1 row-cols-md-4 row-cols-sm-3 row-cols-2 g-3 favorite_cards">
            {{#each anime}}
            <div>
              <div class="card card_body">
                <a href="/anime/description/{{this.anime_id}}"><img src="{{this.anime_poster}}" class="card-img-top card_img" alt="anime poster">< /a>
                <div class="card-body">
                  <a href="/anime/description/{{this.anime_id}}"><h6 class="card-title text-center cardfont title_length">{{this.title}}</h6></a>
                </div>
              </div>
            </div>
            {{/each}}
          </div>
        </div>
      </div>

      {{> filter}}

    </div>
  </div>
</section>
```

Next, the file `./controllers/mainController.js` is exported to `./routes/indexRoutes.js`. This file is a routing methods that determines which URL to call a specific handler imported from `./controllers/mainController.js`.

```javascript
// Routes for main categories
const express = require('express');
const router = express.Router();


const mainController = require('../controllers/mainControllers');

// Routes is available at '/main/...'
router.get('/', mainController.getIndexPage);
...

// Routes are exported to app.js
module.exports = router;
```

The file `./routes/indexRoutes.js` is exported to `./app.js`. In the `./app.js` file, the `./routes/indexRoutes.js` file is used as one of the middleware function arguments that are used to process user requests for specific URLs.

```javascript
...
const indexRouter = require('./routes/indexRoutes');
...
// All routes
app.use('/main', indexRouter);
...
// Exports to the 'bin/www.js'
module.exports = app;
```

The file `./app.js` is exported to `./bin/www.js`. The `./bin/www.js` file starts the server.

```javascript
...
const app = require('../app');
...
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
...
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
server.on('error', onError);
server.on('listening', onListening);
...
```

## Registration, authentication and authorization on the site

The registration logic is similar to the logic described in the previous paragraph. The peculiarity of registration is adding a hashed password to the database. After registration, the user is redirected to the login page.

`./usersAPI/usersControllers.js`

```javascript
// Controllers for users crud and registration handling
const bcrypt = require('bcrypt');


const usersModel = require('./usersModel');
const tokenConfig = require('../config/tokenConfig');

// Cookie 'userEntered: req.signedCookies.userId' is used for tracking logged in users

// Controllers, exported to 'userRoutes.js'
module.exports = {
  // Method renders the page to create user (registration page)
  createUserGet: (req, res) => {
    res.render('usersAPIViews/createUser', { title: "Registration"})
  },
  // Method redirect user to login page after registration
  createUserPost: (req, res) => {
    const files = req.files;
    const body = req.body;
    const salt = bcrypt.genSaltSync(10);
    body.user_password = bcrypt.hashSync(body.user_password, salt);
    usersModel.createUser(body, files, (err, result) => {
      if (err) {
        console log(err);
        res.status(err.status || 500).render('error', {title: 'Error', userEntered: req.signedCookies.userId, message: `Error code: ${err.status || 500}`} );
      } else {
        res
        .cookie('user_info_message', 'registration complete. login now.', {expires: new Date(Date.now() + 3000), encode: String })
        .redirect('/users/login');
      }
    })
  },
  ...
}
```

Authentication is based on **JSON Web Token**.

The **accessToken** and **refreshToken** configuration is in the `./config/tokenConfig.js` file.

```javascript
// JWT tokens configuration for authorization and authentication
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  generateAccessToken: (user) => {
    const token = jwt.sign(user, process.env.SECRET_ACCESS, { expiresIn: "15m" });
    return token;
  },
  generateRefreshToken: (user) => {
    const token = jwt.sign(user, process.env.SECRET_REFRESH, { expiresIn: "72h" });
    return token;
  },
};
```

The logic of building authentication is similar to the previous paragraphs. The main features are in the controller `./usersAPI/usersControllers.js`, in the login method of the site. The `loginPost` method checks if the entered user data matches the data in the database. If the entered data is correct, the user is assigned **accessToken** and **refreshToken** which are stored in the cookie and the database, respectively.

```javascript
...
// Method renders the users login page (get method)
  loginGet: (req, res) => {
    res.status(200).render('usersAPIViews/userLogin', {message: req.cookies.user_info_message});
  },
  // The method redirects users to the home page after logging in and creates some credentials for the user (post method)
  loginPost: (req, res) => {
    const body = req.body;
    usersModel.checkUser(body.user_email, (err, result) => {
      if (err) {
        console log(err);
        res.status(err.status || 500).render('error', {title: 'Error', userEntered: req.signedCookies.userId, message: `Error code: ${err.status || 500}`} );
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
              console log(err);
              res.status(err.status || 500).render('error', {title: 'Error', userEntered: req.signedCookies.userId, message: `Error code: ${err.status || 500}`} );
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
  ...
```

When a user performs actions on certain URLs, the application uses JWT to verify the user's authentication. For example, to go to your personal account.

`./usersAPI/userRoutes.js`

```javascript
...
router.get('/info/:user_id', userAuth.checkToken, usersController.readUser);
...
```

Authentication check handling happens in `./usersAPI/userAuth.js` file. The `checkToken` method checks the **accessToken** sent by the user for a match using the secret key, if the check was successful, then the `next()` function is called to transfer the request processing to the next middleware, if the check failed due to the expiration of the token or for other reasons, the **refreshToken** is checked and a new **accessToken** is returned if the check succeeds.

```javascript
// Methods for user authentication and admin authorization
const jwt = require('jsonwebtoken');


const usersModel = require('./usersModel');
const tokenConfig = require('../config/tokenConfig'); // Import jwt token configuration


module.exports = {
  // Method used for user authentication
  checkToken: (req, res, next) => {
    let token = req.cookies.accessToken;

    if (token) {
      token = token.split(' ')[1];
      jwt.verify(token, process.env.SECRET_ACCESS, (err, result) => {

        if (err) {

          const user_id = req.signedCookies.userId;
          usersModel.refreshCheck(user_id, (err, result) => {
            if (err) {
              console log(err);
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
                  console log(err);
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
  ...
}
```

The following method is used to authorize an administrator:

```javascript
...
// Method used to authorize the administrator in the admin panel
  isAdmin: (req, res, next) => {
    const user_id = req.signedCookies.userId;
    usersModel.isAdmin(user_id, (err, result) => {
      if (err) {
        console log(err);
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
  ...
```

The method checks if the "role" - "admin" of the user matches and, if successful, provides access to the next handler.

`./admin/adminRoutes.js`

```javascript
// Routes for admin api
const express = require('express');
const router = express.Router();


// Routes uses the userAuth import for authorization the admin user
// The admin panel is available at '/admin/...'
const adminController = require('./adminController');
const userAuth = require('../usersAPI/userAuth');

router.get('/', userAuth.checkToken, userAuth.isAdmin, adminController.adminPanel);
...
```

## Run application

Clone the repository with `git clone` to run application.

Next, you must create a database, or export the database used in this project in the file `/DB_backup/Backup/AnimeSiteDB_Backup.sql`. To connect to the database, as well as to set a JWT, environment variables are used, you can define them in the `.env` file or set these parameters directly.

Use the `npm init` command to download all packages and modules.

The server is started with the `npm start` or `npm devstart` command.
