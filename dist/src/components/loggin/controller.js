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
exports.LoginController = void 0;
const verify_1 = require("../../utils/verify");
const httpCodes_1 = require("./../../constant/httpCodes");
const setUserDto_1 = __importDefault(require("../users/setUserDto"));
const services_1 = __importDefault(require("../users/services"));
const auth_1 = __importDefault(require("../auth/auth"));
const userDao = new services_1.default();
const auth = new auth_1.default();
const oneMonth = 30 * 24 * 60 * 60 * 1000; // One month in milliseconds
class LoginController {
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, setUserDto_1.default)(req, res);
            const findEmail = yield (0, verify_1.checkEmail)(req.body.email);
            //if findUser is true that mean is you cannot register the user with the same email that other user
            if (findEmail) {
                let responseBad = { status: false, code: httpCodes_1.HttpStatusCode.Unauthorized, message: 'email is in use' };
                return responseBad;
            }
            else {
                const result = yield userDao.save(user);
                let responseOk = { status: true, result: result };
                return responseOk;
            }
        });
    }
    ;
    signUpGoogle(req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: "",
                image_user: req.body.image
            };
            const result = yield userDao.save(user);
            const token = auth.generateToken(result.id);
            const responseOk = { status: true, result: result };
            _res.cookie('token', token).
                cookie('id_user', result.id).
                status(httpCodes_1.HttpStatusCode.Ok).
                json(responseOk);
        });
    }
    ;
    /*only in this controller we won't use the utils try y catch 'cause we're going to give a cookie to client*/
    Login(req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const login = { email: req.body.email, password: req.body.password };
            const findEmail = yield (0, verify_1.checkEmail)(login.email);
            const user = yield userDao.findByEmail(login.email);
            if (findEmail) {
                const findPassword = yield (0, verify_1.comparePassword)(login.password, user.password);
                if (findPassword) {
                    const userDto = yield userDao.findById(user.id);
                    /*id only is the sign in the token*/
                    const token = auth.generateToken(userDto.id);
                    /*I do this destructuring and spread because the Id is being sent by cookie*/
                    const data = userDto;
                    _res.cookie('token', token);
                    _res.status(httpCodes_1.HttpStatusCode.Ok).json({ data: data, result: "access succeful" });
                }
                else {
                    _res.status(httpCodes_1.HttpStatusCode.Unauthorized).json({ result: "password wrong" });
                }
            }
            else {
                _res.status(httpCodes_1.HttpStatusCode.Unauthorized).json({ result: "email not found" });
            }
        });
    }
    ;
    LoginByGoogle(req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userDao.findByEmail(req.body.email);
            if (user) {
                /*id only is the sign in the token*/
                const token = auth.generateToken(user.id);
                /*I do this destructuring and spread because the Id is being sent by cookie*/
                _res.cookie('token', token, {
                    maxAge: oneMonth,
                    httpOnly: false,
                    secure: false,
                    sameSite: "lax",
                });
                _res.status(httpCodes_1.HttpStatusCode.Ok).json({ data: user, result: "access succeful" });
            }
            else {
                _res.status(httpCodes_1.HttpStatusCode.Unauthorized).json({ result: "email not found" });
            }
        });
    }
    ;
}
exports.LoginController = LoginController;
