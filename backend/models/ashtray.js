
const { Schema, model } = require('mongoose');

const name = 'Ashtray';

// TODO: ObjectID check type for userID & questionID
const attributes = {
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
        type: String,
        required: true
    },
    batteryLife: {
        type: Number,
    },
};

const options = {};

const AshtraySchema = new Schema(attributes, options);

const AshtrayModel = model(name, AshtraySchema);

module.exports = AshtrayModel;
