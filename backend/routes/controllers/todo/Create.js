const { TodoModel } = require('@models');

const create = async (req, res) => {
    try {
        const newTodo = await TodoModel.create({
            task: req.body.task,
            done: false
        });
        res.status(200).json(newTodo);
    } catch (error) {
        console.log('error Create Todo : ', error.message);
        console.log(error);
        res.status(400).json({ 'message': 'Unable to create todo list' });
    }
};

module.exports = create;
