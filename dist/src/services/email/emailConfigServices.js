"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hbsConfig = exports.transporter = exports.emailCompany = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const path_1 = __importDefault(require("path"));
require('dotenv').config();
exports.emailCompany = { email: process.env.EMAIL, password: process.env.EMAIL_PASS };
exports.transporter = nodemailer_1.default.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: { user: exports.emailCompany.email, pass: exports.emailCompany.password },
});
exports.hbsConfig = {
    viewEngine: {
        extName: '.hbs',
        partialsDir: path_1.default.join(__dirname, '../email/views/'),
        layoutsDir: path_1.default.join(__dirname, '../email/views/'),
        defaultLayout: ''
    },
    viewPath: path_1.default.join(__dirname, '../email/views/'),
    extName: '.hbs'
};
