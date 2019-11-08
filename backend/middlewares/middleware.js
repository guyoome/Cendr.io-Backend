const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

/**
 * Request structure
 * req = { body: { } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};
    if(req.headers.cookie === undefined || req.headers.cookie === null){
      throw new Error("invalid cookie");
    }
    inputs.token =  req.headers.cookie.substring(6);
    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async (inputs) => {
    try{
      return decodedToken = jwt.verify(inputs.token, dotenv.parsed.JWT_SECRET_TOKEN);
    }  catch(error){
      throw new Error('invalid token')
    }
      
    
    return decodedToken;
  };
  
  /**
   * LOGIC :
   */
  const middlewares = async (req, res, next) => {
    try {
      const inputs = await secure(req);
  
      const param = await process(inputs);
      if(param === null || param === null){
        throw new Error('Wrong token')
      }
      next();
    } catch (error) {
      console.log("ERROR MESSAGE :", error.message);
      console.log("ERROR :", error);
      res.status(401).json({ message: error.message });
    }
  };
  module.exports = middlewares;