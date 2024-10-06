"use client";

import { useRouter } from "next/navigation";
import {
  UserIcon,
  LockClosedIcon,
  ComputerDesktopIcon,
  ListBulletIcon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "@/features/buttonSlice";

// => Desktop & Tablets & Mobile Modal
export const Modal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.button);
  return (
    <div
      onClick={(e) => dispatch(toggleModal(!modal))}
      className={`bg-charcoal/50 w-screen ${
        modal ? "visible opacity-100 " : "invisible opacity-0"
      } transition-all duration-200 ease-in-out h-screen fixed z-[999] flex items-center justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`min-w-[700px] hidden h-[450px] md:flex mx-[1rem] transition-transform duration-200 ease-in-out ${
          modal ? "translate-y-0" : "translate-y-6"
        }`}
      >
        <div className="flex-[0.3] bg-white rounded-tl-xl rounded-bl-xl p-4">
          <h3 className="font-plusSans text-[16px] font-semiBold">Settings</h3>
          <div className=" mt-5">
            <SideButton Icon={UserIcon} title="Personal" />
            <SideButton Icon={LockClosedIcon} title="Password" />
            <SideButton active Icon={ComputerDesktopIcon} title="Apperence" />
            <SideButton Icon={ListBulletIcon} title="Mics" />
          </div>
        </div>
        <div className="flex-[0.7] flex flex-col bg-silverGray rounded-tr-xl rounded-br-xl p-4">
          <div className="flex-1">
            <h3 className="font-plusSans text-[14px]">Apperence</h3>
            <div className="mt-2">
              <h3>Work In Progress</h3>
            </div>
            <div className="mt-2">
              <h3 className="font-plusSans text-[14px]">Intro</h3>
              <div>
                <h3 className="font-plusSans font-bold text-[20px]">
                  Good Morning, Camerone 🤩
                </h3>
                <p className="font-plusSans text-[14px] text-grayText">
                  It&apos;s Monday, 25 September 2024
                </p>
              </div>
            </div>
          </div>
          <div className="space-x-3 ml-auto">
            <button className="border px-2 py-[6px] rounded-md font-plusSans text-[14px] cursor-pointer">
              Cancel
            </button>
            <button className="bg-black text-white px-2 py-[6px] rounded-md font-plusSans text-[14px] cursor-pointer">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      {/* // mobile */}
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white md:hidden h-[400px] fixed bottom-0 left-0 w-full py-5 px-3 sm:px-5"
      >
        <div className=" flex items-center justify-between pb-3 border-b border-black/30">
          <h3 className="font-plusSans text-[16px] font-semibold">Settings</h3>
          <button onClick={() => dispatch(toggleModal(!modal))}>
            <XMarkIcon className="h-6" />
          </button>
        </div>

        <div className="mt-4">
          <SideButton Icon={UserIcon} title="Personal" mobileVersion />
          <SideButton Icon={LockClosedIcon} title="Password" mobileVersion />
          <SideButton
            active
            Icon={ComputerDesktopIcon}
            title="Apperence"
            mobileVersion
            show
          />
          <SideButton Icon={ListBulletIcon} title="Mics" mobileVersion />
        </div>
      </div>
    </div>
  );
};

// => SideButton Components For Desktop & Tablet & Mobile
const SideButton = ({ Icon, title, active, mobileVersion, show }) => {
  return (
    <>
      {mobileVersion ? (
        <div>
          <div
            className={`flex items-center justify-between ${
              active && "bg-active"
            } px-3 py-1 rounded-lg
        my-1 cursor-pointer hover:bg-active transition-all duration-200 ease-in-out`}
          >
            <div className={`flex items-center space-x-1`}>
              <Icon className="h-5" />
              <span className="font-plusSans text-[14px]">{title}</span>
            </div>

            <button>
              {active ? (
                <ChevronUpIcon className="h-5" />
              ) : (
                <ChevronDownIcon className="h-5" />
              )}
            </button>
          </div>

          {/* Setting Content */}
          {show && (
            <div className="flex-[0.7] flex flex-col rounded-tr-xl rounded-br-xl p-4">
              <div className="flex-1">
                <h3 className="font-plusSans text-[14px]">Theme</h3>
                <div className="mt-2">
                  <h3>Work In Progress</h3>
                </div>
                <div className="mt-2">
                  <h3 className="font-plusSans text-[14px]">Intro</h3>
                  <div>
                    <h3 className="font-plusSans font-bold text-[20px]">
                      Good Morning, Camerone 🤩
                    </h3>
                    <p className="font-plusSans text-[14px] text-grayText">
                      It&apos;s Monday, 25 September 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`flex items-center space-x-1 px-3 py-3 rounded-lg
       hover:bg-active my-1 cursor-pointer ${active && "bg-active"}`}
        >
          <Icon className="h-5" />
          <span className="font-plusSans text-[14px]">{title}</span>
        </div>
      )}
    </>
  );
};
