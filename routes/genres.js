var express = require('express');
var mongoose = require('mongoose');
var Genre = mongoose.model('Genre');
var router = express.Router();

router.get('/genres', function (req, res, next) {
  Genre.find().sort('name').populate('books').exec(function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

router.get('/genres/:genreId', function (req, res, next) {
  Genre.findOne({
    _id: req.params.genreId
  })
  .populate('books').exec(function (error, results) {
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
