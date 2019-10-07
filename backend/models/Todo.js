
const { Schema, model } = require('mongoose');

const name = 'Todo';

const attributes = {
    task: {
        type: String,
        required: true
    },
    done: {
        type: Boolean
    }
};

const options = {};

const TodoSchema = new Schema(attributes, options);

const TodoModel = model(name, TodoSchema);

module.exports = TodoModel;
