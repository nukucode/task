"use client";

import {
  ArrowLeftOnRectangleIcon,
  BookOpenIcon,
  PaintBrushIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

function Sidebar() {
  return (
    <div className="w-[220px] bg-[#21212b]">
      {/* label */}
      <h1 className="font-bold px-5 mt-5 mb-3 text-[#bcbcbf]">Collections</h1>
      <div className="flex items-center px-5 gap-2 hover:bg-[#272732] py-3 cursor-pointer">
        <div className="bg-pink-400 w-8 h-8 rounded-xl flex items-center justify-center">
          <BookOpenIcon className="h-5 w-5" />
        </div>
        <h1 className="text-[16px]">School</h1>
      </div>

      <div className="flex items-center px-5 gap-2 hover:bg-[#272732] py-3 cursor-pointer">
        <div className="bg-indigo-400 w-8 h-8 rounded-xl flex items-center justify-center">
          <UserIcon className="h-5 w-5" />
        </div>
        <h1 className="text-[16px]">Personal</h1>
      </div>

      <div className="flex items-center px-5 gap-2 hover:bg-[#272732] py-3 cursor-pointer">
        <div className="bg-orange-400 w-8 h-8 rounded-xl flex items-center justify-center">
          <PaintBrushIcon className="h-5 w-5" />
        </div>
        <h1 className="text-[16px]">Design</h1>
      </div>

      <div className="flex items-center px-5 gap-2 hover:bg-[#272732] py-3 cursor-pointer">
        <div className="bg-yellow-400 w-8 h-8 rounded-xl flex items-center justify-center">
          <UserIcon className="h-5 w-5" />
        </div>
        <h1 className="text-[16px]">Groceries</h1>
      </div>

      {/* label */}
      <h1 className="font-bold px-5 mt-5 mb-3 text-[#bcbcbf]">Favorites</h1>
      <div className="flex items-center px-5 gap-2 hover:bg-[#272732] py-3 cursor-pointer">
        <div className="bg-indigo-400 w-8 h-8 rounded-xl flex items-center justify-center">
          <UserIcon className="h-5 w-5" />
        </div>
        <h1 className="text-[16px]">Personal</h1>
      </div>

      <div className="flex items-center px-5 gap-2 hover:bg-[#272732] py-3 cursor-pointer">
        <div className="bg-orange-400 w-8 h-8 rounded-xl flex items-center justify-center">
          <PaintBrushIcon className="h-5 w-5" />
        </div>
        <h1 className="text-[16px]">Design</h1>
      </div>

      {/* logout */}
      {/*  <div className="flex items-center gap-2 absolute bottom-0 left-0 right-0 bg-[#272732]">
        <ArrowLeftOnRectangleIcon className="w-6 h-6" />
        <span>Logout</span>
      </div> */}
    </div>
  );
}

export default Sidebar;
