import React, { useEffect, useState } from "react";
import Task from "./Task";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/config";

function Tasks({ collectionName, editTask }) {
  const [notCompletedTasks, setNotCompletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // -> Not Complete tasks
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(
            db,
            "users",
            JSON.parse(localStorage.getItem("user")).uid,
            "collections",
            collectionName,
            "tasks"
          ),
          where("isCompleted", "==", false),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setNotCompletedTasks(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        }
      ),
    []
  );

  // -> Complete tasks
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(
            db,
            "users",
            JSON.parse(localStorage.getItem("user")).uid,
            "collections",
            collectionName,
            "tasks"
          ),
          where("isCompleted", "==", true),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setCompletedTasks(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        }
      ),
    []
  );

  return (
    <div className="mt-5">
      <h1 className="text-[#efeff0] font-[600] py-3">
        Tasks - {notCompletedTasks?.length}
      </h1>
      <div className="flex flex-col gap-3">
        {notCompletedTasks &&
          notCompletedTasks?.map((task, i) => (
            <Task
              key={i}
              title={task.data.task}
              colorCode={task.data.colorCode}
              timestamp={task.data.timestamp}
              id={task.id}
              collectionName={collectionName}
              isCompleted={task.data.isCompleted}
              editTask={editTask}
            />
          ))}
      </div>
      <h1 className="text-[#efeff0] font-[600] py-3 mt-4">
        Completed - {completedTasks?.length}
      </h1>
      <div className="flex flex-col gap-3">
        {completedTasks &&
          completedTasks?.map((task, i) => (
            <Task
              key={i}
              title={task.data.task}
              colorCode={task.data.colorCode}
              timestamp={task.data.timestamp}
              id={task.id}
              collectionName={collectionName}
              isCompleted={task.data.isCompleted}
              editTask={editTask}
            />
          ))}
      </div>
    </div>
  );
}

export default Tasks;
