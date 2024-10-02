"use client";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import {
  ArrowsRightLeftIcon,
  EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";
import { SidebarItem } from "./SidebarItem";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../features/menuSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const menu = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen z-[999] lg:block min-w-[300px] ${
          !menu ? "block lg:hidden" : "hidden lg:block"
        } bg-silverGray h-screen p-6 space-y-5`}
      >
        {/* First Container */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src={Logo} alt="logo" className="w-10 h-10" />
            <div>
              <h3 className="font-plusSans font-bold text-[14px]">Plan.io</h3>
              <p className="font-plusSans text-[10px]">Camerone Williamson</p>
            </div>
          </div>
          <button onClick={() => dispatch(toggleMenu(!menu))}>
            <ArrowsRightLeftIcon className="h-6" />
          </button>
        </div>
        {/* Second Container */}
        <div>
          <h3 className="font-plusSans font-bold text-[14px] mb-2">Private</h3>
          <SidebarItem title="Home" active emoji="🏠" taskNumber={11} />
          <SidebarItem title="Complete" emoji="✅" taskNumber={3} />
          <SidebarItem title="Today" emoji="📆" taskNumber={4} />
          <SidebarItem title="Personal" emoji="👤" taskNumber={6} />
          <SidebarItem title="Work" emoji="💼" taskNumber={5} />
          <SidebarItem add title="Create new list" />
        </div>

        {/* Third Container */}
        <div>
          <h3 className="font-plusSans font-bold text-[14px] mb-2">
            Workspace
          </h3>
          <div>
            <SidebarItem
              Icon={EllipsisHorizontalIcon}
              title="Toho Studio"
              workspace
              color="#67d374"
            />

            <SidebarItem
              Icon={EllipsisHorizontalIcon}
              title="JJK Leaks"
              workspace
              color="#8e44ad"
            />

            <SidebarItem
              Icon={EllipsisHorizontalIcon}
              title="Coding"
              workspace
              color="#3498db"
            />
            <SidebarItem add title="Create new workspace" />
          </div>
        </div>
      </div>
    </>
  );
}

export { Sidebar };
