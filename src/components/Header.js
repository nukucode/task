import {
  Bars3Icon,
  BellIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header({data}) {
  return (
    <header className="h-[60px] bg-[#20212c] flex items-center justify-between p-5">
      <div>
        <h1 className="logo">raoankit</h1>
      </div>
      <ul className="flex gap-4 items-center">
        {/* Add Icon */}
        <li>
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-1">
            <PlusIcon className="icon" />
          </div>
        </li>
        {/* Search Icon */}
        <li>
          <MagnifyingGlassIcon className="icon" />
        </li>
        {/* Notification Icon */}
        <li>
          <BellIcon className="icon" />
        </li>
        {/* User Profile */}
        <li className="rounded-full bg-green-500">
          <Image
            src={data.photoURL}
            className=" rounded-full"
            alt="user-pic"
            width={35}
            height={35}
          />
        </li>
      </ul>
    </header>
  );
}
