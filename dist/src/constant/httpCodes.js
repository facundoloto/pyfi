"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMessageCode = exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
var HttpMessageCode;
(function (HttpMessageCode) {
    HttpMessageCode["Ok"] = "success";
    HttpMessageCode["BadRequest"] = "bad request";
    HttpMessageCode["Unauthorized"] = "unauthorized";
    HttpMessageCode["Forbidden"] = "forbidden";
    HttpMessageCode["NotFound"] = "not found";
    HttpMessageCode["InternalServerError"] = "internal error";
    HttpMessageCode["NotImplemented"] = "not implemented";
    HttpMessageCode["ServiceUnavailable"] = "unavailable";
})(HttpMessageCode = exports.HttpMessageCode || (exports.HttpMessageCode = {}));
