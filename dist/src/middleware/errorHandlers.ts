import { Request, Response, NextFunction, Router } from "express";

import * as ErrorHandler from "../utils/ErrorHandler";

export const handle404Error = (router: Router) => {
  router.use((_req: Request, _res: Response) => {
    ErrorHandler.notFoundError();
  });
};

export const handleClientError = (router: Router) => {
  router.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

export const handleServerError = (router: Router) => {
  router.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next);
  });
};


