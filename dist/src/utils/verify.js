"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.encryptPassword = exports.checkEmail = void 0;
const services_1 = __importDefault(require("../components/users/services"));
const userDao = new services_1.default();
const { hash, compare } = require('bcrypt');
const checkEmail = async (email) => {
    let emailUse = true;
    const response = await userDao.findByEmail(email);
    const isEmpty = Object.keys(response);
    if (!isEmpty.length) {
        emailUse = false;
        return emailUse;
    }
    return emailUse;
};
exports.checkEmail = checkEmail;
const encryptPassword = async (password) => {
    let rounds = 10;
    const encryptedPassword = await hash(password, rounds);
    return encryptedPassword;
};
exports.encryptPassword = encryptPassword;
const comparePassword = async (comparePassword, userPassword) => {
    let checkPassword = false;
    const match = await compare(comparePassword, userPassword);
    if (match) {
        checkPassword = true;
        return checkPassword;
    }
    return checkPassword;
};
exports.comparePassword = comparePassword;
// const verifyToken = ()=>{};
