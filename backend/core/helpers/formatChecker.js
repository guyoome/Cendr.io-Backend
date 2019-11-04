require('dotenv').config();

const isEmail = (email) => {
    return email.includes('@');
};

const isPassword = (password) => {
    return password.length >= (process.env.LENGTH_PASSWORD || 8);
};

const isLocation = (loc) => {
    const toCheck = ['{', ',', '}'];

    const contains = (target, pattern) => {
        let value = 0;
        pattern.forEach((word) => {
            value += target.includes(word);
        });
        return (value === pattern.length);
    };

    return contains(loc, toCheck);
};

module.exports = {
    isEmail,
    isPassword,
    isLocation,
};
