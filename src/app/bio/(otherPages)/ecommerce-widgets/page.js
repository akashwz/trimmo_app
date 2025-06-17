'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowRight, Gear, HandThumbsUp } from 'react-bootstrap-icons'
// export const metadata = {
//   title: 'E-commerce Widgets - Easily on Trimmo.bio',
//   description:
//     "Add e-commerce widgets effortlessly on Trimmo.bio. Boost your online store's functionality and improve user engagement with seamless integration."
// }
const Page = () => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const toggleAccordion = index => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index))
  }
  const faqData = [
    {
      question: 'Real-Time Analytics',
      answer: [
        'Track page views, clicks, revenue, and audience engagement in real time.'
      ]
    },
    {
      question: 'Inventory Management',
      answer: ['Organize your supplies and manage inventory effectively.']
    },
    {
      question: 'Multi-Language Support',
      answer: [
        'AI-powered translation allows you to reach a global audience with your diagnosis.'
      ]
    },
    {
      question: 'Discount Codes',
      answer: [
        'Increase sales by providing personalized discounts to followers.'
      ]
    },
    {
      question: 'Video Commerce',
      answer: [
        'Use product videos to enhance the purchasing experience and provide context.'
      ]
    },
    {
      question: 'Flexible Delivery Options',
      answer: [
        'Provide different delivery options and keep everything under control with real-time tracking.'
      ]
    }
  ]
  return (
    <>
      <div className="flex flex-col gap-[80px] lg:gap-[120px] mb-[80px] lg:mb-[120px]">
        <div className="pt-[20px] container sm:pt-[70px] md:pt-10 herosection">
          <div className="flex flex-wrap lg:flex-nowrap items-center pt-10 w-full justify-between">
            <div className="w-full lg:w-1/2">
              <h1 className="mb-6">One Link. Endless Possibilities</h1>
              <p className="mb-5 text-[18px]">
                Show off your Products, Share your story. Expand sales with one clean link-in bio.
              </p>
              <button className="btn btn-black">Know More</button>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="https://shopeasy.ai/img/about-us-2.webp" className="" />
            </div>
          </div>
        </div>
        <section className="container">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap items-center pt-10 w-100 justify-between">
            <div className="w-full order-2 lg:order-1 lg:w-1/2">
              <img src="https://shopeasy.ai/img/about-us-2.webp" className="" />
            </div>
            <div className="w-full order-1 lg:order-2 lg:w-1/2">
              <h2 className="mb-3">Your Personalized Storefront</h2>
              <p className="mb-5">
                Use your unique Trimmo.bio URL to create a storefront that works for you. Display
                your best Products, highlight new trends, and distribute updates with ease.
              </p>
              <span className="font-medium mb-4 block">Example URLs:</span>
              <ul className="list-disc m-0 pl-10 flex flex-col gap-2">
                <li>trimmo.bio/yourbrand</li>
                <li>trimmo.bio/shopname</li>
                <li>trimmo.bio/creatorname</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="container">
          <h2 className="text-center w-full mx-auto lg:w-[60%] mb-10">
            What You Can Do with Trimmo.bio
          </h2>
          <div className="grid work grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <div
              className="work-box gap-3 wow fadeInUp flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(330deg, rgb(219, 255, 236) 0%, rgb(255, 255, 255) 50%)",
              }}
            >
              <div className="bg-[#4ecc88]  w-[50px] h-[50px] flex items-center justify-center rounded-full">
                <Gear className="w-5 h-5 text-white" />
              </div>
              <h4 className="primary-font text-base lg:text-xl text-left">
                Share Everything You Are
              </h4>
              <p className="info-text">
                Include links to your items and podcasts. Keep everything your audience needs in one
                location.
              </p>
              <div>
                <button className="relative read-more job-3">
                  Get Started
                  <span className="absolute right-1 top-1 bg-[#4ecc88] rounded-full z-10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-6 text-white" />
                  </span>
                </button>
              </div>
            </div>
            <div
              className="work-box gap-3 wow fadeInUp flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(330deg, rgb(255, 250, 230) 0%, rgb(255, 255, 255) 50%)",
              }}
            >
              <div className="bg-[#e6c961]  w-[50px] h-[50px] flex items-center justify-center rounded-full">
                <Gear className="w-5 h-5 text-white" />
              </div>
              <h4 className="primary-font text-base lg:text-xl text-left">
                Sell Physical & Digital Products
              </h4>
              <p className="info-text">
                Make an effort to sell real or digital goods, such as handmade jewelry, art prints,
                apparel, or unique e-books.
              </p>
              <div>
                <a
                  href="https://admin.shopeasy.ai/register"
                  target="_blank"
                  className="relative read-more job-1"
                >
                  Get Started
                  <span className="absolute right-1 top-1 bg-[#e6c961] rounded-full z-10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-6 text-white" />
                  </span>
                </a>
              </div>
            </div>
            <div
              className="work-box gap-3 wow fadeInUp flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(330deg, rgb(233, 232, 255) 0%, rgb(255, 255, 255) 50%)",
              }}
            >
              <div className="bg-[#9d9afe]  w-[50px] h-[50px] flex items-center justify-center rounded-full">
                <Gear className="w-5 h-5 text-white" />
              </div>
              <h4 className="primary-font text-base lg:text-xl text-left">Grow Your Audience</h4>
              <p className="info-text">
                Create email signups or forms to generate leads and establish a loyal consumer base.
              </p>
              <div>
                <button className="relative read-more job-2">
                  Get Started
                  <span className="absolute right-1 top-1 bg-[#9d9afe] rounded-full z-10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-6 text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="work container overflow-hidden">
          <div className="grid wow fadeInUp grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="w-full order-2 flex items-center justify-center h-full lg:order-1">
              <img src="https://shopeasy.ai/img/about-us-2.webp" className="" />
            </div>
            <div>
              <h2>Why Choose Trimmo.bio?</h2>
              <div className="divide-y divide-slate-200 mt-3 space-y-2">
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
        <section className="container">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap items-center pt-10 w-100 justify-between">
            <div className="w-full order-2 lg:order-1 lg:w-1/2">
              <img src="https://shopeasy.ai/img/about-us-2.webp" className="" />
            </div>
            <div className="w-full order-1 lg:order-2 lg:w-1/2">
              <h2 className="mb-3">Join a Thriving Creator Community</h2>
              <p className="mb-5">
                Trimmo.bio is trusted by manufacturers, entrepreneurs, and businesses to help them
                navigate the e-commerce landscape.
              </p>
              <span className="font-medium mb-4 block">Some of our creators include:</span>
              <ul className="list-disc m-0 pl-10 flex flex-col gap-2">
                <li>trimmo.bio/creativestore</li>
                <li>trimmo.bio/bestdigital</li>
                <li>trimmo.bio/artbyme</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="max-w-screen bg-white py-8">
          <div className="container flex items-center gap-5 sm:gap-10 justify-between flex-wrap md:flex-nowrap">
            <div className="flex items-center gap-5 flex-grow flex-wrap sm:flex-nowrap">
              <div className="icon-box min-w-[65px] min-h-[65px] w-16 h-16 rounded-full inline-flex items-center justify-center bg-[#f1f0e6]">
                <HandThumbsUp className="w-8 h-8" />
              </div>
              <div>
                <span className="text-lg mb-1 lg:text-2xl block primary-font font-semibold">
                  Create Your Trimmo.bio Today
                </span>
                <p className="info-text text-[#6a6a74]">
                  A link that connects all of your activities. Get your own Trimmo.bio for free and
                  take your eCommerce to the next level.
                </p>
              </div>
            </div>
            <div className="min-w-[200px]">
              <Link className="btn btn-black inline-flex" href="/register">
                Get Started Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Page
