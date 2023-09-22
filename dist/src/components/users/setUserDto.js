"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verify_1 = require("../../utils/verify");
async function setUserDto(req, _res) {
    const fileImage = req.file;
    const location = fileImage ? fileImage : "https://visualpharm.com/assets/336/User-595b40b65ba036ed117d26d4.svg";
    const hashPassword = await (0, verify_1.encryptPassword)(req.body.password);
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        image_user: location
    };
    return user;
}
exports.default = setUserDto;
