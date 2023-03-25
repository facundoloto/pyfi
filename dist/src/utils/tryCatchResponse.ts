import { Request, Response, NextFunction } from "express";
import { HttpStatusCode,HttpMessageCode } from "../constant/httpCodes";

export const tryCatchResponse = (response:any) => async (_req:Request, res:Response,_next:NextFunction) => {
  try {
    if (!response) {
      res.status(HttpStatusCode.NotFound).json(HttpMessageCode.NotFound).send(response);
    }
    else {
      res.status(HttpStatusCode.Ok).send(response);
    }
  } catch (error) {
    res.status(HttpStatusCode.InternalServerError).json(HttpMessageCode.InternalServerError);
  };

  };