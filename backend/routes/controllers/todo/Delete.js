const { TodoModel } = require('@models');

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await TodoModel.findByIdAndRemove(id);
        res.status(200).json('Successfully removed');
    } catch (error) {
        console.log('error remove todo : ', error.message);
        console.log(error);
        res.status(400).json(error);
    }
};

module.exports = remove;
