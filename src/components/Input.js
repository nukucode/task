"use client";

import { useEffect, useState, useRef } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { colors } from "@/utils/colors";

function Input() {
  const [user, setUser] = useState(null);
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* Get User From LocalStorage */
  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);

  /* Add Task In Firebase */
  const taskHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (input != "" && input.length >= 5) {
      const docRef = doc(db, "tasks", user.uid);
      const colRef = collection(docRef, "tasks");
      addDoc(colRef, {
        task: input,
        timestamp: serverTimestamp(),
        colorCode: colors[Math.floor(Math.random() * colors.length)],
        isCompleted: false,
      });
      setInput("");
    } else {
      alert("Please Fill Properly");
    }
    setIsLoading(false);
  };

  /* Input Default Focus */
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <form
        onSubmit={(e) => taskHandler(e)}
        className="flex items-center gap-3 border border-gray-700 px-3 py-3 rounded-2xl"
      >
        <div className="bg-[#58D68D] rounded-lg w-6 h-6 flex items-center justify-center">
          <PlusIcon className="h-5 text-black" />
        </div>
        <input
          ref={inputRef}
          type="text"
          name="search"
          id="search"
          className="bg-transparent border-none outline-none w-full h-full"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={true}
          autoComplete="off"
          disabled={isLoading ? true : false}
        />
      </form>
    </>
  );
}

export default Input;
