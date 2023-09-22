"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const emailConfigServices_1 = require("./emailConfigServices");
const sendEmailServices_1 = require("./sendEmailServices");
class Email {
    static async welcome(email, name) {
        const emailUser = email;
        const nameUser = name;
        /*
        *content Email is a function for set the options and template to
        *send a user
        */
        const contentEmail = (0, sendEmailServices_1.emailOption)({
            from: emailConfigServices_1.emailCompany.email,
            to: emailUser,
            subject: 'Welcome ' + nameUser,
            text: 'hi there, welcome to our app!!',
            template: 'welcome',
        });
        await (0, sendEmailServices_1.sendEmailWelcome)(contentEmail);
    }
}
exports.Email = Email;
