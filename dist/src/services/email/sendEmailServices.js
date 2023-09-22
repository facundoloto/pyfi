"use strict";
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
async function sendEmailWelcome(contentEmail) {
    emailConfigServices_1.transporter.use('compile', (0, nodemailer_express_handlebars_1.default)(emailConfigServices_1.hbsConfig));
    try {
        await emailConfigServices_1.transporter.sendMail(contentEmail, function (error, _info) {
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
}
exports.sendEmailWelcome = sendEmailWelcome;
