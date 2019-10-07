
const { Schema, model } = require('mongoose');

const name = 'User';

const attributes = {
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    birthday: {
        type: String
    }
};

const options = {};

const UserSchema = new Schema(attributes, options);

const UserModel = model(name, UserSchema);

module.exports = UserModel;
