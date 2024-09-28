import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CheckIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Image from "next/image";

function Task({ task, isCompleted, date, assign }) {
  const [isDone, setIsDone] = useState(isCompleted);

  let randomColors = [
    "#E01F16",
    "#E09216",
    "#00958A",
    "#8391a1",
    "#4B68B8",
    "#B8994B",
  ];

  // choose a randomColor function
  const randomColor = () => {
    return randomColors[Math.floor(Math.random() * randomColors.length)];
  };

  return (
    <div
      className={`flex justify-between items-center py-[6px] hover:bg-active rounded-lg ${
        isCompleted && "bg-[#f9f9f9]"
      } my-[2px]`}
    >
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

      <div className="flex items-center space-x-3">
        <div className="flex  items-center">
          {assign &&
            React.Children.toArray(
              assign.map((data) => (
                <div
                  style={{ backgroundColor: `${randomColor()}40` }}
                  className={`w-[25px] h-[25px] -ml-[8px] hover:ml-[0] transition-all duration-50 ease-in-out cursor-pointer rounded-full flex items-center justify-center border-[0.1px] border-white`}
                >
                  <Image
                    src={data.avatar}
                    alt="avatar"
                    className="w-[20px] h-[20px] rounded-full"
                  />
                </div>
              ))
            )}
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <div className="bg-[#ff1493]/10 px-2 py-[2px] rounded-lg">
            <p className="font-plusSans text-[#ff1493] font-semibold text-[12px]">
              Today
            </p>
          </div>
          <MoreVertOutlinedIcon className="text-silverGray hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export { Task };
