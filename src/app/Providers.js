"use client";
import Login from "@/components/Login";
import React, { useEffect, useState } from "react";

function Providers({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);
  return <>{!user ? <Login /> : <>{children}</>}</>;
}

export default Providers;
