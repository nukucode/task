"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function DashboardHeader() {
  const state = useSelector((state) => state?.slices?.userData);
  return (
    <div className="flex items-center justify-between py-[2rem] sm:hidden">
      <Link href="/dashboard">
        <span className="font-bold text-lg">Dashboard</span>
      </Link>
      <Link
        href="/profile"
        className="w-[45px] h-[45px] rounded-full relative cursor-pointer"
      >
        <Image
          src={state?.photoURL}
          alt="profile-pic"
          fill
          className="rounded-full"
          style={{ objectFit: "cover" }}
        />
      </Link>
    </div>
  );
}

export default DashboardHeader;
