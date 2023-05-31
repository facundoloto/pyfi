import { Request, Response } from 'express';
import { HttpStatusCode, HttpMessageCode, responseHttp } from './../../constant/httpCodes';
import { UserInterfaces } from '../../interfaces/interfaces';
import { findUserByPk, updateUser, deleteProfileUser } from './services';
import { encryptPassword } from '../../utils/verify';
//import { Email } from '../../services/email/email';

export const setUser = async (req:Request, _res:Response) => {
  const fileImage:any = req.file;
  const hashPassword:string = await encryptPassword(req.body.password);
  const user: UserInterfaces = {
    name: req.body.name, 
    email: req.body.email,
    password:hashPassword , 
    image_user: fileImage.location
    };

  return user;
}

export class UserController {
  
  public static async getById(req: Request, _res: Response) {
    const idUser = Number(req.params.id);
    const user = await findUserByPk(idUser);
    return user;
  }

  public static async update(req: Request, _res: Response) {
    const user = await setUser(req, _res);
    const result = await updateUser(user);
    let responseOk:responseHttp = {status:true, result:result}
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
