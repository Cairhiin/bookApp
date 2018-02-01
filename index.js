let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

require('./lib/connection');
let books = require('./routes/books');
let authors = require('./routes/authors');
let publishers = require('./routes/publishers');
let genres = require('./routes/genres');

let app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Static links to local angular NPM files
app.use('/angular-material', express.static(__dirname + '/node_modules/angular-material/'));
app.use('/angular-animate', express.static(__dirname + '/node_modules/angular-animate/'));
app.use('/angular-aria', express.static(__dirname + '/node_modules/angular-aria/'));
app.use('/angular-messages', express.static(__dirname + '/node_modules/angular-messages/'));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route/'));
app.use('/angular-resource', express.static(__dirname + '/node_modules/angular-resource/'));
app.use('/ngstorage', express.static(__dirname + '/node_modules/ngstorage/'));

app.use(books);
app.use(authors);
app.use(publishers);
app.use(genres);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err,
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app;
