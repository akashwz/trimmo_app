"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ChevronBarDown, ChevronDown, Gear, GraphUp, Line, Link45deg } from "react-bootstrap-icons";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const pathName = usePathname();
  return (
    <>
      {/* Sidebar Drawer */}

      <div
        className={`fixed left-14 h-full bg-white text-primarycolor border-r border-[#E5E5E5] transition-transform duration-300  ${
          isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
        } w-[80%] md:w-[60%] lg:w-[20%] z-20`}
      >
        <div className="w-full h-full box-border overflow-y-auto">
          <div className="logo p-4 flex justify-center">
            <Link href="/" passHref>
              <Image
                src="/images/bio/trimmo-black-logo.svg"
                width={120}
                height={28}
                alt="trimmo-black-logo"
                className="max-w-[120px] hidden md:inline-block cursor-pointer"
              />
            </Link>
          </div>
          {/* Create Button */}
          {/* <div className="border-b p-4">
            <Link
              className="block bg-themeGreen rounded px-7 py-2.5 text-[16px] leading-5 font-medium text-white transition hover:bg-[#267e55] text-center"
              href="/link/create"
            >
              Create new
            </Link>
          </div> */}

          {/* Sidebar Links */}
          <div className="px-4">
            <Link
              href={"/link/home"}
              className={`w-full mt-4 rounded font-montserrat bg-[#F5F5F5] hover:bg-whitelight px-4 py-2 text-lg font-semibold ${
                pathName.includes("home")
                  ? "text-themeGreen fill-themeGreen"
                  : "text-secondarycolor fill-secondarycolor"
              } flex gap-2 items-center`}
            >
              <Link45deg className="h-5 w-5 font-semibold " />
              <span className="text-sm">Links</span>
            </Link>

            <Link
              href={"/link/analytics"}
              className={`w-full mt-4 rounded font-montserrat bg-[#F5F5F5] hover:bg-whitelight px-4 py-2 text-lg font-semibold ${
                pathName.includes("analytics")
                  ? "text-themeGreen fill-themeGreen"
                  : "text-secondarycolor fill-secondarycolor"
              } flex gap-2 items-center`}
            >
              <GraphUp className="h-5 w-5 font-semibold" />
              <span className="text-sm">Analytics</span>
            </Link>

            <Link
              href={"/link/customizeqr"}
              className={`w-full mt-4 rounded font-montserrat bg-[#F5F5F5] hover:bg-whitelight px-4 py-2 text-lg font-semibold ${
                pathName.includes("customizeqr")
                  ? "text-themeGreen fill-themeGreen"
                  : "text-secondarycolor fill-secondarycolor"
              } flex gap-2 items-center`}
            >
              <Link45deg className="h-5 w-5 font-semibold " />
              <span className="text-sm">Customize QR</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for Small Screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
