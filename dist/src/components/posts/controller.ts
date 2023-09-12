import { Request, Response } from 'express';
import { HttpStatusCode, responseHttp } from './../../constant/httpCodes';
import { PostInterfaces } from '../../interfaces/interfaces';
import PostDao from './services';

const postDao = new PostDao();
async function setPost(req: Request, _res: Response) {

  const fileImage: any = req.file;
  const post: PostInterfaces = {
    id_user: parseInt(req.body.user),
    image_post: fileImage.location,
    description: req.body.description,
  };

  return post;
}

export class Post {

  public async Save(req: Request, res: Response) {
    console.log(req.body.user)
    const post = await setPost(req, res);

    const response = await postDao.save(post);
    const isEmpty = Object.keys(response);

    if (!isEmpty.length) {
      let responseBad: responseHttp = { status: false, code: HttpStatusCode.NotImplemented, message: 'it is not save post' }
      return responseBad;
    }
    else {
      let responseOk: responseHttp = { status: true, result: response };
      return responseOk;
    }
  };

  public async getById(req: Request, _res: Response) {
    const idUser = Number(req.params.id);
    const post = await postDao.findByIdUser(idUser);
    const responseOk: responseHttp = { status: true, result: post };
    return responseOk;
  };

  public async getAll(_req: Request, _res: Response) {
    const post = await postDao.findAll();
    const responseOk: responseHttp = { status: true, result: post };
    return responseOk;
  };

  public async Delete(req: Request, _res: Response) {
    const id: string = req.params.id;
    const postDelete = await postDao.delete(id);
    return postDelete;
  };

  public async Update(req: Request, _res: Response) {
    const post = await setPost(req, _res);
    const result = await postDao.update(post);
    const responseOk: responseHttp = { status: true, result: result };
    return responseOk;
  }
}
