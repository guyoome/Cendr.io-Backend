
const sanitizeString = (textRaw) => {
    let result = null;

    const textRawToString = textRaw.toString();
    const textRawTrim = textRawToString.trim();
    const textRawToLowerCase = textRawTrim.toLowerCase();

    result = textRawToLowerCase;

    return result;
};

const sanitizeName = (textRaw) => {
    let result = null;

    const textRawSanitizeString = sanitizeString(textRaw);
    const textRawFirstCharUpperCase = textRawSanitizeString.substr(0, 1).toUpperCase();
    const textRawWithoutFirstChar = textRawSanitizeString.substr(1);
    const textRawConcat = textRawFirstCharUpperCase.concat(textRawWithoutFirstChar);

    result = textRawConcat;

    return result;
};

const generateUsername = (firstname, lastname, company) => {
    const rdm = Math.random().toString(36).substring(7);
    return firstname.concat('-', lastname, '-', company, '-', rdm);
};

module.exports = {
    sanitizeString,
    sanitizeName,
    generateUsername,
};
