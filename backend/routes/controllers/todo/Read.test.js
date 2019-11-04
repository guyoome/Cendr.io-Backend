
const read = require('./Read');

const mockRequest = (body = {}) => ({
    body
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('[Controllers > Todo] - Read', () => {
    describe('Normal call', () => {
        it('should return status 200', async () => {
            // Arrange
            const req = mockRequest();
            const res = mockResponse();

            // Act
            await read(req, res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(200);
        });
    });
});
