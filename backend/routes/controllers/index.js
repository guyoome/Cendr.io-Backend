/* eslint-disable global-require */

module.exports = {

    // Ashtray handlers
    CreateAshtray: require('./ashtray/Create'),
    ReadOneAshtray: require('./ashtray/ReadOne'),
    ReadAshtray: require('./ashtray/Read'),
    ResetAshtray: require('./ashtray/Reset'),
    UpdateAshtray: require('./ashtray/Update'),
    DeleteAshtray: require('./ashtray/Delete'),

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
    CreateUserQuestion: require('./user_question/Create'),
    ReadUserQuestions: require('./user_question/Read'),
    ReadUserQuestion: require('./user_question/ReadOne'),
    UpdateUserQuestion: require('./user_question/Update'),
    DeleteUserQuestion: require('./user_question/Delete'),
};
