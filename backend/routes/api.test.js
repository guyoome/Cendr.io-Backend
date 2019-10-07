// Test E2E for all Routes

const request = require('supertest');
const app = require('../app');
const TodoModel = require('../models/todo');

describe('[Routes] - API', () => {
    describe('All', () => {
        it('should return status 200', (done) => {
            // Arrange

            // Act

            // Assert
            request(app)
                .get('/api/all')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('Add', () => {
        it('should return status 200', (done) => {
            // Arrange

            // Act

            // Assert
            request(app)
                .post('/api/add')
                .send({
                    task: 'devAgain'
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
    describe('Add', () => {
        it('send without body should return status 400', (done) => {
            // Arrange

            // Act

            // Assert
            request(app)
                .post('/api/add')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400, done);
        });
    });

    describe('delete', () => {
        it('send with id should return status 200', async (done) => {
            // Arrange
            let todo;

            // Act
            try {
                todo = await TodoModel.findOne().exec();
            } catch (error) {
                console.log('error findOne ', error.message);
                console.log(error);
            }

            // Assert
            request(app)
                .delete(`/api/delete/${todo._id}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('update', () => {
        it('send with id should return status 200', async (done) => {
            // Arrange
            let todo;

            // Act
            try {
                todo = await TodoModel.findOne().exec();
            } catch (error) {
                console.log('error findOne ', error.message);
                console.log(error);
            }

            // Assert
            request(app)
                .patch(`/api/update/${todo._id}`)
                .send({
                    task: 'dev Update',
                    done: true
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
    describe('update', () => {
        it('send without id should return status 400', async (done) => {
            // Arrange
            let todo;

            // Act
            try {
                todo = await TodoModel.findOne().exec();
            } catch (error) {
                console.log('error findOne ', error.message);
                console.log(error);
            }

            // Assert
            request(app)
                .patch('/api/update/wrongid')
                .send({
                    task: 'dev Update',
                    done: true
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400, done);
        });
    });
    describe('update', () => {
        it('send without body should return status 400', async (done) => {
            // Arrange
            let todo;

            // Act
            try {
                todo = await TodoModel.findOne().exec();
            } catch (error) {
                console.log('error findOne ', error.message);
                console.log(error);
            }

            // Assert
            request(app)
                .patch(`/api/update/${todo._id}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400, done);
        });
    });
});
