import Link from 'next/link'
import React from 'react'
import {
  ArrowRight,
  Gear,
  HandThumbsUp,
  Instagram,
  Pinterest,
  Spotify,
  Tiktok,
  Twitter,
  Youtube
} from 'react-bootstrap-icons'
export const metadata = {
  title: 'Social Media Widgets - Boost Engagement',
  description:
    "Improve engagement with social media widgets. Boost user interaction and visibility on your website with easy-to-integrate widgets. Start now."
}
const Page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]'>
      <div className='pt-[20px] container sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h2 className='mb-6'>Connect, Share, Engage - All in One Place</h2>
            <p className='mb-5 text-[18px]'>
              Trimmo.bio helps you simplify your Social media widgets. These
              powerful tools seamlessly link your preferred social platforms,
              allowing your audience to easily explore, develop, and engage with
              everything you have to offer.
            </p>
            <p className='mb-10 text-[18px]'>
              Social media widgets are dynamic tools that allow you to show
              content from your social media networks right on your Trimmo.bio
              website.
            </p>
            <button className='btn btn-black'>Know More</button>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src='https://shopeasy.ai/img/about-us-1.webp' className='' />
          </div>
        </div>
      </div>
      <section className='overflow-hidden container choose-us'>
        <div className=' w-full wow fadeInUp mb-10 mx-auto text-center'>
          <h2 className='primary-font title'>
            Key Features of Social Media Widgets
          </h2>
          <p className='w-full mx-auto info-text mt-4 inline-block'>
            Social media widgets are dynamic tools that allow you to show
            content from your social media networks right on your Trimmo.bio
            website.
          </p>
        </div>
        <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-8'>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Seamless Integration
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              From TikTok videos to Instagram Reels, Twitter tweets, and
              Pinterest boards, display your content with ease and engagement.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Real-Time Updates
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Sync the most recent news, videos, or stories from your social
              media accounts to keep your Trimmo.bio fresh and exciting.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Customizable Display
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Match your social widgets to your brand's style. Select the
              colors, layout, and display choices that best match your profile.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Boost Engagement
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Encourage visitors to follow, like, comment, and share your
              content with the widgets.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Multi-Platform Support
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Our widgets support various platforms, like Snapchat, LinkedIn,
              Pinterest, and Spotify, allowing you to reach your audience
              anywhere.
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
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 wow fadeInRight'>
          <img
            src='https://shopeasy.ai/img/about-us-2.webp'
            alt='aboutStoreCreation'
            className='max-w-full inline-block'
          />
        </div>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font title w-full'>
              Why Use Social Media Widgets on Trimmo.bio
            </h2>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Drive Traffic
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Direct visitors to your social media profiles to boost the number
              of followers.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Showcase Your Best Content
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Highlight your most important or trending posts.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Save Time
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              To keep resource allocations and renewals consistent, use
              automated synchronization.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Improve Visibility
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              This increases your chances of getting discovered by potential
              fans, followers, or customers.
            </p>
          </div>
        </div>
      </section>
      <div className='grid work grid-cols-1 md:grid-cols-2 container xl:grid-cols-3 gap-5'>
        <div
          className='work-box gap-3 wow fadeInUp flex flex-col justify-between'
          style={{
            background:
              'linear-gradient(330deg, rgb(219, 255, 236) 0%, rgb(255, 255, 255) 50%)'
          }}
        >
          <div className='bg-[#4ecc88]  w-[50px] h-[50px] flex items-center justify-center rounded-full'>
            <Instagram className='w-5 h-5 text-white' />
          </div>
          <h4 className='primary-font text-base lg:text-xl text-left'>
            Instagram Feed Widget
          </h4>
          <p className='info-text'>
            Use the Instagram feed widget to showcase your gorgeous photographs
            and reels, attracting fast attention.
          </p>
          <div>
            <button className='relative read-more job-3'>
              Read More
              <span className='absolute right-1 top-1 bg-[#4ecc88] rounded-full z-10 flex items-center justify-center'>
                <ArrowRight className='w-5 h-6 text-white' />
              </span>
            </button>
          </div>
        </div>
        <div
          className='work-box gap-3 wow fadeInUp flex flex-col justify-between'
          style={{
            background:
              'linear-gradient(330deg, rgb(255, 250, 230) 0%, rgb(255, 255, 255) 50%)'
          }}
        >
          <div className='bg-[#e6c961]  w-[50px] h-[50px] flex items-center justify-center rounded-full'>
            <Tiktok className='w-5 h-5 text-white' />
          </div>
          <h4 className='primary-font text-base lg:text-xl text-left'>
            TikTok Video Widget
          </h4>
          <p className='info-text'>
            Highlight your most memorable TikTok moments and engage viewers
            directly.
          </p>
          <div>
            <a
              href='https://admin.shopeasy.ai/register'
              target='_blank'
              className='relative read-more job-1'
            >
              Read More
              <span className='absolute right-1 top-1 bg-[#e6c961] rounded-full z-10 flex items-center justify-center'>
                <ArrowRight className='w-5 h-6 text-white' />
              </span>
            </a>
          </div>
        </div>
        <div
          className='work-box gap-3 wow fadeInUp flex flex-col justify-between'
          style={{
            background:
              'linear-gradient(330deg, rgb(233, 232, 255) 0%, rgb(255, 255, 255) 50%)'
          }}
        >
          <div className='bg-[#9d9afe]  w-[50px] h-[50px] flex items-center justify-center rounded-full'>
            <Youtube className='w-5 h-5 text-white' />
          </div>
          <h4 className='primary-font text-base lg:text-xl text-left'>
            YouTube Video Widget
          </h4>
          <p className='info-text'>
            Showcase your most recent video or playlist to gain views and
            subscribers.
          </p>
          <div>
            <button className='relative read-more job-2'>
              Read More
              <span className='absolute right-1 top-1 bg-[#9d9afe] rounded-full z-10 flex items-center justify-center'>
                <ArrowRight className='w-5 h-6 text-white' />
              </span>
            </button>
          </div>
        </div>
        <div
          className='work-box gap-3 wow fadeInUp flex flex-col justify-between'
          style={{
            background:
              'linear-gradient(330deg, rgb(255, 250, 230) 0%, rgb(255, 255, 255) 50%)'
          }}
        >
          <div className='bg-[#e6c961]  w-[50px] h-[50px] flex items-center justify-center rounded-full'>
            <Twitter className='w-5 h-5 text-white' />
          </div>
          <h4 className='primary-font text-base lg:text-xl text-left'>
            Twitter Feed Widget
          </h4>
          <p className='info-text'>
            Integrate your X feed so your viewers can see your most recent
            tweets.
          </p>
          <div>
            <a
              href='https://admin.shopeasy.ai/register'
              target='_blank'
              className='relative read-more job-1'
            >
              Read More
              <span className='absolute right-1 top-1 bg-[#e6c961] rounded-full z-10 flex items-center justify-center'>
                <ArrowRight className='w-5 h-6 text-white' />
              </span>
            </a>
          </div>
        </div>
        <div
          className='work-box gap-3 wow fadeInUp flex flex-col justify-between'
          style={{
            background:
              'linear-gradient(330deg, rgb(233, 232, 255) 0%, rgb(255, 255, 255) 50%)'
          }}
        >
          <div className='bg-[#9d9afe]  w-[50px] h-[50px] flex items-center justify-center rounded-full'>
            <Pinterest className='w-5 h-5 text-white' />
          </div>
          <h4 className='primary-font text-base lg:text-xl text-left'>
            Pinterest Board Widget
          </h4>
          <p className='info-text'>
            Display innovative boards and pins to excite your audience.
          </p>
          <div>
            <button className='relative read-more job-2'>
              Read More
              <span className='absolute right-1 top-1 bg-[#9d9afe] rounded-full z-10 flex items-center justify-center'>
                <ArrowRight className='w-5 h-6 text-white' />
              </span>
            </button>
          </div>
        </div>
        <div
          className='work-box gap-3 wow fadeInUp flex flex-col justify-between'
          style={{
            background:
              'linear-gradient(330deg, rgb(219, 255, 236) 0%, rgb(255, 255, 255) 50%)'
          }}
        >
          <div className='bg-[#4ecc88]  w-[50px] h-[50px] flex items-center justify-center rounded-full'>
            <Spotify className='w-5 h-5 text-white' />
          </div>
          <h4 className='primary-font text-base lg:text-xl text-left'>
            Spotify Widget
          </h4>
          <p className='info-text'>
            Share your favorite playlists, songs, or podcasts to connect with
            other music fans.
          </p>
          <div>
            <button className='relative read-more job-3'>
              Read More
              <span className='absolute right-1 top-1 bg-[#4ecc88] rounded-full z-10 flex items-center justify-center'>
                <ArrowRight className='w-5 h-6 text-white' />
              </span>
            </button>
          </div>
        </div>
      </div>
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font title w-full'>
              How to Add Social Media Widgets to Your Trimmo.bio
            </h2>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Sign In
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Log into your Trimmo.bio account.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Choose a Widget
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Browse our Social Media Widgets library and select the platform
              you wish to integrate with.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Customize
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Adjust the colors, layout, and style to reflect your brand.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>Publish</h3>
            <p className='info-text mt-1 lg:mt-2'>
              Save your modifications and make your widget available for your
              audience to view.
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 wow fadeInRight'>
          <img
            src='https://shopeasy.ai/img/about-us-2.webp'
            alt='aboutStoreCreation'
            className='max-w-full inline-block'
          />
        </div>
      </section>
      <section className='max-w-screen bg-white py-8'>
        <div className='container flex items-center gap-5 sm:gap-10 justify-between flex-wrap md:flex-nowrap'>
          <div className='flex items-center gap-5 flex-grow flex-wrap sm:flex-nowrap'>
            <div className='icon-box min-w-[65px] min-h-[65px] w-16 h-16 rounded-full inline-flex items-center justify-center bg-[#f1f0e6]'>
              <HandThumbsUp className='w-8 h-8' />
            </div>
            <div>
              <span className='text-lg mb-1 lg:text-2xl block primary-font font-semibold'>
                Improve Your Online Presence Today
              </span>
              <p className='info-text text-[#6a6a74]'>
                Trimmo.bio Social media widgets enhance your content's visual
                appeal, engagement, and shareability. Whether you're a creator,
                influencer, entrepreneur, or brand, these tools will help you
                strengthen your connection with your audience.
              </p>
            </div>
          </div>
          <div className='min-w-[200px]'>
            <Link href={'/register'} className='btn btn-black inline-flex'>
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
