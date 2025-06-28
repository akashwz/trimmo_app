"use client";
import Analytics from "@/components/Link/pages/Analytics";
import dynamic from "next/dynamic";
import React from "react";

// const AnalyticsPage = dynamic(() => import("@/components/pages/Analytics"), {
//   ssr: false,
// });

function page() {
  return (
    <>
      <Analytics />
    </>
  );
}

export default page;
