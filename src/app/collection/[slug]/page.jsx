"use client";
import Title from "@/components/Title";
import React from "react";
import { usePathname } from "next/navigation";
import Input from "@/components/Input";
import Tasks from "@/components/Tasks";
// import Tasks from "@/app/tasks/page";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathName = usePathname();
  return (
    <div className="flex-1 max-w-3xl mx-auto px-5">
      <Title title="School" isShow={true} isNavigateButton={true} />
      <Input colorCode="indigo-400" />
      <Tasks />
    </div>
  );
}

export default page;
