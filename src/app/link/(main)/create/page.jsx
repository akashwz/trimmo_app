"use client";
import CreateLink from "@/components/Link/pages/CreateLink";
import dynamic from "next/dynamic";
import React from "react";

// const CreateLink = dynamic(() => import("@/components/pages/CreateLink"), {ssr:false},);

function page() {
  return (
    <>
      <CreateLink />
    </>
  );
}

export default page;
