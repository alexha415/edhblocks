const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const {validationResult, check} = require('express-validator/check');
const bcrypt = require('bcryptjs');
const User = require('../schema/User');

 router.get('/', auth , async (req,res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.send({user});
});

router.post('/', [
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Please enter a valid password').exists()
], async (req, res) => {
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: "Invalid email address"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg: "Invalid password"});
        }
        
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err
            return res.json({token});
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});
module.exports = router;