var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');
var dotenv = require('dotenv');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth/authrouter');
var dashboardRouter = require('./routes/dashboard/dashboardrouter');
var adminFilter = require('./filter/adminfilter');
const Configrouter = require('./routes/config/configrouter');

var app = express();
dotenv.config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));

app.use('/', indexRouter);
app.use('/', authRouter);
app.use(expressLayouts);
app.use('/',adminFilter,dashboardRouter);
app.use('/config',adminFilter,Configrouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('error/pages_404',{  title: '404 Page Error', layout : false });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
  res.status(500).render('error/pages_500',{  title: '500 Page Error', layout : false });
});

module.exports = app;
