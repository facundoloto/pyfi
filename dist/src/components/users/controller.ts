import { Request, Response } from 'express';
import { HttpStatusCode, HttpMessageCode, responseHttp } from './../../constant/httpCodes';
import { UserInterfaces } from '../../interfaces/interfaces';
import { findUserByPk, updateUser, deleteProfileUser, findByEmail } from './services';
import { encryptPassword } from '../../utils/verify';
//import { Email } from '../../services/email/email';

export const setUser = async (req: Request, _res: Response) => {
  const fileImage: any = req.file;
  const location: string = fileImage ? fileImage : "https://visualpharm.com/assets/336/User-595b40b65ba036ed117d26d4.svg";
  const hashPassword: string = await encryptPassword(req.body.password);

  const user: UserInterfaces = {
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    image_user: location
  };

  return user;
}

export class UserController {

  public static async getById(req: Request, _res: Response) {
    const idUser = Number(req.params.id);
    const user = await findUserByPk(idUser);
    if (!user) {
      let responseBad: responseHttp = { status: false, code: HttpStatusCode.NotImplemented, message: 'user not found' }
      return responseBad;
    }
    else {
      let responseOk: responseHttp = { status: true, result: user };
      return responseOk;
    }
  }

  public static async getByEmail(req: Request, _res: Response) {
    const emailUser = req.params.email;
    const user = await findByEmail(emailUser);

    if (!user) {
      let responseBad: responseHttp = { status: false, code: HttpStatusCode.NotImplemented, message: 'user not found' }
      return responseBad;
    }
    else {
      let responseOk: responseHttp = { status: true, result: user };
      return responseOk;
    }

  }

  public static async update(req: Request, _res: Response) {
    const user = await setUser(req, _res);
    const result = await updateUser(user);
    let responseOk: responseHttp = { status: true, result: result }
    return responseOk;
  }

  public static async delete(req: Request, res: Response) {
    try {
      const idUser = Number(req.params.id);
      const user = await findUserByPk(idUser);

      if (!user) {
        res.status(HttpStatusCode.NotFound).json(HttpMessageCode.NotFound);
      }
      else {
        const response = await deleteProfileUser(idUser)
        res.status(HttpStatusCode.Ok).json(response);
      }
    } catch (err) {
      res.status(HttpStatusCode.InternalServerError).json(HttpMessageCode.InternalServerError);
    }
  }
}
