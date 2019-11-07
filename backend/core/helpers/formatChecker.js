require('dotenv').config();

const isEmail = (email) => {
    const regex = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;

    return regex.test(email);
};

const isPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    return regex.test(password);
};

const isLocation = (loc) => {
    const regex = /^(?:\{)[-+]?([0-9]*\.[0-9]+|[0-9]+)(?:\,)[-+]?([0-9]*\.[0-9]+|[0-9]+)(?:\})$/;

    return regex.test(loc);
};

module.exports = {
    isEmail,
    isPassword,
    isLocation,
};
