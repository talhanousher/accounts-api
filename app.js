var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');
let cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let generalEntriesRouter = require('./features/general-entries/general-entries.routes');
let tAccountsRouter = require('./features/t-accounts/t-account.routes');
let trialBalanceRouter = require('./features/trial-balance/trial-balance.routes');
let incomeStatementRouter = require('./features/income-statement/income-statement.routes');

var url = 'mongodb://localhost:27017';
var connect = mongoose.connect(url);

connect.then((db) => {
  console.log('Connect Succesfully to the Server');
}, (err) => {
  console.log('Error : ', err);
})

var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/general/entry', generalEntriesRouter);
app.use('/t/accounts', tAccountsRouter);
app.use('/trial/balance', trialBalanceRouter);
app.use('/income/statement', incomeStatementRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
