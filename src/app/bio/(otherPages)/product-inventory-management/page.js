import Link from 'next/link'
import React from 'react'
import { HandThumbsUp, Hash } from 'react-bootstrap-icons'
export const metadata = {
  title: 'Product Inventory Management ',
  description:
    "Optimize product inventory management with simple solutions. Optimize stock control, reduce errors, and increase efficiency in your organization immediately."
}
const Page = () => {
  return (
    <div className="flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]">
      <div className="pt-[20px] container sm:pt-[70px] md:pt-10 herosection">
        <div className="flex flex-wrap lg:flex-nowrap items-center pt-10 w-full justify-between">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-6">Product Inventory Management</h1>
            <p className="mb-5 text-[18px]">
              Trimmo.bio's powerful inventory system allows you to effortlessly manage your
              products. Whether you sell physical or digital products, we make it simple to keep
              track of your stock and sales.
            </p>
            <button className="btn btn-black">Know More</button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="https://shopeasy.ai/img/about-us-1.webp" className="" />
          </div>
        </div>
      </div>
      <section className="container">
        <h2 className="text-center mb-10">Key Features</h2>
        <div className="grid grid-cols-2 gap-10">
          <div className="w-full wow fadeInRight">
            <div className="flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start">
              <div className="min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white">
                <Hash className="w-10 h-10" />
              </div>
              <div className="text-[16px] space-y-2.5">
                <h3 className="text-lg lg:text-3xl block primary-font">Real-Time Tracking</h3>
                <p className="info-text">
                  Check your product's availability in real-time to avoid overselling or missing a
                  sales opportunity.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full wow fadeInRight">
            <div className="flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start">
              <div className="min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white">
                <Hash className="w-10 h-10" />
              </div>
              <div className="text-[16px] space-y-2.5">
                <h3 className="text-lg lg:text-3xl block primary-font">Organized Inventory</h3>
                <p className="info-text">
                  Simple, easy tools built for manufacturers and small organizations allow you to
                  classify and manage resources easily.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full wow fadeInRight">
            <div className="flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start">
              <div className="min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white">
                <Hash className="w-10 h-10" />
              </div>
              <div className="text-[16px] space-y-2.5">
                <h3 className="text-lg lg:text-3xl block primary-font">Limited Edition Products</h3>
                <p className="info-text">
                  Highlight special, one-time items with ease and track their availability
                  instantly.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full wow fadeInRight">
            <div className="flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start">
              <div className="min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white">
                <Hash className="w-10 h-10" />
              </div>
              <div className="text-[16px] space-y-2.5">
                <h3 className="text-lg lg:text-3xl block primary-font">Seamless Updates</h3>
                <p className="info-text">
                  Make changes to product specifications or stock levels in seconds, all from your
                  dashboard.
                </p>
              </div>
            </div>
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
                Ready to take control of your inventory?
              </span>
              <p className="info-text text-[#6a6a74]">
                Get started with Trimmo.bio today and transform the way you manage your eCommerce
                store!
              </p>
            </div>
          </div>
          <div className="min-w-[200px]">
            <Link className="btn btn-black inline-flex" href="/register">
              Register Now
            </Link>
          </div>
        </div>
      </section>
      <section className="container overflow-hidden chooseUs ">
        <div className="flex flex-wrap lg:flex-nowrap wow fadeInUp items-center w-full mt-4 gap-12">
          <div className="w-full lg:w-1/2">
            <div className="box1 flex flex-col justify-between">
              <div>
                <h2 className="primary-font title w-full">Why Choose Trimmo.bio?</h2>
                <p className="mt-2">
                  Get started today and let Trimmo.bio elevate your online presence
                </p>
              </div>
              <div className="mt-8">
                <div className="text-[16px] flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-white">
                    <Hash className="w-6 h-6" />
                  </div>
                  <p className="info-text mt-2">Remove manual tracking errors.</p>
                </div>
                <div className="text-[16px] mt-5 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-white">
                    <Hash className="w-6 h-6" />
                  </div>
                  <p className="info-text mt-2">
                    Scale your store effortlessly as your product selection expands.
                  </p>
                </div>
                <div className="text-[16px] mt-5 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-white">
                    <Hash className="w-6 h-6" />
                  </div>
                  <p className="info-text mt-2">
                    I concentrate on sales as we cope with inventory complications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img alt="marketingImage" src="https://shopeasy.ai/img/cms-img-03.webp" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page
