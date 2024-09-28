"use client";

import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { Header } from "./Header";
import { InputContainer } from "./InputContainer";
import { TipContainer } from "./TipContainer";
import { TaskContainer } from "./TaskContainer";
import { data } from "../../data/data";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

function Home() {
  const [containers, setContainers] = useState(data);

  const reorder = (list, startIndex, endIndex) => {
    const results = Array.from(list);
    const [removed] = results.splice(startIndex, 1);
    results.splice(endIndex, 0, removed);

    return results;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      containers,
      result.source.index,
      result.destination.index
    );
    setContainers(items);
  };

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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {containers.map((item, i) => (
                <Draggable key={item.id} draggableId={item.id} index={i}>
                  {(provided) => (
                    <TaskContainer
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={item.id}
                      index={i}
                      title={item.title}
                      taskCount={item.taskCount}
                      icon={item.icon}
                      tasks={item.tasks}
                    />
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
}

export { Home };
