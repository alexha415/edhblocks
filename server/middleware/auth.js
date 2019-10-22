const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req,res,next) => {
  //need to send token in header
  console.log(req.headers.authentication);

  token = req.headers.authentication;

  if(token){
    try {
      const decoded = jwt.verify(token, config.get('jwtSecret'));
      req.user = decoded.user
      next(); 
    } catch (error) {
      res.status(401).json({msg: 'Token is invalid'});
    }
  //if token is null
  }else{
    res.status(401).json({msg: 'No authorization'});
  }
}