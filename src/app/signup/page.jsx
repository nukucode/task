"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Link from "next/link";

function page() {
  const router = useRouter();
  return (
    <div className="w-full">
      <button onClick={() => router.back()} className="pl-10 pt-10">
        <ArrowLeftIcon className="h-6" />
      </button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="shadow-2xl max-w-[500px] h-auto p-6 mx-auto mt-[10rem] rounded-lg"
      >
        <h3 className="font-plusSans text-[1.2rem] text-center font-bold">
          Create an account
        </h3>
        <p className="font-plusSans text-center pb-[2rem] mt-[.5rem]">
          Hey, enter your details to get sign up <br /> to create account
        </p>

        <div className="mb-[1rem]">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="w-full h-[45px] pl-5 border border-black outline-none rounded-md"
          />
        </div>
        <div className="mb-[1rem]">
          <input
            type="email"
            name="email"
            placeholder="Enter Email/Phone No"
            className="w-full h-[45px] pl-5 border border-black outline-none rounded-md"
          />
        </div>
        <div className="mb-[1rem]">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full h-[45px] pl-5 border border-black outline-none rounded-md"
          />
        </div>
        <p className="font-plusSans text-[12px] mb-[1rem]">
          Having trouble in sign up?
        </p>

        <button
          type="submit"
          className="bg-[#7b5feb] w-full h-[50px] rounded-lg text-white transition-all duration-200 ease-in-out hover:bg-transparent border  hover:border-[#7b5feb] hover:text-[#7b5feb] "
        >
          Sign In
        </button>

        <p className="font-plusSans text-[12px] text-center mt-[1rem]">
          If have account?{" "}
          <Link href="/login" className="font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default page;
