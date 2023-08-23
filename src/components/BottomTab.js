"use client";
import React from "react";
import {
  BellIcon,
  FolderIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  FolderIcon as FolderSolid,
  MagnifyingGlassIcon as SearchSolid,
  PlusIcon,
  BellIcon as BellSolid,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { createCollectionToggle } from "@/redux/feature/slices";
import { BsGrid1X2, BsGrid1X2Fill,  } from "react-icons/bs";

function BottomTab() {
  const pathName = usePathname();
  const dispatch = useDispatch();
  return (
    <div className=" z-[1100] fixed bottom-5 left-5 right-5 flex items-center justify-around sm:hidden px-5 bg-[#181820]/50 py-4 backdrop-blur-xl drop-shadow-lg rounded-full">
      <Link href="/">
        {pathName === "/" ? (
          <BsGrid1X2Fill className="w-5 h-5" />
        ) : (
          <BsGrid1X2 className="w-5 h-5 text-gray-400" />
        )}
      </Link>
      <Link href="/collections">
        {pathName === "/collections" ? (
          <FolderSolid className="w-6 h-6" />
        ) : (
          <FolderIcon className="w-6 h-6 text-gray-400" />
        )}
      </Link>

      <div
        onClick={() => dispatch(createCollectionToggle(true))}
        className="w-10 h-10 cursor-pointer rounded-xl bg-gradient-to-r from-[--primary] to-[--secondary] flex items-center justify-center"
      >
        <PlusIcon className="w-6 h-6" />
      </div>

      <Link href="/search">
        {pathName === "/search" ? (
          <SearchSolid className="w-6 h-6" />
        ) : (
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
        )}
      </Link>

      <Link href="/notification">
        {pathName === "/notification" ? (
          <BellSolid className="w-6 h-6 " />
        ) : (
          <BellIcon className="w-6 h-6 text-gray-400" />
        )}
      </Link>
    </div>
  );
}

export default BottomTab;
