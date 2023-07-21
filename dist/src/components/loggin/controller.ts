import { Request, Response } from 'express';
import { saveUser, findByEmail } from './../users/services';
// import { Email } from '../../services/email/email';
import { checkEmail, comparePassword } from '../../utils/verify';
import { HttpStatusCode, responseHttp } from './../../constant/httpCodes';
import { LoginInterfaces, UserInterfaces } from '../../interfaces/interfaces';
import { setUser } from '../users/controller'

export const signUp = async (req: Request, res: Response) => {
    const user = await setUser(req, res);
    const findEmail = await checkEmail(req.body.email);

    //if findUser is true that mean is you cannot register the user with the same email that other user
    if (findEmail) {
        let responseBad: responseHttp = { status: false, code: HttpStatusCode.Unauthorized, message: 'email is in use' }
        return responseBad;
    }
    else {
        const result = await saveUser(user);
        let responseOk: responseHttp = { status: true, result: result };
        // Email.welcome(user.email, user.name);
        return responseOk;
    }
};


export const signUpGoogle = async (req: Request, _res: Response) => {
    const user: UserInterfaces = {
        name: req.body.name,
        email: req.body.email,
        password: "",
        image_user: req.body.image
    };
    const result = await saveUser(user);
    let responseOk: responseHttp = { status: true, result: result };
    // Email.welcome(user.email, user.name);

    return responseOk;
};


export const Login = async (req: Request, _res: Response) => {

    const login: LoginInterfaces = { email: req.body.email, password: req.body.password };
    const findEmail: boolean = await checkEmail(login.email);
    const user: any = await findByEmail(login.email);
    const passwordForm = login.password
    const passwordDB = user[0].dataValues.password;

    const responseBad: responseHttp = { status: false, code: HttpStatusCode.NotFound, result: user }
    const responseOk: responseHttp = { status: true, result: user }

    if (findEmail) {
        const findPassword: boolean = await comparePassword(passwordForm, passwordDB)

        if (findPassword) {
            return responseOk;
        }
        else {
            return responseBad;
        }
    }
    else {
        return responseBad;
    }
};
