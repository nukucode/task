"use client";

import { useRouter } from "next/navigation";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import {
  TrashIcon,
  HeartIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Title({
  title,
  isNavigateButton,
  isShow,
  deleteCollection,
  isButtonList,
  editTasks,
}) {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={` sm:flex items-center justify-between py-8 pb-10 ${
        !isShow ? "hidden" : "flex items-center justify-between"
      }`}
    >
      <div className="flex items-center cursor-pointer gap-3">
        {isNavigateButton && (
          <div
            onClick={() => {
              router.back();
            }}
            className="bg-[#21212b] w-8 h-8 rounded-xl shadow flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </div>
        )}
        <h1 className="font-[600] text-[25px]">{title}</h1>
      </div>
      <div label="More" className="relative">
        <EllipsisHorizontalIcon
          className="icon text-gray-400"
          onClick={() => setToggle(!toggle)}
        />

        {isButtonList && toggle && (
          <div className="w-[220px] rounded-md absolute top-8 right-6 bg-[#414052] border-[1px] border-[#605f6f] z-[1200]">
            <button className="button-tile">
              <HeartIcon className="h-5 w-5 text-[#dd0090]" />
              <span>Add To Favorite</span>
            </button>
            <button
              className="button-tile"
              onClick={() => {
                editTasks(), setToggle(false);
              }}
            >
              <PencilSquareIcon className="h-5 w-5 text-[#1d9bf1]" />
              <span>Edit Tasks</span>
            </button>
            <button
              onClick={() => {
                deleteCollection(), router.back();
              }}
              className="button-tile"
            >
              <TrashIcon className="h-5 w-5 text-[#e40505]" />
              <span>Delete Collection</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
