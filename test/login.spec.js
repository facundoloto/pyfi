const expect = require('chai');
const request = require('supertest');
const app = require('./../dist/index');

describe('test log in in api', () => {
    it('should return successful login', async () => {

        const loginData = {
            email: 'batman@gmail.com',
            password: 'batman'
        };

        const response = await request(app)
            .post('/v1/register/login')
            .send(loginData);

        // Assertions using Chai
        expect(response.status).to.equal(200);
        // expect(response.body).to.have.property('token');
    });

    it('should return an error with incorrect credentials', async () => {
        const loginData = {
            email: 'user@example.com',
            password: 'wrongpassword'
        };

        const response = await request(app)
            .post('/v1/register/login')
            .send(loginData);

        // Assertions using Chai
        expect(response.status).to.equal(404);
    });
});
