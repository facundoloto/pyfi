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
const Dao_1 = __importDefault(require("./../../classes/Dao"));
const user_1 = require("../../db/models/user");
class UserDao extends Dao_1.default {
    save(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    delete(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteUser = user_1.User.destroy({ where: { id: `${idUser}` } });
                return deleteUser;
            }
            catch (error) {
                console.log('Error fetching user data:', error);
            }
        });
    }
    update(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(userDto);
                const userUpdated = yield user_1.User.update({
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
        });
    }
    ;
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield user_1.User.findByPk(id);
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
        });
    }
    ;
    /*only works for log in */
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield user_1.User.findAll({
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
        });
    }
    ;
}
exports.default = UserDao;
