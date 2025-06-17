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
      question: 'Connect Beyond the Character Limit',
      answer: [
        'Continue the conversation on Twitter to increase traffic to your most critical content.',
        'Allow your followers to explore your universe with a single click.'
      ]
    },
    {
      question: 'Promote Your Products and Deals',
      answer: [
        'Use multiple tweets to announce promotions, discounts, and affiliate deals.',
        'Accept money for bookings or services, and place a tip jar to collect tips or donations.'
      ]
    },
    {
      question: 'Data-Driven Growth',
      answer: [
        'Use an intuitive analytics dashboard to gain insights.',
        'Track clicks, engagement, and conversions to improve your approach and boost revenue.'
      ]
    },
    {
      question: 'A Mini Website in Your Bio',
      answer: [
        'Convert your bio link into a mini website in seconds.',
        'Post videos, display content, and invite your fans to directly support you.'
      ]
    }
  ]
  return (
    <div className="flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]">
      <div className="pt-[20px] container sm:pt-[70px] md:pt-10 herosection">
        <div className="flex flex-wrap lg:flex-nowrap items-center pt-10 w-full justify-between">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6">Explore the Power of Your Twitter Profile with Trimmo.bio</h2>
            <p className="mb-5 text-[18px]">
              Trimmo.bio, the ultimate link-in bio solution for creators, influencers, and
              companies, can elevate your Twitter account to new heights. Go beyond 280 characters
              and connect your audience to all you do in a single, straightforward link.
            </p>
            <button className="btn btn-black">Know More</button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="https://shopeasy.ai/img/about-us-1.webp" className="" />
          </div>
        </div>
      </div>
      <section className="overflow-hidden container choose-us">
        <div className=" w-full wow fadeInUp mb-10 mx-auto text-center">
          <h2 className="primary-font title">Why Trimmo.bio is Perfect for Twitter?</h2>
        </div>
        <div className="grid grid-cols-1 wow fadeInUp md:grid-cols-2 mt-8 gap-8">
          <div className="trending-apps-box border">
            <span className="choose-us-icon-box mb-4">
              <Gear />
            </span>
            <span className="text-lg lg:text-xl block primary-font font-semibold">
              Say More with Every Tweet
            </span>
            <p className="mt-3 text-[14px] lg:text-base text-[#6a6a74]">
              With Trimmo.bio, you are not just 280 characters. Share blogs, product pages, social
              media platforms, albums, podcasts, and other content with a single link.
            </p>
          </div>
          <div className="trending-apps-box border">
            <span className="choose-us-icon-box mb-4">
              <Gear />
            </span>
            <span className="text-lg lg:text-xl block primary-font font-semibold">
              Grow Your Following
            </span>
            <p className="mt-3 text-[14px] lg:text-base text-[#6a6a74]">
              Curate a collection of six great tweets to convert visitors into fans. Share your
              profile and videos with a few clicks.
            </p>
          </div>
        </div>
      </section>
      <section className="work overflow-hidden">
        <div className="grid wow fadeInUp grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 container">
          <div className="w-full order-2 flex items-center justify-center h-auto lg:order-1">
            <img src="https://shopeasy.ai/img/about-us-2.webp" className="" />
          </div>
          <div className="order-1 lg:order-2">
            <h2>Features That Boost Your Twitter Profile</h2>
            <div className="divide-y divide-slate-200 mt-5 space-y-2">
              <div className="accordion">
                {faqData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <button
                      className="accordion-button"
                      aria-expanded={expandedIndex === index ? "true" : "false"}
                      onClick={() => toggleAccordion(index)}
                    >
                      <p className={`accordion-title text-base font-semibold`}>{item.question}</p>
                      <span
                        aria-hidden="true"
                        className={`icon transition-all duration-200 ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          width="23px"
                          height="23px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 10L12 15L17 10"
                            stroke={"#222222"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`accordion-content ${expandedIndex === index ? "expanded" : ""}`}
                    >
                      <ul className="list-disc pl-10 flex flex-col gap-2">
                        {item.answer?.map((x, index) => {
                          return (
                            <li key={index} className="list-disc">
                              {x}
                            </li>
                          );
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
      <section className="flex items-center container flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-1/2 wow fadeInLeft">
          <div>
            <h2 className="primary-font title w-full">Unlock Revenue Opportunities</h2>
            <h3 className="primary-font mt-4 lg:mt-8 text-base lg:text-xl">
              Get Paid Directly on Twitter
            </h3>
            <p className="mt-1 lg:mt-2">
              Easily accept payments on Twitter and integrate Commerce Links with your store for
              smooth connectivity. Accept tips, donations, and payments for your services with ease.
            </p>
            <h3 className="primary-font mt-6 text-base lg:text-xl">Add Videos and Forms</h3>
            <p className="mt-1 lg:mt-2">
              Directly share videos from YouTube, Twitch, TikTok, or Vimeo on your page. Create
              forms to capture visitor email addresses, phone numbers, and messages.
            </p>
            <h3 className="primary-font mt-6 text-base lg:text-xl">
              Never Update Your Bio Link Again
            </h3>
            <p className="mt-1 lg:mt-2">
              Use your Trimmo.bio URL to keep your Twitter profile up to date. Share your most
              recent blogs, videos, music, or promotions without making frequent changes.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 wow fadeInRight">
          <img
            src="https://shopeasy.ai/img/about-us-2.webp"
            alt="aboutStoreCreation"
            className="max-w-full inline-block"
          />
        </div>
      </section>
      <section className="flex items-center container flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 wow fadeInRight">
          <img
            src="https://shopeasy.ai/img/about-us-2.webp"
            alt="aboutStoreCreation"
            className="max-w-full inline-block"
          />
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 wow fadeInLeft">
          <div>
            <h2 className="primary-font mb-2 title w-full">Why Creators Love Trimmo.bio</h2>
            <ul className="list-disc pl-10 mt-5">
              <li className="mb-3">Understand what your followers are engaged about.</li>
              <li className="mb-3">Accept payments and earn money immediately through Twitter.</li>
              <li className="mb-3">Easily incorporate videos and podcasts.</li>
              <li className="mb-3">Integrate your stores to simply boost sales.</li>
              <li className="mb-3">Collect email and SMS users to expand your network.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex items-center container flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-1/2 wow fadeInLeft">
          <div>
            <h2 className="primary-font mb-2 title w-full">Transform Your Twitter Profile Today</h2>
            <p className="mb-4">
              Trimmo.bio allows your followers to easily see everything you're doing. Build
              engagement, drive traffic, and monetize your efforts while keeping your Twitter bio
              clean and simple.
            </p>
            <p className="mb-6">Sign up for free today and start growing your Twitter presence!.</p>
            <button className="btn-black">Join Now</button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 wow fadeInRight">
          <img
            src="https://shopeasy.ai/img/about-us-2.webp"
            alt="aboutStoreCreation"
            className="max-w-full inline-block"
          />
        </div>
      </section>
    </div>
  );
}

export default Page
