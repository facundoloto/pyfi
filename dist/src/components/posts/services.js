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
const Dao_1 = __importDefault(require("../../classes/Dao"));
const post_1 = require("../../db/models/post");
const user_1 = __importDefault(require("../../db/models/user"));
class PostDao extends Dao_1.default {
    save(PostDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const savePost = post_1.Post.create({
                    id_user: PostDto.id_user,
                    image_post: PostDto.image_post,
                    description: PostDto.description
                });
                return savePost;
            }
            catch (error) {
                console.log('Error fetching user data:', error);
            }
        });
    }
    delete(idPost) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletePost = post_1.Post.destroy({ where: { id: `${idPost}` } });
                return deletePost;
            }
            catch (error) {
                console.log('Error fetching user data:', error);
            }
        });
    }
    update(PostDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postUpdated = yield post_1.Post.update({
                    image_post: PostDto.image_post,
                    description: PostDto.description,
                }, {
                    where: {
                        id: PostDto.id,
                    },
                });
                return postUpdated;
            }
            catch (error) {
                console.log('Error fetching user data:', error);
            }
        });
    }
    ;
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('bug here');
                const post = yield post_1.Post.findByPk(id);
                console.log(post);
                return post;
            }
            catch (error) {
                console.log('Error fetching user data:', error);
            }
        });
    }
    ;
    findByIdUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = String(id_user);
            const post = yield post_1.Post.findAll({
                where: { id_user: `${id}` },
            });
            return post;
        });
    }
    ;
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_1.Post.findAll({
                attributes: ['id', 'image_post', 'description', 'createdAt'],
                include: [{
                        model: user_1.default, as: "users",
                        attributes: ['id', 'name', 'image_user']
                    }],
                order: [
                    ['id', 'DESC'],
                ]
            });
            return post;
        });
    }
}
exports.default = PostDao;
