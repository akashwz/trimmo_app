"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";

import { ChevronLeft, List } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
// import { saveLoginData } from "@/redux/slices/authSlice";
import Image from "next/image";
import { LoginContext } from "@/context/loginContext";

export default function Header({ toggleSidebar, setIsSidebarOpen }) {
  const { loginData } = useSelector((state) => state?.authSlice);
  const count = useSelector((state) => state.customSlice.value);

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedInMenuOpen, setIsLoggedInMenuOpen] = useState(false);
  const loggedInPopupRef = useRef(null);
  const loggedOutPopupRef = useRef(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const navLinks = [
    { name: "Platform", path: "#" },
    { name: "Solutions", path: "#" },
    { name: "Pricing", path: "#" },
    { name: "Resources", path: "#" },
  ];

  const handleLogout = (e) => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setIsSidebarOpen(false);
    setIsLoggedInMenuOpen(false);
    router.push("/");

    // dispatch(saveLoginData({})); // Clear Redux state
    // persistor.purge(); // Clear persisted storage
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loggedInPopupRef.current && !loggedInPopupRef.current.contains(event.target)) {
        setIsLoggedInMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loggedOutPopupRef.current && !loggedOutPopupRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the popup
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full bg-green sticky top-0 z-30">
        <div className={`w-full ${!isLoggedIn && "max-w-[1290px]"} mx-auto bg-green text-white1`}>
          <header className="bg-transparent">
            <div
              className={`mx-auto flex h-16 ${
                !isLoggedIn && "max-w-screen-xl"
              } items-center justify-center gap-8 px-4 sm:px-6 lg:px-8`}
            >
              <div className="flex  gap-1">
                {/* Sidebar Toggle Button for Small Screens */}
                {isLoggedIn && (
                  <button
                    className="block lg:hidden rounded-full bg-green p-[5px] sm:p-2.5 text-white sm:border border-white transition hover:text-opacity-80 hover:border-opacity-80"
                    onClick={toggleSidebar}
                  >
                    <ChevronLeft className="h-6 w-6  fill-white" />
                  </button>
                )}

                <Link className="block" href="/link">
                  <Image
                    src={"/images/link/logo-trimo.svg"}
                    width={208}
                    height={44}
                    alt="logo"
                    className="w-28 sm:w-36 md:w-52   h-11"
                  />
                </Link>
              </div>

              <div className="flex flex-1 items-center justify-end lg:justify-between">
                {/* Navigation for larger screens when loggedOut */}

                {!isLoggedIn && (
                  <nav aria-label="Global" className="hidden lg:block">
                    <ul className="flex items-center gap-6 text-sm">
                      {navLinks.map((link, index) => (
                        <li key={index}>
                          <Link
                            className="text-white transition hover:text-gray-300 text-[16px] font-medium leading-5"
                            href={link.path}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                {!isLoggedIn && (
                  <div className="hidden lg:flex lg:gap-4 lg:items-center">
                    {!isLoggedIn && (
                      <Link
                        className="text-white transition hover:text-gray-300 text-[16px] font-medium leading-5"
                        href="/login"
                      >
                        Log in
                      </Link>
                    )}
                    <Link
                      className="block bg-transparent border-2 rounded px-7 py-2.5 text-[16px] leading-5 font-medium text-white transition hover:bg-[#267e55]"
                      href="#"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      className="rounded bg-white px-7 py-2.5 text-[16px] leading-5 font-medium text-[#050505] transition hover:text-[#267e55]"
                      href="/register"
                    >
                      Sign up Free
                    </Link>
                  </div>
                )}
                {isLoggedIn && <div></div>}

                {/* Popup for smaller screens when loggedOut */}
                <div
                  ref={loggedOutPopupRef}
                  className={`absolute top-16 right-4 z-50 w-52 sm:w-64 bg-green border border-white text-black rounded-lg shadow-lg lg:hidden transition-transform ${
                    isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  {!isLoggedIn && (
                    <ul className="p-4 space-y-4">
                      {!isLoggedIn && (
                        <>
                          {navLinks.map((link, index) => (
                            <li key={index}>
                              <Link
                                className="block text-white hover:opacity-80 transition hover:text-green-600 text-[16px] font-medium"
                                href={link.path}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <button
                              type="button"
                              className="block w-full rounded bg-white px-7 py-2.5 text-[16px] leading-5 font-medium text-primarycolor transition hover:text-green"
                              onClick={() => {
                                setIsMenuOpen(false);
                                router.push("/login");
                              }}
                            >
                              Log in
                            </button>
                          </li>
                          <li>
                            <button
                              className="block w-full bg-transparent border-2 rounded px-7 py-2.5 text-[16px] leading-5 font-medium text-white transition hover:bg-[#267e55] hover:text-white"
                              type="button"
                              onClick={() => {
                                setIsMenuOpen(false);
                              }}
                            >
                              Get a Quote
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="block w-full rounded py-1 text-[16px] leading-5 font-medium text-white  hover:underline transition "
                              onClick={() => {
                                setIsMenuOpen(false);
                              }}
                            >
                              Sign up Free
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  )}
                </div>

                {/* menuToggle button rightSide */}
                {isLoggedIn ? (
                  <div className=" lg:flex lg:gap-4 lg:items-center relative">
                    <button
                      type="button"
                      className="overflow-hidden rounded-full border border-gray-300 shadow-inner mt-3 sm:mt-0"
                      onClick={() => setIsLoggedInMenuOpen(!isLoggedInMenuOpen)} // Toggle the popup
                    >
                      <span className="sr-only">Toggle dashboard menu</span>

                      <Image
                        src={loginData?.profile_picture || "/images/link/image20.svg"}
                        width={208}
                        height={44}
                        alt="Profile"
                        className="size-7 sm:size-10 object-cover"
                      />
                    </button>

                    {/*rightside Popup Menu when logged in (Conditionally Visible) */}
                    {isLoggedInMenuOpen && (
                      <div
                        ref={loggedInPopupRef}
                        className="absolute right-0 top-10 mt-2 w-48 bg-green text-black rounded-lg shadow-lg z-50"
                      >
                        <ul className="p-4 space-y-2">
                          <li>
                            <button
                              className="w-full text-left px-4 py-2 text-sm font-medium text-white hover:text-whitelight"
                              onClick={() => {
                                setIsLoggedInMenuOpen(false); // Close the popup
                                router.push("/profile");
                              }}
                            >
                              Profile
                            </button>
                          </li>
                          {/* <li>
                            <button
                              className="w-full text-left px-4 py-2 text-sm font-medium text-white hover:text-whitelight"
                              onClick={() => {
                                setIsLoggedInMenuOpen(false); // Close the popup
                                router.push("/change-password");
                              }}
                            >
                              Change Password
                            </button>
                          </li> */}
                          <li>
                            <button
                              type="button"
                              className="w-full text-left px-4 py-2 text-sm font-medium text-white hover:text-whitelight"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    className="block rounded bg-green p-2.5 text-white border border-white transition hover:text-opacity-80 hover:border-opacity-80 lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <List className="size-5 fill-white" />
                  </button>
                )}
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
