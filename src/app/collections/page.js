"use client";

import Button from "@/components/Button";
import CreateCollection from "@/components/CreateCollection";
import Title from "@/components/Title";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createCollectionToggle } from "@/redux/feature/slices";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/config";
import { PlusIcon } from "@heroicons/react/24/solid";
import CollectionTile from "@/components/Collection";

function Collections() {
  const [cols, setCols] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.slices);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(
            db,
            "users",
            JSON.parse(localStorage.getItem("user")).uid,
            "collections"
          ),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setCols(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        }
      ),
    []
  );

  return (
    <div className="flex-1 max-w-3xl mx-auto px-5">
      <Title title="Collections" isShow={true} isButtonList />
      <Button buttonOneTitle="Favorites" buttonTwoTitle="All Collections" />
      {/* Collections */}
      <div className="pt-8 grid grid-cols-1 am:grid-cols-2 sm:flex flex-wrap items-start gap-5 justify-start">
        {cols &&
          cols?.map((collection, i) => (
            <CollectionTile
              index={i}
              key={i}
              id={collection.id}
              collectionName={collection.data.collection}
              colorCode={collection.data.colorCode}
              icon={collection.data.icon}
            />
          ))}

        <div
          onClick={() => dispatch(createCollectionToggle(true))}
          className="w-full sm:w-[190px] border-2 border-[#21212b] rounded-2xl py-4 px-3 h-[100px] flex items-center justify-center cursor-pointer"
        >
          <PlusIcon className="h-6 w-6 text-[#8f8f94] font-bold" />
        </div>
      </div>
      {state.createCollectionToggleValue && (
        <CreateCollection state={state?.userData} />
      )}
    </div>
  );
}

export default Collections;
