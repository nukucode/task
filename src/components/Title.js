"use client";

import { useRouter } from "next/navigation";
import {
  BoltIcon,
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function Title({ title, leftIcon }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-5 pb-10">
      <div className="flex items-center">
        
          <BoltIcon
            onClick={() => router.back()}
            className="h-8 w-8 text-gray-200 cursor-pointer"
          />
        
        <h1 className="font-bold text-[25px]">{title}</h1>
      </div>
      <EllipsisHorizontalIcon className="icon text-gray-400" />
    </div>
  );
}
