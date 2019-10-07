
const create = require('./Create');

const mockRequest = (taskData = '') => ({
    body: { task: taskData }
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('[Controllers > Todo] - Create', () => {
    describe('Call with a good body', () => {
        it('should return status 200', async () => {
            // Arrange
            const task = 'dev';
            const req = mockRequest(task);
            const res = mockResponse();

            // Act
            await create(req, res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(200);
        });
    });
    describe('Call without body', () => {
        it('should return status 400', async () => {
            // Arrange
            const req = mockRequest();
            const res = mockResponse();

            // Act
            await create(req, res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(400);
        });
    });
});
