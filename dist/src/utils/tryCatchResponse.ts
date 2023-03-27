import { Request, Response, NextFunction } from "express";
import { HttpStatusCode,HttpMessageCode } from "../constant/httpCodes";

/*
@function tryCatchResponse
*its works is to verify a response for send a status and doesn't repeat code in controller
*it's important invoke this function in router and doesn't in controller
*@params controller
*this could be any controller in your code but it's necesary that controller only return the response of a services
*/

const tryCatchResponse = (controller:any) => async (_req: Request, res: Response, _next: NextFunction) => {
    try {
     const response =  await controller(_req, res); 
    if (!response) {
      res.status(HttpStatusCode.NotFound).json(HttpMessageCode.NotFound).send(response);
    }
    else {
      res.status(HttpStatusCode.Ok).send(response);
    }

  } catch (error) {
    res.status(HttpStatusCode.InternalServerError).json(HttpMessageCode.InternalServerError).send(error);
  };
 
};

module.exports = tryCatchResponse;