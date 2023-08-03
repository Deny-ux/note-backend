"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    return res
        .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
        .json({ data: { msg: err.message } });
};
exports.default = errorHandlerMiddleware;
