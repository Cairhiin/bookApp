var express = require('express');
var mongoose = require('mongoose');
var Publisher = mongoose.model('Publisher');
var router = express.Router();

router.get('/publishers', function (req, res, next) {
  Publisher.find().sort('name').exec(function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

router.get('/publishers/:publisherId', function (req, res, next) {
  Publisher.findOne({
    _id: req.params.publisherId
  }, function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

module.exports = router;
