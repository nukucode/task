"use client";
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowUturnDownIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { weekColors } from "@/utils/colors";

function Todo({
  title,
  isSub,
  isCompleted,
  colorCode,
  timestamp,
  collectionName,
  id,
  editTask,
}) {
  const [isExpend, setIsExpend] = useState(true);
  // => Convert Timestamp to Weekday
  function formatWeekDay(date) {
    const formatDate = new Date(
      date?.seconds * 1000 + date?.nanoseconds / 1000000
    );
    return formatDate.toLocaleDateString("en-us", {
      weekday: "long",
    });
  }

  // => Update Task
  const updateTask = (value) => {
    const docRef = doc(
      db,
      "users",
      JSON.parse(localStorage.getItem("user")).uid,
      "collections",
      collectionName,
      "tasks",
      id
    );
    setDoc(docRef, {
      isCompleted: value,
      task: title,
      timestamp: timestamp,
      colorCode: colorCode,
    })
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // delete tasks

  const deleteTask = () => {
    const docRef = doc(
      db,
      "users",
      JSON.parse(localStorage.getItem("user")).uid,
      "collections",
      collectionName,
      "tasks",
      id
    );

    deleteDoc(docRef)
      .then(() => console.log("Task deleted successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="bg-[#21212b] rounded-[15px]">
        <div className="flex gap-3 p-2">
          <div>
            {!isCompleted ? (
              <button
                onClick={() => updateTask(!isCompleted)}
                className="border-2 w-6 h-6 rounded-[10px] cursor-pointer"
                style={{ borderColor: colorCode }}
              ></button>
            ) : (
              <button
                onClick={() => updateTask(!isCompleted)}
                className="border-2 w-6 h-6 rounded-[10px] cursor-pointer"
                style={{ borderColor: colorCode, background: colorCode }}
              >
                <CheckIcon className="text-black w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex-1">
            <p
              className={`text-[15px] text-gray-200 ${
                isCompleted && "line-through text-gray-400"
              } sm:text-[17px]`}
            >
              {title}
            </p>
            {/* SubTasks and Timestamp */}
            {isExpend && (
              <div className="flex items-center gap-5 mt-1">
                {/* subTask */}
                {isSub && (
                  <div className="flex items-center gap-2">
                    <ArrowUturnDownIcon className="w-5 h-5 rotate-[270deg] text-[#828289]" />
                    <span className="text-[#828289]">0/1</span>
                  </div>
                )}
                {/* timestamp */}
                <div className="flex gap-2 items-center">
                  <CalendarIcon
                    className="h-5 w-5"
                    style={{
                      color: "#828287",
                    }}
                  />
                  <span
                    style={{
                      color:
                        weekColors[
                          Math.floor(Math.random() * weekColors.length)
                        ],
                    }}
                    className="text-[15px] font-[600]"
                  >
                    {formatWeekDay(timestamp)}
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* Right Side */}
          <div className="self-start pr-5 flex items-center gap-3">
            <button onClick={() => setIsExpend(!isExpend)}>
              {!isExpend ? (
                <ChevronDownIcon
                  className={`w-6 h-6 text-gray-300 hover:animate-pulse addMoreIcon duration-200 transition-all`}
                />
              ) : (
                <ChevronUpIcon
                  className={`w-6 h-6 text-gray-300 hover:animate-pulse addMoreIcon duration-200 transition-all`}
                />
              )}
            </button>
            {editTask && (
              <button onClick={deleteTask}>
                <TrashIcon className="w-6 h-6 text-gray-300" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* SubTasks */}
      {isSub && (
        <div className="bg-[#21212b] rounded-[15px] ml-4 mt-2">
          <div className="flex gap-3 p-2">
            <div>
              {true ? (
                <button className="border-2 border-[#58D68D] w-6 h-6 rounded-[10px] cursor-pointer"></button>
              ) : (
                <button className="border-2 border-[#58D68D] bg-[#58D68D] w-6 h-6 rounded-[10px] cursor-pointer">
                  <CheckIcon className="text-black w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex-1">
              <p
                className={`text-[15px] text-gray-200 ${
                  !true && "line-through text-gray-400"
                } sm:text-[17px]`}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
