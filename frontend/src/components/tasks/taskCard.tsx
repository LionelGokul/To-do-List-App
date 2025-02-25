"use client";

import { FC } from "react";
import DeleteIcon from "../icons/deleteIcon";
import Button from "../widgets/button";
import CheckedIcon from "../icons/checkedIcon";
import { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
  onTaskCompletion: (task: Task) => void;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

const TaskCard: FC<TaskCardProps> = ({
  task,
  onTaskCompletion,
  onDelete,
  onEdit,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg bg-gray-800 shadow-md ${
        task.isCompleted ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center">
        <Button
          className={`w-5 h-5 rounded-full border-2 ${
            task.isCompleted
              ? "bg-purple-600 border-purple-600"
              : " border-blue-600"
          }`}
          onClick={() => {
            debugger;
            onTaskCompletion(task);
          }}
        >
          {task.isCompleted ? <CheckedIcon /> : ""}
        </Button>
        <p
          onClick={() => {
            onEdit(task);
          }}
          className={`ml-4 cursor-pointer ${
            task.isCompleted ? "line-through text-gray-500" : "text-white"
          }`}
        >
          {task.title}
        </p>
      </div>
      <Button
        onClick={() => {
          onDelete(task.id);
        }}
        className="flex items-center justify-center w-5 h-5 rounded-full"
      >
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default TaskCard;
