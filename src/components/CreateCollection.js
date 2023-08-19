"use client";
import { createCollectionToggle } from "@/redux/feature/toggleSlice";
import { colors } from "@/utils/colors";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

function CreateCollection() {
  const dispatch = useDispatch();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div
      onClick={() => dispatch(createCollectionToggle(false))}
      className="w-screen h-screen fixed top-0 left-0 bg-black/20 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto w-full max-w-[450px] bg-gray-500/70 py-3 rounded-lg flex items-center gap-2 px-5 "
      >
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center`}
          style={{ background: randomColor }}
        >
          <BookOpenIcon className="h-5 w-5" />
        </div>
        <input
          type="text"
          id="createCollection"
          className="bg-transparent w-full h-full outline-none border-none placeholder:text-white"
          placeholder="Create Collection"
        />
      </div>
    </div>
  );
}

export default CreateCollection;
