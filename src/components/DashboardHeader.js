import Image from "next/image";
import Link from "next/link";
import React from "react";

function DashboardHeader() {
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
          src="https://images.unsplash.com/photo-1691874683123-5d7bf8d79df1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
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
