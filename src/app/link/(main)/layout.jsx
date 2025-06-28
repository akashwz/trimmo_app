"use client";
import Sidebar from "@/components/Link/Sidebar";
import { SidebarContext } from "@/context/sidebarContext";
import { useContext, useState } from "react";

export default function Layout({ children }) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <div className=" flex flex-col lg:flex-row ">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div
        className={` flex-grow bg-gray-100  transition-all duration-300 lg:transition-none lg:duration-0 px-1 lg:px-0 ${
          isSidebarOpen ? "lg:w-[80%] lg:ml-[20%]" : "lg:w-full "
        }`}
      >
        <div className="flex justify-center   ">{children}</div>
      </div>
    </div>
  );
}
