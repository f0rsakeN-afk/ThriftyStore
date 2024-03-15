import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Applayout() {
  return (
    <div className="bg-[#edf2f4] dark:bg-[#212529]">
      <div className=" container m-auto px-4 lg:px-0 h-screen flex flex-col">
        <Header />
        <main className="flex-1 scrollbar-thin overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Applayout;
