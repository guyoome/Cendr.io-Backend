const bcrypt = require('bcrypt');
const { AuthModel, UserModel } = require('@models');
const { formatChecker } = require('@core');
const { AuthServices } = require('@services');


/**
 * Request structure
 */
// req = { body: { email: 'xxx', password: 'xxxxxxxxx' } }
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

    if (req.body.password === undefined || req.body.password === null) {
        throw new Error('Password undefined/null');
    } else if (!formatChecker.isPassword(req.body.password)) {
        throw new Error('Password don\'t follow rules');
    }
    inputs.password = req.body.password;

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (inputs) => {
    try {
        const auth = await AuthModel.findOne({ email: inputs.email });
        if (auth === null || auth === undefined) {
            throw new Error('Auth : Email not find');
        }

        const user = await UserModel.findOne({ email: inputs.email });
        if (user === null || user === undefined) {
            throw new Error('User : Email not find');
        }

        const isGoodPassword = await bcrypt.compare(inputs.password, auth.password);
        if (!isGoodPassword) {
            throw new Error('Wrong Password');
        }

        auth.password = undefined;
        
        const token = AuthServices.generateToken(auth);

        return token;
    } catch (error) {
        throw new Error('Error login'.concat(' > ', error.message));
    }
};

const loginUser = async (req, res) => {
    try {
        const inputs = await secure(req);
        
        const token = await process(inputs);
        
        res.cookie('token',token,{ expires: new Date(Date.now() + 9000000000000), httpOnly: true });
        res.status(200).json({token : token});
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};

module.exports = loginUser;
