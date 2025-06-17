"use client";

import Footer from "@/components/Bio/lending/Footer";
import Header from "@/components/Bio/lending/Header";
import "../../style.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
