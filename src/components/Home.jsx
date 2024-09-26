"use client";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { Header } from "./Header";
import { InputContainer } from "./InputContainer";
import { TipContainer } from "./TipContainer";
import { TaskContainer } from "./TaskContainer";
import { data } from "../../data/data";

function Home() {
  return (
    <main className=" relative overflow-auto z-[1] lg:ml-[300px] w-full py-5 px-5 lg:pr-[5rem]">
      <Header />
      <div className="w-full flex items-center justify-between lg:pl-[5rem]">
        <div>
          <h3 className="font-plusSans font-bold text-[20px]">
            Good Morning, Camerone 🤩
          </h3>
          <p className="font-plusSans text-[14px] text-grayText">
            It&apos;s Monday, 25 September 2024
          </p>
        </div>
        <button className="hidden lg:flex bg-silverGray w-[35px] h-[35px] rounded-md items-center justify-center">
          <Squares2X2Icon className="h-6" />
        </button>
      </div>
      <TipContainer />
      <InputContainer />
      {data.map((item, i) => (
        <TaskContainer
          key={i}
          title={item.title}
          taskCount={item.taskCount}
          icon={item.icon}
          tasks={item.tasks}
        />
      ))}
    </main>
  );
}

export { Home };
