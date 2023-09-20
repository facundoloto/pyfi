"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPClientError = void 0;
const httpCodes_1 = require("../constant/httpCodes");
class HTTPClientError {
    static Http404Error(_err, _req, res) {
        res.status(httpCodes_1.HttpStatusCode.BadRequest).send(httpCodes_1.HttpMessageCode.BadRequest);
    }
    static Http500Error(_err, _req, res) {
        res.status(httpCodes_1.HttpStatusCode.InternalServerError).send(httpCodes_1.HttpMessageCode.InternalServerError);
    }
}
exports.HTTPClientError = HTTPClientError;
;
