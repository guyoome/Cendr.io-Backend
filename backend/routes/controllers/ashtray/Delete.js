const { AshtrayModel } = require('@models');

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
    return inputs;
};

/**
 * PROCESS :
 */
const process = async (inputs) => {
    try {
        const data = await AshtrayModel.findByIdAndRemove(inputs.id);
        return data;
    } catch (error) {
        throw new Error('Ashtray can\'t be delete'.concat(' > ', error.message));
    }
};

/**
 * LOGIC :
 */
const deleteAshtray = async (req, res) => {
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
module.exports = deleteAshtray;
