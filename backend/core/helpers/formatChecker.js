require('dotenv').config();

const isEmail = (email) => {
    return email.includes('@');
};

const isPassword = (password) => {
    return password.length >= (process.env.LENGTH_PASSWORD || 8);
};

module.exports = {
    isEmail,
    isPassword,
};
