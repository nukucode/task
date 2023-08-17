"use client";

import Footer from "@/components/Footer";
import Login from "@/components/Login";
import React, { useEffect, useState } from "react";

function Providers({children}) {
  const [user, setUser] = useState(null);
  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="bg-[#17181f]">
          <div>{children}</div>
          {/* <Footer /> */}
        </div>
      )}
    </div>
  );
}

export default Providers;
