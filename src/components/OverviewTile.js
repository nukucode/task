import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function OverviewTile({ colorCode, title, Icon, tasks, random }) {
  const [isExpend, setIsExpend] = useState(true);
  return (
    <div className="bg-[#21212b] rounded-2xl mt-5">
      {/* Tile Header */}
      <div className="bg-[#272732] p-3 rounded-tl-2xl rounded-tr-2xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`${
              colorCode && `bg-${colorCode}`
            } w-8 h-8 rounded-xl flex items-center justify-center`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <h1 className="text-[16px]">{title}</h1>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => setIsExpend(!isExpend)}
        >
          {" "}
          {isExpend ? (
            <ChevronDownIcon className="h-5 w-5 text-[#8c8c91]" />
          ) : (
            <ChevronUpIcon className="h-5 w-5 text-[#8c8c91]" />
          )}
        </button>
      </div>
      {/* Tile Mid */}
      {isExpend && (
        <div className="px-3 flex flex-col py-5 gap-4">
          <div className="flex gap-3">
            <div
              className={`w-6 h-6 border-2 rounded-lg ${
                colorCode && `border-${colorCode}`
              }`}
            />
            <div className="flex flex-col -gap-1">
              <p className="text-[17px] text-[#fbfbfb]">
                Preparing dribble shots
              </p>
              <span className="text-[13px] text-[#c85656]">Today 12:00</span>
            </div>
          </div>

          {!random && (
            <div className="flex gap-3">
              <div
                className={`w-6 h-6 border-2  rounded-lg ${
                  colorCode && `border-${colorCode}`
                }`}
              />
              <div className="flex flex-col -gap-1">
                <p className="text-[17px] text-[#fbfbfb]">
                  Invoice dashboard wireframe & design
                </p>
                <span className="text-[13px] text-[#c85656]">Today</span>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Tile Bottom */}
      <div className="flex items-center justify-center gap-2 border-t-[0.50px] border-[#8c8c91] py-4 cursor-pointer">
        <span>Go to Collection</span>
        <ArrowRightIcon className="h-6 w-6 text-[#8c8c91]" />
      </div>
    </div>
  );
}

export default OverviewTile;
