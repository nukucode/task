"use client";

import React from "react";
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import { HashtagIcon, PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  collectionToggle,
  createCollectionToggle,
} from "@/redux/feature/toggleSlice";
import { useRouter } from "next/navigation";

function Header() {
  // Get route name
  const pathName = usePathname();
  // useDispatch (UPDATE STATE)
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <header className="bg-[#21212b] py-[10px] px-5 justify-between items-center shadow border-b-[1px] border-black hidden sm:flex">
      {/* left side */}
      <div className="flex items-center gap-8">
        <button onClick={() => dispatch(collectionToggle())}>
          <Bars3Icon className="w-7 h-7" />
        </button>
        <Link href="/" className={`flex items-center gap-2 cursor-pointer`}>
          <HashtagIcon
            className={`w-7 h-7 text-[#828287] ${
              pathName === "/" && "text-white"
            }`}
          />
          <span
            className={`text-[#828287] font-bold ${
              pathName === "/" && "text-white"
            }`}
          >
            Dashboard
          </span>
        </Link>

        <Link
          href="/collections"
          className="flex items-center gap-2 cursor-pointer"
        >
          <NewspaperIcon
            className={`w-7 h-7 text-[#828287] ${
              pathName === "/collections" && "text-white"
            }`}
          />
          <span
            className={`font-bold text-[#828287] ${
              pathName === "/collections" && "text-white"
            }`}
          >
            Collections
          </span>
        </Link>
      </div>

      {/* right side */}
      <div className=" flex items-center gap-4  ">
        <div
          onClick={() => {
            router.push("/collections"), dispatch(createCollectionToggle(true));
          }}
          className="w-7 h-7 cursor-pointer rounded-lg bg-gradient-to-r from-[--primary] to-[--secondary] flex items-center justify-center"
        >
          <PlusIcon className="w-5 h-5" />
        </div>
        <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer" />
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <Link
          href="/profile"
          className="w-10 h-10 rounded-full relative cursor-pointer"
        >
          <Image
            src="https://cdn4.iconfinder.com/data/icons/emoji-2-5/64/_lgbt_rainbow_emoji_face-1024.png"
            alt="profile-pic"
            fill
            className="rounded-full"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
