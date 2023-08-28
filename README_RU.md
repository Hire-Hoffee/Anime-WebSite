# Аниме веб-сайт

#### Ссылка на сайт [AnimeArea](animesite.onrender.com).

<br>
<div style="text-align:center">
 <img src="https://i.imgur.com/zfn9rht.png" width="1000"/>
  <img src="https://i.imgur.com/PhsboHD.png" width="1000"/>
</div>
<br>

## Функционал сайта

На данном сайте вы можете **просматривать**, **комментировать**, **оценивать** аниме.

#### Основные страницы сайта

- Главная страница по адресу `/main`
- Каталог всех аниме произведений по адресу `/main/catalog`
- Страница для просмотра с описанием аниме по адресу `/anime/description/[anime_id]`
- Аккаунт пользователя по адресу `/users/info/[user_id]`
- Административная панель (только для админа) по адресу `/admin`

Далее на этом сайте реализована возможность **регистрации** с последующей **аутентификацией** и **авторизацией**.

<div style="text-align:center">
  <img src="https://i.imgur.com/WPB5LOi.png" width="550"/>
  <img src="https://i.imgur.com/00bCjPj.png" width="550"/>
</div>
<br>
<br>

После процедуры входа у вас есть возможность **ставить оценку**, **оставлять комментарии**, а также **добавлять произведения** в "избранное" и/или "просмотренное".

<div style="text-align:center">
   <img src="https://i.imgur.com/brafpi7.png" width="550"/>
  <img src="https://i.imgur.com/2EUPe8k.png" width="550"/>
</div>
<br>
<br>

Ваши комментарии и избранное аниме можно посмотреть в личном разделе сайта (аккаунте), там же можно **удалить написанные комментарии**.

<div style="text-align:center">
 <img src="https://i.imgur.com/ILxRjNl.png" width="550"/>
  <img src="https://i.imgur.com/6ESzTo6.png" width="550"/>
</div>
<br>
<br>

На сайте реализован **поиск** японской мультипликации по названию, либо по определенным параметрам в **фильтре**. Ещё вы можете перейти на страницу "Топ 100", где представлены топ аниме по рейтингу и на страницу "Случайное аниме", которая является ссылкой на страницу с описанием случайного аниме доступного на сайте.

<div style="text-align:center">
 <img src="https://i.imgur.com/meSzSQD.png" width="550"/>
</div>
<br>
<br>

Также для управления пользователями и аниме произведениями на сайте присутствует административная панель по адресу `/admin`, доступная только пользователям с привилегиями администратора сайта.

<div style="text-align:center">
  <img src="https://i.imgur.com/HdNswZP.png" width="550"/>
  <img src="https://i.imgur.com/hNfeyM5.png" width="550"/>
  <img src="https://i.imgur.com/K3uiGKi.png" width="550"/>
  <img src="https://i.imgur.com/qOZdlHs.png" width="550"/>
</div>
<br>
<br>

## Технологии использованные при разработке сайта

#### Для frontend части были использованы следующие фреймворки и технологии

- HTML/CSS/JS
- Bootstrap
- jQuery

Сайт является адаптивным и доступен для комфортного просмотра на устройствах с разными размерами экранов.

#### Для backend части были использованы следующие фреймворки и технологии

- Node.js
- Express.js
- MySQL

Скелет файлов приложения был построен с помощью пакета `express-generator`.

## Работа логики в backend части

Веб сайт построен по **MVC** паттерну.

Логика будет рассмотрена на примере получения и вывода всего аниме доступного на сайте для просмотра.

Информация об аниме храниться в базе данных.

Подключение к базе данных происходит из файла `./config/dbConnection.js` и последующим импортом этого файла из `./models/mainModel.js`.

```javascript
// DB configuration
// Parameters are taken from .env file
const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: process.env.DB_LIMIT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

module.exports = pool;
```

Файл `./models/mainModel.js` представляет из себя методы, которые используют модуль **npm** `mysql2` для выполнения запросов к базе данных и получение из неё определенной информации, в данном случае о всех аниме сериалах содержащихся в базе данных.

