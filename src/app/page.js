"use client"

import { Home } from "@/components/Home";
import { Sidebar } from "@/components/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function page() {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    </div>
  );
}

export default page;
