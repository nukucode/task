import { PlusIcon } from "@heroicons/react/24/outline";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddIcon from "@mui/icons-material/Add";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKeyOutlined";
import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InputContainer() {
  const [focus, setFocus] = useState(false);
  const [category, setCategory] = useState("personal");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="flex my-5 lg:pl-[2rem]">
      <div className=" hidden lg:flex">
        <AddIcon className="text-icon" />
        <DragIndicatorIcon className="text-icon" />
      </div>

      <div className="flex w-full bg-white border border-grayText/30 rounded-md p-3 h-[50px] space-x-2">
        <PlusIcon width={20} />
        <input
          type="text"
          placeholder="New Task"
          className="outline-none border-none bg-transparent w-full h-full"
          onFocus={() => setFocus(true)}
        />
        {!focus ? (
          <div className="flex items-center space-x-2">
            <div className="bg-silverGray w-[20px] h-[20px] flex items-center justify-center rounded-md">
              <KeyboardCommandKeyIcon fontSize="5px" />
            </div>
            <div className="bg-silverGray w-[20px] h-[20px] flex items-center justify-center rounded-md">
              <span className="font-plusSans text-[12px] font-bold">T</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="bg-silverGray h-[25px] flex items-center justify-center rounded-md">
              <DatePicker
                selectsRange
                showIcon
                selected={startDate}
                icon={<CalendarIcon />}
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setDateRange(date)}
                minDate={new Date()}
                placeholderText="Date"
                className="w-[70px] outline-none"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-silverGray h-[25px] px-[5px] flex items-center justify-center rounded-md outline-none space-x-2"
            >
              <option value="personal">👤 Personal</option>
              <option value="home">🏠 Home</option>
              <option value="complete">✅ Complete</option>
              <option value="today">🗓️ Today</option>
              <option value="work">💼 Work</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export { InputContainer };
