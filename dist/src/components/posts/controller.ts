import { Request, Response } from 'express';
import { savePost, findByIdUser, findAll, deletePost, updatePost } from './services';
import { HttpStatusCode, responseHttp } from './../../constant/httpCodes';
import { PostInterfaces } from '../../interfaces/interfaces';

export const setPost = async (req: Request, _res: Response) => {
  const fileImage: any = req.file;
  const post: PostInterfaces = {
    id_user: parseInt(req.body.user),
    image_post: fileImage.location,
    description: req.body.description,
  };

  return post;
}

export const Save = async (req: Request, res: Response) => {
  const post = await setPost(req, res);
  const response = await savePost(post);
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

export const getById = async (req: Request, _res: Response) => {
  const idUser = Number(req.params.id);
  const post = await findByIdUser(idUser);

  return post;
};

export const getAll = async (_req: Request, _res: Response) => {
  const post = await findAll();
  const responseOk: responseHttp = { status: true, result: post };

  return responseOk;
};

export const Delete = async (req: Request, _res: Response) => {
  const id: string = req.params.id;
  const postDelete = await deletePost(id);

  return postDelete;
};

export const Update = async (req: Request, _res: Response) => {
  const post = await setPost(req, _res);
  const result = await updatePost(post);
  const responseOk: responseHttp = { status: true, result: result };

  return responseOk;
}