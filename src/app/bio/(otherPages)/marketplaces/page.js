import Link from 'next/link'
import {
  HandThumbsUp,
  Hash,
  MusicNoteBeamed,
  MusicNoteList,
  Snapchat,
  Spotify,
  TicketDetailed,
  Tiktok,
  Twitter,
  Youtube
} from 'react-bootstrap-icons'
export const metadata = {
  title: 'Trimmo.bio Marketplace ',
  description:
    "Explore Trimmo.bio Marketplace, the ultimate hub for personalized links and seamless online connections. Boost your digital presence today!."
}
const Page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]'>
      <div className='pt-[20px] container sm:pt-[70px] md:pt-10 herosection'>
        <div className='flex gap-10 flex-wrap xl:flex-nowrap items-center pt-10 w-100 justify-between'>
          <div className='w-full xl:w-1/2'>
            <h2 className='mb-6'>Marketplace</h2>
            <p className='mb-5 text-[18px]'>
              Communicate, share, and grow with the best internet experience
              available, all in one spot. Trimmo.bio Marketplace provides
              sophisticated tools, integrations, and Link Apps to help you build
              your profile.
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
      <section className='overflow-hidden container choose-us'>
        <div className='w-full wow fadeInUp mb-10 mx-auto text-center'>
          <h2 className='primary-font title'>
            Search Link Apps and Integrations
          </h2>
          <p className='w-full lg:w-[60%] mx-auto info-text mt-4 inline-block'>
            Find the best app to promote your business, expand your audience,
            and simplify your life.
          </p>
        </div>
        <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-8'>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Snapchat />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Snapchat
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Snapchat allows you to easily share your favorite moments by
              promoting your public profile.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Tiktok />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              TikTok
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Show your viral TikToks and expand your reach directly from
              Trimmo.bio.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Youtube />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              YouTube
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Showcasing your YouTube videos can help you grow more subscribers.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Twitter />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              X (formerly Twitter)
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Link your content to the X feed to engage followers.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <MusicNoteBeamed />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Audiomack
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Use an Audiomack player to stream and share your music.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <MusicNoteList />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              SoundCloud
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Install SoundCloud on your Trimmo.bio to make your tunes more
              discoverable.
            </p>
          </div>
        </div>
      </section>
      <section className='overflow-hidden container chooseUs'>
        <div className='flex flex-wrap lg:flex-nowrap wow fadeInUp items-center w-full mt-4 gap-12'>
          <div className='w-full lg:w-1/2'>
            <img
              src='https://shopeasy.ai/img/cms-img-03.webp'
              alt='marketingImage'
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='box1 flex flex-col justify-between'>
              <div>
                <h2 className='primary-font title w-full'>
                  Make and Collect Money
                </h2>
                <p className='info-text'>
                  Unlock your earning potential with apps that help you generate
                  money, sell, and succeed
                </p>
              </div>
              <div className='mt-10'>
                <div className='flex items-start'>
                  <div className='min-w-[44px] min-h-[44px] bg-[#fff] rounded-full flex items-center justify-center'>
                    <Hash className='w-7 h-7' />
                  </div>
                  <div className='text-[16px] ms-3'>
                    <h5 className='block font-bold text-sm md:text-base lg:text-[20px] '>
                      GoFundMe
                    </h5>
                    <p className='info-text mt-2'>
                      Make a difference by supporting worthy causes.
                    </p>
                  </div>
                </div>
                <hr className='my-7' />
                <div className='flex items-start'>
                  <div className='min-w-[44px] min-h-[44px] bg-[#fff] rounded-full flex items-center justify-center'>
                    <Hash className='w-7 h-7' />
                  </div>
                  <div className='text-[16px] ms-3'>
                    <h5 className='block font-bold text-sm md:text-base lg:text-[20px] '>
                      Spring
                    </h5>
                    <p className='info-text mt-2'>
                      Display your products with ease to promote sales.
                    </p>
                  </div>
                </div>
                <hr className='my-7' />
                <div className='flex items-start'>
                  <div className='min-w-[44px] min-h-[44px] bg-[#fff] rounded-full flex items-center justify-center'>
                    <Spotify className='w-7 h-7' />
                  </div>
                  <div className='text-[16px] ms-3'>
                    <h5 className='block font-bold text-sm md:text-base lg:text-[20px] '>
                      Shopify
                    </h5>
                    <p className='info-text mt-2'>
                      Integrate Shopify products and transform your profile into
                      a marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-screen bg-white py-8'>
        <div className='container flex items-center gap-5 sm:gap-10 justify-between flex-wrap md:flex-nowrap'>
          <div className='flex items-center gap-5 flex-grow flex-wrap sm:flex-nowrap'>
            <div className='icon-box min-w-[65px] min-h-[65px] w-16 h-16 rounded-full inline-flex items-center justify-center bg-[#f1f0e6]'>
              <HandThumbsUp className='w-8 h-8' />
            </div>
            <div>
              <span className='text-lg mb-1 lg:text-2xl block primary-font font-semibold'>
                Join the Developer Program
              </span>
              <p className='info-text text-[#6a6a74]'>
                We are expanding our API SDK! Developers can now implement
                connectors with Trimmo.bio to further integrate the digital
                world.
              </p>
            </div>
          </div>
          <div className='min-w-[200px]'>
            <Link href={'/register'} className='btn btn-black inline-flex'>
              Register Now
            </Link>
          </div>
        </div>
      </section>
      <section className='overflow-hidden container choose-us'>
        <div className='w-full wow fadeInUp mb-10 mx-auto text-center'>
          <h2 className='primary-font title'>Grow Your Following</h2>
          <p className='w-full lg:w-[60%] mx-auto info-text mt-4 inline-block'>
            Make your profile a magnet for networking and community-building.
          </p>
        </div>
        <div className='grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-8'>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Snapchat />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Snapchat
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Your Snapchat Public Profile can help you gain more visibility.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Tiktok />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Reddit
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Display your Reddit profile and content for quick reference.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <TicketDetailed />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Contact Details
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Make it easy for visitors to obtain your contact information.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <Twitter />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Community
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Trimmo.bio allows you to easily create and manage an SMS
              subscriber list.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <MusicNoteBeamed />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Gleam
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Begin generating campaigns that will increase your audience and
              interest.
            </p>
          </div>
          <div className='trending-apps-box border'>
            <span className='choose-us-icon-box mb-4'>
              <MusicNoteList />
            </span>
            <span className='text-lg lg:text-xl block primary-font font-semibold'>
              Contact Form
            </span>
            <p className='mt-3 text-[14px] lg:text-base text-[#6a6a74]'>
              Collect visitor data, comments, and messages in one place.
            </p>
          </div>
        </div>
      </section>
      <section className='overflow-hidden container chooseUs '>
        <div className='flex flex-wrap lg:flex-nowrap wow fadeInUp items-center w-full mt-4 gap-12'>
          <div className='w-full lg:w-1/2'>
            <div className='box1 flex flex-col justify-between'>
              <div>
                <h2 className='primary-font title w-full'>
                  Why Choose Trimmo.bio Marketplace
                </h2>
              </div>
              <div className='mt-8'>
                <div className='text-[16px]'>
                  <h5 className='block font-bold text-sm md:text-base lg:text-[20px] '>
                    Endless Possibilities
                  </h5>
                  <p className='info-text mt-2'>
                    Marketplace enables you to build unique experiences for your
                    audience in a variety of areas, including music and
                    fundraising.
                  </p>
                </div>
                <div className='text-[16px] mt-5'>
                  <h5 className='block font-bold text-sm md:text-base lg:text-[20px] '>
                  Streamlined Sharing
                  </h5>
                  <p className='info-text mt-2'>
                  Share everything with a single link, no matter how much you have to share.
                  </p>
                </div>
                <div className='text-[16px] mt-5'>
                  <h5 className='block font-bold text-sm md:text-base lg:text-[20px] '>
                  Professional Growth
                  </h5>
                  <p className='info-text mt-2'>
                  Expand your brand, engage your following, and establish significant partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img
              src='https://shopeasy.ai/img/cms-img-03.webp'
              alt='marketingImage'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
