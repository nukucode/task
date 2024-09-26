import { PlusIcon } from "@heroicons/react/24/outline";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddIcon from "@mui/icons-material/Add";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKeyOutlined";

function InputContainer() {
  return (
    <div className="flex my-5 lg:pl-[2rem]">
      <div className=" hidden lg:flex">
        <AddIcon className="text-icon" />
        <DragIndicatorIcon className="text-icon" />
      </div>

      <div className="flex w-full bg-whiteSmoke border border-dashed border-grayText rounded-md p-3 space-x-2">
        <PlusIcon width={20} />
        <input
          type="text"
          placeholder="New Task"
          className="outline-none border-none bg-transparent w-full h-full"
        />
        <div className="flex items-center space-x-2">
          <div className="bg-white w-[20px] h-[20px] flex items-center justify-center rounded-md drop-shadow-sm">
            <KeyboardCommandKeyIcon fontSize="5px" />
          </div>
          <div className="bg-white w-[20px] h-[20px] flex items-center justify-center rounded-md drop-shadow-sm">
            <span className="font-plusSans text-[12px] font-bold">T</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { InputContainer };
