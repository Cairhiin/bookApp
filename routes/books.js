let express = require('express');
let mongoose = require('mongoose');
let Book = mongoose.model('Book');
let Author = mongoose.model('Author');
let Genre = mongoose.model('Genre');
let Publisher = mongoose.model('Publisher');
let router = express.Router();

router.get('/books', function (req, res, next) {
  Book.find().sort('title.main')
  .populate('authors')
  .populate('genre')
  .populate('publisher')
  .exec(function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

router.get('/books/:bookId', function (req, res, next) {
  Book.findOne({
    _id: req.params.bookId
  })
  .populate('authors')
  .populate('genre')
  .populate('publisher')
  .exec(function (error, results) {
    if (error) {
      return next(error);
    }

    if (!results) {
      res.send(404);
    }

    res.json(results);
  });
});

module.exports = router;
