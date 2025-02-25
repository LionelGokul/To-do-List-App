import { Task } from "../../types/db.types";
import { db } from "../../prisma/db";

export const getAllTasks = async (): Promise<Task[]> => {
  return db.tasks.findMany();
};

export const createTask = async (
  title: string,
  color: string
): Promise<Task> => {
  return db.tasks.create({
    data: {
      title,
      color,
    },
  });
};

export const updateTask = async (
  id: number,
  title: string,
  color: string
): Promise<Task> => {
  return db.tasks.update({
    where: {
      id,
    },
    data: {
      title,
      color,
    },
  });
};

export const updateIsCompleted = async (
  id: number,
  isCompleted: boolean
): Promise<Task> => {
  return db.tasks.update({
    where: {
      id,
    },
    data: {
      isCompleted,
    },
  });
};

export const deleteTask = async (id: number): Promise<void> => {
  await db.tasks.delete({
    where: {
      id,
    },
  });
};
