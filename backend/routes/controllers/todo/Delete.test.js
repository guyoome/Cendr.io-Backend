
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const TodoModel = require('../../models/todo');
const remove = require('./Delete');

dotenv.config();

const mongoDbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const mongoDbDatabase = process.env.MONGODB_DATABASE || 'todolist';
let todos;

const mockRequest = (_id = '') => ({
    params: { id: _id }
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('[Controllers > Todo] - Delete', () => {
    beforeEach(async () => {
        try {
            todos = await TodoModel.findOne().exec();
        } catch (error) {
            console.log('error findOne ', error.message);
            console.log(error);
        }
    });

    describe('Call with a good id', () => {
        it('should return status 200', async () => {
            // Arrange

            const req = mockRequest(todos._id);
            const res = mockResponse();

            // Act
            await remove(req, res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(200);
        });
    });

    describe('Call without id', () => {
        it('should return status 400', async () => {
            // Arrange

            const req = mockRequest();
            const res = mockResponse();

            // Act
            await remove(req, res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(400);
        });
    });
});
