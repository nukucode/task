"use client";
import Title from "@/components/Title";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function Profile() {
  const [user, setUser] = useState(null);

  /* Get User From LocalStorage */
  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);

  /* Logout User & Clear From LocalStorage */
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="flex-1 max-w-3xl mx-auto text-white py-5 px-3">
      <Title title="Profile" isShow={true} />
      <div className="flex justify-center gap-5 items-center flex-col md:flex-row">
        <div className="w-[60px] h-[60px] rounded-full">
          <Image
            src={user?.photoURL}
            alt="profile-pic"
            width={1000}
            height={1000}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center md:items-start ">
            {" "}
            <h2 className="font-bold text-xl">{user?.displayName}</h2>
            <h3 className="text-gray-400">{user?.email}</h3>
          </div>
          <button
            onClick={logout}
            className="flex items-center justify-center gap-2 mt-2 bg-orange-500 text-black py-2 px-5 rounded-md"
          >
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
            <p className="font-bold">Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
