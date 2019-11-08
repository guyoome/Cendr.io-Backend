const { secureInput } =require('@core');
const { UserQestionModel } = require('@models');

/**
 * Request structure
 * req = { body: { userId : String, questionId : String } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};
    if(req.body.userId === undefined || req.body.userId === null){
        throw new Error('userId is null/undefined');
    }
    inputs.userId  = secureInput.sanitizeString(req.body.userId);

    if(req.body.questionId === undefined || req.body.questionId === null){
        throw new Error('questionId is null/undefined');
    }
    inputs.questionId  = secureInput.sanitizeString(req.body.questionId);

    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async (inputs) => {
    try{
        const newUser_Question = await UserQestionModel.create(inputs);
        return newUser_Question;
    }catch(error) {
          throw new Error('User_Question  can\'t be create'.concat(' > ', error.message));
      }
  };
  
  /**
   * LOGIC :
   */
  const createUserQuestion = async (req, res) => {
    try {
      const inputs = await secure(req);
  
      const param = await process(inputs);
  
      res.status(200).json(param);
    } catch (error) {
      console.log("ERROR MESSAGE :", error.message);
      console.log("ERROR :", error);
      res.status(400).json({ message: error.message });
    }
  };
  module.exports = createUserQuestion;