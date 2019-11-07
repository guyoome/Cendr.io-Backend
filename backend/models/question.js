
const { Schema, model } = require('mongoose');

const name = 'Question';

// TODO: ObjectID check type for userID & questionID
const attributes = {
    text: {
        type: String,
        required: true
    },
    proposal_a: {
        type: String,
        required: true
    },
    proposal_b: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    lifeTime: {
        type: Date,
        required :true
    },
};

const options = {};

const QuestionShema = new Schema(attributes, options);

const QuestionModel = model(name, AshtraySchema);

module.exports = QuestionModel;
