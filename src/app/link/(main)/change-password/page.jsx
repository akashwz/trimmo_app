'use client'
import dynamic from 'next/dynamic';
import React from 'react'
const ChangePassword = dynamic(() => import("@/components/pages/ChangePassword"), {ssr:false});


function page() {
  return (
    <>
    <ChangePassword/>
    </>
  )
}

export default page