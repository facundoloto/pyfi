import { Request, Response, NextFunction } from "express";
import { HttpStatusCode } from "../constant/httpCodes";
/*
@function tryCatchResponse
*its works is to verify a response for send a status without need to repeat code in controllers
*it's important invoke this function in router instead in controller
*@params controller
*this could be any controller in your code but it's necesary that controller only return the response of a services
*/

const tryCatchResponse = (controller: any) => async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const response = await controller(_req, res);

    if (response.status) {
      res.json(response).status(HttpStatusCode.Ok);
    }
    else {
      //you can set this when response is error 'cause each error status it's different in each controller
      res.status(response.code).json(response);
    }

  } catch (error) {
    console.log(error)
    res.status(HttpStatusCode.InternalServerError).json(error);
  };
};

module.exports = tryCatchResponse;