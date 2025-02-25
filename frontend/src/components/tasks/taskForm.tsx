import React, { Dispatch, SetStateAction } from "react";
import Button from "@/components/widgets/button";
import AddIcon from "@/components/icons/addIcon";

interface Color {
  name: string;
  class: string;
}

interface TaskFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  colors: Color[];
  onSubmit: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  title,
  setTitle,
  selectedColor,
  setSelectedColor,
  colors,
  onSubmit,
}) => {
  return (
    <>
      <div className="mb-6">
        <label className="block text-gray-400 text-sm mb-2">Title</label>
        <input
          type="text"
          placeholder="Ex. Brush your teeth"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 text-sm mb-2">Color</label>
        <div className="flex space-x-4">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`w-10 h-10 rounded-full ${
                color.class
              } cursor-pointer ${selectedColor === color.name ? "ring-4" : ""}`}
              onClick={() => setSelectedColor(color.name)}
            ></div>
          ))}
        </div>
      </div>

      <Button
        onClick={onSubmit}
        className="flex items-center w-full max-w-3xl justify-center bg-blue-500 text-white px-8 py-4 rounded shadow-lg hover:bg-blue-600 transition duration-300 text-base font-medium"
      >
        Create Task
        <span className="ml-5">
          <AddIcon />
        </span>
      </Button>
    </>
  );
};

export default TaskForm;
