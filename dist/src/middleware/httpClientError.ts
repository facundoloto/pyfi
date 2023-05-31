import { Request, Response } from 'express';
import { HttpStatusCode, HttpMessageCode } from '../constant/httpCodes';

export class HTTPClientError {

  public static Http404Error (_err:Error, _req:Request, res:Response ){
    res.status(HttpStatusCode.BadRequest).send(HttpMessageCode.BadRequest);
  }

  public static Http500Error (_err:Error, _req:Request, res:Response ){
    res.status(HttpStatusCode.InternalServerError).send(HttpMessageCode.InternalServerError);
  }

  };