import { Request, Response } from 'express';
import { checkEmail, comparePassword } from '../../utils/verify';
import { HttpStatusCode, responseHttp } from './../../constant/httpCodes';
import { LoginInterfaces, UserInterfaces } from '../../interfaces/interfaces';
import { userDto, loginDto } from '../users/userDto';
import setUserDto from '../users/setUserDto';
import UserDao from '../users/services';
import Auth from '../auth/auth';

const userDao = new UserDao();
const auth = new Auth();

export class LoginController {
    async signUp(req: Request, res: Response) {
        const user = await setUserDto(req, res);
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
        const token = auth.generateToken(result.id);
        _res.json({ data: result, result: "access succeful", token: token }).status(HttpStatusCode.Ok);
    };

    /*only in this controller we won't use the utils try y catch 'cause we're going to give a cookie to client*/
    async Login(req: Request, _res: Response) {
        const login: LoginInterfaces = { email: req.body.email, password: req.body.password };
        const findEmail: boolean = await checkEmail(login.email);
        const user: loginDto | any = await userDao.findByEmail(login.email);

        if (findEmail) {
            const findPassword: boolean = await comparePassword(login.password, user.password)
            if (findPassword) {
                const userDto: userDto = await userDao.findById(user.id);
                /*id only is the sign in the token*/
                const token = auth.generateToken(userDto.id);
                /*I do this destructuring and spread because the Id is being sent by cookie*/
                const data = userDto;
                _res.json({ data: data, result: "access succeful", token: token }).status(HttpStatusCode.Ok);
            }
            else {
                _res.json({ result: "password wrong" }).status(HttpStatusCode.BadRequest);
            }
        } else {
            _res.json({ result: "email not found" }).status(HttpStatusCode.BadRequest);
        }

    };

    async LoginByGoogle(req: Request, _res: Response) {
        const user: userDto | any = await userDao.findByEmail(req.body.email);

        if (user) {
            /*id only is the sign in the token*/
            const token = auth.generateToken(user.id);
            /*I do this destructuring and spread because the Id is being sent by cookie*/
            _res.json({ data: user, result: "access succeful", token: token }).status(HttpStatusCode.Ok);
        }
        else {
            _res.json({ result: "email not found" }).status(HttpStatusCode.Unauthorized);

        }
        
    };
    
}
