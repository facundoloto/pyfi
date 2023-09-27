"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const httpCodes_1 = require("./../../constant/httpCodes");
require('dotenv').config();
const secretKey = process.env.SECRET_KEY_JWT;
class Auth {
    constructor() {
        this.generateToken = (user) => {
            const payload = { user };
            return jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: '31d' });
        };
        this.verifyToken = (token) => {
            try {
                const decoded = jsonwebtoken_1.default.verify(token, secretKey);
                return decoded;
            }
            catch (error) {
                return null;
            }
        };
        this.decodedToken = (req, res, next) => {
            const token = req.headers.authorization;
            /*this verify if there is a token in a request */
            if (!token) {
                console.log('token not avilable');
                res.status(httpCodes_1.HttpStatusCode.NotImplemented).json({ message: 'token not provided' });
            }
            else {
                const decoded = this.verifyToken(token);

                if (!decoded) {
                    console.log('decode fail');
                    res.status(httpCodes_1.HttpStatusCode.NotImplemented).json({ message: 'Invalid token' });
                }
                else {
                    console.log('token successful');
                    next();
                }
            }
            /*when it found token we verify if it's the right token or not*/
        };
    }
}
exports.default = Auth;
