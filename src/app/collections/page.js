"use client";

import Button from "@/components/Button";
import CreateCollection from "@/components/CreateCollection";
import Title from "@/components/Title";
import * as Icons from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createCollectionToggle } from "@/redux/feature/toggleSlice";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import { PlusIcon } from "@heroicons/react/20/solid";

function Collections() {
  const [collections, setCollections] = useState([]);
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state?.toggleSlice?.createCollectionToggleValue
  );

  const getTodayDate = () => {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate());
    yesterdayDate.setTime(
      yesterdayDate.getTime() -
        yesterdayDate.getHours() * 3600 * 1000 -
        yesterdayDate.getMinutes() * 60 * 1000
    );
    return yesterdayDate;
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "users", "uid", "collections"),
          where("timestamp", ">", getTodayDate())
        ),
        (snapshot) => {
          setCollections(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        }
      ),
    []
  );

  const returnIcons = (name) => {
    const Icon = Icons[name];
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="flex-1 max-w-3xl mx-auto px-5">
      <Title title="Collections" isShow={true} />
      <Button buttonOneTitle="Favorites" buttonTwoTitle="All Collections" />
      {/* Collections */}
      <div className="pt-8 grid grid-cols-1 am:grid-cols-2 sm:flex flex-wrap items-start gap-5 justify-start">
        {collections &&
          collections.map((collection, i) => (
            <Link
              key={i}
              href="/collection/school"
              className="w-full sm:w-[190px] bg-[#21212b] rounded-2xl py-4 px-3 h-[160px] relative"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: collection.data.colorCode }}
              >
                {returnIcons(collection.data.icon)}
              </div>
              <div className="absolute bottom-4 left-3 right-3">
                <h1 className="text-[20px] font-bold">
                  {collection.data.collection}
                </h1>
                <div className="flex items-center justify-between">
                  <span className="text-[#8f8f94] text-[12px]">4/8 done</span>
                  <div className="border-[3px] border-pink-400 w-5 h-5 rounded-full"></div>
                </div>
              </div>
            </Link>
          ))}

        <div
          onClick={() => dispatch(createCollectionToggle(true))}
          className="w-full sm:w-[190px] border-2 border-[#21212b] rounded-2xl py-4 px-3 h-[100px] flex items-center justify-center cursor-pointer"
        >
          <PlusIcon className="h-6 w-6 text-[#8f8f94] font-bold" />
        </div>
      </div>
      {value && <CreateCollection />}
    </div>
  );
}

export default Collections;
