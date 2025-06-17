import { Gear } from 'react-bootstrap-icons'
export const metadata = {
  title: 'Advanced Features',
  description:
    "Discover advanced features that unlock powerful capabilities. Improve your website's functionality and improve performance with our cutting-edge tools."
}
const Page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]'>
      <div className='pt-[20px] container sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex gap-10 flex-wrap xl:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full xl:w-1/2'>
            <h2 className='mb-6'>
              Advanced Features to Boost Your Bio-Link Experience
            </h2>
            <p className='mb-5 text-[18px]'>
              At Trimmo.bio, we offer powerful features that go beyond
              traditional bio-links. Whether you're a content creator, small
              business, or large enterprise, our advanced tools are designed to
              boost engagement, drive growth, and provide valuable insights.
              Let’s explore the key features that set Trimmo.bio apart.
            </p>
            <button className='btn btn-black'>Know More</button>
          </div>
          <div className='w-full xl:w-1/2 text-center'>
            <img
              src='https://shopeasy.ai/img/cms-img-03.webp'
              className='block mx-auto'
            />
          </div>
        </div>
      </div>
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 wow fadeInRight'>
          <img
            src='https://shopeasy.ai/img/about-us-2.webp'
            alt='aboutStoreCreation'
            className='max-w-full inline-block'
          />
        </div>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font title w-full'>
              AI-Powered Enhancements
            </h2>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Smart Link Order Suggestions
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              AI analyzes user trends to recommend the optimal order of links,
              improving click-through rates.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              AI-Driven Content Captions
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Automatically generate compelling captions and summaries for your
              links to attract more attention.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Personalized Greeting Messages
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              AI delivers dynamic, behavior-driven greetings tailored to each
              visitor, improving user engagement.
            </p>
          </div>
        </div>
      </section>
      <section className='container'>
        <h2 className='mb-10 text-center'>Interactive and Gamified Features</h2>
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
              Custom Mini-Games
            </h4>
            <p>
              Integrate fun, customizable mini-games into your bio-link,
              enhancing user interaction and increasing return visits.
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
              Scratch Card for Exclusive Discounts
            </h4>
            <p>
              Add an element of surprise with scratch cards offering discounts
              or rewards to your visitors.
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
              Interactive Augmented Reality (AR)
            </h4>
            <p>
              Showcase products or services with AR experiences, offering users
              a unique and engaging way to interact with your content.
            </p>
          </div>
        </div>
      </section>
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font title w-full'>
              Sustainability and Social Impact
            </h2>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Eco-Friendly Metrics
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Show your commitment to sustainability with eco-friendly metrics,
              demonstrating how your platform usage supports green initiatives.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Charity Widgets
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Add charity widgets directly to your bio-link, allowing users to
              donate to causes you care about and drive social impact.
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 wow fadeInRight'>
          <img
            src='https://shopeasy.ai/img/about-us-3.webp'
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
            <h2 className='primary-font title mb-2 w-full'>
              Privacy and Security You Can Trust
            </h2>
            <p>
              Your security and privacy are our top priority. Trimmo.bio ensures
              a transparent and secure experience for both you and your
              visitors.
            </p>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Blockchain-Based Transparency
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Enjoy transparent donations and transactions, with blockchain
              ensuring accountability and security.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Enhanced Visitor Privacy
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Our platform prioritizes visitor privacy, offering opt-in tracking
              to ensure users' data is handled securely.
            </p>
          </div>
        </div>
      </section>
      <section className='overflow-hidden container choose-us'>
        <div className='w-full lg:w-[70%] wow fadeInUp mb-10 mx-auto text-center'>
          <h2 className='primary-font title'>
            Pro-Level Features for Businesses and Power Users
          </h2>
          <p className='w-full mx-auto info-text mt-4 inline-block'>
            Unlock professional-grade features with the Trimmo.bio Pro Plan.
            These tools are designed to optimize your performance, drive
            conversions, and elevate your branding
          </p>
        </div>
        <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-5'>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Heatmap Tracking
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Visualize where visitors engage most on your links with heatmaps,
              helping you make data-driven decisions.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Third-Party Analytics Integration
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Connect Trimmo.bio to Google Analytics, Facebook Pixel, and other
              platforms to track and optimize your performance.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Gear />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Funnel Analysis
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Optimize your conversion rates by analyzing the user journey from
              visit to action with funnel analytics.
            </p>
          </div>
        </div>
      </section>
      <section className='flex items-center container flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 wow fadeInLeft'>
          <div>
            <h2 className='primary-font title mb-2 w-full'>
              Customization Options
            </h2>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              Advanced CSS Support
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Take full control of your bio-link’s appearance with advanced CSS,
              allowing for tailored styling and design.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Custom Animations
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Make your bio-link visually engaging with custom animations that
              bring your links and content to life.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Personalized Subdomains
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Create a branded experience with a unique subdomain (e.g.,
              yourname.trimmo.bio) for seamless user interaction.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Branded QR Codes
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Easily connect offline and online worlds with custom-branded QR
              codes for your bio-links.
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
            <h2 className='primary-font title mb-2 w-full'>
              Third-Party Integrations
            </h2>
            <h3 className='primary-font mt-4 lg:mt-8 text-base lg:text-xl'>
              CRM Integrations
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Integrate with top CRM tools like HubSpot, Zoho, and others to
              streamline lead management and customer outreach.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Booking Platform Integration
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Seamlessly connect with booking platforms like Calendly and Doodle
              for appointment scheduling directly via your bio-link.
            </p>
            <h3 className='primary-font mt-6 text-base lg:text-xl'>
              Custom API Integrations
            </h3>
            <p className='info-text mt-1 lg:mt-2'>
              Leverage Trimmo.bio’s API for connecting your bio-link with custom
              tools and platforms tailored to your specific business needs.
            </p>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='flex gap-10 flex-wrap lg:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full lg:w-1/2'>
            <h2 className='mb-6'>Maximize Your Bio-Link with Trimmo.bio</h2>
            <p className='mb-5 text-[16px]'>
              Trimmo.bio is the ultimate bio-link platform for anyone looking to
              unlock advanced features, optimize engagement, and drive
              conversions. From AI-powered enhancements to pro-level
              customization, interactive tools, and in-depth analytics, we
              provide all the tools you need to grow your brand or business.
            </p>
            <p className='mb-5 text-[16px]'>
              Upgrade to the Pro Plan today and access an array of
              professional-grade tools that will take your bio-link to new
              heights!
            </p>
            <button className='btn btn-black'>Know More</button>
          </div>
          <div className='w-full lg:w-1/2 text-center'>
            <img
              src='https://shopeasy.ai/img/cms-img-03.webp'
              className='block mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
