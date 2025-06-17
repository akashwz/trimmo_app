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
      question: 'More Clicks, More Engagement',
      answer: [
        'Showcase all of your material with a single link.',
        'Help your fans get around your world more effortlessly.',
        'Allow people to engage with a clean, user-friendly design.'
      ]
    },
    {
      question: 'Monetization Made Simple',
      answer: [
        'Include eCommerce links to offer your items or services directly.',
        'Accept advice and money without difficulty.',
        'Engage your audience while increasing money.'
      ]
    },
    {
      question: 'Performance Insights',
      answer: [
        'Measure clicks, click-through rates, and conversions.',
        'Use actionable data to fine-tune your strategy.',
        'A convenient dashboard shows you what has the greatest influence on your target audience.'
      ]
    },
    {
      question: 'Customizable Design',
      answer: [
        'Choose themes and designs that reflect your brand.',
        'Create an experience customized for your fans.',
        'You can add an unlimited number of links to your bio for maximum flexibility.'
      ]
    }
  ]
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]'>
      <div className='pt-[20px] container sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h2 className='mb-6'>
              Trimmo.bio for Instagram: Your Ultimate Link in Bio Tool
            </h2>
            <p className='mb-5 text-[18px]'>
              Trimmo.bio helps thousands of creators, influencers, brands, and
              business owners share, monetize, and build their online presence
              with a single link. It is the best link-in bio tool created for
              Instagram and beyond.
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
          <h2 className='primary-font title'>Why Choose Trimmo.bio?</h2>
        </div>
        <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-8'>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Seamless Sharing
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Give your audience fast access to everything you have to offer,
              including blog pieces, social network posts, online stores, and
              services.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Effortless Monetization
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Sell products, accept service payments, and even set up a "Tip
              Jar" to earn directly from your followers.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Data-Driven Growth
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Analytics may provide you with important insights about your
              audience and help you optimize your strategy for more engagement
              and sales.
            </p>
          </div>
        </div>
      </section>
      <section className='work overflow-hidden'>
        <div className='grid wow fadeInUp grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 container'>
          <div className='w-full order-2 lg:order-1'>
            <img src='https://shopeasy.ai/img/about-us-2.webp' className='' />
          </div>
          <div>
            <h2>Features That Drive Results</h2>
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
              How to Get Started with Trimmo.bio for Instagram
            </h2>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Step 1
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Register for free and create your own Trimmo.bio link.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>Step 2</h3>
            <p className='info-text mt-1 lg:mt-2'>
              Include your unique URL in your Instagram bio.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>Step 3</h3>
            <p className='info-text mt-1 lg:mt-2'>
              Use one link to share your content, offer things, and draw an
              audience.
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
      <section className='container'>
        <h2 className='mb-10 text-center'>Benefits for Store Owners</h2>
        <div className='grid work grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5'>
          <div
            className='work-box gap-4 wow fadeInUp flex flex-col'
            style={{
              background:
                'linear-gradient(330deg, rgb(219, 255, 236) 0%, rgb(255, 255, 255) 50%)'
            }}
          >
            <div className='bg-[#4ecc88]  w-[50px] h-[50px] flex items-center justify-center rounded-full'>
              <Gear className='w-5 h-5 text-white' />
            </div>
            <h4 className='primary-font text-base lg:text-xl text-left'>
              Fast Payments, Zero Hassle
            </h4>
            <p>
              Connect your store and receive payments immediately using your
              Trimmo.bio link.No complex technical processes or procedures are
              required.
            </p>
          </div>
          <div
            className='work-box gap-4 wow fadeInUp flex flex-col'
            style={{
              background:
                'linear-gradient(330deg, rgb(255, 250, 230) 0%, rgb(255, 255, 255) 50%)'
            }}
          >
            <div className='bg-[#e6c961]  w-[50px] h-[50px] flex items-center justify-center rounded-full'>
              <Gear className='w-5 h-5 text-white' />
            </div>
            <h4 className='primary-font text-base lg:text-xl text-left'>
              Drive More Sales
            </h4>
            <p>
              Use a personalized call-to-action to direct followers to the items
              you sell. Integrate your store easily for a consistent experience.
            </p>
          </div>
          <div
            className='work-box gap-4 wow fadeInUp flex flex-col'
            style={{
              background:
                'linear-gradient(330deg, rgb(233, 232, 255) 0%, rgb(255, 255, 255) 50%)'
            }}
          >
            <div className='bg-[#9d9afe]  w-[50px] h-[50px] flex items-center justify-center rounded-full'>
              <Gear className='w-5 h-5 text-white' />
            </div>
            <h4 className='primary-font text-base lg:text-xl text-left'>
              Engage Customers Effectively
            </h4>
            <p>
              Keep followers informed about news, deals, and promotions. By
              giving customers direct access to your store, you can build trust
              and loyalty.
            </p>
          </div>
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
              Start Growing with Trimmo.bio
            </h2>
            <p>
              Join the successful network of creatives, influencers, and
              business owners who use Trimmo.bio to boost their reach and
              earnings.
            </p>
            <ul className='list-disc pl-10 mt-5'>
              <li className='mb-3'>
                Trimmo.bio takes only a few minutes to create.
              </li>
              <li className='mb-3'>
                Add it to your Instagram bio to streamline your material.
              </li>
              <li className='mb-3'>
                Monetize and expand with solutions that are geared for success.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font mb-2 title w-full'>
            Take your Instagram game to the next level!
            </h2>
            <p className='mb-4'>
            Trimmo.bio is more than simply a link-in-bio tool; it's a full-featured platform for sharing, engaging, and expanding. Whether you're an influencer, creative, or store owner, Trimmo.bio is the simplest way to make your Instagram bio work for you.
            </p>
           <p className='mb-6'>Ready to get started? Register for free today</p>
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
