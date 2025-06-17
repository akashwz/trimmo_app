import Link from 'next/link'
import React from 'react'
import { Gear } from 'react-bootstrap-icons'
export const metadata = {
  title: 'Link in Bio Solution',
  description:
    "Trimmo.bio, the ultimate link in bio solution for showcasing your e-commerce store and driving traffic to your products effortlessly."
}
const Page = () => {
  return (
    <div className='container flex flex-col gap-[80px] lg:gap-[120px] '>
      <div className='pt-[20px] sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h1 className='mb-6'>A Link in Bio That Does It All</h1>
            <p className='mb-5 text-[18px]'>
              Boost your online presence using Trimmo.bio. An innovative
              link-in-bio solution intended for creators, corporations, and
              influencers. Share your content, showcase products, and direct
              your audience to everything you have to offer with a single link.
            </p>
            <Link href={'/register'} className='btn btn-black inline-block'>
              Create Profile
            </Link>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src='https://shopeasy.ai/img/about-us-1.webp' className='' />
          </div>
        </div>
      </div>
      <section className='flex items-center flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full order-2 lg:order-1 lg:w-1/2 wow fadeInRight'>
          <img
            src='https://shopeasy.ai/img/about-us-1.webp'
            alt='aboutStoreCreation'
            className='max-w-full inline-block'
          />
        </div>
        <div className='w-full order-1 lg:order-2 lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font title w-full'>
              Your All-in-One Link Solution
            </h2>
            <p className='my-4 text-base font-medium lg:text-xl'>
              Turn your bio link into a dynamic hub that:
            </p>
            <ul className='m-0 flex flex-col gap-3 pl-10 list-disc'>
              <li>
                Showcases your latest products, videos, blogs, and social links.
              </li>
              <li>
                Supports e-commerce with product listings and seamless checkout.
              </li>
              <li>
                Offers full customization to match your personal or brand
                identity.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='overflow-hidden choose-us'>
        <div className='w-full wow fadeInUp mb-10 mx-auto text-center'>
          <h2 className='primary-font title'>Built for Everyone</h2>
          <p className='w-full lg:w-[60%] mx-auto info-text mt-4 inline-block'>
            Whether you're a creator, influencer, or small business owner,
            Trimmo.bio is the ultimate tool for:
          </p>
        </div>
        <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-8'>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Monetizing Content
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Include links to your digital or physical products and begin
              earning straight from your audience.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Increase Traffic
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Direct followers from social media networks to your website, shop,
              or portfolio.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Growing Your Brand
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Use advanced analytics to better understand your audience and
              improve performance.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h2 className='mb-6'>A Link in Bio That Does It All</h2>
            <p className='mb-5 text-[18px]'>
            Claim your Trimmo.bio link today and elevate your internet presence to the next level. Trimmo.bio allows you to easily share your latest project, promote a new product, or simply connect with your audience.
            </p>
            <Link href={'/register'} className='btn btn-black inline-block'>
              Create Profile
            </Link>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src='https://shopeasy.ai/img/about-us-1.webp' className='' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
