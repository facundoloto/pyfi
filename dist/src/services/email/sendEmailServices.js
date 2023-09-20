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
exports.sendEmailWelcome = exports.emailOption = void 0;
const emailConfigServices_1 = require("./emailConfigServices");
const path_1 = __importDefault(require("path"));
const nodemailer_express_handlebars_1 = __importDefault(require("nodemailer-express-handlebars"));
function emailOption({ from, to, subject, text, template }) {
    let options = {
        from: from,
        to: to,
        subject: subject,
        text: text,
        template: template,
        attachments: {
            filename: 'logo',
            path: path_1.default.join(__dirname, '../email/views/images/logo.jpeg'),
            cid: 'logo',
        }
    };
    return options;
}
exports.emailOption = emailOption;
function sendEmailWelcome(contentEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        emailConfigServices_1.transporter.use('compile', (0, nodemailer_express_handlebars_1.default)(emailConfigServices_1.hbsConfig));
        try {
            yield emailConfigServices_1.transporter.sendMail(contentEmail, function (error, _info) {
                if (error) {
                    return 404;
                }
                emailConfigServices_1.transporter.close();
                return 200;
            });
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.sendEmailWelcome = sendEmailWelcome;
