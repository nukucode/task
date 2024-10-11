"use client";

import React from "react";
import { Sidebar } from "./Sidebar";
import { TaskEditor } from "./TaskEditor";
import { CreateTask } from "./CreateTask";
import { Modal } from "./Modal";

function AppLayout({ children }) {
  const auth = true;
  return (
    <div className="flex bg-white">
      {!auth ? (
        <>
          <Sidebar />
          {children}
          <TaskEditor />
          <CreateTask />
          <Modal />
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

export { AppLayout };
