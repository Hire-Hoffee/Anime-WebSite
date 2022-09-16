const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const multer = require('multer');

const storageConfig = require('./config/storageConfig');

const indexRouter = require('./routes/indexRoutes');
const crudRouter = require('./routes/crudRoutes');
const usersRouter = require('./usersAPI/userRoutes');
const adminRouter = require('./admin/adminRoutes');


const app = express();


// view engine setup
app.engine('hbs', exphbs({
  partialsDir: 'views/partials',
  extname: '.hbs',
  layoutsDir: 'views/layouts',
  defaultLayout: 'layout'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// some middleware functions
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECRET_COOKIE));
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({storage: storageConfig}).any());

// All routes
app.use('/main', indexRouter);
app.use('/anime', crudRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

app.get("/", (req, res) => {
  res.redirect("/main")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  console.log(err);

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'Ошибка', userEntered: req.signedCookies.userId, message: `Код ошибки: ${err.status || 500}`});
});

// Exports to the 'bin/www.js'
module.exports = app;