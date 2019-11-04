
const dotenv = require('dotenv');
const TodoModel = require('../../models/todo');
const update = require('./Update');

dotenv.config();

let todo;

const mockRequest = (_id = '', body = {}) => ({
    params: { id: _id },
    body
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('[Controllers > Todo] - Update', () => {
    beforeEach(async () => {
        try {
            todo = await TodoModel.findOne().exec();
        } catch (error) {
            console.log('error findOne ', error.message);
            console.log(error);
        }
    });

    describe('Call with id & body', () => {
        it('should return status 200', async () => {
            // Arrange
            const body = {
                task: 'dev update',
                done: true
            };
            const req = mockRequest(todo._id, body);
            const res = mockResponse();

            // Act
            await update(req, res);

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
            await update(req, res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(400);
        });
    });
});
