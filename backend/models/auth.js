
const { Schema, model } = require('mongoose');

const name = 'Auth';

const attributes = {
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
};

const options = {};

const AuthSchema = new Schema(attributes, options);

const AuthModel = model(name, AuthSchema);

module.exports = AuthModel;
