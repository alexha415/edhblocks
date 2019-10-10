const express = require('express');
const router = express.Router();
const User = require('../schema/User');

router.get('/', async (req,res) => {
  res.send('Hello User!');
});

module.exports = router;