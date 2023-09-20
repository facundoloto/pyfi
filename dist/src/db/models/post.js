"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
//db/models/post.ts
const configModel_1 = __importDefault(require("../../config/configModel"));
const sequelize_1 = require("sequelize");
const user_1 = __importDefault(require("./user")); // Importa el modelo User
// Aquí puedes configurar tu conexión a la base de datos.
const sequelize = configModel_1.default;
// Definimos nuestra interfaz UserAttributes que define las propiedades del objeto User
// interface PostAttributes {
//   id?: number;
//   id_user:number;
//   image_post: string;
//   description: string;
//   fav?:number;
//   createdAt?: Date;
//   updatedAt?: Date;
// }
// Creamos nuestro modelo User
class Post extends sequelize_1.Model {
}
exports.Post = Post;
// Configuramos el esquema de nuestro modelo User
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    image_post: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "Posts",
    // pasamos la instancia de la conexión de sequelize configurada arriba
});
Post.belongsTo(user_1.default, {
    foreignKey: 'id_user',
    as: 'users',
});
user_1.default.hasMany(Post, {
    foreignKey: 'id_user',
    as: 'posts',
});
exports.default = Post;
