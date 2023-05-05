"use client";

import { AtSymbolIcon, CalendarIcon, TrashIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

function Todo({ title, colorCode, isCompleted, timestamp, id }) {
  const [user, setUser] = useState(null);


  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);


  // => Convert Timestamp to Weekday
  function formatDate(date) {
    const formatDate = new Date(
      date?.seconds * 1000 + date?.nanoseconds / 1000000
    );
    return formatDate.toLocaleDateString("en-us", {
      weekday: "long",
    });
  }

  // => Update Task
  const updateTask = (value) => {
     const docRef = doc(db, "tasks", user.uid, "tasks", id);
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

  // => Delete Task from Firebase Fire-store
  const deleteTask = () => {
     const docRef = doc(db, "tasks", user.uid, "tasks", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="flex gap-3 bg-[#20212c] p-2 rounded-[15px]">
      <div>
        {!isCompleted ? (
          <button
            onClick={() => updateTask(!isCompleted)}
            className="border-2 border-[#58D68D] w-6 h-6 rounded-[10px] cursor-pointer"
          ></button>
        ) : (
          <button
            onClick={() => updateTask(!isCompleted)}
            className="border-2 border-[#58D68D] bg-[#58D68D] w-6 h-6 rounded-[10px] cursor-pointer"
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
        {/* Category and timestamp */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center mt-1">
            <CalendarIcon className="h-5 w-5" style={{ color: colorCode }} />
            <span style={{ color: colorCode }} className="text-[15px] font-bold">
              {formatDate(timestamp)}
            </span>
          </div>

          {/* <div className="flex items-center mt-1">
            <AtSymbolIcon className="h-5 w-5 text-gray-400" />
            <span className="text-[15px] text-gray-400 font-bold">Home</span>
          </div> */}
        </div>
      </div>
      {/* Delete Button */}
      <div className="self-center pr-5">
        <button onClick={deleteTask}>
          <TrashIcon
            className={`w-6 h-6 hover:text-gray-100 hover:animate-pulse trashIcon duration-200 transition-all`}
            style={{
              "--color": colorCode
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Todo;
