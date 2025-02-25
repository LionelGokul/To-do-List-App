import { FC } from "react";

interface TaskSummaryProps {
  totalTasks: number;
  completedTasks: number;
}

const TaskSummary: FC<TaskSummaryProps> = ({ totalTasks, completedTasks }) => {
  return (
    <div className="flex justify-between mt-5 mb-2 items-center w-full max-w-3xl">
      <div className="flex items-center space-x-2">
        <h2 className="text-base font-bold text-sky-600">Tasks</h2>
        <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
          {totalTasks}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <h2 className="text-base font-bold text-indigo-600">Completed</h2>
        <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
          {`${completedTasks} of ${totalTasks}`}
        </span>
      </div>
    </div>
  );
};

export default TaskSummary;
