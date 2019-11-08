const { secureInput, formatChecker } = require('@core');
const { AshtrayModel } = require('@models');
const { AshtrayServices } = require('@services');

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
    inputs.location = req.body.location;

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (param) => {
    const inputs = param;
    inputs.CreatedAt = Date();
    inputs.UpdatedAt = inputs.CreatedAt;
    inputs.buttNumber = 0;
    console.log('inputs: ', inputs);

    try {
        const data = await AshtrayModel.create(inputs);

        const token = AshtrayServices.generateToken(data);

        return token;
    } catch (error) {
        throw new Error('Ashtray can\'t be create'.concat(' > ', error.message));
    }

};

/**
 * LOGIC :
 */
const createAshtray = async (req, res) => {
    try {
        const inputs = await secure(req);

        const data = await process(inputs);


        res.status(200).json({ data });

    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = createAshtray;
