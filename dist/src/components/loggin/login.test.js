"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../../index"));
describe('test log in api', () => {
    it('It should return successful login with a cookie that contain a token', async () => {
        const loginData = {
            email: 'fotofacundo6@gmail.com',
            password: 'facundo97'
        };
        const response = await (0, supertest_1.default)(index_1.default).post('/v1/register/login').send(loginData);
        const cookie = response.header['set-cookie'];
        console.log(cookie);
        (0, chai_1.expect)(cookie).to.exist; // Check if the cookie exists
        (0, chai_1.expect)(response.status).to.equal(200);
        (0, chai_1.expect)(response.body.result);
    });
    it('login by google should works the same way that normal login', async () => {
        const loginData = {
            email: 'lotofacundo6@gmail.com',
        };
        const response = await (0, supertest_1.default)(index_1.default).post('/v1/register/login/google').send(loginData);
        const cookie = response.header['set-cookie'];
        console.log(cookie);
        (0, chai_1.expect)(cookie).to.exist; // Check if the cookie exists
        (0, chai_1.expect)(response.status).to.equal(200);
        (0, chai_1.expect)(response.body.result);
    });
    it('should return an error with incorrect credentials', async () => {
        const loginData = {
            email: 'user@example.com',
            password: 'wrongpassword'
        };
        const response = await (0, supertest_1.default)(index_1.default)
            .post('/v1/register/login')
            .send(loginData);
        console.log(response.body);
        // Assertions using Chai
        (0, chai_1.expect)(response.status).to.equal(401);
    });
});
