"use client";

import Login from "@/components/Login";
import Header from "../components/Header";
import "./globals.css";
import { useEffect, useState } from "react";

const metadata = {
  title: "Task App Using Next.Js",
  description: "Mange Your Tasks By Future Task App",
};

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);

  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        {!user ? (
          <Login />
        ) : (
          <>
            {/* Header */}
            <Header data={user} />
            {/* SCREEN */}
            <div className="flex flex-row bg-[#17181f] h-full">
              <div className="flex-1">{children}</div>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
