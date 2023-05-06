"use client";

import Input from "@/components/Input";
import Title from "@/components/Title";
import Todo from "@/components/Todo";
import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(
            db,
            "tasks",
            JSON.parse(localStorage.getItem("user")).uid,
            "tasks"
          ),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setTasks(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        }
      ),
    []
  );


  return (
    <div className="">
      <div className="max-w-3xl mx-auto text-white py-5 px-3">
        <Title title="Tasks" />
        <Input />
        <div className="mt-10 flex flex-col gap-3">
          {tasks &&
            tasks?.map((task, i) => (
              <Todo
                key={i}
                colorCode={task.data.colorCode}
                isCompleted={task.data.isCompleted}
                timestamp={task.data.timestamp}
                title={task.data.task}
                id={task.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
