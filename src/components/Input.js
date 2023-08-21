"use client";

import { useState, useRef, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { db } from "@/firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";

function Input({ collectionName, user }) {
  const inputRef = useRef();
  const [Collection, setCollection] = useState();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // -> get the collection by CollectionName
  const getCollection = async () => {
    const docRef = doc(
      db,
      "users",
      JSON.parse(localStorage.getItem("user")).uid,
      "collections",
      collectionName
    );
    try {
      const docSnap = await getDoc(docRef);
      // console.log(docSnap.data());
      setCollection(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollection();
  }, [collectionName]);

  /* Add Task In Firebase */
  const taskHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (input != "" && input.length >= 5) {
      const docRef = doc(db, "users", user.uid, "collections", collectionName);
      const colRef = collection(docRef, "tasks");
      addDoc(colRef, {
        task: input,
        timestamp: serverTimestamp(),
        colorCode: Collection?.colorCode,
        isCompleted: false,
      });
      setInput("");
    } else {
      alert("Please Fill Properly");
    }
    setIsLoading(false);
  };

  return (
    <>
      <form
        onSubmit={(e) => taskHandler(e)}
        className="flex items-center gap-3 border border-gray-700 px-3 py-3 rounded-2xl"
      >
        <div
          className={`bg-[#58D68D]
          } rounded-lg w-6 h-6 flex items-center justify-center`}
          style={{ background: Collection?.colorCode }}
        >
          <PlusIcon className="h-5 text-black font-bold" />
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
