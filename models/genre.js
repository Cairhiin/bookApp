let mongoose = require('mongoose');
let postFind = require('mongoose-post-find');
let async = require('async');
let Schema = mongoose.Schema;
let GenreSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: {
      type: String,
      required: true,
  },
  books: {
    type: [Schema.Types.Mixed],
  },
});

function _attachBooks(Book, result, callback) {
  Book.find({
    genre: result._id
  }, function(err, books) {
    if (err) {
      return callback(err);
    }
    result.books = books;
    callback(null, result)
  });
}

GenreSchema.plugin(postFind, {
  find: function(result, callback) {
    let Book = mongoose.model('Book');
    async.each(result, function(item, callback) {
      _attachBooks(Book, item, callback);
    }, function(err) {
      if (err) {
        return callback(err);
      }

      callback(null, result)
    });
  },
  findOne: function(result, callback) {
    let Book = mongoose.model('Book');
    _attachBooks(Book, result, callback);
  }
});

module.exports = mongoose.model('Genre', GenreSchema);
