import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import { taskRouter } from "./modules/tasks/task.routes";
import { HttpError } from "./types/error.types";

let app: Application = express();

dotenv.config();

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// initialize api routes here
app.use("/api/tasks", taskRouter);

// route not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError("Could not find this route", 404, {}, "low");
  return next(error);
});

// error handler route
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  // can add the error log code here.
  console.log(error);
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
