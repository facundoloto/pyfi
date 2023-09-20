"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadImageServices_1 = require("../../services/aws/uploadImageServices");
const controller_1 = require("./controller");
const router = express_1.default.Router();
const tryCatchResponse = require('./../../utils/tryCatchResponse');
const userController = new controller_1.UserController();
router.get('/id/:id', tryCatchResponse(userController.getById));
router.get('/email/:email', tryCatchResponse(userController.getByEmail));
router.put("/user/:id", uploadImageServices_1.uploadImage, tryCatchResponse(userController.update));
module.exports = router;
