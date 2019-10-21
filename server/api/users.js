const express = require('express');
const router = express.Router();
const User = require('../schema/User');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post('/', [
  check('name', 'Please enter a valid name').not().isEmpty(),
  check('password', 'Please enter a password with min 6 characters').isLength({min: 6}),
  check('email', 'Please enter a valid email').isEmail()
],async (req, res) => {

  // check if there are errors in validator
  const errors = validationResult(req);

  // if there are errors, respond with errors
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
   try {
    // destructure body
    const { name, password, email } = req.body;

    // check mongodb schema to see if a user exists with these values
    const takenUser = await User.findOne({name});
    const takenEmail = await User.findOne({email})

    //if so, return with 'user already exists' response
    if(takenUser || takenEmail){
      return res.status(400).json({msg: 'User already exists'});
    }

    // construct a new user model from schema
    const user = new User({
      name,
      password,
      email
    })
    
    // generate salt to create a unique hashing algorithm
    const salt = await bcrypt.genSalt(10);
    // apply salt to hash the password
    user.password = await bcrypt.hash(password, salt);

    //generate user in the database
    await user.save();

    const payload ={
      user: {
        id: user.id
      }
    }
    // generate a token using jwtsecret and user id
    jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000}, (err, token) => {
      if(err){
        throw err;
      }
      res.json({token});
    })
   } catch (error) {
     console.log(error);
     res.status(500).send('Server Error');
   }
})
module.exports = router;