import { Request, Response } from 'express';
import { HttpStatusCode } from './../../constant/httpCodes';
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
    try {
      const post = await setPost(req, res);
      const responseServices = await postDao.save(post);

      if (responseServices.status) {
        res.status(HttpStatusCode.Ok).json(responseServices.result);
      }
      else {
        res.status(HttpStatusCode.NotImplemented).json(responseServices.result);
      }

    } catch (error) {
      res.status(HttpStatusCode.InternalServerError).json(error);
    };
  };

  public async getById(req: Request, res: Response) {
    try {
      const idUser = Number(req.params.id);
      const responseServices: any | null = await postDao.findByIdUser(idUser);

      if (responseServices.status) {
        res.json(responseServices).status(HttpStatusCode.Ok);
      }
      else {
        res.status(HttpStatusCode.NotFound).json(responseServices.result);
      }

    } catch (error) {
      res.status(HttpStatusCode.InternalServerError).json(error);
    };
  };

  public async getAll(_req: Request, res: Response) {
    try {
      const responseServices: any | null = await postDao.findAll();

      if (responseServices.status) {
        res.json(responseServices).status(HttpStatusCode.Ok);
      }
      else {
        res.status(HttpStatusCode.NotFound).json(responseServices.result);
      }

    } catch (error) {
      res.status(HttpStatusCode.InternalServerError).json(error);
    };
  };

  public async Delete(req: Request, res: Response) {

    try {
      const id: string = req.params.id;
      const responseServices: any | null = await postDao.delete(id);
      if (responseServices.status) {
        res.json(responseServices).status(HttpStatusCode.Ok);
      }
      else {
        res.status(HttpStatusCode.NotFound).json(responseServices.result);
      }

    } catch (error) {
      res.status(HttpStatusCode.InternalServerError).json(error);
    };
  };

  public async Update(req: Request, res: Response) {
    try {
      const post = await setPost(req, res);
      const responseServices: any | null = await postDao.update(post);

      if (responseServices.status) {
        res.status(HttpStatusCode.Ok).json(responseServices.result);
      }
      else {
        res.status(HttpStatusCode.NotImplemented).json(responseServices.result);
      }

    } catch (error) {
      res.status(HttpStatusCode.InternalServerError).json(error);
    };
  }
}
