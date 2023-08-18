import { Request, Response } from 'express';
import UserDao from '../users/services';
import Auth from '../auth/auth';
import { UserController } from '../users/controller';
import { checkEmail, comparePassword } from '../../utils/verify';
import { HttpStatusCode, responseHttp } from './../../constant/httpCodes';
import { LoginInterfaces, UserInterfaces } from '../../interfaces/interfaces';

import { userDto, loginDto } from '../users/userDto';

const userDao = new UserDao();
const auth = new Auth();
const userController = new UserController();

export class LoginController {
    async signUp(req: Request, res: Response) {
        const user = await userController.setUserDto(req, res);
        const findEmail = await checkEmail(req.body.email);

        //if findUser is true that mean is you cannot register the user with the same email that other user
        if (findEmail) {
            let responseBad: responseHttp = { status: false, code: HttpStatusCode.Unauthorized, message: 'email is in use' }
            return responseBad;
        }
        else {
            const result = await userDao.save(user);
            let responseOk: responseHttp = { status: true, result: result };
            return responseOk;
        }
    };


    async signUpGoogle(req: Request, _res: Response) {

        const user: UserInterfaces = {
            name: req.body.name,
            email: req.body.email,
            password: "",
            image_user: req.body.image
        };

        const result = await userDao.save(user);
        const responseOk: responseHttp = { status: true, result: result };

        return responseOk;
    };

    /*only in this controller we won't use the utils try y catch 'cause we're going to give a cookie to client*/
    async Login(req: Request, _res: Response) {

        const login: LoginInterfaces = { email: req.body.email, password: req.body.password };

        const findEmail: boolean = await checkEmail(login.email);
        const user: loginDto | any = await userDao.findByEmail(login.email);
        const responseBad: responseHttp = { status: false, code: HttpStatusCode.NotFound, result: 'email or password wrong!' }

        if (findEmail) {
            const findPassword: boolean = await comparePassword(login.password, user.password)

            if (findPassword) {
                const userDto: userDto = await userDao.findById(user.id);
                const token = auth.generateToken(userDto);
                const responseOk: responseHttp = { status: true, result: token };

                /*httpOnly works for the sripts cannot access to the cookie*/
                return responseOk;
            }
            else {
                return responseBad;
            }
        }

        return responseBad;
    };

}
