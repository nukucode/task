import { PlusIcon } from "@heroicons/react/24/outline";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import Link from "next/link";

function SidebarItem({
  title,
  emoji,
  taskNumber,
  active,
  workspace,
  color,
  Icon,
  fn
}) {
  return (
    <>
      {!fn ? (
        <Link
          href="/task/some"
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
              <p>{emoji}</p>
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
              <p
                className={`font-plusSans ${
                  active && "bg-white"
                } bg-active text-[12px]`}
              >
                {taskNumber}
              </p>
            </div>
          )}
        </Link>
      ) : (
        <button
          onClick={fn}
          className={`flex items-center justify-between hover:bg-active transition-all duration-150 ease-in-out cursor-pointer w-full p-2 rounded `}
        >
          {/* -> Button Left */}
          <div className="flex items-center space-x-1">
            <PlusIcon className="h-4" />

            <p className="font-plusSans text-[14px] font-medium">{title}</p>
          </div>
          {/* -> Button Right  */}
          <div className="flex items-center space-x-2">
            <div className="bg-active w-[20px] h-[20px] flex items-center justify-center rounded-md drop-shadow-sm">
              <KeyboardCommandKeyIcon fontSize="5px" />
            </div>
            <div className="bg-active w-[20px] h-[20px] flex items-center justify-center rounded-md drop-shadow-sm">
              <span className="font-plusSans text-[12px] font-bold">L</span>
            </div>
          </div>
          </button>
      
      )}
    </>
  );
}

export { SidebarItem };
