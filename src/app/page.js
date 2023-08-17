"use client";

import Input from "@/components/Input";
import Title from "@/components/Title";
import Todo from "@/components/Todo";
import { db } from "@/firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Task() {
  const [tasks, setTasks] = useState([]);

  const getTodayDate = () => {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate());
    yesterdayDate.setTime(
      yesterdayDate.getTime() -
        yesterdayDate.getHours() * 3600 * 1000 -
        yesterdayDate.getMinutes() * 60 * 1000
    );
    return yesterdayDate;
  };

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
          where("timestamp", ">", getTodayDate())
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

  console.log(tasks);

  return (
    <div className="">
      <div className="max-w-3xl mx-auto text-white py-5 px-3">
        <Title title="TaskBolt" />
        <Input />
        <div className="mt-10 flex flex-col gap-3">
          {tasks.length > 0 ? (
            tasks?.map((task, i) => (
              <Todo
                key={i}
                colorCode={task.data.colorCode}
                isCompleted={task.data.isCompleted}
                timestamp={task.data.timestamp}
                title={task.data.task}
                id={task.id}
              />
            ))
          ) : (
            <motion.div
              initial="hidden"
              animate="final"
              variants={{
                initial: {
                  opacity: 0,
                  y: "50px",
                },
                final: {
                  opacity: 1,
                  y: "0px",
                  transition: {
                    duration: 0.2,
                    delay: 0.5,
                  },
                },
              }}
              className="font-bold text-gray-200"
            >
              <h1 className="bg-gradient-to-r from-[--primary] to-[--secondary] bg-clip-text text-transparent text-[30px]">
                Sorry No Tasks
              </h1>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
