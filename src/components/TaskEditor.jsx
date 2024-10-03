import {
  ChevronDoubleRightIcon,
  XMarkIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
import { selectButton, toggleTaskEditor } from "@/features/buttonSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import DatePicker from "react-datepicker";

const random =
  "This endeavor involves crafting an innovative user interface that not only meets functional requirements but also enhances the overall user experience.";

const dateFormat = "dd/MM/yyyy";

function TaskEditor() {
  const [note, setNote] = useState(random);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const { taskEditor } = useSelector(selectButton);

  return (
    <div className="fixed top-0 right-0 h-screen flex flex-col bg-white  w-full lg:w-[350px] z-[999] border border-l border-active p-5">
      <div className="space-y-5 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChevronDoubleRightIcon className="h-4" />
            <h3>
              <span className="text-grayText">Home/</span>Today
            </h3>
          </div>
          <XMarkIcon
            onClick={() => dispatch(toggleTaskEditor(!taskEditor))}
            className="h-5 cursor-pointer"
          />
        </div>

        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 rounded-md border border-icon" />
          <h3 className="font-plusSans font-medium text-[14px]">
            Send follow-up emails to potentail leads
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <p className="text-icon text-[14px] font-plusSans w-[80px]">List</p>
            <select className="bg-silverGray h-[25px] px-[5px] flex items-center justify-center rounded-md outline-none space-x-2">
              <option value="personal">👤 Personal</option>
              <option value="home">🏠 Home</option>
              <option value="complete">✅ Complete</option>
              <option value="today">🗓️ Today</option>
              <option value="work">💼 Work</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-icon text-[14px] font-plusSans w-[80px]">
              Start date
            </p>
            <div>
              <DatePicker
                selected={startDate}
                startDate={startDate}
                onChange={(date) => setStartDate(date)}
                className="font-plusSans text-[12px]"
                dateFormat={dateFormat}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-icon text-[14px] font-plusSans w-[80px]">
              Due date
            </p>
            <div>
              <DatePicker
                selected={endDate}
                startDate={endDate}
                onChange={(date) => setEndDate(date)}
                className="font-plusSans text-[12px]"
                dateFormat={dateFormat}
              />
            </div>
          </div>
        </div>

        <textarea
          className="border border-icon bg-silverGray outline-none rounded-xl w-full h-[180px] py-2 px-3 text-[12px] font-plusSans"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div>
        <button className="bg-[#fff3f2] w-full h-[40px] rounded-md font-plusSans text-[14px] transition-all ease-in-out duration-200 hover:bg-[#fad5d5] text-[#af6d6e]">
          Delete
        </button>
      </div>
    </div>
  );
}

export { TaskEditor };
