
const { Schema, model } = require('mongoose');

const name = 'Ashtray';

// TODO: ObjectID check type for userID & questionID
const attributes = {
    question: {
        resultA: {
            type: Number,
        },
        resultB: {
            type: Number,
        },
        resultNull: {
            type: Number,
        }
    },
    buttNumber: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    questionID: {
        type: String
    },
    batteryLife: {
        type: Number,
    },
    CreatedAt: {
        type: String,
        required: true
    },
    UpdatedAt: {
        type: String,
        required: true
    }

};

const options = {};

const AshtraySchema = new Schema(attributes, options);

const AshtrayModel = model(name, AshtraySchema);

module.exports = AshtrayModel;
