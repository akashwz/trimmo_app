import ComparePlanHero from "@/components/Bio/OtherPages/ComparePlanHero";
import FaqSection from "@/components/Bio/OtherPages/FaqSection";
import { getPageMetadata } from "@/controller/metadata";
import { CheckLg, Gear, Hash, X } from "react-bootstrap-icons";

export function generateMetadata() {
  return getPageMetadata({
    title: "Free vs Paid plan Features Comparison",
    description:
      "Compare free vs paid plan features in detail. Discover which plan suits your needs best and unlock the full potential of your e-commerce journey.",
  });
}
const Page = () => {
  const faqData = [
    {
      question: "Can I switch from the Basic Plan to the Pro Plan later?",
      answer: `Absolutely! Upgrading is seamless, and you can switch from the Basic Plan to the Pro Plan whenever you’re ready to take your bio-link pages to the next level.`,
    },
    {
      question: "Are there any hidden charges in the Pro Plan?",
      answer: `No, we offer transparent pricing with no hidden fees. The Pro Plan comes with a clear, fixed monthly cost.`,
    },
    {
      question: `Is the Basic Plan really free?`,
      answer: `Yes! The Basic Plan is completely free and offers all the essential features to get started without any time restrictions.`,
    },
  ];
  return (
    <div className="flex flex-col gap-[80px] lg:gap-[120px] pb-[80px] lg:pb-[120px]">
      <ComparePlanHero />
      <section className="container">
        <div className="w-full wow fadeInUp mb-10 mx-auto text-center">
          <h2 className="primary-font title">Who Should Choose Each Plan?</h2>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-10">
          <div className="w-full lg:w-1/2 wow fadeInRight">
            <div className="flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start">
              <div className="min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white">
                <Hash className="w-10 h-10" />
              </div>
              <div className="text-[16px] space-y-2.5">
                <h3 className="text-lg lg:text-3xl block primary-font">Basic Plan</h3>
                <p className="info-text">
                  Ideal for individuals, small businesses, or anyone just starting out. The Basic
                  Plan offers essential features to help you build a solid foundation without any
                  upfront costs. It’s perfect for users who want to explore the platform with
                  minimal commitment.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 wow fadeInRight">
            <div className="flex flex-wrap gap-2.5 md:gap-5 md:flex-nowrap items-start">
              <div className="min-w-[50px] md:min-w-[70px] mt-1 h-[50px] md:h-[70px] bg-[#000] rounded-full flex items-center justify-center text-white">
                <Hash className="w-10 h-10" />
              </div>
              <div className="text-[16px] space-y-2.5">
                <h3 className="text-lg lg:text-3xl block primary-font">Pro Plan</h3>
                <p className="info-text">
                  Designed for businesses looking to elevate their presence and expand their
                  capabilities. The Pro Plan provides advanced features, unlimited integrations, and
                  powerful monetization tools, making it the perfect choice for scaling and
                  maximizing business potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex container items-center flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-1/2 wow fadeInRight">
          <img
            src="https://shopeasy.ai/img/about-us-1.webp"
            alt="aboutStoreCreation"
            className="max-w-full inline-block"
          />
        </div>
        <div className="w-full lg:w-1/2 wow fadeInLeft">
          <div>
            <h2 className="primary-font title w-full">Basic Plan Features</h2>
            <ul className="flex flex-col gap-5 mt-7">
              <li>
                <span className="block font-semibold text-lg">
                  Essential Widgets and Basic Analytics
                </span>
                Get started with a set of essential widgets and access basic analytics to track your
                performance. Ideal for those who need the core tools to manage their bio-link pages
                effectively.
              </li>
              <li>
                <span className="block font-semibold text-lg">Limited Design Options</span>
                Customize your page with pre-set templates. While you have some flexibility, design
                options are limited compared to the Pro Plan.
              </li>
              <li>
                <span className="block font-semibold text-lg">
                  Trimmo and Shopeasy App Integration
                </span>
                Seamlessly integrate with Trimmo for bio-link purposes and Shopeasy for streamlined
                store management. This integration helps you to centralize all important links and
                tools for a seamless user experience.
              </li>
              <li>
                <span className="block font-semibold text-lg">Free Features</span>
                Access to all basic features without any cost. Perfect for individuals and small
                projects.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex container items-center flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-1/2 wow fadeInLeft">
          <div>
            <h2 className="primary-font title w-full">Pro Plan Features</h2>
            <ul className="flex flex-col gap-5 mt-7">
              <li>
                <span className="block font-semibold text-lg">
                  Unlimited Integrations and Customization
                </span>
                The Pro Plan allows you to integrate with unlimited third-party applications and
                fully customize your bio-link page and other elements of your user experience.
              </li>
              <li>
                <span className="block font-semibold text-lg">Monetization Tools</span>
                Unlock monetization options that include running ads, paid promotions, and more.
                Generate additional revenue directly from your page with advanced tools for
                promoting products or services.
              </li>
              <li>
                <span className="block font-semibold text-lg">
                  Access to All Premium Widgets and Animations
                </span>
                With the Pro Plan, you get access to a wider range of premium widgets, animations,
                and design elements that will enhance the look and feel of your page, making it more
                interactive and engaging for your audience.
              </li>
              <li>
                <span className="block font-semibold text-lg">Detailed Analytics</span>
                Go beyond basic insights with in-depth analytics. The Pro Plan offers detailed
                reports that help you understand your audience better, track conversions, and
                optimize your page for maximum impact.
              </li>
              <li>
                <span className="block font-semibold text-lg">Priority Support</span>
                As a Pro Plan user, you’ll have access to priority 24/7 customer support, ensuring
                that any issues or questions are addressed swiftly.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 wow fadeInRight">
          <img
            src="https://shopeasy.ai/img/about-us-1.webp"
            alt="aboutStoreCreation"
            className="max-w-full inline-block"
          />
        </div>
      </section>
      <section className="container">
        <div className="block overflow-x-auto w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 max-w-[200px] min-w-[200px]" />
                <th className="border-solid border border-transparent text-2xl py-5 min-w-[200px] max-w-[150px]">
                  Basic Plan
                </th>
                <th className="border-solid border border-transparent text-2xl py-5 min-w-[200px] max-w-[150px]">
                  Pro Plan
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="p-2">
                <th
                  colSpan={5}
                  className="text-left bg-[#fff] rounded-xl text-xl uppercase w-[200px] px-4 py-2.5"
                >
                  Features
                </th>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Core Features</dt>
                </td>
                <td className="text-gray-500 text-sm">Essential Widgets</td>
                <td className="text-gray-500 text-sm">Advanced Features</td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Usage Limits</dt>
                </td>
                <td className="text-gray-500 text-sm">Limited</td>
                <td className="text-gray-500 text-sm">Unlimited</td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Custom Branding</dt>
                </td>
                <td className="text-gray-500 text-sm">
                  <X className="text-red-600 w-6 h-6 mx-auto" />
                </td>
                <td className="text-gray-500 text-sm">
                  <CheckLg className="text-green-600 w-6 h-6 mx-auto" />
                </td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Design Customization</dt>
                </td>
                <td className="text-gray-500 text-sm">Limited Design Templates</td>
                <td className="text-gray-500 text-sm">Full Customization</td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Trimmo & Shopeasy Integration</dt>
                </td>
                <td className="text-gray-500 text-sm">
                  <CheckLg className="text-green-600 w-6 h-6 mx-auto" />
                </td>
                <td className="text-gray-500 text-sm">
                  <CheckLg className="text-green-600 w-6 h-6 mx-auto" />
                </td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Monetization Tools</dt>
                </td>
                <td className="text-gray-500 text-sm">
                  <X className="text-red-600 w-6 h-6 mx-auto" />
                </td>
                <td className="text-gray-500 text-sm">
                  <CheckLg className="text-green-600 w-6 h-6 mx-auto" />
                </td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Analytics</dt>
                </td>
                <td className="text-gray-500 text-sm">Basic Analytics</td>
                <td className="text-gray-500 text-sm">
                  <CheckLg className="text-green-600 w-6 h-6 mx-auto" />
                </td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Premium Widgets and Animations</dt>
                </td>
                <td className="text-gray-500 text-sm">
                  <X className="text-red-600 w-6 h-6 mx-auto" />
                </td>
                <td className="text-gray-500 text-sm">
                  <CheckLg className="text-green-600 w-6 h-6 mx-auto" />
                </td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Customer Support</dt>
                </td>
                <td className="text-gray-500 text-sm">Basic Support</td>
                <td className="text-gray-500 text-sm">24/7 Priority Support</td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Performance</dt>
                </td>
                <td className="text-gray-500 text-sm">Standard</td>
                <td className="text-gray-500 text-sm">High-Speed & Optimized</td>
              </tr>
              <tr className="h-[50px] px-4">
                <td className="text-left">
                  <dt className="font-medium ps-4">Pricing</dt>
                </td>
                <td className="text-gray-500 text-sm">$0</td>
                <td className="text-gray-500 text-sm">Affordable Pricing Plans</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="overflow-hidden container choose-us">
        <div className="w-full wow fadeInUp mb-10 mx-auto text-center">
          <h2 className="primary-font title">How to Choose the Right Plan?</h2>
          <p className="w-full lg:w-[60%] mx-auto info-text mt-4 inline-block">
            Here are a few tips to help you decide:
          </p>
        </div>
        <div className="grid grid-cols-1 wow fadeInUp md:grid-cols-2 xl:grid-cols-3 mt-8 gap-8">
          <div className="trending-apps-box border">
            <span className="choose-us-icon-box mb-4">
              <Gear />
            </span>
            <span className="text-lg lg:text-xl block primary-font font-semibold">
              Evaluate Your Needs
            </span>
            <p className="mt-3 text-[14px] lg:text-base text-[#6a6a74]">
              Think about what your goals are. Are you just starting, or are you looking to scale
              your business with advanced features and monetization options?
            </p>
          </div>
          <div className="trending-apps-box border">
            <span className="choose-us-icon-box mb-4">
              <Gear />
            </span>
            <span className="text-lg lg:text-xl block primary-font font-semibold">
              Start with the Basic Plan
            </span>
            <p className="mt-3 text-[14px] lg:text-base text-[#6a6a74]">
              If you’re not sure where to begin, start with the Basic Plan to get a feel for the
              platform. You can always upgrade to the Pro Plan as your needs grow.
            </p>
          </div>
          <div className="trending-apps-box border">
            <span className="choose-us-icon-box mb-4">
              <Gear />
            </span>
            <span className="text-lg lg:text-xl block primary-font font-semibold">
              Check Essential Features
            </span>
            <p className="mt-3 text-[14px] lg:text-base text-[#6a6a74]">
              Review the features in the Pro Plan to see if they are necessary for your business
              growth, such as unlimited integrations, monetization tools, and detailed analytics.
            </p>
          </div>
        </div>
      </section>
      <FaqSection faqData={faqData} />
    </div>
  );
};

export default Page;
