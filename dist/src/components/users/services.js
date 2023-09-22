"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dao_1 = __importDefault(require("./../../classes/Dao"));
const user_1 = require("../../db/models/user");
class UserDao extends Dao_1.default {
    async save(userDto) {
        try {
            const saveProfile = user_1.User.create({
                name: userDto.name,
                email: userDto.email,
                password: userDto.password,
                image_user: userDto.image_user
            });
            return saveProfile;
        }
        catch (error) {
            console.log('Error fetching user data:', error);
        }
    }
    async delete(idUser) {
        try {
            const deleteUser = user_1.User.destroy({ where: { id: `${idUser}` } });
            return deleteUser;
        }
        catch (error) {
            console.log('Error fetching user data:', error);
        }
    }
    async update(userDto) {
        try {
            console.log(userDto);
            const userUpdated = await user_1.User.update({
                name: userDto.name,
                email: userDto.email,
                password: userDto.password,
                image_user: userDto.image_user
            }, {
                where: {
                    id: userDto.id,
                },
            });
            return userUpdated;
        }
        catch (error) {
            console.log('Error fetching user data:', error);
        }
    }
    ;
    async findById(id) {
        try {
            const response = await user_1.User.findByPk(id);
            const userDto = {
                id: response.dataValues.id,
                name: response.dataValues.name,
                email: response.dataValues.email,
                image_user: response.dataValues.image_user
            };
            return userDto;
        }
        catch (error) {
            console.log('Error fetching user data:', error);
        }
    }
    ;
    /*only works for log in */
    async findByEmail(email) {
        const response = await user_1.User.findAll({
            where: { email: `${email}` },
        });
        if (response.length == 0) {
            return response;
        }
        const userDto = {
            id: response[0].dataValues.id,
            name: response[0].dataValues.name,
            image_user: response[0].dataValues.image_user,
            email: response[0].dataValues.email,
            password: response[0].dataValues.password
        };
        return userDto;
    }
    ;
}
exports.default = UserDao;
