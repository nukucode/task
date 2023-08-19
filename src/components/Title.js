"use client";

import { useRouter } from "next/navigation";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Title({ title, isNavigateButton }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-8 pb-10">
      <div
        onClick={() => {
          router.back();
        }}
        className="flex items-center cursor-pointer gap-3"
      >
        {isNavigateButton && (
          <div className="bg-[#21212b] w-8 h-8 rounded-xl shadow flex items-center justify-center">
            <ChevronLeftIcon className="w-5 h-5" />
          </div>
        )}
        <h1 className="font-[600] text-[25px]">{title}</h1>
      </div>
      <div label="More" className="relative">
        <EllipsisHorizontalIcon className="icon text-gray-400" />
      </div>
    </div>
  );
}
