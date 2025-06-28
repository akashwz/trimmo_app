"use client";
import LandingPage from "@/components/Link/pages/LandingPage";
import { LoginContext } from "@/context/loginContext";
import { useContext } from "react";

export default function Home() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  return (
    <>
      <LandingPage />
    </>
  );
}
