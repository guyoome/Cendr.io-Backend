const { Schema, model } = require('mongoose');

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
};

const options = {};

const UserQuestionShema = new Schema(attributes, options);

const UserQuestionModel = model(name, UserQuestionShema);  

module.exports = UserQuestionModel;