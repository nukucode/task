"use client";

import Button from "@/components/Button";
import OverviewTile from "@/components/OverviewTile";
import Title from "@/components/Title";
import { PaintBrushIcon, UserIcon } from "@heroicons/react/24/solid";
import React from "react";

function Dashboard() {
  return (
    <div className="flex-1 max-w-3xl mx-auto">
      <Title title="Dashboard" />
      <div className="pb-5">
        <h1 className="font-bold text-[30px]">
          Good morning, <br /> Ankit Yadav{" "}
        </h1>
      </div>
      <Button buttonOneTitle="Daily Overview" buttonTwoTitle="Statistics" />
      {/* OverView Tile */}
      <OverviewTile
        title="Design"
        Icon={PaintBrushIcon}
        colorCode="orange-400"
      />
      <OverviewTile
        title="Personal"
        Icon={UserIcon}
        colorCode="indigo-400"
        random
      />
    </div>
  );
}

export default Dashboard;
