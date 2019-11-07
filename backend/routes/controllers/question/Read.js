const { QuestionModel } = require('@models');
/**
 * Request structure
 * req = { body: { } }
 * res = { json: { } }
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
  const process = async inputs => {};
  
  /**
   * LOGIC :
   */
  const readQuestions = async (req, res) => {
    try {
      const inputs = await secure(req);
  
      const param = await process(inputs);
      
      const questions = await QuestionModel.find().exec();
      res.status(200).json(questions);
    } catch (error) {
      console.log("ERROR MESSAGE :", error.message);
      console.log("ERROR :", error);
      res.status(400).json({ message: error.message });
    }
  };
  module.exports = readQuestions;