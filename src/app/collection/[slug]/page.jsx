"use client";
import Title from "@/components/Title";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Input from "@/components/Input";
import Tasks from "@/components/Tasks";
// import Tasks from "@/app/tasks/page";
import { useSelector } from "react-redux";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [editTask, setEditTask] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathName = usePathname();
  const title = pathName.split("/");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useSelector((state) => state?.slices?.userData);

  // delete Collection
  const deleteCollection = () => {
    const docRef = doc(
      db,
      "users",
      JSON.parse(localStorage.getItem("user")).uid,
      "collections",
      title[title.length - 1]
    );

    deleteDoc(docRef)
      .then(() => console.log("Document deleted"))
      .catch((err) => console.log(err));
  };

  // edit tasks
  const editTasks = () => {
    setEditTask(!editTask);
  };

  return (
    <div className="flex-1 max-w-3xl mx-auto px-5">
      <Title
        title={title[title.length - 1]}
        isShow={true}
        isNavigateButton={true}
        deleteCollection={deleteCollection}
        isButtonList
        editTasks={editTasks}
      />
      <Input
        colorCode="indigo-400"
        user={user}
        collectionName={title[title.length - 1]}
      />
      <Tasks collectionName={title[title.length - 1]} editTask={editTask} />
    </div>
  );
}

export default page;
