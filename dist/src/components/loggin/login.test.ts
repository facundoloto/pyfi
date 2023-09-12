import { expect } from 'chai';
import request from 'supertest';
import app from '../../../index';

describe('test log in api', () => {
    it('It should return successful login with a cookie that contain a token', async () => {

        const loginData = {
            email: 'fotofacundo6@gmail.com',
            password: 'facundo97'
        };

        const response = await request(app).post('/v1/register/login').send(loginData);
        const cookie = response.header['set-cookie'];

        console.log(cookie);
        expect(cookie).to.exist;  // Check if the cookie exists
        expect(response.status).to.equal(200);
        expect(response.body.result);
    });

    it('login by google should works the same way that normal login', async () => {

        const loginData = {
            email: 'lotofacundo6@gmail.com',
        };

        const response = await request(app).post('/v1/register/login/google').send(loginData);
        const cookie = response.header['set-cookie'];

        console.log(cookie);
        expect(cookie).to.exist;  // Check if the cookie exists
        expect(response.status).to.equal(200);
        expect(response.body.result);
    });




    it('should return an error with incorrect credentials', async () => {
        const loginData = {
            email: 'user@example.com',
            password: 'wrongpassword'
        };

        const response = await request(app)
            .post('/v1/register/login')
            .send(loginData);
        console.log(response.body)
        // Assertions using Chai
        expect(response.status).to.equal(401);
    });

});
