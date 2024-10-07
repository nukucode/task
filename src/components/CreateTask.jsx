import {
  ChevronDownIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/20/solid";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { memberData, colors } from "../../data/data";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { toggleCreateTask } from "@/features/buttonSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

function CreateTask() {
  const [colorcode, setColorcode] = useState();
  const { createTask } = useSelector((state) => state.button);
  const dispatch = useDispatch();

  const Color = ({ color, active }) => (
    <span
      style={{ backgroundColor: color, border: `1px solid ${color}` }}
      className="w-[25px] h-[25px] rounded-full cursor-pointer transition-all duration-150 ease-in-out hover:scale-110"
    />
  );

  const Member = ({ img, name, email, occupation }) => {
    return (
      <li className="flex items-center hover:bg-active px-4 cursor-pointer transition-all duration-200 ease-in-out rounded-lg py-2">
        <Avatar src={img} />
        <div className="ml-5">
          <h3 className="font-bold font-plusSans text-[16px]">{name}</h3>
          <p className="font-plusSans text-grayText -mt-1 text-[14px]">
            {email}
          </p>
        </div>
        <div className="items-center ml-auto space-x-2 hidden sm:flex">
          <p>{occupation}</p>
          <ChevronDownIcon className="h-5" />
        </div>
      </li>
    );
  };

  return (
    <section
      className={`w-full h-full absolute top-0 left-0 bg-white z-[999] transition-all duration-200 ease-in-out ${
        createTask
          ? "visible opacity-100 translate-x-0"
          : "invisible opacity-0 translate-x-10"
      }`}
    >
      <button
        onClick={() => dispatch(toggleCreateTask(!createTask))}
        className={`fixed top-5 right-7 transition-all duration-500 delay-200 ease-in-out ${
          createTask
            ? "translate-x-0 rotate-0"
            : "translate-x-[10rem] rotate-90"
        }`}
      >
        <XMarkIcon className="h-10 text-icon transition-all duration-200 ease-in-out hover:text-black" />
      </button>
      <div className="max-w-6xl mx-auto p-[1rem] sm:p-[5rem] space-y-[2rem]">
        <header className="flex sm:items-center sm:flex-row  items-start space-x-3 flex-col">
          <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#82e0aa]/40 border border-black/20">
            <span className="text-[2rem]">🫙</span>
          </div>
          <div>
            <h1 className="font-plusSans font-medium text-[1.5rem]">
              Create new Task Bucket{" "}
            </h1>
            <p className="font-plusSans text-[15px] text-grayText">
              A container that contain all of your taasks.
            </p>
          </div>
        </header>
        <input
          type="text"
          autoFocus
          placeholder="Task Bucket"
          className="border-b border-black w-full outline-none text-[1.5rem] pl-2 transition-all duration-200 ease-in-out focus:border-[#28b463]"
        />

        <div className="border-b border-active pb-5">
          <h3 className="font-medium text-lg">Appearance</h3>
          <div className="flex item-center flex-wrap space-y-4 sm:space-y-0 space-x-2 mt-2">
            <div className="flex items-center space-x-2">
              {React.Children.toArray(
                colors.map((color, index) => <Color color={color} />)
              )}
            </div>
            <form
              onClick={(e) => {
                e.preventDefault();
              }}
              className="space-x-2"
            >
              <span>Custom color</span>
              <input
                type="text"
                defaultValue={"#52be80"}
                style={{
                  color: colorcode
                }}
                className={`outline-none p-2 border w-[100px] rounded-md font-medium font-plusSans`}
                value={colorcode}
                onChange={(e) => setColorcode(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="">
          <h3 className="font-medium text-lg">Members</h3>
          <div className="mt-4 space-y-4">
            <form className="flex items-center space-x-2 border border-icon px-2 py-3 rounded-lg">
              <MagnifyingGlassIcon className="h-5 text-icon" />
              <input
                type="text"
                placeholder="Add members by name of email"
                className="outline-none border-none w-full h-full"
              />
            </form>

            <ul className="space-y-1 border-b border-active pb-5">
              {memberData.map(({ name, email, img, id, occupation }, i) => (
                <Member
                  key={id}
                  name={name}
                  email={email}
                  img={img}
                  occupation={occupation}
                />
              ))}
            </ul>

            <footer className="flex item-center justify-between pt-3">
              <p className="font-plusSans hidden sm:block">Reset to default</p>
              <div className="ml-auto space-x-2">
                <button
                  onClick={() => dispatch(toggleCreateTask(!createTask))}
                  className="btn border hover:bg-black hover:text-white"
                >
                  Cancel
                </button>
                <button className="btn bg-[#6A27D9] hover:bg-[#4c248b] text-white">
                  Create Bucket
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CreateTask };
