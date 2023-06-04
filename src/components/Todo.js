"use client";
import {
  ArrowUturnRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  PaperAirplaneIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/firebase/config";

function Todo({ title, colorCode, isCompleted, timestamp, id, isShowDate }) {
  const [user, setUser] = useState(null);
  const [isAdd, setIsAdd] = useState(true);
  const [subTask, setSubTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(
            db,
            "tasks",
            JSON.parse(localStorage.getItem("user")).uid,
            "tasks",
            id,
            "subTasks"
          ),
          orderBy("timestamp", "asc")
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

  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);

  // => Convert Timestamp to Weekday
  function formatWeekDay(date) {
    const formatDate = new Date(
      date?.seconds * 1000 + date?.nanoseconds / 1000000
    );
    return formatDate.toLocaleDateString("en-us", {
      weekday: "long",
    });
  }

  // => Convert Timestamp to Date
  function formatDate(date) {
    const formatDate = new Date(
      date?.seconds * 1000 + date?.nanoseconds / 1000000
    );
    return formatDate.toLocaleDateString("en-in", {
      day: "numeric",
      month: "short",
      year: "numeric",
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
  };

  // => Add Sub Task In Firebase Fire-Store
  const addSubTask = (e) => {
    e.preventDefault();
    if (subTask != "" && subTask.length >= 3) {
      const docRef = doc(db, "tasks", user.uid);
      const colRef = collection(docRef, "tasks", id, "subTasks");
      addDoc(colRef, {
        task: subTask,
        timestamp: serverTimestamp(),
      });

      setSubTask("");
    } else {
      alert("Please Add SubTask...")
    }
  };

  // => Delete Sub Task
  const deleteSubTask = (subTaskDocId) => {
    const docRef = doc(
      db,
      "tasks",
      user.uid,
      "tasks",
      id,
      "subTasks",
      subTaskDocId
    );
    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#20212c] rounded-[15px] dura transition-all">
      <div className="flex gap-3 p-2">
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
          <div className="flex flex-row items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="flex gap-2 items-center mt-1">
                <CalendarIcon
                  className="h-5 w-5"
                  style={{ color: colorCode }}
                />
                <span
                  style={{ color: colorCode }}
                  className="text-[15px] font-bold"
                >
                  {isShowDate
                    ? formatDate(timestamp)
                    : formatWeekDay(timestamp)}
                </span>
              </div>
            </div>

            {tasks.length >= 1 && (
              <div className="flex items-center gap-3">
                <div className="flex gap-2 items-center mt-1">
                  <ArrowUturnRightIcon
                    className="h-5 w-5"
                    style={{ color: colorCode }}
                  />
                  <span
                    style={{ color: "grey" }}
                    className="text-[15px] font-bold"
                  >
                    {tasks.length + " SubTask"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Delete Button */}
        <div className="self-center pr-5 flex items-center gap-3">
          <button onClick={deleteTask}>
            <TrashIcon
              className={`w-6 h-6 hover:text-gray-100 hover:animate-pulse trashIcon duration-200 transition-all`}
              style={{
                "--color": colorCode,
              }}
            />
          </button>

          {!isCompleted && (
            <button onClick={() => setIsAdd(!isAdd)}>
              <ChevronDownIcon
                className={`w-6 h-6 text-gray-300 hover:animate-pulse addMoreIcon duration-200 transition-all`}
                style={{
                  "--color": colorCode,
                }}
              />
            </button>
          )}
        </div>
        {/* ADD MORE INPUT */}
      </div>
      {/* Sub Tasks */}
      {isAdd ||
        (!isCompleted && (
          <>
            <div className="m-5">
              {tasks.map((task, i) => (
                <div key={i} className="flex items-center gap-1 mb-1">
                  <span
                    className="font-bold subTaskCount"
                    style={{ "--color": colorCode }}
                  >
                    {i}.
                  </span>
                  <p
                    className={`text-gray-300 flex-1 ${
                      isCompleted && "line-through text-gray-500"
                    }`}
                  >
                    {task.data.task}
                  </p>
                  <button
                    onClick={() => deleteSubTask(task.id)}
                    className="text-[14px] text-blue-500 hover:text-blue-300 duration-100 transition-all "
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => addSubTask(e)}
              className="m-5 flex items-center rounded-lg  border border-gray-500 p-3"
            >
              <input
                type="text"
                name="addMore"
                id="addMore"
                value={subTask}
                onChange={(e) => setSubTask(e.target.value)}
                placeholder="Add Sub Tasks"
                className="w-full h-full outline-none bg-transparent focus:border-gray-100 duration-200 transition-all"
                autoComplete="off"
              />

              <PaperAirplaneIcon
                onClick={addSubTask}
                className="h-6 text-gray-200 -rotate-[25deg]"
              />
            </form>
          </>
        ))}
    </div>
  );
}

export default Todo;
