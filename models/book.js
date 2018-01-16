var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    main: {
      type: String,
      required: true,
    },
    sub: {
      type: String,
      required: false,
    },
  },
  authors: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
  isbn: {
    type: String,
    required: true,
  },
  genre: {
    type: Schema.Types.ObjectId, ref: 'Genre',
  },
  publisher: {
    type: Schema.Types.ObjectId, ref: 'Publisher',
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: 'images/book-cover.png',
  }
});

module.exports = mongoose.model('Book', BookSchema);
