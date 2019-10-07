require('dotenv').config();

const jwt = require('jsonwebtoken');

const generateToken = (cred) => {
    try {
        const jwtPayload = {
            auth: {
                id: cred._id,
            },
            user: {
                id: cred.user_id,
            }
        };

        // We generate a JWT with credObject and return it
        const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_TOKEN);

        return token;
    } catch (error) {
        throw new Error('Can\'t generate jwt >'.concat(' > ', error.message));
    }
};

module.exports = {
    generateToken,
};
