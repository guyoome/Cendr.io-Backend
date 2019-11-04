const { secureInput, formatChecker } = require('@core');
const { AshtrayModel } = require('@models');
/**
 * Request structure
 * req = { body: {location:{xx,xx}, userID:string, questionID:string, } }
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

    if (req.body.location === undefined || req.body.location === null) {
        throw new Error('Location undefined/null');
    } else if (!formatChecker.isLocation(req.body.location)) {
        throw new Error('Location don\'t follow rules');
    }
    inputs.userID = req.body.location;

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (inputs) => { };

/**
 * LOGIC :
 */
const createAshtray = async (req, res) => {
    try {
        const inputs = await secure(req);

        const param = await process(inputs);

        res.status(200).json(param);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ message: error.message });
    }
};
