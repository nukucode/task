"use client";

import { useRouter } from "next/navigation";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function Title({ title }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-8 pb-10">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex items-center cursor-pointer"
      >
        <h1 className="font-bold text-[25px]">{title}</h1>
      </div>
      <div label="More" className="relative">
        <EllipsisHorizontalIcon className="icon text-gray-400" />
      </div>
    </div>
  );
}
