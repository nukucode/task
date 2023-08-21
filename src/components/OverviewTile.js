import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { returnIcons } from "@/utils/icons";
import {
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";

function OverviewTile({ colorCode, title, icon }) {
  const [isExpend, setIsExpend] = useState(true);
  const [comTasks, setComTasks] = useState([]);
  const [notComTasks, setNotComTasks] = useState([]);

  // => Update Task
  const updateTask = (data, id) => {
    const { colorCode, task, timestamp } = data;
    const docRef = doc(
      db,
      "users",
      JSON.parse(localStorage.getItem("user")).uid,
      "collections",
      title,
      "tasks",
      id
    );
    setDoc(docRef, {
      isCompleted: true,
      colorCode: colorCode,
      task: task,
      timestamp: timestamp,
    })
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(
            db,
            "users",
            JSON.parse(localStorage.getItem("user")).uid,
            "collections",
            title,
            "tasks"
          ),
          where("isCompleted", "==", false),
          orderBy("timestamp", "desc"),
          limit(3)
        ),
        (snapshot) => {
          setNotComTasks(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        }
      ),
    []
  );

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(
            db,
            "users",
            JSON.parse(localStorage.getItem("user")).uid,
            "collections",
            title,
            "tasks"
          ),
          where("isCompleted", "==", true),
          orderBy("timestamp", "desc"),
          limit(3)
        ),
        (snapshot) => {
          setComTasks(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        }
      ),
    []
  );



  return (
    <div
      className={`bg-[#21212b] rounded-2xl mt-5 ${
        comTasks.length || (notComTasks.length <= 0 && "hidden")
      }`}
    >
      {/* Tile Header */}
      <div className="bg-[#272732] p-3 rounded-tl-2xl rounded-tr-2xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`
            } w-8 h-8 rounded-xl flex items-center justify-center`}
            style={{ background: colorCode }}
          >
            {returnIcons(icon)}
          </div>
          <h1 className="text-[16px]">{title}</h1>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => setIsExpend(!isExpend)}
        >
          {" "}
          {isExpend ? (
            <ChevronDownIcon className="h-5 w-5 text-[#8c8c91]" />
          ) : (
            <ChevronUpIcon className="h-5 w-5 text-[#8c8c91]" />
          )}
        </button>
      </div>
      {/* Tile Mid */}
      {isExpend && (
        <div className="px-3 flex flex-col py-5 gap-4">
          {notComTasks.length > 0
            ? notComTasks?.map((task, i) => (
                <div key={i} className="flex gap-3">
                  <div
                    onClick={() => updateTask(task.data, task.id)}
                    className={`w-6 h-6 border-2 rounded-lg`}
                    style={{ borderColor: task.data.colorCode }}
                  />
                  <div className="flex flex-col -gap-1">
                    <p className="text-[17px] text-[#fbfbfb]">
                      {task.data.task}
                    </p>
                    <span className="text-[13px] text-[#c85656]">
                      Today 12:00
                    </span>
                  </div>
                </div>
              ))
            : comTasks?.map((task, i) => (
                <div key={i} className="flex gap-3">
                  <div
                    onClick={() => updateTask(task.data, task.id)}
                    className={`w-6 h-6 border-2 rounded-lg`}
                    style={{
                      borderColor: task.data.colorCode,
                      background: task.data.colorCode,
                    }}
                  >
                    <CheckIcon className="h-5 w-5 font-bold " />
                  </div>
                  <div className="flex flex-col -gap-1">
                    <p
                      className={`text-[17px] text-[#fbfbfb] ${
                        task.data.isCompleted && "line-through"
                      }`}
                    >
                      {task.data.task}
                    </p>
                    <span className="text-[13px] text-[#c85656]">
                      Today 12:00
                    </span>
                  </div>
                </div>
              ))}
        </div>
      )}
      {/* Tile Bottom */}
      <Link
        href={`/collection/${title}`}
        className="flex items-center justify-center gap-2 border-t-[0.50px] border-[#8c8c91] py-4 cursor-pointer"
      >
        <span>Go to Collection</span>
        <ArrowRightIcon className="h-6 w-6 text-[#8c8c91]" />
      </Link>
    </div>
  );
}

export default OverviewTile;
