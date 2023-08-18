import { expect } from 'chai';
import request from 'supertest';
import Auth from './../auth/auth';
import app from '../../../index';

const auth = new Auth();

describe('test log in api', () => {
    it('should successful login with a token and prove it if decodeToken works ', async () => {

        const loginData = {
            email: 'fotofacundo6@gmail.com',
            password: 'facundo97'
        };

        const response = await request(app)
            .post('/v1/register/login')
            .send(loginData);

        const user = auth.decodedToken(response.body.result);
        console.log(user)
        // Assertions using Chai
        expect(response.status).to.equal(200);
        expect(response.body.result);
    });

    // it('should return an error with incorrect credentials', async () => {
    //     const loginData = {
    //         email: 'user@example.com',
    //         password: 'wrongpassword'
    //     };

    //     const response = await request(app)
    //         .post('/v1/register/login')
    //         .send(loginData);

    //     // Assertions using Chai
    //     expect(response.status).to.equal(404);
    // });
});
