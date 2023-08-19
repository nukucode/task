"use client";
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowUturnDownIcon,
} from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { colors } from "@/utils/colors";

function Todo({ title, isSub, isCompleted }) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className="">
      <div className="bg-[#21212b] rounded-[15px]">
        <div className="flex gap-3 p-2">
          <div>
            {!isCompleted ? (
              <button className="border-2 border-[#58D68D] w-6 h-6 rounded-[10px] cursor-pointer"></button>
            ) : (
              <button className="border-2 border-[#58D68D] bg-[#58D68D] w-6 h-6 rounded-[10px] cursor-pointer">
                <CheckIcon className="text-black w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex-1">
            <p
              className={`text-[15px] text-gray-200 ${
                isCompleted && "line-through text-gray-400"
              } sm:text-[17px]`}
            >
              {title}
            </p>
            {/* SubTasks and Timestamp */}
            <div className="flex items-center gap-5 mt-1">
              {/* subTask */}
              <div className="flex items-center gap-2">
                <ArrowUturnDownIcon className="w-5 h-5 rotate-[270deg] text-[#828289]" />
                <span className="text-[#828289]">0/1</span>
              </div>
              {/* timestamp */}
              <div className="flex gap-2 items-center">
                <CalendarIcon
                  className="h-5 w-5"
                  style={{
                    color: randomColor,
                  }}
                />
                <span
                  style={{
                    color: randomColor,
                  }}
                  className="text-[15px] font-[600]"
                >
                  Today
                </span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="self-start pr-5 flex items-center gap-3">
            <button>
              <ChevronDownIcon
                className={`w-6 h-6 text-gray-300 hover:animate-pulse addMoreIcon duration-200 transition-all`}
              />
            </button>
          </div>
        </div>
      </div>
      {/* SubTasks */}
      {isSub && (
        <div className="bg-[#21212b] rounded-[15px] ml-4 mt-2">
          <div className="flex gap-3 p-2">
            <div>
              {true ? (
                <button className="border-2 border-[#58D68D] w-6 h-6 rounded-[10px] cursor-pointer"></button>
              ) : (
                <button className="border-2 border-[#58D68D] bg-[#58D68D] w-6 h-6 rounded-[10px] cursor-pointer">
                  <CheckIcon className="text-black w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex-1">
              <p
                className={`text-[15px] text-gray-200 ${
                  !true && "line-through text-gray-400"
                } sm:text-[17px]`}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