```javascript
// Model for anime handling
const pool = require('../config/dbConnection'); // DB config import
const SQL_Logic = require('./SQL_Logic');

// Methods, exported to mainController
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

Для того чтобы не загромождать этот файл, SQL - запросы были вынесены в отдельный файл `./models/SQL_Logic.js`.

```javascript
exports.selectAllAnime = {
  selectAllAnime: `SELECT * FROM anime ORDER BY title;`,
  ...
};
```

Далее файл `./models/mainModel.js` экспортируется в следующий файл `./controllers/mainController.js`. Этот файл представляет из себя методы, которые являются обработчиками запросов по определённому URL - адресу, в данном случае адресу `/catalog` будет отрендерен шаблон представления `allAnime` из папки `./views/animeViews` в который передаются результаты выполнения этого метода. Для динамического генерирования HTML-страницы используется шаблонизатор **Handlebars**.

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
        console.log(err);
        res.status(err.status || 500).render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
      } else {
        res.render('animeViews/allAnime', {title: 'Каталог аниме', anime: result, userEntered: req.signedCookies.userId})
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
          <h5 class="text-start text-uppercase mb-2 ms-3 favor_h5">Всё аниме</h5>
          <hr style="color: var(--color_3);  opacity:0.8">
          <div class="row row-cols-1 row-cols-md-4 row-cols-sm-3 row-cols-2 g-3 favour_cards">
            {{#each anime}}
            <div>
              <div class="card card_body">
                <a href="/anime/description/{{this.anime_id}}"><img src="{{this.anime_poster}}" class="card-img-top card_img" alt="anime poster"></a>
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

Далее файл `./controllers/mainController.js` экспортируется в `./routes/indexRoutes.js`. Этот файл представляет из себя методы маршрутизации, которые определяют по какому URL - адресу вызывать определенный обработчик импортированный из `./controllers/mainController.js`.

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

Файл `./routes/indexRoutes.js` экспортируется в `./app.js`. В файле `./app.js` файл `./routes/indexRoutes.js` используется в качестве одного из аргументов функции промежуточной обработки, которые используются для обработки запросов пользователей по определенным URL - адресам.

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

Файл `./app.js` экспортируется в `./bin/www.js`. В файле `./bin/www.js` происходит запуск сервера.

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

## Регистрация, аутентификация и авторизация на сайте

Логика регистрации схожа с логикой, описанной в прошлом пункте. Особенность регистрации в добавлении в базу данных хэшированного пароля. После регистрации, пользователь перенаправляется на страницу входа.

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
  ...
}
```

Аутентификация основана на **JSON Web Token**.

Конфигурация **accessToken** и **refreshToken** находится в файле `./config/tokenConfig.js`.

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

Логика построения аутентификации схожа с предыдущими пунктами. Основные особенности находятся в контроллере `./usersAPI/usersControllers.js`, в методе входа на сайт. Метод `loginPost` проверяет на соответствие введенные данные пользователя с данными в базе данных. Если введенные данные верны пользователю присваиваются **accessToken** и **refreshToken** которые сохраняются в cookie и базу данных соответственно.

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
  ...
```

При выполнении пользователем действий по определенным URL адресам приложение использует JWT для проверки аутентификации пользователя. Например для перехода в личный кабинет.

`./usersAPI/userRoutes.js`

```javascript
...
router.get('/info/:user_id', userAuth.checkToken, usersController.readUser);
...
```

Обработка проверки аутентификации происходит в файле `./usersAPI/userAuth.js`. Метод `checkToken` проверяет отправленный пользователем **accessToken** на соответствие при помощи секретного ключа, если проверка прошла успешно, то вызывается функция `next()` для перехода обработки запроса следующему middleware, если проверка провалилась из - за истечения срока действия токена или других причин, то происходит проверка **refreshToken** и выдача нового **accessToken** в случае удачной проверки.

```javascript
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
  ...
}
```

Для авторизации администратора используется следующий метод:

```javascript
...
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
  ...
```

Метод проверяет соответствие "роли" - "admin" пользователя и в случае успеха предоставляет доступ к следующему обработчику.

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

## Запуск приложения

Для того чтобы запустить приложение клонируйте репозиторий при помощи `git clone`.

Далее вы должны создать базу данных, либо экспортировать базу данных использованную в этом проекте в файле `/DB_backup/Backup/AnimeSiteDB_Backup.sql`. Для подключения к БД как и для формирования JWT используются переменные окружения, вы можете определить их в файле `.env` или задать эти параметры напрямую.

Для загрузки всех пакетов и модулей используйте команду `npm init`.

Запуск сервера происходит командой `npm start` или `npm devstart`.
