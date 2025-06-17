import React from 'react'
export const metadata = {
  title: "Trimmo.bio Services - E-commerce Solutions & Features",
  description: "Explore the benefits of Trimmo.bio services for businesses, improving productivity and efficiency with innovative solutions.",
};
const Page = () => {
  return (
    <>
      <div className="container flex flex-col gap-[80px] lg:gap-[120px] ">
        <div className="pt-[20px] sm:pt-[70px] md:pt-10 herosection">
          <div className="flex gap-10 flex-wrap xl:flex-nowrap items-center pt-10 w-100 justify-between">
            <div className="w-full xl:w-1/2">
              <h2 className="mb-6">
                Create and Showcase Your Products and Services with Trimmo.bio
              </h2>
              <p className="mb-5 text-[18px]">
                As a store owner, your goal is to engage with customers and drive sales effectively.
                Trimmo.bio provides a powerful and flexible platform to help you create and manage
                personalized links that promote your products and services while offering an
                enhanced customer experience.
              </p>
              <p className="mb-10 text-[18px]">
                By using Trimmo.bio, you can easily turn your product catalog and services into
                engaging, clickable links that connect with your audience in meaningful ways.
                Whether you run an e-commerce store, offer online services, or want to promote
                special offers, Trimmo.bio is designed to make it easy for store owners like you to
                showcase your products and services efficiently and effectively.
              </p>
              <button className="btn btn-black">Know More</button>
            </div>
            <div className="w-full xl:w-1/2 text-center">
              <img src="https://shopeasy.ai/img/about-us-2.webp" className="block mx-auto" />
            </div>
          </div>
        </div>
        <section className="flex items-center flex-wrap xl:flex-nowrap gap-10">
          <div className="w-full xl:w-1/2 order-2 xl:order-1 wow fadeInRight">
            <img
              src="https://shopeasy.ai/img/about-us-2.webp"
              alt="aboutStoreCreation"
              className="max-w-full block mx-auto"
            />
          </div>
          <div className="w-full xl:w-1/2 order-1 xl:order-2 wow fadeInLeft">
            <div>
              <h2 className="primary-font title w-full mb-4">
                Create Custom Product Links to Drive Sales
              </h2>
              <p className="info-text">
                With Trimmo.bio, you can create customized links for each of your products or
                services, mordriving e traffic and increasing conversions. Here’s how it works:
              </p>
              <h3 className="primary-font mt-4 lg:mt-8 text-base lg:text-xl">
                Customizable Product Links
              </h3>
              <p className="info-text mt-1 lg:mt-2">
                Easily create links that direct your audience to specific product pages, services,
                or offers on your website.
              </p>
              <h3 className="primary-font mt-6 text-base lg:text-xl">Personalized Store Display</h3>
              <p className="info-text mt-1 lg:mt-2">
                To grab your audience's attention, display your products with visually appealing
                thumbnails and descriptions. Each link can be customized to match the branding and
                aesthetic of your store.
              </p>
              <h3 className="primary-font mt-6 text-base lg:text-xl">Product Categories</h3>
              <p className="info-text mt-1 lg:mt-2">
                Organize your product offerings into categories to ensure your customers can easily
                navigate and find what they’re looking for, improving their shopping experience.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="primary-font title lg:w-[60%] text-center w-full mx-auto mb-4">
            Integrate Store Services into Your Bio-Link
          </h2>
          <div className="grid grid-cols-1 collective-apps wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-5 xl:gap-12">
            <div className="rounded-xl box overflow-hidden">
              <div className="bg-[#fff8dd] overflow-hidden">
                <img
                  src="https://shopeasy.ai/img/app-page-img/b2c.webp"
                  alt="app1Image"
                  className="object-cover inline-block w-full"
                />
              </div>
              <div className="p-5 gradient-yellow">
                <h3 className="text-lg lg:text-xl primary-font">Service Promotion Links</h3>
                <p className="text-[#6a6a74] info-text mt-3">
                  Promote your services by creating links that directly lead customers to service
                  booking pages, pricing, or consultation forms.
                </p>
              </div>
            </div>
            <div className="rounded-xl box overflow-hidden">
              <div className="overflow-hidden bg-[#dbffec]">
                <img
                  src="https://shopeasy.ai/img/app-page-img/b2b.webp"
                  alt="app2Image"
                  className="object-cover inline-block w-full"
                />
              </div>
              <div className="p-5 gradient-green">
                <h3 className="primary-font text-lg lg:text-xl">
                  Appointment Scheduling Integration
                </h3>
                <p className="text-[#6a6a74] info-text mt-3">
                  For store owners offering services, integrate your bio-link with booking platforms
                  like Calendly, Doodle, or your own system.
                </p>
              </div>
            </div>
            <div className="rounded-xl box overflow-hidden">
              <div className="overflow-hidden bg-[#e9e8ff]">
                <img
                  src="https://shopeasy.ai/img/app-page-img/retail.webp"
                  alt="app3Image"
                  className="object-cover inline-block w-full"
                />
              </div>
              <div className="p-5 gradient-purple">
                <h3 className="primary-font text-lg lg:text-xl">
                  Subscription and Membership Links
                </h3>
                <p className="text-[#6a6a74] info-text mt-3">
                  Create links for subscription-based services or memberships, allowing customers to
                  quickly sign up or get more information.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center flex-wrap xl:flex-nowrap gap-10">
          <div className="w-full xl:w-1/2 wow fadeInLeft">
            <div>
              <h2 className="primary-font title w-full mb-4">
                Boost Engagement with Interactive Features
              </h2>
              <p className="info-text">
                Trimmo.bio helps store owners enhance the customer experience by adding interactive
                features to their product and service links.
              </p>
              <h3 className="primary-font mt-4 lg:mt-4 text-base lg:text-xl">Gamified Links</h3>
              <p className="info-text mt-1 lg:mt-2">
                Add mini-games or exclusive offers to your product or service links to boost
                interaction and excitement.
              </p>
              <h3 className="primary-font mt-5 text-base lg:text-xl">AR Product Showcases</h3>
              <p className="info-text mt-1 lg:mt-2">
                Let your customers interact with your products through augmented reality (AR)
                features.
              </p>
              <h3 className="primary-font mt-5 text-base lg:text-xl">Exclusive Offers</h3>
              <p className="info-text mt-1 lg:mt-2">
                Create links that lead to exclusive deals for your customers, such as limited-time
                discounts.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/2 wow fadeInRight">
            <img
              src="https://shopeasy.ai/img/about-us-2.webp"
              alt="aboutStoreCreation"
              className="max-w-full block mx-auto"
            />
          </div>
        </section>
        <section className="flex items-center flex-wrap xl:flex-nowrap gap-10">
          <div className="w-full xl:w-1/2 order-2 xl:order-1 wow fadeInRight">
            <img
              src="https://shopeasy.ai/img/about-us-2.webp"
              alt="aboutStoreCreation"
              className="max-w-full block mx-auto"
            />
          </div>
          <div className="w-full xl:w-1/2 order-1 xl:order-2 wow fadeInLeft">
            <div>
              <h2 className="primary-font title w-full mb-4">
                Detailed Analytics for Product and Service Performance
              </h2>
              <p className="info-text">
                Trimmo.bio provides you with the ability to track the performance of each link you
                create.
              </p>
              <h3 className="primary-font mt-4 lg:mt-4 text-base lg:text-xl">
                Link Performance Analytics
              </h3>
              <p className="info-text mt-1 lg:mt-2">
                Track which product or service links are generating the most clicks and conversions,
                providing valuable insights into customer behavior.
              </p>
              <h3 className="primary-font mt-5 text-base lg:text-xl">
                Heatmap TrackingHeatmap Tracking
              </h3>
              <p className="info-text mt-1 lg:mt-2">
                See where visitors are clicking on your product links to better understand customer
                preferences and optimize your bio-link layout for better product visibility.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-wrap lg:flex-nowrap items-center pt-10 w-full justify-between mb-[80px] lg:mb-[120px]">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6">Get Started Today and Create Your Product Links</h2>
            <p className="mb-5 text-[18px]">
              With Trimmo.bio, store owners can create personalized, branded links that drive
              traffic, boost engagement, and increase sales for their products and services. By
              leveraging our innovative platform, you can take your store’s online presence to the
              next level and provide customers with a seamless, interactive, and personalized
              experience.
            </p>
            <p className="mb-10 text-[18px]">
              Start creating your product and service links today, and watch your business grow with
              Trimmo.bio!
            </p>
            <button className="btn btn-black">Join Now</button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="https://shopeasy.ai/img/about-us-1.webp" className="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Page
