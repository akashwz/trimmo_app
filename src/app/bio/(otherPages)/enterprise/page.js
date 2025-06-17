import React from 'react'
export const metadata = {
  title: 'Trimmo.bio for Enterprises, Businesses, and Agencies',
  description:
    "Trimmo.bio offers designed solutions for enterprises, businesses, and agencies to manage and grow their e-commerce platforms seamlessly."
}
const Page = () => {
  return (
    <div className='container flex flex-col gap-[80px] lg:gap-[120px] '>
      <div className='pt-[20px] sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h1 className='mb-6'>Trimmo.bio for Enterprises</h1>
            <p className='mb-5 text-[18px]'>
              Are you a business or agency managing a big Group of brands,
              clients, or talent? Trimmo.bio is a great option for businesses
              wishing to streamline their LinkedIn bio management and generate
              outcomes at scale.
            </p>
            <p className='mb-10 text-[18px]'>
              Trimmo.bio provides tools to manage your whole profile, whether
              you represent a powerful person, many business divisions, or a
              portfolio of worldwide brands.
            </p>
            <button className='btn btn-black'>Know More</button>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src='https://shopeasy.ai/img/about-us-1.webp' className='' />
          </div>
        </div>
      </div>
      <section>
        <h2 className='text-center w-full lg:w-[60%] mb-10 mx-auto'>
          Why Choose Trimmo.bio for Enterprises?
        </h2>
        <div className='flex items-center flex-wrap lg:flex-nowrap gap-10'>
          <div className='w-full order-2 lg:order-1 lg:w-1/2 wow fadeInRight'>
            <img
              src='https://shopeasy.ai/img/about-us-2.webp'
              alt='aboutStoreCreation'
              className='max-w-full inline-block'
            />
          </div>
          <div className='w-full order-1 lg:order-2 lg:w-1/2 wow fadeInLeft'>
            <div>
              <h3 className='primary-font text-base lg:text-xl'>
                Centralized Dashboard
              </h3>
              <p className='mt-1'>
                Manage many Trimmo.bio profiles from a single, consolidated
                dashboard. No more accounts; arrange everything in one spot.
              </p>
              <h3 className='primary-font mt-4 text-base lg:text-xl'>
                Flexible Invoicing
              </h3>
              <p className='mt-1'>
                Pay all profiles with a single invoice. Simplify billing and
                cost administration for your organization.
              </p>
              <h3 className='primary-font mt-4 text-base lg:text-xl'>
                Scalability
              </h3>
              <p className='mt-1'>
                Start with the profile you want today. And more as your business
                expands. Trimmo.bio adjusts to your changing needs.
              </p>
              <h3 className='primary-font mt-4 text-base lg:text-xl'>
                Team Collaboration
              </h3>
              <p className='mt-1'>
                Assign team members to administer individual profiles or conduct
                audits on numerous accounts using role-based access.
              </p>
              <h3 className='primary-font mt-4 text-base lg:text-xl'>
                Improve Customization
              </h3>
              <p className='mt-1'>
                Advanced branding features. To get advanced statistics, set a
                custom domain location and ensure consistency throughout your
                organization's accounts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex items-center flex-wrap lg:flex-nowrap gap-10'>
          <div className='w-full lg:w-1/2 wow fadeInLeft'>
            <div>
              <h2 className='primary-font'>Who Is It For?</h2>
              <ul className='list-disc m-0 flex flex-col gap-4 mt-5'>
                <li className='info-text'>
                  Agencies managing influencer portfolios or brand campaigns.
                </li>
                <li className='info-text'>
                  Large global brands with multiple product lines, or regional
                  brands with teams at the group level.
                </li>
                <li className='info-text'>
                  Entities that help franchisees or small company groups by
                  giving funding.
                </li>
                <li className='info-text'>
                  Talent executives oversee the services that an artist, other
                  creative person, or actor may require.
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full lg:w-1/2 wow fadeInRight'>
            <img
              src='https://shopeasy.ai/img/cms-img-01.webp'
              alt='aboutStoreCreation'
              className='max-w-full inline-block'
            />
          </div>
        </div>
      </section>
      <section>
        <div className='flex items-center flex-wrap lg:flex-nowrap gap-10'>
          <div className='w-full order-2 lg:order-1 lg:w-1/2 wow fadeInRight'>
            <img
              src='https://shopeasy.ai/img/cms-img-01.webp'
              alt='aboutStoreCreation'
              className='max-w-full inline-block'
            />
          </div>
          <div className='w-full order-1 lg:order-2 lg:w-1/2 wow fadeInLeft'>
            <div>
              <h2 className='primary-font'>How to Get Started</h2>
              <ul className='list-disc m-0 flex flex-col gap-4 mt-5'>
                <li className='info-text'>
                  Trimmo.bio saves enterprises and agencies time because of its
                  exceptional value. Construct, assess, and optimize connections
                  in bios while maintaining overall brand consistency across all
                  platforms.
                </li>
                <li className='info-text'>
                  If you're ready to sign up for multiple Trimmo.bio profiles,
                  fill out the form below, and our team will get back to you
                  promptly with a tailored plan.
                </li>
              </ul>
              <button className='btn-black mt-8'>Clain Your Url</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
