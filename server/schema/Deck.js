const mongoose = require('mongoose');

const deckSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  cards: {
    type: Array,
    required: true
  },
  commander: {
    type: Object,
    required: true
  },
  colorId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('deck', deckSchema);