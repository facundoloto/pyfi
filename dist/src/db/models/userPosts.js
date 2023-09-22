"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPost = void 0;
// user-group.model.ts
const configModel_1 = __importDefault(require("../../config/configModel"));
const sequelize_1 = require("sequelize");
const sequelize = configModel_1.default;
class UserPost extends sequelize_1.Model {
}
exports.UserPost = UserPost;
UserPost.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    id_post: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize,
    modelName: 'UserPosts',
});
