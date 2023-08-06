import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className=" mx-auto flex items-center justify-center py-5">
      <h1>
        Developed By{" "}
        <Link
          href="https://www.instagram.com/raoankittt"
          className="font-bold text-orange-400"
        >
          @raoankittt
        </Link>
      </h1>
    </div>
  );
}

export default Footer;
