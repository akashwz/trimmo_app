"use client";
import Loader from "@/components/Loader";
import CreateLink from "@/components/pages/CreateLink";
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
