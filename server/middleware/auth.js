const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req,res,next) => {
  //need to send token in header
  token = req.headers.authentication;

  console.log(token);
  
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
    return res.status(401).json({msg: 'No token authorization'});
  }
}