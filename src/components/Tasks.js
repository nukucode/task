import React from "react";
import Task from "./Task";

function Tasks() {
  return (
    <div className="mt-5">
      <h1 className="text-[#efeff0] font-[600] py-3">Tasks - 8</h1>
      <div className="flex flex-col gap-3">
        <Task title="Finish the easy collaboration" isSub />
        <Task title="Read next chapter book of india" />
        <Task title="Go Gym and discover more gain" />
        <Task title="Coding With Crush " />
      </div>
      <h1 className="text-[#efeff0] font-[600] py-3 mt-4">Completed - 2</h1>
      <div className="flex flex-col gap-3">
        <Task title="Go Gym and discover more gain" isCompleted={true} />
        <Task title="Coding With Crush" isCompleted={true} />
      </div>
    </div>
  );
}

export default Tasks;
