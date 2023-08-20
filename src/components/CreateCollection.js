"use client";
import { db } from "@/firebase/config";
import { createCollectionToggle } from "@/redux/feature/toggleSlice";
import { colors } from "@/utils/colors";
import { icons } from "@/utils/icons";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useState } from "react";
import { useDispatch } from "react-redux";

function CreateCollection() {
  const dispatch = useDispatch();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const [colorCode, setColorCode] = useState(randomColor);
  const [Collection, setCollection] = useState();
  const [Icon, setIcon] = useState();

  const collectionHandler = (e) => {
    e.preventDefault();
    if (Collection != "" && Collection.length >= 5) {
      const docRef = doc(db, "users", "uid");
      const colRef = collection(docRef, "collections");
      const docRef2 = doc(colRef, Collection);
      setDoc(docRef2, {
        collection: Collection,
        timestamp: serverTimestamp(),
        colorCode: colorCode,
        icon: Icon?.render?.name,
      });
      setCollection("");
      dispatch(createCollectionToggle(false));
    } else {
      alert("Please Fill Properly");
    }
  };

  return (
    <div
      onClick={() => dispatch(createCollectionToggle(false))}
      className="w-screen h-screen fixed top-0 left-0 bg-black/20 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-full max-w-[650px] min-h-[350px] bg-gray-800/70 rounded-lg py-5 mx-3 "
      >
        <div className="border-b pb-3 pl-5">
          <span className="font-bold ">Create Collection</span>
        </div>
        <form
          onSubmit={(e) => collectionHandler(e)}
          className="flex items-center gap-2 bg-[#131313] px-3 py-3 mx-3 rounded-xl shadow mt-5"
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center`}
            style={{ background: colorCode }}
          >
            {Icon && <Icon className="w-5 h-5" />}
          </div>
          <input
            type="text"
            id="createCollection"
            className="bg-transparent w-full h-full outline-none border-none placeholder:text-white"
            placeholder="Create Collection"
            value={Collection}
            onChange={(e) => setCollection(e.target.value)}
          />
        </form>
        <div className="flex items-center justify-start flex-wrap gap-4 px-3 mt-5">
          {colors.map((color, index) => (
            <div
              onClick={() => setColorCode(color)}
              key={index}
              className={`w-6 h-6 rounded-lg cursor-pointer hover:border-2 hover:border-blue-500`}
              style={{ background: color }}
            />
          ))}
        </div>

        <div className="flex items-center justify-start flex-wrap gap-4 px-3 mt-5">
          {icons &&
            icons?.map((Icon, index) => (
              <Icon
                onClick={() => setIcon(Icon)}
                key={index}
                className={`w-6 h-6 rounded-lg cursor-pointer hover:border-2 hover:border-blue-500`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CreateCollection;
