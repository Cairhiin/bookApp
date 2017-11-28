var express = require('express');
var mongoose = require('mongoose');
var Author = mongoose.model('Author');
var router = express.Router();

<<<<<<< HEAD
router.get('/authors', function (req, res, next) {
=======
router.get('/author', function (req, res, next) {
>>>>>>> origin/master
  Author.find().sort('name.last').exec(function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

<<<<<<< HEAD
router.get('/authors/:authorId', function (req, res, next) {
  Author.findOne({
=======
router.get('/author/:authorId', function (req, res, next) {
  Team.findOne({
>>>>>>> origin/master
    _id: req.params.authorId
  }, function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

module.exports = router;
