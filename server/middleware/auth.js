const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req,res,next) => {
  //need to send token in header
  const token = req.header('token');

  if(token){
    try {
    // DECODED PAYLOAD
    /* const payload = {
        user: {
          id: user.id
        }
      }
    */
      const decoded = jwt.verify(token, config.get('jwtSecret'));
      req.user = decoded.user
      next(); 
    } catch (error) {
      res.status(401).json({msg: 'Token is invalid'});
    }
  
  //if token is null
  }else{
    res.send(401).json({msg: 'No authorization'});
  }
}