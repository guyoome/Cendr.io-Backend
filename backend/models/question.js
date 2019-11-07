
const { Schema, model } = require('mongoose');

const name = 'Question';

// TODO: ObjectID check type for userID & questionID
const attributes = {
    buttNumber: {
        type: Number,
        required: true
    },
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
    lifeTi: {
        type: Date,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
};

const options = {};

const QuestionShema = new Schema(attributes, options);

const QuestionModel = model(name, AshtraySchema);

module.exports = QuestionModel;
