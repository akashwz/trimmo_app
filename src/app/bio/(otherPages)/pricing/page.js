'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Check, CheckLg, Hash } from 'react-bootstrap-icons'
// export const metadata = {
//   title: 'Trimmo.bio Pricing Plans - Affordable E-commerce Solutions ',
//   description:
//     "Explore Trimmo.bio pricing plans for affordable e-commerce solutions. Perfect for personalized links and online growth. Choose the plan that fits you!"
// }
const Page = () => {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const handleUserName = () => {
    localStorage.setItem('username', userName)
    router.push('/register')
  }
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]'>
      <div className='pt-[20px] container sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex gap-10 flex-wrap xl:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full text-center xl:w-1/2 mx-auto'>
            <h1 className='mb-6'>Pricing Plans</h1>
            <p className='mb-5 text-[18px]'>
              Trimmo.bio will help you increase your online presence, engage
              your audience, and build your brand. Select the package that best
              meets your needs and begin creating your own link-sharing page
              immediately!
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
      <div className='flex items-start flex-wrap container gap-8 justify-center max-w-full'>
        <div className='relative trending-apps-box h-full pricing-box flex flex-col w-[50%]'>
          <div className='mb-5'>
            <div className='text-lg'>
              <h3 className='text-lg font-semibold'>Free forever</h3>
              <span className='font-normal text-slate-500 text-sm block'>
                Content creators, small businesses, and individuals just
                starting out.
              </span>
            </div>
            <div className='flex items-baseline mt-5'>
              <span className='font-bold text-4xl'>
                <span className='font-bold text-4xl text-green-700'>FREE</span>
              </span>
              <span className='text-slate-500 text-lg font-medium'>/mo</span>
            </div>
            <span className='font-normal text-slate-500 text-sm block'>
              It's great for beginners trying to make their mark online
            </span>
          </div>
          <div className='font-medium mb-3'>Includes:</div>
          <ul className='text-sm mb-5 space-y-3 grow'>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Unlimited links</span>
            </li>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Basic customization</span>
            </li>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>QR codes</span>
            </li>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Cross-channel integration</span>
            </li>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Mobile-friendly design</span>
            </li>
          </ul>
          <Link
            className='btn btn-black text-center'
            tabIndex={0}
            href='/register'
            target='_blank'
          >
            Try For Free
          </Link>
        </div>
        <div className='relative trending-apps-box pricing-box flex flex-col h-full'>
          <div className='mb-5'>
            <div className='text-lg'>
              <h3 className='text-lg font-semibold'>Advanced</h3>
              <span className='font-normal text-slate-500 text-sm block'>
                Professionals, enterprises, and innovators looking to expand
                their brand and audience effectively
              </span>
            </div>
            <div className='flex items-baseline mt-5'>
              <span className='font-bold text-4xl'>$5</span>
              <span className='text-slate-500 text-lg font-medium'>/mo</span>
            </div>
            <span className='font-normal text-slate-500 text-sm block'>
              Advanced tools and customization options can help you elevate your
              online presence
            </span>
          </div>
          <div className='font-medium mb-3'>Includes:</div>
          <ul className='text-sm mb-5 space-y-3 grow'>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Advanced Customization</span>
            </li>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Analytics Dashboard</span>
            </li>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Link Scheduling</span>
            </li>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Animated Links</span>
            </li>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Email & Phone Collection</span>
            </li>
            <li className='flex items-center'>
              <CheckLg className='text-green-700 w-5 h-5 me-2' />
              <span>Priority Support</span>
            </li>
          </ul>
          <Link
            className='btn btn-black text-center'
            tabIndex={0}
            href='/register'
            target='_blank'
          >
            Try For Free
          </Link>
        </div>
      </div>
      <section className='overflow-hidden container chooseUs '>
        <div className='flex flex-wrap lg:flex-nowrap wow fadeInUp items-center w-full mt-4 gap-12'>
          <div className='w-full lg:w-1/2'>
            <div className='box1 flex flex-col justify-between'>
              <div>
                <h2 className='primary-font title w-full'>
                  Why Choose Trimmo.bio?
                </h2>
                <p className='mt-2'>
                  Get started today and let Trimmo.bio elevate your online
                  presence
                </p>
              </div>
              <div className='mt-8'>
                <div className='text-[16px] flex items-start gap-3'>
                  <div className='h-10 w-10 rounded-full flex items-center justify-center bg-white'>
                    <Hash className='w-6 h-6' />
                  </div>
                  <p className='info-text mt-2'>
                    Affordable plans tailored to your needs.
                  </p>
                </div>
                <div className='text-[16px] mt-5 flex items-start gap-3'>
                  <div className='h-10 w-10 rounded-full flex items-center justify-center bg-white'>
                    <Hash className='w-6 h-6' />
                  </div>
                  <p className='info-text mt-2'>
                    Tools to grow your audience and monetize your content.
                  </p>
                </div>
                <div className='text-[16px] mt-5 flex items-start gap-3'>
                  <div className='h-10 w-10 rounded-full flex items-center justify-center bg-white'>
                    <Hash className='w-6 h-6' />
                  </div>
                  <p className='info-text mt-2'>
                    Easy-to-use platform for beginners and professionals alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img
              src='https://shopeasy.ai/img/cms-img-03.webp'
              alt='marketingImage'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
