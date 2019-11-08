const { AshtrayModel } = require('@models');
const { formatChecker, secureInput } = require('@core');
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

    if (req.params.id === undefined || req.params.id === null) {
        throw new Error('ID undefined/null');
    }
    inputs.id = req.params.id;

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
const process = async (params) => {
    const inputs = params;
    inputs.UpdatedAt = Date();
    inputs.buttNumber = 0;
    try {
        const data = await AshtrayModel.findByIdAndUpdate(inputs.id, inputs).exec();

        return data;
    } catch (error) {
        throw new Error('Ashtray can\'t be Reset'.concat(' > ', error.message));
    }
};

/**
 * LOGIC :
 */
const reset = async (req, res) => {
    try {
        const inputs = await secure(req);

        const data = await process(inputs);

        res.status(200).json(data);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = reset;
