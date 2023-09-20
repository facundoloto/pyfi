"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
//db/models/users.ts
const configModel_1 = __importDefault(require("../../config/configModel"));
const sequelize_1 = require("sequelize");
// import { UserInterfaces } from '../../interfaces/interfaces';
// Aquí puedes configurar tu conexión a la base de datos.
const sequelize = configModel_1.default;
// Creamos nuestro modelo User
class User extends sequelize_1.Model {
}
exports.User = User;
// Configuramos el esquema de nuestro modelo User
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    image_user: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    //modelName: "Users",
    tableName: "users",
    freezeTableName: true,
});
exports.default = User;
