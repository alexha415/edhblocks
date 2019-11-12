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

// @Get: '/api/decks/:id
// Route: Private
// Gets one deck with corresponding id
router.get( '/:id', auth, async (req,res) => {
    try {
        const deck = await Deck.findById(req.params.id);
        if(!deck){
            res.status(404).json({msg: 'Deck not found'});
        }
        res.json(deck);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

router.post( '/', [
    auth,
    check('commander', 'Please provide a valid commander for your deck').not().isEmpty(),
    check('colorId', 'Please provide a valid color identity for your deck').not().isEmpty(),
    check('name', 'Please provide a valid name for your deck').not().isEmpty(),
    check('description', 'Please provide a valid description for your deck').not().isEmpty()
    ], async (req,res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors: errors.array()})
        }
        const {commander, colorId, cards, name, description} = req.body;
        try {

            const newDeck = new Deck({
                user: req.user.id,
                commander,
                cards,
                colorId,
                name,
                description
            })
            await newDeck.save();
            const decks = await Deck.find({user: req.user.id});
            res.json(decks);

        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
});

router.put('/:id', auth, async (req, res) => {

    const {commander, deckList, colorId, name, description} = req.body;

    const commanderFields = {};
    if(commander) commanderFields.commander = commander;
    if(deckList) commanderFields.deckList = deckList;
    if(colorId) commanderFields.colorId = colorId;
    if(name) commanderFields.name = name;
    if(description) commanderFields.description = description;
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
router.delete('/:id', auth, async (req, res) => {
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
