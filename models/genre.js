let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let GenreSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
      type: String,
      required: true,
  },
  books: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },
});

module.exports = mongoose.model('Genre', GenreSchema);
