import { Task } from "../../types/db.types";
import * as TaskRepository from "./task.repository";

export const getAllTasks = async (): Promise<Task[]> => {
  return TaskRepository.getAllTasks();
};

export const createTask = async (
  title: string,
  color: string
): Promise<Task> => {
  return TaskRepository.createTask(title, color);
};

export const updateTask = async (
  id: number,
  title: string,
  color: string
): Promise<Task> => {
  return TaskRepository.updateTask(id, title, color);
};

export const updateIsCompleted = async (
  id: number,
  isCompleted: boolean
): Promise<Task> => {
  return TaskRepository.updateIsCompleted(id, isCompleted);
};

export const deleteTask = async (id: number): Promise<void> => {
  await TaskRepository.deleteTask(id);
};
