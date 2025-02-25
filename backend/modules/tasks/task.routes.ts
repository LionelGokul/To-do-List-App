import express from "express";
import { body, param } from "express-validator";

import * as TaskController from "./task.controller";
import { validateReq } from "../../middlewares/reqValidator.middleware";

export const taskRouter = express.Router();

taskRouter.get("/", TaskController.getTasks);

taskRouter.post(
  "/",
  [
    body("title")
      .isString()
      .withMessage("Title must be a string")
      .notEmpty()
      .withMessage("Title is required"),
    body("color")
      .isString()
      .withMessage("Color must be a string")
      .notEmpty()
      .withMessage("Color is required"),
  ],
  validateReq,
  TaskController.createTask
);

taskRouter.put(
  "/:id",
  [
    param("id").isInt().withMessage("ID must be an integer"),
    body("title").isString().withMessage("Title must be a string"),
    body("color").isString().withMessage("Color must be a string"),
  ],
  validateReq,
  TaskController.updateTask
);

taskRouter.put(
  "/status/:id",
  [
    body("isCompleted")
      .isBoolean()
      .withMessage("isCompleted must be a boolean"),
  ],
  validateReq,
  TaskController.updateIsCompleted
);

taskRouter.delete(
  "/:id",
  [param("id").isInt().withMessage("ID must be an integer")],
  validateReq,
  TaskController.deleteTask
);
