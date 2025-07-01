import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const FeatureCardSection = () => {
    return (
        <div className="flex flex-col container-responsive responsive-section animate-fade-in-up my-[100px]">
            <div className="animate-fade-in-up animation-delay-700">
                <p className="text-[24px] sm:text-[34px] lg:text-[44px] font-polysans font-normal leading-[28px] sm:leading-[40px] lg:leading-[52px] text-left text-global-1">
                    <span>Whether you are a YouTuber, podcaster, coach, artist, seller, or side hustle</span><br className="hidden sm:block" />
                    <span className="sm:hidden"> </span><span>— Trimmo is built to help you grow </span>
                    <span className="text-global-5">your brand and connect with</span><br className="hidden sm:block" />
                    <span className="sm:hidden"> </span><span className="text-global-5">your audience, effortlessly.</span>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px]">
                <div className="flex flex-col w-full lg:w-[750px] h-auto lg:h-[581px] bg-global-11 rounded-[20px] responsive-card hover-lift">
                    <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-polysans font-normal leading-[28px] sm:leading-[32px] lg:leading-[34px] text-global-1 mt-8 lg:mt-[271px]">
                        More than just a link in bio.<br />Your Link-in-Bio. Upgraded.
                    </h2>
                    <p className="text-base lg:text-lg font-inter font-normal leading-6 text-global-5 mt-4 lg:mt-[28px]">
                        Build a beautiful, responsive mini-site that showcases everything you offer<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>— products, links, videos, services, and more — all from a single bio link.
                    </p>
                    <Button className="w-auto lg:w-[216px] h-[45px] lg:h-[50px] mt-6 lg:mt-[30px] self-start">
                        <span>Build your site</span>
                        <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} className="ml-2" />
                    </Button>
                </div>

                <div className="flex flex-col w-full lg:w-[750px] h-auto lg:h-[581px] bg-global-13 rounded-[20px] responsive-card hover-lift">
                    <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-polysans font-normal leading-[28px] sm:leading-[35px] lg:leading-[41px] text-global-1 mt-8 lg:mt-[269px]">
                        Smart Short Links with Style. Smarter short links. Branded for you.
                    </h2>
                    <p className="text-base lg:text-lg font-inter font-normal leading-6 text-global-5 mt-4 lg:mt-[19px]">
                        Create custom branded short links, track clicks in real-time, and share anywhere.<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>Generate beautiful QR codes that match your brand.
                    </p>
                    <Button className="w-auto lg:w-[237px] h-[45px] lg:h-[50px] mt-6 lg:mt-[30px] self-start">
                        <span>Get shorten links</span>
                        <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} className="ml-2" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] mt-6 lg:mt-[30px]">
                <div className="flex flex-col w-full lg:w-[490px] h-[400px] lg:h-[523px] bg-cover bg-center rounded-[20px] responsive-card hover-lift" style={{ backgroundImage: "url('/images/app/img_bg.png')" }}>
                    <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-polysans font-normal leading-10 lg:leading-12 text-global-6 mt-8 lg:mt-[147px]">
                        All your essential tools<br />in one Platform
                    </h2>
                    <Button className="w-auto lg:w-[235px] h-[45px] lg:h-[50px] mt-auto mb-8 lg:mt-[170px] self-start">
                        <span>Get Started Free</span>
                        <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} className="ml-2" />
                    </Button>
                </div>

                <div className="flex flex-col w-full lg:w-[490px] h-auto lg:h-[523px] bg-global-13 rounded-[20px] responsive-card hover-lift">
                    <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-polysans font-normal leading-[28px] lg:leading-[34px] text-global-1 mt-8 lg:mt-[201px]">
                        All Your DMs are<br />in One Inbox.
                    </h2>
                    <p className="text-base lg:text-lg font-inter font-normal leading-6 text-global-5 mt-4 lg:mt-[19px]">
                        Connect all your social media platforms and reply<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>to messages from one central dashboard<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>— Instagram, WhatsApp, Messenger, and more.
                    </p>
                    <Button className="w-auto lg:w-[284px] h-[45px] lg:h-[50px] mt-6 lg:mt-[53px] self-start mb-6 lg:mb-0">
                        <span>Download Trimmo Chat</span>
                        <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} className="ml-2" />
                    </Button>
                </div>

                <div className="flex flex-col w-full lg:w-[490px] h-auto lg:h-[523px] bg-global-11 rounded-[20px] responsive-card hover-lift">
                    <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-polysans font-normal leading-[28px] lg:leading-[34px] text-global-1 mt-8 lg:mt-[231px]">
                        Schedule Once,<br />Post Everywhere.
                    </h2>
                    <p className="text-base lg:text-lg font-inter font-normal leading-6 text-global-5 mt-4 lg:mt-[19px]">
                        Plan and automate posts across Instagram,<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>Facebook, LinkedIn, X (Twitter), and more.<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>Maintain your presence without lifting a finger daily.
                    </p>
                    <Button className="w-auto lg:w-[263px] h-[45px] lg:h-[50px] mt-6 lg:mt-[53px] self-start mb-6 lg:mb-0">
                        <span>Schedule your posts</span>
                        <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCardSection;
