"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TaskCard from "@/components/tasks/taskCard";
import TaskSummary from "@/components/tasks/taskSummary";
import Button from "@/components/widgets/button";
import AddIcon from "@/components/icons/addIcon";
import NoTasks from "@/components/tasks/noTasks";
import { Task } from "@/types/task";
import { useFetch } from "@/hooks/useFetch";

export default function Tasks() {
  const { error, sendRequest } = useFetch();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await sendRequest("tasks", "get");
        if (data) setTasks(data.tasks);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  const router = useRouter();
  const handleCreateTask = () => {
    router.push("/tasks/new");
  };

  const onTaskCompletion = async (toggledTask: Task) => {
    try {
      await sendRequest(
        `tasks/status/${toggledTask.id}`,
        "put",
        JSON.stringify({ isCompleted: !toggledTask.isCompleted }),
        {
          "Content-Type": "application/json",
        }
      );
      setTasks(
        tasks.map((task) =>
          task.id === toggledTask.id
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        )
      );
      alert("successfully updated task status");
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const onEdit = (task: Task) => {
    router.push(
      `/tasks/edit/${task.id}?title=${encodeURIComponent(
        task.title
      )}&color=${encodeURIComponent(task.color)}`
    );
  };

  const onDelete = async (id: number) => {
    try {
      await sendRequest(`tasks/${id}`, "delete");
      setTasks(tasks.filter((task) => task.id != id));
      alert("successfully deleted task");
    } catch (err) {
      console.error("Error deleting tasks:", err);
    }
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <main className="flex flex-col items-center p-6">
      <Button
        onClick={handleCreateTask}
        className="flex items-center w-full max-w-3xl justify-center bg-blue-500 text-white px-8 py-4 rounded shadow-lg hover:bg-blue-600 transition duration-300 text-base font-medium"
      >
        Create Task
        <span className="ml-5">
          <AddIcon />
        </span>
      </Button>

      {tasks.length > 0 && (
        <TaskSummary totalTasks={totalTasks} completedTasks={completedTasks} />
      )}

      <div className="space-y-4 w-full max-w-3xl mt-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onTaskCompletion={onTaskCompletion}
              onDelete={onDelete}
            />
          ))
        ) : (
          <NoTasks />
        )}
      </div>
    </main>
  );
}
