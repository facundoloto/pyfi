"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadImageServices_1 = require("../../services/aws/uploadImageServices");
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../auth/auth"));
const auth = new auth_1.default();
const tryCatchResponse = require('./../../utils/tryCatchResponse');
const router = express_1.default.Router();
const postController = new controller_1.Post();
router.post('/post/', auth.decodedToken, uploadImageServices_1.uploadImage, tryCatchResponse(postController.Save));
router.get('/post/', auth.decodedToken, tryCatchResponse(postController.getAll));
router.get('/post/user/:id', auth.decodedToken, tryCatchResponse(postController.getById));
router.delete('/post/:id', auth.decodedToken, tryCatchResponse(postController.Delete));
router.put('/post/:id', auth.decodedToken, tryCatchResponse(postController.Update));
module.exports = router;
