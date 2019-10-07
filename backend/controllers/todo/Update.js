const { TodoModel } = require('@models');

const update = async (req, res) => {
    try {
        const query = { _id: req.params.id };

        if (req.body.task === undefined || req.body.done === undefined) {
            throw new Error('body not defined');
        }
        const attributesToUpdate = {
            task: req.body.task,
            done: req.body.done
        };

        const updatedTodo = await TodoModel.updateOne(query, attributesToUpdate).exec();

        if (updatedTodo === undefined) {
            res.status(400).json('Nothing to update');
        } else {
            res.status(200).json(updatedTodo);
        }

    } catch (error) {
        console.log('error Update todo : ', error.message);
        console.log(error);

        res.status(400).json(error);
    }
};

module.exports = update;
