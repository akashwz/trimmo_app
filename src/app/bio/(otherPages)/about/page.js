import Head from 'next/head'
import React from 'react'
import { Gear, Hash } from 'react-bootstrap-icons'

const Page = () => {
  // function generateMetadata() {
  //   return getPageMetadata({
  //     title: 'About Us - MySite',
  //     description: 'Learn more about us and what we do.',
  //   });
  // }
  // generateMetadata();
  return (
    <>
      <div className='container flex flex-col gap-[80px] lg:gap-[120px] '>
        <div className='pt-[20px] sm:pt-[70px] md:pt-10 herosection'>
          <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
            <div className='w-full lg:w-1/2'>
              <h1 className='mb-6'>About Us</h1>
              <p className='mb-5 text-[18px]'>
                Welcome to Trimmo.bio, the one-stop destination for making
                smarter, easier, and more pleasurable internet connections.
              </p>
              <p className='mb-10 text-[18px]'>
                We appreciate the difficulty of showcasing everything you reach
                in one link. Trimmo.bio is a platform that allows creators,
                influencers, enterprises, and brands to share their world with a
                single, personalized link.
              </p>
              <button className='btn btn-black'>Know More</button>
            </div>
            <div className='w-full lg:w-1/2'>
              <img src='https://shopeasy.ai/img/about-us-1.webp' className='' />
            </div>
          </div>
        </div>
        <section className='flex items-center flex-wrap lg:flex-nowrap gap-10'>
          <div className='w-full lg:w-1/2 wow fadeInRight'>
            <div className='flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start'>
              <div className='min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white'>
                <Hash className='w-10 h-10' />
              </div>
              <div className='text-[16px] space-y-2.5'>
                <h3 className='text-lg lg:text-3xl block primary-font'>
                  Our Mission
                </h3>
                <p className='info-text'>
                  Trimmo.bio's objective is to simplify the way you communicate
                  with your audience. We want to help you build connections,
                  expand your business, and reach your full potential with tools
                  and simple integrations.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 wow fadeInRight'>
            <div className='flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start'>
              <div className='min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white'>
                <Hash className='w-10 h-10' />
              </div>
              <div className='text-[16px] space-y-2.5'>
                <h3 className='text-lg lg:text-3xl block primary-font'>
                  Our Vision
                </h3>
                <p className='info-text'>
                  We envision a world in which creators and brands can
                  communicate with their consumers freely and without
                  constraint. Trimmo.bio keeps your stories, goods, and ideas
                  ready for creation at all times.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='flex items-center flex-wrap lg:flex-nowrap gap-10'>
          <div className='w-full lg:w-1/2 wow fadeInRight'>
            <img
              src='https://shopeasy.ai/img/about-us-1.webp'
              alt='aboutStoreCreation'
              className='max-w-full inline-block'
            />
          </div>
          <div className='w-full lg:w-1/2 wow fadeInLeft'>
            <div>
              <h2 className='primary-font title w-full'>What We Offer</h2>
              <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
                Customizable Link Pages
              </h3>
              <p className='info-text mt-1 lg:mt-2'>
                Showcase your links, social profiles, products, and content with
                ease
              </p>
              <h3 className='primary-font mt-6 text-base lg:text-xl'>
                Powerful Integrations
              </h3>
              <p className='info-text mt-1 lg:mt-2'>
                Connect with apps and platforms such as TikTok, YouTube,
                Instagram, Spotify, and others.
              </p>
              <h3 className='primary-font mt-6 text-base lg:text-xl'>
                Analytics & Insights
              </h3>
              <p className='info-text mt-1 lg:mt-2'>
                Obtain important information for tracking clicks, measuring
                engagement, and optimizing your strategy.
              </p>
              <h3 className='primary-font mt-6 text-base lg:text-xl'>
                Earning Opportunities
              </h3>
              <p className='info-text mt-1 lg:mt-2'>
                Use marketing tools and helpful goods to transform your profile
                into a revenue-generating platform.
              </p>
            </div>
          </div>
        </section>
        <section className='overflow-hidden choose-us'>
          <div className='w-full wow fadeInUp mb-10 mx-auto text-center'>
            <h2 className='primary-font title'>Why Choose Trimmo.bio?</h2>
            <p className='w-full lg:w-[60%] mx-auto info-text mt-4 inline-block'>
              Trimmo.bio is more than simply a link-sharing tool; it's the best
              way to showcase all you have in one location. Here's why millions
              rely on us to improve their internet presence
            </p>
          </div>
          <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-8'>
            <div className='trending-apps-box border'>
              <span className='choose-us-icon-box mb-4'>
                <Gear />
              </span>
              <span className='text-lg lg:text-xl block primary-font font-semibold'>
                User-Friendly Interface
              </span>
              <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
                Trimmo.bio was created with the goal of being easy and
                accessible. Whether you're an experienced creative or a newbie,
                you can set up and modify your page in minutes, with no
                technical skills required.
              </p>
            </div>
            <div className='trending-apps-box border'>
              <span className='choose-us-icon-box mb-4'>
                <Gear />
              </span>
              <span className='text-lg lg:text-xl block primary-font font-semibold'>
                Unlimited Customization
              </span>
              <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
                Your brand is distinctive, and you must have an online presence.
                Trimmo.bio allows you to customize your page with custom themes,
                fonts, colors, and layouts to express your unique style.
              </p>
            </div>
            <div className='trending-apps-box border'>
              <span className='choose-us-icon-box mb-4'>
                <Gear />
              </span>
              <span className='text-lg lg:text-xl block primary-font font-semibold'>
                Seamless Integrations
              </span>
              <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
                Connect to your favorite platforms, like Instagram, TikTok,
                YouTube, Spotify, and others. You may effortlessly present your
                films, posts, music, or products to keep your audience engaged
                and informed.
              </p>
            </div>
            <div className='trending-apps-box border'>
              <span className='choose-us-icon-box mb-4'>
                <Gear />
              </span>
              <span className='text-lg lg:text-xl block primary-font font-semibold'>
                Advanced Analytics
              </span>
              <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
                Using advanced insight data, you can better understand your
                audiences. Track clicks, measure efficiency, and determine what
                works best for you so you can make the greatest option for your
                growth.
              </p>
            </div>
            <div className='trending-apps-box border'>
              <span className='choose-us-icon-box mb-4'>
                <Gear />
              </span>
              <span className='text-lg lg:text-xl block primary-font font-semibold'>
                Monetization Made Simple
              </span>
              <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
                Make your profile a source of cash. You may generate money
                straight from your Trimmo.bio profile by utilizing features like
                as donation mechanisms, product sales, crowdfunding
                integrations, and more.
              </p>
            </div>
            <div className='trending-apps-box border'>
              <span className='choose-us-icon-box mb-4'>
                <Gear />
              </span>
              <span className='text-lg lg:text-xl block primary-font font-semibold'>
                Mobile-Friendly Design
              </span>
              <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
                Your audience moves, and so does Trimmo.bio. Our pages are
                responsive and look excellent on any device, ensuring that your
                material is constantly available and visually appealing.
              </p>
            </div>
          </div>
        </section>
        <section className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between mb-[80px] lg:mb-[120px]'>
          <div className='w-full lg:w-1/2'>
            <h2 className='mb-6'>Join Our Growing Community</h2>
            <p className='mb-5 text-[18px]'>
              From influencers to small enterprises, many people rely on
              Trimmo.bio to help them grow and connect. Join us and take the
              next step towards increasing your internet presence.
            </p>
            <p className='mb-10 text-[18px]'>
              Trimmo.bio is more than simply a tool; it is your partner in
              developing meaningful interactions.
            </p>
            <button className='btn btn-black'>Join Now</button>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src='https://shopeasy.ai/img/about-us-1.webp' className='' />
          </div>
        </section>
      </div>
    </>
  )
}

export default Page
