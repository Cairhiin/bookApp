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

module.exports = mongoose.model('Author', AuthorSchema);
