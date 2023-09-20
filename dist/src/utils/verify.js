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
exports.comparePassword = exports.encryptPassword = exports.checkEmail = void 0;
const services_1 = __importDefault(require("../components/users/services"));
const userDao = new services_1.default();
const { hash, compare } = require('bcrypt');
const checkEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let emailUse = true;
    const response = yield userDao.findByEmail(email);
    const isEmpty = Object.keys(response);
    if (!isEmpty.length) {
        emailUse = false;
        return emailUse;
    }
    return emailUse;
});
exports.checkEmail = checkEmail;
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    let rounds = 10;
    const encryptedPassword = yield hash(password, rounds);
    return encryptedPassword;
});
exports.encryptPassword = encryptPassword;
const comparePassword = (comparePassword, userPassword) => __awaiter(void 0, void 0, void 0, function* () {
    let checkPassword = false;
    const match = yield compare(comparePassword, userPassword);
    if (match) {
        checkPassword = true;
        return checkPassword;
    }
    return checkPassword;
});
exports.comparePassword = comparePassword;
// const verifyToken = ()=>{};
