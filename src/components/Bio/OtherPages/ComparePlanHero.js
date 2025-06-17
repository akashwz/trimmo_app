"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const ComparePlanHero = () => {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const handleUserName = () => {
    localStorage.setItem('username', userName)
    router.push('/register')
  }
  return (
    <div className='pt-[20px] container sm:pt-[70px] md:pt-10 herosection'>
      <div className='flex gap-10 flex-wrap xl:flex-nowrap items-center pt-10 w-100 justify-between'>
        <div className='w-full text-center xl:w-[60%] mx-auto'>
          <h1 className='mb-6'>Basic vs. Pro Plan: A Detailed Comparison</h1>
          <p className='mb-5 text-[18px]'>
            Finding the right plan that fits your needs is essential for growing
            your digital presence. Whether you're just starting your journey or
            you're looking to scale, Trimmo.bio offers both Basic and Pro plans
            tailored to different requirements. In this guide, we'll break down
            the features, benefits, and added perks of each plan to help you
            make an informed choice.
          </p>
          <div className='username relative claim flex items-center justify-between mt-10'>
            <span className='pl-4 text-white text-lg'>trimmo.bio/</span>
            <input
              type='text'
              value={userName}
              className='bg-transparent w-full ps-1 grow outline-none border-0 placeholder-white peer'
              placeholder='username'
              onChange={e => setUserName(e.target.value)}
            />
            <button
              type='button'
              className='btn md:min-w-[180px] inline-flex items-center hover:bg-[#ebff57] hover:text-[#000]'
              onClick={handleUserName}
            >
              Claim <span className='hidden md:inline-block'>Your URL</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparePlanHero
