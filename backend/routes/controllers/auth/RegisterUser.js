const bcrypt = require('bcrypt');
const { AuthModel, UserModel } = require('@models');
const { secureInput, formatChecker } = require('@core');
const { AuthServices } = require('@services');

/**
 * Request/Response structure
 */
// req = { body: { email: 'xxx', firstname: 'xxx', lastname: 'xxx', password: 'xxxxxxxxx' } }
// res = { json: { token: 'xxxx' } }

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {

    const inputs = {};
    
    if (req.body.email === undefined || req.body.email === null) {
        throw new Error('Email undefined/null');
    } else if (!formatChecker.isEmail(req.body.email)) {
        throw new Error('Email don\'t follow rules');
    }
    inputs.email = req.body.email;

    if (req.body.firstname === undefined || req.body.firstname === null) {
        throw new Error('Firstname undefined/null');
    }
    inputs.firstname = secureInput.sanitizeName(req.body.firstname);

    if (req.body.lastname === undefined || req.body.lastname === null) {
        throw new Error('Lastname undefined/null');
    }
    inputs.lastname = secureInput.sanitizeName(req.body.lastname);

    if (req.body.password === undefined || req.body.password === null) {
        throw new Error('Password undefined/null');
    } else if (!formatChecker.isPassword(req.body.password)) {
        throw new Error('Password don\'t follow rules');
    }
    inputs.password = await bcrypt.hash(req.body.password, 10);

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (inputs) => {
    try {
        const auth = await AuthModel.create(inputs);
        await UserModel.create(inputs);
        auth.password = undefined;

        const token = AuthServices.generateToken(auth);

        return token;
    } catch (error) {
        throw new Error('Auth can\'t be create'.concat(' > ', error.message));
    }
};

const registerUser = async (req, res) => {
    try {
        const inputs = await secure(req);
        
        const token = await process(inputs);

        res.status(200).json({ token });
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};

module.exports = registerUser;
