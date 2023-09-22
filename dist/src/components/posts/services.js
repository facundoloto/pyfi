"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dao_1 = __importDefault(require("../../classes/Dao"));
const post_1 = require("../../db/models/post");
const user_1 = __importDefault(require("../../db/models/user"));
class PostDao extends Dao_1.default {
    async save(PostDto) {
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
    }
    async delete(idPost) {
        try {
            const deletePost = post_1.Post.destroy({ where: { id: `${idPost}` } });
            return deletePost;
        }
        catch (error) {
            console.log('Error fetching user data:', error);
        }
    }
    async update(PostDto) {
        try {
            const postUpdated = await post_1.Post.update({
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
    }
    ;
    async findById(id) {
        try {
            console.log('bug here');
            const post = await post_1.Post.findByPk(id);
            console.log(post);
            return post;
        }
        catch (error) {
            console.log('Error fetching user data:', error);
        }
    }
    ;
    async findByIdUser(id_user) {
        const id = String(id_user);
        const post = await post_1.Post.findAll({
            where: { id_user: `${id}` },
        });
        return post;
    }
    ;
    async findAll() {
        const post = await post_1.Post.findAll({
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
    }
}
exports.default = PostDao;
