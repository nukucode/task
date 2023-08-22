"use client";
import BottomTab from "@/components/BottomTab";
import Header from "@/components/Header";
import Login from "@/components/Login";
import { store } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

function Providers({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);

  return (
    <Provider store={store}>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header user={user} />
          <main className="flex bg-[#181820] scrollbar-hide">
            {children}
          </main>
          <BottomTab />
        </>
      )}
    </Provider>
  );
}

export default Providers;
