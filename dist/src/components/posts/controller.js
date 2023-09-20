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
exports.Post = void 0;
const httpCodes_1 = require("./../../constant/httpCodes");
const services_1 = __importDefault(require("./services"));
const postDao = new services_1.default();
function setPost(req, _res) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileImage = req.file;
        const post = {
            id_user: parseInt(req.body.user),
            image_post: fileImage.location,
            description: req.body.description,
        };
        return post;
    });
}
class Post {
    Save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield setPost(req, res);
            const response = yield postDao.save(post);
            const isEmpty = Object.keys(response);
            if (!isEmpty.length) {
                let responseBad = { status: false, code: httpCodes_1.HttpStatusCode.NotImplemented, message: 'it is not save post' };
                return responseBad;
            }
            else {
                let responseOk = { status: true, result: response };
                return responseOk;
            }
        });
    }
    ;
    getById(req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = Number(req.params.id);
            const post = yield postDao.findByIdUser(idUser);
            const responseOk = { status: true, result: post };
            return responseOk;
        });
    }
    ;
    getAll(_req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield postDao.findAll();
            const responseOk = { status: true, result: post };
            return responseOk;
        });
    }
    ;
    Delete(req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const postDelete = yield postDao.delete(id);
            const responseOk = { status: true, result: postDelete };
            return responseOk;
        });
    }
    ;
    Update(req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield setPost(req, _res);
            const result = yield postDao.update(post);
            const responseOk = { status: true, result: result };
            return responseOk;
        });
    }
}
exports.Post = Post;
