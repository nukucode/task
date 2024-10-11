"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
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
          Login
        </h3>
        <p className="font-plusSans text-center pb-[2rem] mt-[.5rem]">
          Hey, enter your details to get sign in <br /> to your account
        </p>
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
        <p className="font-plusSans text-[12px] mb-[1rem]">Having trouble in sign in?</p>

        <button
          type="submit"
          className="bg-[#7b5feb] w-full h-[50px] rounded-lg text-white transition-all duration-200 ease-in-out hover:bg-transparent border  hover:border-[#7b5feb] hover:text-[#7b5feb] "
        >
          Sign In
        </button>

        <p className="font-plusSans text-[12px] text-center my-[1rem]">
          -- Or Sign in with --
        </p>
        <div className="flex items-center justify-center">
          <div className="space-x-2 mx-auto flex items-center">
            <button className="border border-black px-3 h-[35px] rounded-md flex items-center space-x-1 font-medium">
              <GoogleIcon />
              <span>Google</span>
            </button>

            <button className="border border-black px-3 h-[35px] rounded-md flex items-center space-x-1 font-medium">
              <AppleIcon />
              <span>Apple</span>
            </button>

            <button className="border border-black px-3 h-[35px] rounded-md flex items-center space-x-1 font-medium">
              <FacebookIcon />
              <span>Facebook</span>
            </button>
          </div>
        </div>
          <p className="font-plusSans text-[12px] text-center mt-[1rem]">
            Don&apos;t have account?{" "}
            <Link href="/signup" className="font-bold">
              Request now
            </Link>
          </p>
      </form>
    </div>
  );
}

export default page;
