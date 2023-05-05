"use client";

import { useRouter } from "next/navigation";
import {
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function Title({ title, leftIcon }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-5 pb-10">
      <div className="flex items-center gap-2">
        {leftIcon && (
          <ChevronLeftIcon
            onClick={() => router.back()}
            className="bg-[#1e202a] p-1 rounded-lg h-8 w-8 shadow-md text-gray-400 cursor-pointer"
          />
        )}
        <h1 className="font-bold text-[25px]">{title}</h1>
      </div>
      <EllipsisHorizontalIcon className="icon text-gray-400" />
    </div>
  );
}
