"use client";

import { auth, provider } from "@/firebase/config";
import { signInWithPopup } from "firebase/auth";
import React from "react";

function Login() {
  // => Sign In With Google
  const authHandler = async () => {
    const user = await signInWithPopup(auth, provider);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user.user));
      console.log(user);
    }
    window.location.href = "/";
  };
  return (
    <div className="w-full h-screen flex items-center justify-center px-5">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="font-bold text-xl sm:text-5xl text-center sm:leading-[55px]">
          Track Your Tasks <br />
          <span className="text-gray-300">With Just One Tool</span>
        </h1>
        <p className="text-center text-gray-500 text-[13px] sm:text-[14px]">
          Spend less time organizing and more time building your <br /> next
          great idea with the TaskBolt app
        </p>
        <button
          type="submit"
          onClick={authHandler}
          className="p-3 bg-orange-500 hover:bg-orange-400 transition-all duration-200 ease-in-out
               text-white rounded-md shadow-md "
        >
          Sign Up With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
