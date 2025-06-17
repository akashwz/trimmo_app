"use client";

import { Backdrop, CircularProgress } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RootLayout({ children }) {
  const router = useRouter();
  const { loader } = useSelector((state) => state.errorReducer);
  const pathname = usePathname();

  const [cardImage, setCardImage] = useState(null);

  useEffect(() => {
    const getCardIndex = JSON.parse(localStorage.getItem("selectedCard"));
    setCardImage(getCardIndex);
  }, []);

  return (
    <div className="min-h-screen min-w-screen max-w-screen flex flex-col items-center relative overflow-x-hidden overflow-y-auto p-4 sm:p-6">
      {/* {loader && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={loader}
          className="flex flex-col"
        >
          <CircularProgress color="inherit" />
          <p>Loading...</p>
        </Backdrop>
      )} */}
      <div className="logo w-full">
        <Image
          onClick={() => router.push("/")}
          src="/images/trimmo-black-logo.svg"
          className={`max-w-[150px] relative md:max-w-full cursor-pointer`}
          height={200}
          width={200}
          alt="logo"
        />
      </div>
      <div className="pt-10 pb-10 flex flex-col justify-center items-center h-full w-full mx-auto overflow-x-hidden login">
        {children}
      </div>
    </div>
  );
}
