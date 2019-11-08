const { secureInput, formatChecker } =require('@core');
const { QuestionModel } = require('@models');
/**
 * Request structure
 * req = { body: {text:string, proposal_a:string, proposal_b:string, userId: string, lifeTime : mm/dd/yyyy } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {
    const inputs = {};
    
    if (req.body.userID === undefined || req.body.userID === null) {
        throw new Error('UserID undefined/null');
    }
    inputs.userID = secureInput.sanitizeString(req.body.userID);

    if (req.body.text === undefined || req.body.text === null){
        throw new Error('Text undefinded/null');
    }
    inputs.text = req.body.text;

    if(req.body.proposal_a === undefined || req.body.proposal_a === null){
        throw new Error('Proposal a undefined/null');
    }
    inputs.proposal_a = secureInput.sanitizeString(req.body.proposal_a);
    
    if(req.body.proposal_b === undefined || req.body.proposal_b === null){
        throw new Error('Proposal b undefined/null');
    }
    inputs.proposal_b = secureInput.sanitizeString(req.body.proposal_b);

    if(req.body.lifeTime === undefined || req.body.lifeTime === null){
        throw new Error('lifeTime undefined/null');
    }
    if (!formatChecker.isDate(req.body.lifeTime)){
        throw new Error('lifeTime Date invalid');
    }
    inputs.lifeTime = req.body.lifeTime;

    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async (inputs) => {
      try{
        const newQuestion = await QuestionModel.create(inputs);
        return newQuestion;
    }catch(error) {
          throw new Error('Question  can\'t be create'.concat(' > ', error.message));
      }
  };
  
  /**
   * LOGIC :
   */
  const createQuestion = async (req, res) => {
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
  module.exports = createQuestion;