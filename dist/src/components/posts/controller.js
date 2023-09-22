"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const httpCodes_1 = require("./../../constant/httpCodes");
const services_1 = __importDefault(require("./services"));
const postDao = new services_1.default();
async function setPost(req, _res) {
    const fileImage = req.file;
    const post = {
        id_user: parseInt(req.body.user),
        image_post: fileImage.location,
        description: req.body.description,
    };
    return post;
}
class Post {
    async Save(req, res) {
        const post = await setPost(req, res);
        const response = await postDao.save(post);
        const isEmpty = Object.keys(response);
        if (!isEmpty.length) {
            let responseBad = { status: false, code: httpCodes_1.HttpStatusCode.NotImplemented, message: 'it is not save post' };
            return responseBad;
        }
        else {
            let responseOk = { status: true, result: response };
            return responseOk;
        }
    }
    ;
    async getById(req, _res) {
        const idUser = Number(req.params.id);
        const post = await postDao.findByIdUser(idUser);
        const responseOk = { status: true, result: post };
        return responseOk;
    }
    ;
    async getAll(_req, _res) {
        const post = await postDao.findAll();
        const responseOk = { status: true, result: post };
        return responseOk;
    }
    ;
    async Delete(req, _res) {
        const id = req.params.id;
        const postDelete = await postDao.delete(id);
        const responseOk = { status: true, result: postDelete };
        return responseOk;
    }
    ;
    async Update(req, _res) {
        const post = await setPost(req, _res);
        const result = await postDao.update(post);
        const responseOk = { status: true, result: result };
        return responseOk;
    }
}
exports.Post = Post;
