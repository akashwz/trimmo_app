'use client'
import React, { useState } from 'react'
import { Gear } from 'react-bootstrap-icons'
// export const metadata = {
//   title: 'Discover Trimmo.bio - Explore E-commerce Possibilities',
//   description:
//     "Explore Trimmo.bio and unlock endless e-commerce possibilities. Enhance your online presence with personalized links and advanced digital solutions."
// }
const Page = () => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const toggleAccordion = index => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index))
  }
  const faqData = [
    {
      question: 'Put Your Best Content Forward',
      answer: [
        'Select and display six TikTok videos to wow the audience.',
        'Encourage visitors to follow you using databases that reflect your style.'
      ]
    },
    {
      question: 'Add a TikTok Profile Link',
      answer: [
        'Provide a direct link to your TikTok profile.',
        'Allow your comments to be visible and click "follow".'
      ]
    },
    {
      question: 'Get More Views and Engagement',
      answer: [
        'Share videos on your Trimmo.bio page to increase the number of TikTok followers.',
        'To keep your profile up to date, set your bio to automatically update with your most recent TikToks.'
      ]
    },
    {
      question: 'Attract Brand Collaborations',
      answer: [
        'Showcase your creativity by getting your film in front of potential employers.',
        'Develop partnerships with brands seeking TikTok influencers.'
      ]
    },
    {
      question: 'Monetize Your Content',
      answer: [
        'Sell both digital and physical products directly on your Trimmo.bio page.',
        'Earn affiliate earnings by promoting Amazon or Apple Music products and earning commissions on sales.'
      ]
    },
    {
      question: 'Collect Email & SMS Subscribers',
      answer: [
        'Collect email and SMS data to grow your audience.',
        'You interact with your TikTok followers both online and offline.'
      ]
    }
  ]
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]'>
      <div className='pt-[20px] container sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h2 className='mb-6'>Get More TikTok Followers with Trimmo.bio</h2>
            <p className='mb-5 text-[18px]'>
              Trimmo.bio, the best link-in-bio tool, can help you take your
              TikTok profile to the next level. Showcase your greatest videos,
              build a following, and easily engage with your audience.
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
          <h2 className='primary-font title'>Why Use Trimmo.bio for TikTok?</h2>
        </div>
        <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 mt-8 gap-8'>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Showcase Your TikTok Profile
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Publish your favorite videos so that your audience can easily find
              your work and follow you for more.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Grow Your Following
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Curate a collection of six great TikTok videos to convert visitors
              into fans. Share your profile and videos with a few clicks.
            </p>
          </div>
        </div>
      </section>
      <section className='work overflow-hidden'>
        <div className='grid wow fadeInUp grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 container'>
          <div className='w-full order-2 flex items-center justify-center h-auto lg:order-1'>
            <img src='https://shopeasy.ai/img/about-us-2.webp' className='' />
          </div>
          <div>
            <h2>Features For TikTok Growth</h2>
            <div className='divide-y divide-slate-200 mt-5 space-y-2'>
              <div className='accordion'>
                {faqData.map((item, index) => (
                  <div className='accordion-item' key={index}>
                    <button
                      className='accordion-button'
                      aria-expanded={expandedIndex === index ? 'true' : 'false'}
                      onClick={() => toggleAccordion(index)}
                    >
                      <p className={`accordion-title text-base font-semibold`}>
                        {item.question}
                      </p>
                      <span
                        aria-hidden='true'
                        className={`icon transition-all duration-200 ${
                          expandedIndex === index ? 'rotate-180' : ''
                        }`}
                      >
                        <svg
                          width='23px'
                          height='23px'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7 10L12 15L17 10'
                            stroke={'#222222'}
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`accordion-content ${
                        expandedIndex === index ? 'expanded' : ''
                      }`}
                    >
                      <ul className='list-disc pl-10 flex flex-col gap-2'>
                        {item.answer?.map((x, index) => {
                          return (
                            <li key={index} className='list-disc'>
                              {x}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font title w-full'>
              How Trimmo.bio Works for TikTok
            </h2>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Step 1
            </h3>
            <p className='mt-1 lg:mt-2'>
              Trimmo. Again registration takes only seconds. You can customize
              your page with an endless number of backgrounds, photos, and
              links.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>Step 2</h3>
            <p className='mt-1 lg:mt-2'>
              Include your unique Trimmo.bio URL in your TikTok bio. Never
              change your bio link; instead, manage all of your content in one
              spot.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>Step 3</h3>
            <p className='mt-1 lg:mt-2'>
              Trimmo.bio Connect with your audience via everything you make.
              Engage with your followers to ensure simple access to your TikTok
              postings.
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
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 order-2 lg:order-1 wow fadeInRight'>
          <img
            src='https://shopeasy.ai/img/about-us-2.webp'
            alt='aboutStoreCreation'
            className='max-w-full inline-block'
          />
        </div>
        <div className='w-full lg:w-1/2 order-1 lg:order-2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font mb-2 title w-full'>
              Why Choose Trimmo.bio for TikTok?
            </h2>
            <ul className='list-disc pl-10 mt-5'>
              <li className='mb-3'>Publish your best TikToks with ease.</li>
              <li className='mb-3'>
                Track clicks and engagement to optimize performance.
              </li>
              <li className='mb-3'>
                Create brand associations through staff presence.
              </li>
              <li className='mb-3'>
                Sell products and earn affiliate revenue.
              </li>
              <li className='mb-3'>
                Collect email and SMS users to expand your network.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font mb-2 title w-full'>
            Ready to Boost Your TikTok Following?
            </h2>
            <p className='mb-4'>
            Trimmo.bio provides solutions for influencers, creators, and company owners to expand their TikTok audiences, display their material, and monetize their efforts.
            </p>
            <p className='mb-6'>
            If your TikTok profile stands out on Trimmo.bio, you can convert any visitor into a follower, coworker, or customer. Begin presenting your films, growing your audience, and exploring new opportunities, all with one strong link in your profile.
            </p>
            <button className='btn-black'>Join Now</button>
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
    </div>
  )
}

export default Page
