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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const emailConfigServices_1 = require("./emailConfigServices");
const sendEmailServices_1 = require("./sendEmailServices");
class Email {
    static welcome(email, name) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield (0, sendEmailServices_1.sendEmailWelcome)(contentEmail);
        });
    }
}
exports.Email = Email;
