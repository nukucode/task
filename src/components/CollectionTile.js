import { db } from "@/firebase/config";
import { returnIcons } from "@/utils/icons";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

function CollectionTile({ id, colorCode, icon, collectionName }) {
    console.log(id, colorCode, icon, collectionName);
      const [comTasks, setComTasks] = useState([]);
    const [notComTasks, setNotComTasks] = useState([]);
    
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
    <Link
      href={`/collection/${id}`}
      className="w-full sm:w-[190px] bg-[#21212b] rounded-2xl py-4 px-3 h-[160px] relative"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: colorCode }}
      >
        {returnIcons(icon)}
      </div>
      <div className="absolute bottom-4 left-3 right-3">
        <h1 className="text-[20px] font-bold">{collectionName}</h1>
        <div className="flex items-center justify-between">
          {notComTasks?.length >= 1 ? (
            <span className="text-[#8f8f94] text-[12px]">
              {comTasks?.length}/{notComTasks?.length} done
            </span>
          ) : (
            <span className="text-[#8f8f94] text-[12px]">
              No tasks
            </span>
          )}
          <div
            className="border-[3px] border-pink-400 w-5 h-5 rounded-full"
            style={{ borderColor: colorCode }}
          ></div>
        </div>
      </div>
    </Link>
  );
}

export default CollectionTile;
