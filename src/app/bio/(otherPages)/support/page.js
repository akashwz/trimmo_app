import React from 'react'
import { Gear } from 'react-bootstrap-icons'
export const metadata = {
  title: 'Join Our Community & Get Help',
  description:
    "Join our community to connect, share, and get help from like-minded individuals. Discover support and grow together. Join now!."
}
const Page = () => {
  return (
    <>
      <div className='container flex flex-col gap-[80px] lg:gap-[120px] '>
        <div className='pt-[20px] sm:pt-[70px] md:pt-10 herosection'>
          <div className='flex gap-10 flex-wrap xl:flex-nowrap items-center pt-10 w-100 justify-between'>
            <div className='w-full xl:w-1/2'>
              <h2 className='mb-6'>Community & Support Hub</h2>
              <p className='mb-5 text-[18px]'>
                Trimmo.bio is here to help you make the most of your experience.
                If you need help, motivation, or answers to issues, our
                Community & Support Hub is the place to go.
              </p>
              <button className='btn btn-black'>Know More</button>
            </div>
            <div className='w-full xl:w-1/2 text-center'>
              <img
                src='https://shopeasy.ai/img/cms-img-01.webp'
                className='block mx-auto'
              />
            </div>
          </div>
        </div>
        <section className='flex flex-col items-center flex-wrap xl:flex-nowrap'>
          <h2 className='text-center block mx-auto'>How We Support You</h2>
          <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-8'>
            <div className='trending-apps-box border'>
              <span className='choose-us-icon-box mb-4'>
                <Gear />
              </span>
              <span className='text-lg lg:text-xl block primary-font font-semibold'>
                Help Center
              </span>
              <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
                Explore our Help Center for step-by-step instructions,
                frequently asked questions, and ideas on how to get started and
                make the most of Trimmo.bio.
              </p>
            </div>
            <div className='trending-apps-box border'>
              <span className='choose-us-icon-box mb-4'>
                <Gear />
              </span>
              <span className='text-lg lg:text-xl block primary-font font-semibold'>
                Support Team
              </span>
              <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
                Do you need assistance? Our courteous support team is available
                throughout business hours to assist you with any problems or
                questions.
              </p>
            </div>
            <div className='trending-apps-box border'>
              <span className='choose-us-icon-box mb-4'>
                <Gear />
              </span>
              <span className='text-lg lg:text-xl block primary-font font-semibold'>
                Community Discussions
              </span>
              <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
                Connect with other Trimmo.bio users to exchange ideas, ask
                questions, and discover new ways to use your Trimmo.bio website.
              </p>
            </div>
          </div>
        </section>
        <section className='flex items-center flex-wrap lg:flex-nowrap gap-10'>
          <div className='w-full lg:w-1/2 order-2 lg:order-1 wow fadeInLeft'>
            <div>
              <h2 className='primary-font title w-full'>
                Resources to Explore
              </h2>
              <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
                Getting Started Guide
              </h3>
              <p className='info-text mt-1 lg:mt-2'>
                Perfect for novices who want to build up their own page.
              </p>
              <h3 className='primary-font mt-6 text-base lg:text-xl'>
                Knowledge Base
              </h3>
              <p className='info-text mt-1 lg:mt-2'>
                Always seek answers and solutions.
              </p>
              <h3 className='primary-font mt-6 text-base lg:text-xl'>
                Community Forums
              </h3>
              <p className='info-text mt-1 lg:mt-2'>
                Share and learn from other Trimmo.bio users.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 order-1 lg:order-2 wow fadeInRight'>
            <img
              src='https://shopeasy.ai/img/about-us-1.webp'
              alt='aboutStoreCreation'
              className='max-w-full block mx-auto'
            />
          </div>
        </section>
        <section className='mb-[80px] lg:mb-[120px]'>
          <div className='flex gap-10 flex-wrap xl:flex-nowrap items-center pt-10 w-100 justify-between'>
            <div className='w-full xl:w-1/2 text-center'>
              <img
                src='https://shopeasy.ai/img/cms-img-01.webp'
                className='block mx-auto'
              />
            </div>
            <div className='w-full xl:w-1/2'>
              <h2 className='mb-6'>Join the Trimmo.bio Community</h2>
              <p className='mb-5 text-[18px]'>
                Become part of a growing network of creators, brands, and
                influencers who use Trimmo.bio to share their stories and
                connect with their audiences.
              </p>
              <p className='mb-5 text-[18px]'>
                Let’s grow together! Visit the Help Center or connect with us
                for support
              </p>
              <button className='btn mt-5 btn-black'>JOIN US</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Page
