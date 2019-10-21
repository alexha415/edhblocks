const express = require('express');
const router = express.Router();
const Deck = require('../schema/Deck');

// @Get: '/api/decks
// Route: Private
// Gets all the decks for current user
router.get( '/', (req,res) => {
    res.send('Decks');
});
module.exports = router;
