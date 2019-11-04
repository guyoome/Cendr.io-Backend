const { TodoModel } = require('@models');

const read = async (req, res) => {
    try {
        const todos = await TodoModel.find().exec();
        res.status(200);
        res.json(todos);
    } catch (error) {
        console.log('error find todos : ', error.message);
        console.log(error);
        res.status(500);
        res.json({ error });
    }
};

module.exports = read;
