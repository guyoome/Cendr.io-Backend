const { Shema, model } = require('mongoose');

const name  = 'User_Question';

const attributes = {
    userId: {
        type: String,
        required: true
    },
    questionId: {
        type: String,
        required: true
    }
}

const options = {};

const User_QuestionShema = new Shema(attributes, options);
const User_QuestionModel = model(name, User_QuestionShema);  
module.exports = User_QuestionModel;