"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadImageServices_1 = require("../../services/aws/uploadImageServices");
const controller_1 = require("./controller");
const register = new controller_1.LoginController();
const tryCatchResponse = require('./../../utils/tryCatchResponse');
const router = express_1.default.Router();
router.post('/signup/', uploadImageServices_1.uploadImage, tryCatchResponse(register.signUp));
router.post('/login/', register.Login);
router.post('/signup/google/', register.signUpGoogle);
router.post('/login/google/', register.LoginByGoogle);
module.exports = router;
