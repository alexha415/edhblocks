const mongoose = require('mongoose');

const deckSchema = mongoose.Schema({
  cards: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('deck', deckSchema);