// import { expect } from 'chai';
// import request from 'supertest';
// import app from '../../../index';

// let token: string = "";

// describe('prove it if the user can access to all post with jwt ', () => {
//     it('should return token by login', async () => {

//         const loginData = {
//             email: 'fotofacundo6@gmail.com',
//             password: 'facundo97'
//         };

//         const response = await request(app)
//             .post('/v1/register/login')
//             .send(loginData);

//         // Assertions using Chai
//         expect(response.status).to.equal(200);
//         token = response.body.token;
//     });

//     it('should return all posts by user', async () => {
//         const loginData = {
//             email: 'user@example.com',
//             password: 'wrongpassword'
//         };

//         const response = await request(app)
//             .post('/v1/register/login')
//             .send(loginData);

//         // Assertions using Chai
//         expect(response.status).to.equal(404);
//     });
// });
