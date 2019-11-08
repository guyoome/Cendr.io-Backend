const { AshtrayModel } = require('@models');
const { AshtrayServices } = require('@services');
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

    if (req.body.buttNumber === undefined || req.body.buttNumber === null) {
        throw new Error('buttNumber undefined/null');
    }
    inputs.buttNumber = req.body.buttNumber;

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (params) => {
    const inputs = params;
    inputs.UpdatedAt = Date();
    try {
        const data = await AshtrayModel.findByIdAndUpdate(inputs.id, inputs).exec();

        const token = AshtrayServices.generateToken(data._id);

        return token;
    } catch (error) {
        throw new Error('Ashtray can\'t be Update'.concat(' > ', error.message));
    }
};

/**
 * LOGIC :
 */
const update = async (req, res) => {
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
module.exports = update;
