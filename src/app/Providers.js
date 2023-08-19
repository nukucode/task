"use client";
import Header from "@/components/Header";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import { store } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

function Providers({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <Provider store={store}>
          <Header />
          <main className="flex h-screen overflow-hidden bg-[#181820]">
            <Sidebar />
            {children}
          </main>
        </Provider>
      )}
    </>
  );
}

export default Providers;
