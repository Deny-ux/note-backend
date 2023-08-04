import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";
const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res
    .status(StatusCodes.BAD_REQUEST)
    .json({ data: { msg: err.message } });
};

export default errorHandlerMiddleware;
