// "use strict";
// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const chai_1 = require("chai");
// const supertest_1 = __importDefault(require("supertest"));
// const index_1 = __importDefault(require("../../../index"));
// let token = "";
// describe('prove it if the user can access to all post with jwt ', () => {
//     it('should return token by login', () => __awaiter(void 0, void 0, void 0, function* () {
//         const loginData = {
//             email: 'fotofacundo6@gmail.com',
//             password: 'facundo97'
//         };
//         const response = yield (0, supertest_1.default)(index_1.default)
//             .post('/v1/register/login')
//             .send(loginData);
//         // Assertions using Chai
//         (0, chai_1.expect)(response.status).to.equal(200);
//         token = response.body.token;
//     }));
//     it('should return all posts by user', () => __awaiter(void 0, void 0, void 0, function* () {
//         const loginData = {
//             email: 'user@example.com',
//             password: 'wrongpassword'
//         };
//         const response = yield (0, supertest_1.default)(index_1.default)
//             .post('/v1/register/login')
//             .send(loginData);
//         // Assertions using Chai
//         (0, chai_1.expect)(response.status).to.equal(404);
//     }));
// });
