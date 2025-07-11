"use client";
import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import "./link.css";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SidebarContext } from "@/context/sidebarContext";
import { LoginContext } from "@/context/loginContext";
import Header from "@/components/Link/Header";
import Loader from "@/components/Link/Loader";
import { getCookie } from "cookies-next";

const rubik = Rubik({
  subsets: ["latin"], // Choose subset(s)
  weight: ["400", "500", "700"], // Include desired font weights
  variable: "--font-rubik", // Define a CSS variable for the font
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathName = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const isLoggedIn = getCookie("token");

      if (window.innerWidth >= 1024 && isLoggedIn) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    const isLoggedIn = getCookie("token");

    // If not logged in, redirect to login page
    if (!isLoggedIn) {
      if (pathName !== "/login") {
        router.push("/link");
      }
      setIsSidebarOpen(false);
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      if (pathName == "/" || pathName == "/login") {
        router.push("/link/home");
      }
      if (window.innerWidth <= 1024) {
        setIsSidebarOpen(false);
      }
    }
    setLoading(false); // Set loading to false after determining login state
  }, [pathName]);

  return (
    <div
      suppressHydrationWarning
      className={`${rubik.variable}  ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {loading && <Loader />}
      {!loading && (
        <div className="w-full min-w-[260px]">
          <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, toggleSidebar }}>
            <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
              <Header toggleSidebar={toggleSidebar} setIsSidebarOpen={setIsSidebarOpen} />
              {children}
            </LoginContext.Provider>
          </SidebarContext.Provider>
        </div>
      )}
    </div>
  );
}
