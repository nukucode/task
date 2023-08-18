import Button from "@/components/Button";
import Title from "@/components/Title";
import {
  BookOpenIcon,
  PaintBrushIcon,
  PlusIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function Collections() {
  return (
    <div className="flex-1 max-w-3xl mx-auto">
      <Title title="Collections" />
      <Button />
      {/* Collections */}
      <div className="pt-8 flex flex-wrap items-start gap-5 justify-start">
        <div className="w-[190px] bg-[#21212b] rounded-2xl py-4 px-3 h-[160px] relative">
          <div className="bg-pink-400 w-10 h-10 rounded-xl flex items-center justify-center">
            <BookOpenIcon className="h-6 w-6" />
          </div>
          <div className="absolute bottom-4 left-3 right-3">
            <h1 className="text-[20px] font-bold">School</h1>
            <div className="flex items-center justify-between">
              <span className="text-[#8f8f94] text-[12px]">4/8 done</span>
              <div className="border-[3px] border-pink-400 w-5 h-5 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="w-[190px] bg-[#21212b] rounded-2xl py-4 px-3 h-[160px] relative">
          <div className="bg-indigo-400 w-10 h-10 rounded-xl flex items-center justify-center">
            <UserIcon className="h-6 w-6" />
          </div>
          <div className="absolute bottom-4 left-3 right-3">
            <h1 className="text-[20px] font-bold">Personal</h1>
            <div className="flex items-center justify-between">
              <span className="text-[#8f8f94] text-[12px]">6/10 done</span>
              <div className="border-[3px] border-indigo-400 w-5 h-5 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="w-[190px] bg-[#21212b] rounded-2xl py-4 px-3 h-[160px] relative">
          <div className="bg-orange-400 w-10 h-10 rounded-xl flex items-center justify-center">
            <PaintBrushIcon className="h-6 w-6" />
          </div>
          <div className="absolute bottom-4 left-3 right-3">
            <h1 className="text-[20px] font-bold">Design</h1>
            <div className="flex items-center justify-between">
              <span className="text-[#8f8f94] text-[12px]">3/15 done</span>
              <div className="border-[3px] border-orange-400 w-5 h-5 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="w-[190px] bg-[#21212b] rounded-2xl py-4 px-3 h-[160px] relative">
          <div className="bg-yellow-400 w-10 h-10 rounded-xl flex items-center justify-center">
            <ShoppingCartIcon className="h-6 w-6" />
          </div>
          <div className="absolute bottom-4 left-3 right-3">
            <h1 className="text-[20px] font-bold">Groceries</h1>
            <div className="flex items-center justify-between">
              <span className="text-[#] text-[12px]">2/5 done</span>
              <div className="border-[3px] border-yellow-400 w-5 h-5 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="w-[190px] border-2 border-[#21212b] rounded-2xl py-4 px-3 h-[100px] flex items-center justify-center cursor-pointer">
          <PlusIcon className="h-6 w-6 text-[#8f8f94] font-bold" />
        </div>
      </div>
    </div>
  );
}

export default Collections;
