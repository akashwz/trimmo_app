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
      question: 'Unlimited Links',
      answer: [
        'Share everything that makes you unique, including projects, videos, podcasts, calendar connections, and more.'
      ]
    },
    {
      question: 'Embedded Videos',
      answer: [
        'Engage your LinkedIn network with embedded YouTube, Twitch, or TikTok videos.'
      ]
    },
    {
      question: 'Easy Contact Forms',
      answer: [
        'Trimmo.bio allows you to collect names, emails, mobile numbers, and messages directly.',
      ]
    },
    {
      question: 'Monetization Made Simple',
      answer: [
        'Receive advice, donations, and direct funding from strangers.',
      ]
    },
    {
      question: 'Showcase Your Products',
      answer: [
        'Sell simple digital or physical products directly from your Trimmo.bio.',
      ]
    }
  ]
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]'>
      <div className='pt-[20px] container sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h2 className='mb-6'>
            Enhance Your LinkedIn Presence with Trimmo.bio
            </h2>
            <p className='mb-5 text-[18px]'>
            Transform your LinkedIn profile into an effective tool for displaying what you offer. Trimmo.bio allows you to easily connect your network with your greatest material, create your professional identity, and grow your community all with a single link.
            </p>
            <button className='btn btn-black'>Know More</button>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src='https://shopeasy.ai/img/about-us-1.webp' className='' />
          </div>
        </div>
      </div>
      <section className='work overflow-hidden'>
        <div className='grid wow fadeInUp grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 container'>
          <div className='w-full order-2 lg:order-1'>
            <img src='https://shopeasy.ai/img/about-us-2.webp' className='' />
          </div>
          <div className='order-1 lg:order-2'>
            <h2>Top Features for LinkedIn Professionals</h2>
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
            3 Simple Steps to Boost Your LinkedIn Profile
            </h2>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Step 1
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
            Sign up for free in under a minute. Customize your Trimmo.bio with background photographs, profile photos, and unlimited links.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>Step 2</h3>
            <p className='info-text mt-1 lg:mt-2'>
            Access the "Resources" section of your profile and enable LinkedIn Creator Mode. Add your Trimmo.bio URL to the "Website" area for quick reference.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>Step 3</h3>
            <p className='info-text mt-1 lg:mt-2'>
            Use the Trimmo.bio link on your profile, in direct messages, and in post comments. Allow your network to view your content, buy your items, and give all in one spot.
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
            Grow Your Network and Professional Brand
            </h2>
            <p>
            LinkedIn is no longer just for job seekers—it’s a hub for professionals to share ideas, collaborate, and grow. With Trimmo.bio, you can:
            </p>
            <ul className='list-disc pl-10 mt-5'>
              <li className='mb-3'>
              Strengthen your brand identity with a professional link in bio.
              </li>
              <li className='mb-3'>
              You are recognized as a professional in your field.
              </li>
              <li className='mb-3'>
              Stand out in a busy digital space.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font mb-2 title w-full'>
            Transform Your LinkedIn Profile Today
            </h2>
            <p className='mb-4'>
            Join the over 50 million artists, influencers, and brands who use Trimmo.bio to improve their online presence. Create your brand identification, expand your network, and connect audiences to everything you do with one simple link.
            </p>
           <p className='mb-6'>Sign up for free today and elevate your LinkedIn game!</p>
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
