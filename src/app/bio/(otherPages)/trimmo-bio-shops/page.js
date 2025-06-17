import Link from 'next/link'
import React from 'react'
import { ChatDots, Hash, People, QrCode } from 'react-bootstrap-icons'

const Page = () => {
  return (
    <div className="container flex flex-col gap-[80px] lg:gap-[120px] ">
      <div className="pt-[20px] sm:pt-[70px] md:pt-10 herosection">
        <div className="flex flex-wrap lg:flex-nowrap items-center pt-10 w-full justify-between">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-6">Manage Your Profile with a Shop</h1>
            <p className="mb-5 text-[18px]">
              Boost your online presence using Trimmo.bio. An innovative link-in-bio solution
              intended for creators, corporations, and influencers. Share your content, showcase
              products, and direct your audience to everything you have to offer with a single link.
            </p>
            <Link href={"/register"} className="btn btn-black inline-block">
              Create Profile
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="https://shopeasy.ai/img/about-us-2.webp" className="" />
          </div>
        </div>
      </div>
      <section className="flex flex-wrap xl:flex-nowrap gap-10">
        <div className="w-full xl:w-1/2 wow fadeInRight">
          <div className="flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start">
            <div className="min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white">
              <Hash className="w-10 h-10" />
            </div>
            <div className="text-[16px] space-y-2.5">
              <h3 className="text-lg lg:text-3xl block primary-font">
                Create & Manage Your Shop – All in One Place
              </h3>
              <p className="info-text">
                TrimmoBio allows you to create your free online shop and promote products directly
                on your link-in-bio! From promoting your favorite affiliate items to selling your
                merchandise, whether you're a content creator, influencer, YouTuber, blogger,
                artist, or entrepreneur, this is the simplest way to sell products, promote
                businesses, and manage your links.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 wow fadeInRight">
          <div className="flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start">
            <div className="min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white">
              <Hash className="w-10 h-10" />
            </div>
            <div className="text-[16px] space-y-2.5">
              <h3 className="text-lg lg:text-3xl block primary-font">
                Exclusive Partnership with Shopeasy.ai
              </h3>
              <p className="info-text">
                We are one of the most valuable partners with Shopeasy.ai to provide an outstanding
                shopping experience! You can set up a free shop inside TrimmoBio or link to an
                existing Shopeasy shop for quick product visibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full order-2 lg:order-1 lg:w-1/2 wow fadeInRight">
          <img
            src="https://shopeasy.ai/img/about-us-2.webp"
            alt="aboutStoreCreation"
            className="max-w-full inline-block"
          />
        </div>
        <div className="w-full order-1 lg:order-2 lg:w-1/2 wow fadeInLeft">
          <div>
            <h2 className="primary-font title w-full">Why Use TrimmoBio Shops?</h2>
            <h3 className="primary-font mt-4 lg:mt-6 text-base lg:text-xl">
              Set up your shop in seconds
            </h3>
            <p className="info-text mt-1 lg:mt-2">No coding or design skills are required.</p>
            <h3 className="primary-font mt-6 text-base lg:text-xl">
              Display & manage products easily
            </h3>
            <p className="info-text mt-1 lg:mt-2">
              List products directly from your Shopeasy shop.
            </p>
            <h3 className="primary-font mt-6 text-base lg:text-xl">
              One-click shopping experience
            </h3>
            <p className="info-text mt-1 lg:mt-2">Customers may easily browse and buy.</p>
            <h3 className="primary-font mt-6 text-base lg:text-xl">Easy checkout redirection</h3>
            <p className="info-text mt-1 lg:mt-2">
              When customers click "Add to Cart," they are redirected to your main Shopeasy shop.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-[80px] lg:mb-[120px]">
        <h2 className="w-full text-center mx-auto lg:w-[60%]">
          Boost Sales & Engagement Effortlessly
        </h2>
        <div className="grid work grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div
            className="work-box gap-3 wow fadeInUp flex flex-col justify-between"
            style={{
              background: "linear-gradient(330deg, rgb(219, 255, 236) 0%, rgb(255, 255, 255) 50%)",
            }}
          >
            <div className="bg-[#4ecc88]  w-[50px] h-[50px] flex items-center justify-center rounded-full">
              <ChatDots className="w-5 h-5 text-white" />
            </div>
            <h4 className="primary-font text-base lg:text-xl text-left">Maximize conversions</h4>
            <p className="info-text">Convert your audience into customers right from your bio.</p>
          </div>
          <div
            className="work-box gap-3 wow fadeInUp flex flex-col justify-between"
            style={{
              background: "linear-gradient(330deg, rgb(255, 250, 230) 0%, rgb(255, 255, 255) 50%)",
            }}
          >
            <div className="bg-[#e6c961]  w-[50px] h-[50px] flex items-center justify-center rounded-full">
              <People className="w-5 h-5 text-white" />
            </div>
            <h4 className="primary-font text-base lg:text-xl text-left">
              Perfect for influencers & brands
            </h4>
            <p className="info-text">Monetize your content with a shoppable profile.</p>
          </div>
          <div
            className="work-box gap-3 wow fadeInUp flex flex-col justify-between"
            style={{
              background: "linear-gradient(330deg, rgb(233, 232, 255) 0%, rgb(255, 255, 255) 50%)",
            }}
          >
            <div className="bg-[#9d9afe]  w-[50px] h-[50px] flex items-center justify-center rounded-full">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <h4 className="primary-font text-base lg:text-xl text-left">Share via QR Code</h4>
            <p className="info-text">Let customers access your Shop with a simple scan.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page
