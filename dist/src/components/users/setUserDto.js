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
const verify_1 = require("../../utils/verify");
function setUserDto(req, _res) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileImage = req.file;
        const location = fileImage ? fileImage : "https://visualpharm.com/assets/336/User-595b40b65ba036ed117d26d4.svg";
        const hashPassword = yield (0, verify_1.encryptPassword)(req.body.password);
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            image_user: location
        };
        return user;
    });
}
exports.default = setUserDto;
