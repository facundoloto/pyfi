"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpCodes_1 = require("../constant/httpCodes");
/*
@function tryCatchResponse
*its works is to verify a response for send a status without need to repeat code in controllers
*it's important invoke this function in router instead in controller
*@params controller
*this could be any controller in your code but it's necesary that controller only return the response of a services
*/
const tryCatchResponse = (controller) => (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield controller(_req, res);
        if (response.status) {
            res.status(httpCodes_1.HttpStatusCode.Ok).json(response);
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
});
module.exports = tryCatchResponse;
