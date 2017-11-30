var express = require('express');
var mongoose = require('mongoose');
var Author = mongoose.model('Author');
var router = express.Router();

router.get('/authors', function (req, res, next) {
  Author.find().sort('name.last').exec(function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

router.get('/authors/:authorId', function (req, res, next) {
  Author.findOne({
    _id: req.params.authorId
  }, function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

module.exports = router;
