import React from "react";
import CookingIcon from "../icons/cookingIcon";

const NoTasks = () => {
  return (
    <>
      <hr className="w-full max-w-3xl border-gray-700 my-4" />
      <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-10">
        <div className="mb-4">
          <CookingIcon />
        </div>

        <p className="text-lg font-medium">
          You don&apos;t have any tasks registered yet.
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Create tasks and organize your to-do items.
        </p>
      </div>
    </>
  );
};

export default NoTasks;
