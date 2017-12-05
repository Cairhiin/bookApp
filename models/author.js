let mongoose = require('mongoose');
// let postFind = require('mongoose-post-find');
// let async = require('async');
let Schema = mongoose.Schema;
let AuthorSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  books: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },
});

// let _assignBooksToAuthor = function _assignBooksToAuthor (Book, result, callback) {
//   Book.find({
//     Author: result._id
//   }, function (error, books) {
//     if (error) {
//       return callback(error);
//     }
//     result.books = books;
//     callback(null, result);
//   });
// }
//
// AuthorSchema.plugin(postFind, {
//   find: function (result, callback) {
//     let Book = mongoose.model('Book');
//     async.each(result, function (item, callback) {
//       _assignBooksToAuthor(Book, item, callback);
//     }, function (error) {
//       if (error) {
//         return callback(error);
//       }
//
//       callback(null, result);
//     });
//   },
//   findOne: function (result, callback) {
//     let Book = mongoose.model('Book');
//     _assignBooksToAuthor(Book, result, callback);
//   }
// });

module.exports = mongoose.model('Author', AuthorSchema);
