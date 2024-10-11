"use client";

import { Header } from "@/components/Header";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import { tasksData as tasks } from "../../../../data/data";
import { useRouter } from "next/navigation";
import { Task } from "@/components/Task";
import { useSelector } from "react-redux";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { menu } = useSelector((state) => state.button);

  const TaskContainer = ({ icon, title, type }) => {
    return (
      <div>
        <h3 className="font-plusSans text-[1.2rem]">
          <span className="mr-2">{icon}</span>
          {title}
        </h3>
        <div className={`py-3 md:pl-5 transition-all duration-200 ease-in-out`}>
          {React.Children.toArray(
            tasks
              .filter((task, i) => task.status === type)
              .map((task, i) => (
                <Task
                  id={task.id}
                  task={task.title}
                  status={task.status}
                  assign={task.assign}
                />
              ))
          )}
        </div>
      </div>
    );
  };
  return (
    <main
      className={`relative overflow-auto z-[1] w-full py-5 px-5 lg:pr-[5rem] transition-padding duration-200 ease-in-out ${
        menu ? "lg:ml-[300px]" : "ml-0"
      }`}
    >
      <Header />
      <div className={`lg:pl-[5rem] pt-[3rem]`}>
        {/* Top Header */}
        <div className="flex items-center space-x-2">
          <button onClick={() => router.back()}>
            <ChevronDoubleRightIcon className="h-8 text-icon cursor-pointer hover:text-black transition-colors duration-200 ease-in-out" />
          </button>
          <h3 className="font-plusSans text-[1.5rem] cursor-pointer">
            <span className="text-grayText hover:text-black transition-all duration-200 ease-in-out ">
              Home/
            </span>
            Today
          </h3>
        </div>
        {/* Tasks */}
        <div className="mt-[2rem] space-y-5">
          <TaskContainer icon="❌" title={"Not Started"} type="not-started" />
          <TaskContainer icon="✅" title={"Done"} type="done" />
        </div>
      </div>
    </main>
  );
}

export default page;
