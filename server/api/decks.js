const express = require('express');
const router = express.Router();
const Deck = require('../schema/Deck');
const {check, validationResult} = require('express-validator/check');
const auth = require('../middleware/auth');
// @Get: '/api/decks
// Route: Private
// Gets all the decks for current user

router.get( '/', auth, async (req,res) => {
    try {
        const decks = await Deck.find({user: req.user.id});
        res.json(decks);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});
router.post( '/', [
    auth,
    check('commander', 'Please provide a valid commander').not().isEmpty(),
    check('colorId', 'Please provide a valid color identity').not().isEmpty()
    ], async (req,res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors: errors.array()})
        }
        const {commander, colorId, cards} = req.body;

        try {

            const newDeck = new Deck({
                user: req.user.id,
                commander,
                cards,
                colorId
            })
            await newDeck.save();
            const decks = await Deck.find({user: req.user.id});
            res.json(decks);

        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
});

router.put('/', auth, async (req, res) => {

    const {commander, cards, colorId} = req.body;

    const commanderFields = {};
    if(commander) commanderFields.commander = commander;
    if(cards) commanderFields.cards = cards;
    if(colorId) commanderFields.colorId = colorId;
    try {
        let deck = await Deck.findById(req.params.id);
        if(!deck){
            res.status(404).json({msg: 'Deck not found'});
        }
        if(deck.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not Authorized'});
        }
        deck = await Deck.findByIdAndUpdate(
            req.params.id, 
            {$set: commanderFields}, 
            {new: true});

            res.json(deck);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }  
})
router.delete('/', auth, async (req, res) => {
    try {
        let deck = await Deck.findById(req.params.id);
        if(!deck){
            res.status(404).json({msg: 'Deck not found'});
        }
        if(deck.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not Authorized'});
        }
        await Deck.findByIdAndDelete(req.params.id);
        res.json({msg: 'Deck removed'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }  
})
module.exports = router;
