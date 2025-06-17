import React from 'react'
import { Gear } from 'react-bootstrap-icons'
export const metadata = {
  title: 'Trimmo bio Integration',
  description:
    "Integrate Trimmo.bio easily with your e-commerce platform. Improve your digital experience and streamline your online store with seamless integration."
}
const Page = () => {
  return (
    <div className='container flex flex-col gap-[80px] lg:gap-[120px]'>
      <div className='pt-[20px] sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h1 className='mb-6'>Integration Solutions</h1>
            <p className='mb-5 text-[18px]'>
              Integrate Trimmo.bio easily with your e-commerce platform. Improve
              your digital experience and streamline your online store with
              seamless integration.
            </p>
            <button className='btn btn-black'>Know More</button>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src='https://shopeasy.ai/img/cms-img-02.webp' className='' />
          </div>
        </div>
      </div>
      <section>
        <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 mt-8 gap-8'>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Integration Solutions for Seamless E-commerce Success
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Trimmo.bio acknowledges the necessity of seamless integration in
              today's fast-paced eCommerce market. Our advanced integration
              solutions enable you to easily run your business, work in a way
              that works, and grow it in a variety of ways.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Maximize Your Advertising ROI
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Trimmo.bio integrates with Google, Facebook Ads, and other
              prominent advertising platforms, allowing you to optimize your ad
              budget and effectively reach your target audience. Track
              conversions, create personalized campaigns, and see a high return
              on investment as you spread your conversions to large events and
              affiliate networks.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Effortless Marketplace Automation
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Manage inventory, inventory management, and procurement on about
              180 marketplaces, including key players such as Amazon, eBay,
              Walmart, and TikTok Shop. Trimmo.bio easily connects with various
              markets, allowing you to expand your reach without the need for
              additional manual processes. In addition, we support integration
              with Mirakl-powered platforms to accelerate market activity and
              growth.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Multichannel Integration for Effortless Management
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Trimmo.bio gives the tools you need to combine all of your sales
              channels into one dashboard. Whether you sell on social media,
              your own website, or numerous marketplaces, we maintain the smooth
              flow of your products, orders, and customer information, making it
              easier than ever to manage your business as you've grown up.
            </p>
          </div>
        </div>
      </section>
      <section className='flex items-center flex-wrap lg:flex-nowrap gap-10 mb-[80px] lg:mb-[120px]'>
        <div className='w-full order-2 lg:order-1 lg:w-1/2 wow fadeInRight'>
          <img
            src='https://shopeasy.ai/img/about-us-1.webp'
            alt='aboutStoreCreation'
            className='max-w-full inline-block'
          />
        </div>
        <div className='w-full order-1 lg:order-2 lg:w-1/2 wow fadeInLeft'>
          <div>
            <h3 className='primary-font text-4xl leading-tight title w-full'>
              Why Choose Trimmo.bio Integration Solutions?
            </h3>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Unified Dashboard
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Easily manage all of your channels from one spot.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Scalable Solutions
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Automate critical procedures to help your organization grow.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Multi-Platform Syncing
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Keep your content and inventory consistent across all platforms.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Optimized for Growth
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Increase sales, optimize ad performance, and automate
              time-consuming procedures.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
