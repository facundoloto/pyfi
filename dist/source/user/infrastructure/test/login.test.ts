// import { expect } from 'chai';
// import request from 'supertest';
// import app from '../../../index';


// describe('test log in api', () => {
//     it('should return successful login', async () => {

//         const loginData = {
//             email: 'fotofacundo6@gmail.com',
//             password: 'facundo97'
//         };

//         const response = await request(app)
//             .post('/v1/register/login')
//             .send(loginData);

//         // Assertions using Chai
//         expect(response.status).to.equal(200);
//         expect(response.body).to.have.property('name');
//     });

//     it('should return an error with incorrect credentials', async () => {
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








// describe('test log in api', () => {
//     it('should return successful login', async () => {

//         const loginData = {
//             email: 'fotofacundo6@gmail.com',
//             password: 'facundo97'
//         };

//         const response = await request(app)
//             .post('/v1/register/login')
//             .send(loginData);

//         // Assertions using Chai
//         expect(response.status).to.equal(200);
//         expect(response.body).to.have.property('name');
//     });

//     it('should return an error with incorrect credentials', async () => {
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
