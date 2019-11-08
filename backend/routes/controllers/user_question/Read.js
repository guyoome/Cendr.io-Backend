const { UserQuestionModel } = require('@models');
/**
 * Request structure
 * req = { body: { } }
 * res = { json: [{ 
 *                 "userId" : "string",
 *                 "questionId" : "string"
 *               }] 
 * }
 */

/**
 * SECURE : Params and Body
 */
const secure = async req => {
    const inputs = {};
  
    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async inputs => {
    return UserQuestionModel.find().exec();
  };
  
  /**
   * LOGIC :
   */
  const readUserQuestions = async (req, res) => {
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
  module.exports = readUserQuestions;