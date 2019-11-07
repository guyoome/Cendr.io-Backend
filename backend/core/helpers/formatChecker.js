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
