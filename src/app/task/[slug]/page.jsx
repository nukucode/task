"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useSelector } from "react-redux";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { menu } = useSelector((state) => state.button);
  return (
    
      <div
        className={`overflow-auto z-[1] w-full p-5 lg:pr-[5rem] transition-padding duration-200 ease-in-out ${
          menu ? "lg:ml-[300px]" : "ml-0"
        }`}
      >
        <Header />
        <Sidebar />
      </div>
  
  );
}

export default page;
