"use client";

import { useState, useEffect } from "react";
import Button from "@/components/widgets/button";
import TaskForm from "@/components/tasks/taskForm";
import { colorsData } from "@/utils/task.utils";
import { useFetch } from "@/hooks/useFetch";

export default function NewTask() {
  const { error, sendRequest } = useFetch();
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  const handleAddTask = async () => {
    try {
      if (title && selectedColor) {
        await sendRequest(
          "tasks",
          "post",
          JSON.stringify({ title: title, color: selectedColor }),
          {
            "Content-Type": "application/json",
          }
        );
        alert("task created successfully!!");
        window.history.back();
      } else {
        alert("Please fill out all fields!");
      }
    } catch (err) {
      console.error("Error adding tasks:", err);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="flex flex-col items-center p-6">
      <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg">
        <Button
          onClick={handleBack}
          className="flex items-center text-white text-lg hover:text-blue-500 transition mb-4"
        >
          ←
        </Button>
        <TaskForm
          title={title}
          setTitle={setTitle}
          colors={colorsData}
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
          onSubmit={handleAddTask}
        />
      </div>
    </main>
  );
}
