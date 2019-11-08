const { QuestionModel } = require('@models');
/**
 * Request structure
 * req = { body: { } }
 * res = { json: [{ 
 *                  "_id": "string",
 *                  "userID": "string",
 *                  "text": string,
 *                  "proposal_a": string,
 *                  "proposal_b": string,
 *                  "lifeTime": string
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
    return QuestionModel.find().exec();
  };
  
  /**
   * LOGIC :
   */
  const readQuestions = async (req, res) => {
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
  module.exports = readQuestions;