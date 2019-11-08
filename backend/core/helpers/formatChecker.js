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
const isDate = (dateRaw) => {
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateRaw))
        return false;

    // Parse the date parts to integers
    var parts = dateRaw.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};
module.exports = {
    isEmail,
    isPassword,
    isLocation,
    isDate
};
