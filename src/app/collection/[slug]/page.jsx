"use client";
import Title from "@/components/Title";
import React from "react";
import { usePathname } from "next/navigation";
import Input from "@/components/Input";
import Tasks from "@/components/Tasks";
// import Tasks from "@/app/tasks/page";
import { useSelector } from "react-redux";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathName = usePathname();
  const title = pathName.split("/");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useSelector((state) => state?.slices?.userData);
  return (
    <div className="flex-1 max-w-3xl mx-auto px-5">
      <Title
        title={title[title.length - 1]}
        isShow={true}
        isNavigateButton={true}
      />
      <Input
        colorCode="indigo-400"
        user={user}
        collectionName={title[title.length - 1]}
      />
      <Tasks collectionName={title[title.length - 1]} />
    </div>
  );
}

export default page;
