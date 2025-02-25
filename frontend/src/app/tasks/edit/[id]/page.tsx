"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "next/navigation";
import Button from "@/components/widgets/button";
import TaskForm from "@/components/tasks/taskForm";
import { colorsData } from "@/utils/task.utils";
import { useFetch } from "@/hooks/useFetch";

export default function EditTask() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { error, sendRequest } = useFetch();

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  const id = params?.id || "";
  const taskTitle = searchParams?.get("title") || "";
  const color = searchParams?.get("color") || "";
  const [title, setTitle] = useState(taskTitle);
  const taskColor = colorsData.filter((c) => c.name === color);
  const [selectedColor, setSelectedColor] = useState(taskColor[0].name);

  const updteTask = async () => {
    try {
      if (title && selectedColor) {
        await sendRequest(
          `tasks/${id}`,
          "put",
          JSON.stringify({ title: title, color: selectedColor }),
          {
            "Content-Type": "application/json",
          }
        );
      } else {
        alert("Please fill out all fields!");
      }
      alert("Updated successfully");
      window.history.back();
    } catch (err) {
      console.error("Error adding tasks:", err);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="flex flex-col items-center p-6 ">
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
          onSubmit={updteTask}
        />
      </div>
    </main>
  );
}
