"use strict";
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
    async signUp(req, res) {
        const user = await (0, setUserDto_1.default)(req, res);
        const findEmail = await (0, verify_1.checkEmail)(req.body.email);
        //if findUser is true that mean is you cannot register the user with the same email that other user
        if (findEmail) {
            let responseBad = { status: false, code: httpCodes_1.HttpStatusCode.Unauthorized, message: 'email is in use' };
            return responseBad;
        }
        else {
            const result = await userDao.save(user);
            let responseOk = { status: true, result: result };
            return responseOk;
        }
    }
    ;
    async signUpGoogle(req, _res) {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: "",
            image_user: req.body.image
        };
        const result = await userDao.save(user);
        const token = auth.generateToken(result.id);
        const responseOk = { status: true, result: result };
        _res.cookie('token', token).
            cookie('id_user', result.id).
            status(httpCodes_1.HttpStatusCode.Ok).
            json(responseOk);
    }
    ;
    /*only in this controller we won't use the utils try y catch 'cause we're going to give a cookie to client*/
    async Login(req, _res) {
        const login = { email: req.body.email, password: req.body.password };
        const findEmail = await (0, verify_1.checkEmail)(login.email);
        const user = await userDao.findByEmail(login.email);
        if (findEmail) {
            const findPassword = await (0, verify_1.comparePassword)(login.password, user.password);
            if (findPassword) {
                const userDto = await userDao.findById(user.id);
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
    }
    ;
    async LoginByGoogle(req, _res) {
        const user = await userDao.findByEmail(req.body.email);
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
    }
    ;
}
exports.LoginController = LoginController;
