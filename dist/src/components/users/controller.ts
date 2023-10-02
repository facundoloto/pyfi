import { Request, Response } from 'express';
import { HttpStatusCode, HttpMessageCode, responseHttp } from './../../constant/httpCodes';
import UserDao from './services';


const userDao = new UserDao();

export class UserController {

  /*this funcion just works to set a new user and send a db */
  public async getById(req: Request, _res: Response) {
    const idUser = Number(req.params.id);
    const user = await userDao.findById(idUser);
    let response: responseHttp;
    if (!user) {
      response = { status: false, code: HttpStatusCode.NotImplemented, message: 'user not found' }
    }
    else {
      response = { status: true, result: user };
    }

    /*this should return the response with user or not, decoded just works for check if the token It's right or not*/
    return response;
  }

  public async getByEmail(req: Request, _res: Response) {
    const emailUser = req.params.email;
    const user = await userDao.findByEmail(emailUser);

    if (!user) {
      let responseBad: responseHttp = { status: false, code: HttpStatusCode.NotImplemented, message: 'user not found' }
      return responseBad;
    }
    else {
      let responseOk: responseHttp = { status: true, result: user };
      return responseOk;
    }

  }

  public async update(req: Request, _res: Response) {
    const fileImage: any = req.file;
    const user = {
      id: Number(req.params.id),
      name: req.body.name,
      image_user: fileImage.location
    };
    const result = await userDao.update(user);
    let responseOk: responseHttp = { status: true, result: result }
    return responseOk;
  }

  public async delete(req: Request, res: Response) {
    try {
      const idUser = Number(req.params.id);
      const user = await userDao.findById(idUser);

      if (!user) {
        res.status(HttpStatusCode.NotFound).json(HttpMessageCode.NotFound);
      }
      else {
        const response = await userDao.delete(idUser)
        res.status(HttpStatusCode.Ok).json(response);
      }

    } catch (err) {
      res.status(HttpStatusCode.InternalServerError).json(HttpMessageCode.InternalServerError);
    }
  }
}
