import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddIcon from "@mui/icons-material/Add";
import { Task } from "./Task";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

function TaskContainer({ title, taskCount, icon, tasks }) {
  const [expend, setExpend] = useState(false);
  return (
    <div className=" flex my-6 lg:pl-[2rem]">
      <div className="hidden lg:flex">
        <AddIcon className="text-icon" />
        <DragIndicatorIcon className="text-icon" />
      </div>

      <div className="w-full">
        <div>
          <div className="flex items-center space-x-[6px]">
            {expend ? (
              <button
                onClick={() => setExpend(!expend)}
                className="cursor-pointer"
              >
                <ChevronUpIcon className="h-5" />
              </button>
            ) : (
              <button
                onClick={() => setExpend(!expend)}
                className="cursor-pointer"
              >
                <ChevronDownIcon className="h-5" />
              </button>
            )}
            <span>{icon}</span>
            <h3 className="font-plusSans">{title}</h3>
            <div className="bg-active w-[20px] h-[20px] flex items-center justify-center rounded-md drop-shadow-sm">
              <p className="font-plusSans text-[12px] font-bold">
                {taskCount}
              </p>
            </div>
          </div>
        </div>

        <div className={`py-3 pl-5 ${expend && "hidden"}`}>
          {React.Children.toArray(
            tasks.map((task, i) => <Task task={task.title} isCompleted={task.isCompleted} />)
          )}
        </div>
      </div>
    </div>
  );
}

export { TaskContainer };
