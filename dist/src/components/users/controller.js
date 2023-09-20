"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const httpCodes_1 = require("./../../constant/httpCodes");
// import setUserDto from './setUserDto';
const services_1 = __importDefault(require("./services"));
// import Auth from '../auth/auth';
const userDao = new services_1.default();
// const auth = new Auth();
class UserController {
    /*this funcion just works to set a new user and send a db */
    getById(req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const token = req.cookies.token;
            const idUser = Number(req.params.id);
            const user = yield userDao.findById(idUser);
            let response;
            if (!user) {
                response = { status: false, code: httpCodes_1.HttpStatusCode.NotImplemented, message: 'user not found' };
            }
            else {
                response = { status: true, result: user };
            }
            /*this should return the response with user or not, decoded just works for check if the token It's right or not*/
            // const responseToken: responseHttp = auth.decodedToken(response, token);
            return response;
        });
    }
    getByEmail(req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailUser = req.params.email;
            const user = yield userDao.findByEmail(emailUser);
            if (!user) {
                let responseBad = { status: false, code: httpCodes_1.HttpStatusCode.NotImplemented, message: 'user not found' };
                return responseBad;
            }
            else {
                let responseOk = { status: true, result: user };
                return responseOk;
            }
        });
    }
    update(req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileImage = req.file;
            const user = {
                id: Number(req.params.id),
                name: req.body.name,
                image_user: fileImage.location
            };
            const result = yield userDao.update(user);
            let responseOk = { status: true, result: result };
            console.log("bug 54 result");
            return responseOk;
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idUser = Number(req.params.id);
                const user = yield userDao.findById(idUser);
                if (!user) {
                    res.status(httpCodes_1.HttpStatusCode.NotFound).json(httpCodes_1.HttpMessageCode.NotFound);
                }
                else {
                    const response = yield userDao.delete(idUser);
                    res.status(httpCodes_1.HttpStatusCode.Ok).json(response);
                }
            }
            catch (err) {
                res.status(httpCodes_1.HttpStatusCode.InternalServerError).json(httpCodes_1.HttpMessageCode.InternalServerError);
            }
        });
    }
}
exports.UserController = UserController;
