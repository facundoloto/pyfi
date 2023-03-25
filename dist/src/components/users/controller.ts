import { Request, Response } from 'express';
import { HttpStatusCode, HttpMessageCode } from './../../constant/httpCodes';
import { UserInterfaces } from '../../interfaces/interfaces';
import { saveUser, findUserByPk, updateUser, deleteProfileUser } from './services';
import { tryCatchResponse } from './../../utils/tryCatchResponse';

export class UserController {

  public static async getById(req: Request, _res: Response): Promise<void> {
    const idUser = Number(req.params.id);
    const user = await findUserByPk(idUser);
    tryCatchResponse(user);
  }

  public static async create(req: Request, _res: Response): Promise<void> {
    let fileImage:any = req.file;

    const user: UserInterfaces = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: fileImage.location
    };

    const response = await saveUser(user);

    tryCatchResponse(response);
  }

  public static async update(req: Request, _res: Response): Promise<void> {
    const user: UserInterfaces = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image
    };

    const response = await updateUser(user);

    tryCatchResponse(response);
  }

  public static async delete(req: Request, res: Response): Promise<void> {
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
