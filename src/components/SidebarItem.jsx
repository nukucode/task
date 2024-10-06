"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

function SidebarItem({
  title,
  emoji,
  taskNumber,
  active,
  workspace,
  color,
  Icon,
  add
}) {
  return (
    <>
      {!add ? (
        <div
          className={`flex items-center justify-between mt-[2px] hover:bg-active transition-all duration-200 ease-in-out cursor-pointer w-full p-2 rounded ${
            active && "bg-active"
          }`}
        >
          <div className="flex items-center space-x-[5px]">
            <button>
              <DragIndicatorIcon className="h-4 text-icon" />
            </button>
            {workspace ? (
              <div
                className={`w-[20px] h-[20px] rounded-md`}
                style={{ border: `1px ${color} solid` }}
              />
            ) : (
              <span>{emoji}</span>
            )}
            <p className="font-plusSans font-medium text-[14px]">{title}</p>
          </div>

          {Icon ? (
            <Icon className="h-5" />
          ) : (
            <div
              className={`${
                !active ? "bg-active" : "bg-white"
              } w-[20px] h-[20px] flex items-center justify-center rounded-md drop-shadow-sm`}
            >
              <span
                className={`font-plusSans ${
                  active && "bg-white"
                } bg-active text-[12px]`}
              >
                {taskNumber}
              </span>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`flex items-center justify-between hover:bg-active transition-all duration-150 ease-in-out cursor-pointer w-full p-2 rounded `}
        >
          <div className="flex items-center space-x-1">
            <button>
              <PlusIcon className="h-4" />
            </button>
            <p className="font-plusSans text-[14px] font-medium">{title}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-active w-[20px] h-[20px] flex items-center justify-center rounded-md drop-shadow-sm">
              <KeyboardCommandKeyIcon fontSize="5px" />
            </div>
            <div className="bg-active w-[20px] h-[20px] flex items-center justify-center rounded-md drop-shadow-sm">
              <span className="font-plusSans text-[12px] font-bold">L</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { SidebarItem };
