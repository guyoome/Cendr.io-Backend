const { secureInput } =require('@core');
const { UserQestionModel } = require('@models');
/**
 * Request structure
 * req = { 
 *      params : {id : Number}
 *      body: {text:string, proposal_a:string, proposal_b:string, userId: string, lifeTime : mm/dd/yyyy } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};
    if(req.params.id === undefined || req.params.id === null){
        throw new Error('id is null/undefined')
    }
    inputs.id = req.params.id;
    if (req.body.userId === undefined || req.body.userId === null) {
        throw new Error('UserID undefined/null');
    }
    inputs.userId = secureInput.sanitizeString(req.body.userId);
    
    if (req.body.questionId === undefined || req.body.questionId === null) {
        throw new Error('Question ID undefined/null');
    }
    inputs.questionId = secureInput.sanitizeString(req.body.questionId);


    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async (inputs) => {
      try{
        await UserQestionModel.updateOne({_id : inputs.id},inputs);
        return UserQestionModel.findOne({_id: inputs.id}).exec();
    }catch(error) {
          throw new Error('User_Question  can\'t be update'.concat(' > ', error.message));
      }
  };
  
  /**
   * LOGIC :
   */
  const updateUserQuestion = async (req, res) => {
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
  module.exports = updateUserQuestion;