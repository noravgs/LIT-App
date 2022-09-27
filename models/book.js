const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  reasonForLiking: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  }
})


module.exports = mongoose.model('book', BookSchema)