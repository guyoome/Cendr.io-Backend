/* eslint-disable global-require */

module.exports = {

    // Ashtray handlers
    CreateAshtray: require('./ashtray/Create'),
    Delete: require('./todo/Delete'),
    Read: require('./todo/Read'),
    Update: require('./todo/Update'),

    // auth handlers
    RegisterUser: require('./auth/RegisterUser'),
    LoginUser: require('./auth/LoginUser'),
};
