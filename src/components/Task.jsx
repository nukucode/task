import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Task({ task, isCompleted, date }) {
  const [isDone, setIsDone] = useState(isCompleted);
  return (
    <div className=" flex justify-between items-center py-2 hover:bg-active rounded-lg">
      <div className="flex items-center">
        <button>
          <DragIndicatorIcon className="h-4 text-icon" />
        </button>
        {!isDone ? (
          <button
            onClick={() => setIsDone(!isDone)}
            className={`w-[20px] h-[20px] cursor-pointer border rounded-md`}
          />
        ) : (
          <button
            onClick={() => setIsDone(!isDone)}
            className={`w-[20px] h-[20px] flex items-center justify-center cursor-pointer border bg-[#000] rounded-md`}
          >
            <CheckIcon className="h-6 text-white" />
          </button>
        )}
        <p
          className={`font-plusSans pl-2 text-[14px] ${
            isCompleted && "line-through text-[#000000]/30"
          }`}
        >
          {task}
        </p>
      </div>
      <div className="flex items-center space-x-1 cursor-pointer">
        <div className="bg-[#ffedec] px-2 py-[2px] rounded-lg">
          <p className="font-plusSans text-[#dfacaa] font-semibold text-[12px]">
            Today
          </p>
        </div>
        <MoreVertOutlinedIcon className="text-silverGray hover:text-white cursor-pointer" />
      </div>
    </div>
  );
}

export { Task };
