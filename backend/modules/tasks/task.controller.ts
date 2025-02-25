import { RequestHandler } from "express";
import { HttpError } from "../../types/error.types";
import * as TaskService from "./task.service";

export const getTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.status(200).json({
      tasks,
    });
  } catch (err: any) {
    const error = new HttpError(
      "Getting tasks failed, please try again later.",
      500,
      err,
      "high"
    );
    return next(error);
  }
};

export const createTask: RequestHandler = async (req, res, next) => {
  try {
    const { title, color } = req.body;

    const task = await TaskService.createTask(title, color);
    res.status(201).json({
      tasks: task,
    });
  } catch (err: any) {
    const error = new HttpError(
      "Creating task failed, please try again later.",
      500,
      err,
      "high"
    );
    return next(error);
  }
};

export const updateTask: RequestHandler = async (req, res, next) => {
  try {
    const { title, color } = req.body;
    const { id } = req.params;

    const task = await TaskService.updateTask(Number(id), title, color);

    res.status(200).json({
      task,
    });
  } catch (err: any) {
    // Prisma-specific error code for "Record to update not found."
    if (err.code === "P2025") {
      const error = new HttpError("Task not found.", 404, err, "low");
      return next(error);
    }

    const error = new HttpError(
      "updating task failed, please try again later.",
      500,
      err,
      "high"
    );
    return next(error);
  }
};

export const updateIsCompleted: RequestHandler = async (req, res, next) => {
  try {
    const { isCompleted } = req.body;
    const { id } = req.params;

    const task = await TaskService.updateIsCompleted(Number(id), isCompleted);

    res.status(200).json({
      task,
    });
  } catch (err: any) {
    // Prisma-specific error code for "Record to update not found."
    if (err.code === "P2025") {
      const error = new HttpError("Task not found.", 404, err, "low");
      return next(error);
    }

    const error = new HttpError(
      "updating task failed, please try again later.",
      500,
      err,
      "high"
    );
    return next(error);
  }
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    await TaskService.deleteTask(Number(id));

    res.status(200).json({
      message: "task deleted successfully.",
    });
  } catch (err: any) {
    if (err.code === "P2025") {
      const error = new HttpError("Task not found.", 404, err, "low");
      return next(error);
    }

    const error = new HttpError(
      "Deleting task failed, please try again later.",
      500,
      err,
      "high"
    );
    return next(error);
  }
};
