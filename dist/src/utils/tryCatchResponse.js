"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpCodes_1 = require("../constant/httpCodes");
/*
@function tryCatchResponse
*its works is to verify a response for send a status without need to repeat code in controllers
*it's important invoke this function in router instead in controller
*@params controller
*this could be any controller in your code but it's necesary that controller only return the response of a services
*/
const tryCatchResponse = (controller) => async (_req, res, _next) => {
    try {
        const response = await controller(_req, res);
        if (response.status) {
            res.json(response).status(httpCodes_1.HttpStatusCode.Ok);
        }
        else {
            //you can set this when response is error 'cause each error status it's different in each controller
            res.status(response.code).json(response);
        }
    }
    catch (error) {
        console.log(error);
        res.status(httpCodes_1.HttpStatusCode.InternalServerError).json(error);
    }
    ;
};
module.exports = tryCatchResponse;
