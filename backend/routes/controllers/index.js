/* eslint-disable global-require */

module.exports = {

    // todo handlers
    Create: require('./todo/Create'),
    Delete: require('./todo/Delete'),
    Read: require('./todo/Read'),
    Update: require('./todo/Update'),

    // auth handlers
    RegisterUser: require('./auth/RegisterUser'),
    LoginUser: require('./auth/LoginUser'),

    // question handlers
    CreateQuestion: require('./question/Create'),
    ReadQuestions: require('./question/Read'),
    ReadQuestion: require('./question/ReadOne'),
    UpdateQuestion: require('./question/Update'),
    DeleteQuestion: require('./question/Delete'),

    // user question handlers
    CreateUserQuestion: require('./user/question/Create'),
    ReadUserQuestions: require('./user/question/Read'),
    ReadUserQuestion: require('./user/question/ReadOne'),
    UpdateUserQuestion: require('./user/question/Update'),
    DeleteUserQuestion: require('./user/question/Delete'),
};
