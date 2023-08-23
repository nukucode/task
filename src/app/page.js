"use client";

import Button from "@/components/Button";
import DashboardHeader from "@/components/DashboardHeader";
import OverviewTile from "@/components/OverviewTile";
import Title from "@/components/Title";
import { db } from "@/firebase/config";
import { greet } from "@/utils/greetingMessage";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const [collections, setCollections] = useState([]);
  // -> Get State
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
          setCollections(
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
      <Title title="Dashboard" isShow={false} />
      <DashboardHeader />
      <div className="pb-5">
        <h1 className="font-bold text-[30px]">
          {greet[parseInt((new Date().getHours() / 24) * 4)]}, <br />{" "}
          {state?.userData?.displayName}{" "}
        </h1>
      </div>
      <Button buttonOneTitle="Daily Overview" buttonTwoTitle="Statistics" />
      {/* OverView Tile */}
      {collections.length >= 1 ? (
        collections?.map((col, i) => (
          <OverviewTile
            key={i}
            title={col.data.collection}
            icon={col.data.icon}
            colorCode={col.data.colorCode}
          />
        ))
      ) : (
        <div className="bg-[#138D75] hover:bg-[#138d75da] mt-6 py-[10px] w-full max-w-[350px] rounded-full shadow font-bold flex items-center justify-center">
          <Link href="/collections">Get Start</Link>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
