import React from 'react'
import { Gear } from 'react-bootstrap-icons'
export const metadata = {
  title: 'Video Commerce - Boost Sales with Video Enggagement',
  description:
    "Boost sales with video commerce! Increase engagement and conversions by using powerful video content to connect with your audience and drive sales."
}
const Page = () => {
  return (
    <div className='container flex flex-col gap-[80px] lg:gap-[120px]'>
      <div className='pt-[20px] sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h1 className='mb-6'>Video Commerce</h1>
            <p className='mb-5 text-[18px]'>
              Boost sales with video commerce! Increase engagement and
              conversions by using powerful video content to connect with your
              audience and drive sales..
            </p>
            <button className='btn btn-black'>Know More</button>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src='https://shopeasy.ai/img/cms-img-01.webp' className='' />
          </div>
        </div>
      </div>
      <section className='overflow-hidden choose-us'>
        <div className='w-full wow fadeInUp mb-10 mx-auto text-center'>
          <h2 className='primary-font title'>Turn Views into Sales</h2>
          <p className='w-full lg:w-[60%] mx-auto info-text mt-4 inline-block'>
            Engage your audience with video-enabled retail content like never
            before. Bring your products to life, interact with followers, and
            sell effortlessly—all from your Trimmo.bio page.
          </p>
        </div>
        <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-8'>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Showcase Your Products
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Move beyond static visuals. Use videos to emphasize features,
              applications, and advantages.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Build Trust
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Videos foster relationships with your target audience and
              encourage them to make purchases.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Boost Sales
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Video marketing boosts engagement and accelerates purchasing
              decisions.
            </p>
          </div>
        </div>
      </section>
      <section className='flex items-center flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full order-2 lg:order-1 lg:w-1/2 wow fadeInRight'>
          <img
            src='https://shopeasy.ai/img/about-us-2.webp'
            alt='aboutStoreCreation'
            className='max-w-full inline-block'
          />
        </div>
        <div className='w-full order-1 lg:order-2 lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font title w-full'>
              Powerful Features for Seamless Selling
            </h2>
            <h3 className='primary-font mt-4 lg:mt-6 text-base lg:text-xl'>
              Easy Video Integration
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Simply upload and share action videos.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Clickable Product Tags
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Tag products directly in videos to get fast buy links.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Real-Time Insights
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Measure video views, clicks, and revenues to enhance performance.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Multi-Device Ready
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Provide a smooth video shopping experience across all devices.
            </p>
          </div>
        </div>
      </section>
      <section className='flex items-center flex-wrap lg:flex-nowrap gap-10 mb-[80px] lg:mb-[120px]'>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font title w-full'>
            Create a Rich Shopping Experience
            </h2>
            <p className='info-text mt-2'>
            Your Trimmo.bio profile is a dynamic storefront powered by video, with tutorials, unboxings, and behind-the-scenes film.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
            Start Video Selling Today
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
            Transform your followers into customers with the power of video commerce.
            </p>
            <button className='btn-black mt-6'>Claim Your Url</button>
          </div>
        </div>
        <div className='w-full lg:w-1/2 wow fadeInRight'>
          <img
            src='https://shopeasy.ai/img/cms-img-02.webp'
            alt='aboutStoreCreation'
            className='max-w-full inline-block'
          />
        </div>
      </section>
    </div>
  )
}

export default Page
