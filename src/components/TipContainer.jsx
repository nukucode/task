import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function TipContainer() {
  const [close, setClose] = useState(false);

  return (
    <div className={`flex my-5 lg:pl-[2rem] ${close && "hidden"}`}>
      <div className="hidden lg:flex">
        <AddIcon className="text-icon" />
        <DragIndicatorIcon className="text-icon" />
      </div>
      <div className="relative bg-whiteSmoke p-3 rounded-md flex ">
        <span className="text-[20px]">💡</span>
        <p className="font-plusSans pl-2 pr-8 text-[14px] text-grayText">
          Are you tired of juggling multiple tasks and deadlines? Our To-Do List
          app is here to simplify your life and boost your productivity. Whether
          it&apos;s work-related projects, household chores, or personal goals,
          we&apos;ve got you covered.
        </p>

        <button
          onClick={() => setClose(true)}
          className="absolute top-2 right-3"
        >
          <XMarkIcon className="h-[22px]" />
        </button>
      </div>
    </div>
  );
}

export { TipContainer };
