'use client'
import EditLink from '@/components/pages/EditLink';
import dynamic from 'next/dynamic';
import React from 'react'

// const EditLink = dynamic(() => import("@/components/pages/EditLink"), {ssr:false});

function page() {
  return (
    <>
    <EditLink/>
    </>
  )
}

export default page