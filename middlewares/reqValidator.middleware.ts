import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { HttpError } from "../types/error.types";

export const validateReq: RequestHandler = (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data.",
      422,
      { message: JSON.stringify(errors) },
      "small"
    );
    return next(error);
  }
  next();
};
