import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const HeroSection = () => {
    return (
        <div className="relative w-full responsive-hero mb-[220px] ">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b bg-[#034737] from-[#034737] to-[#007e60]" style={{ backgroundImage: "url('/images/app/Line.svg'),url('/images/app/Width.svg')" }}></div>

            {/* Background Decorative Elements - Hidden on mobile */}
            <div className="hidden lg:block absolute top-[101px] left-[1717px] w-[100px] h-[100px] bg-global-16 rounded-full animate-float"></div>
            <div className="hidden lg:block absolute top-[202px] left-[101px] w-[100px] h-[100px] bg-global-17 rounded-full animate-float animation-delay-200"></div>
            <div className="hidden lg:block absolute top-[505px] left-[505px] w-[100px] h-[100px] bg-global-16 rounded-full animate-float animation-delay-400"></div>
            <div className="hidden lg:block absolute top-[202px] left-[1010px] w-[100px] h-[100px] bg-global-15 rounded-full animate-float animation-delay-300"></div>
            <div className="hidden lg:block absolute top-[606px] left-[1313px] w-[100px] h-[100px] bg-global-17 rounded-full animate-float animation-delay-500"></div>
            <div className="hidden lg:block absolute top-[303px] left-[1616px] w-[100px] h-[100px] bg-global-16 rounded-full animate-float animation-delay-100"></div>

            {/* Header Navigation - Responsive */}
            <div className="absolute top-4 sm:top-[39px] left-4 sm:left-[70px] right-4 sm:right-[70px] flex flex-row items-center z-10">
                <Image
                    src="/images/app/img_vector_white_a700.svg"
                    alt="Trimmo Logo"
                    width={161}
                    height={36}
                    className="w-[120px] sm:w-[161px] h-[27px] sm:h-[36px] animate-fade-in-left"
                />

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex flex-row ml-[445px] space-x-8 animate-fade-in-up animation-delay-200">
                    <div className="flex items-center space-x-2 hover:text-global-9 transition-colors duration-300">
                        <span className="text-base font-inter font-medium text-global-6">Product</span>
                        <Image
                            src="/images/app/img_frame_white_a700_20x20.svg"
                            alt="dropdown"
                            width={20}
                            height={20}
                            className="transition-transform duration-300 hover:rotate-180"
                        />
                    </div>
                    <span className="text-base font-inter font-medium text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer">Our data</span>
                    <span className="text-base font-inter font-medium text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer">Resources</span>
                    <span className="text-base font-inter font-medium text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer">Pricing</span>
                    <span className="text-base font-inter font-medium text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer">Enterprise</span>
                </nav>

                {/* Right side navigation */}
                <div className="flex items-center ml-auto space-x-2 sm:space-x-4 animate-fade-in-right animation-delay-300">
                    <div className="hidden sm:flex items-center justify-center w-[50px] h-[30px] border-r border-[#ffffff19]">
                        <Image
                            src="/images/app/img_globe.svg"
                            alt="language"
                            width={20}
                            height={20}
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <span className="hidden sm:block text-sm sm:text-base font-polysans font-semibold text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer">Log in</span>
                    <Button className="w-[100px] sm:w-[145px] h-[35px] sm:h-[45px] text-xs sm:text-base">
                        Free Trial
                    </Button>
                </div>
            </div>

            {/* Main Hero Content - Responsive */}
            <div className="absolute top-[120px] sm:top-[201px] left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-[409px] flex flex-col items-center px-4 sm:px-0 animate-fade-in-up animation-delay-400">
                <h1 className="text-[32px] sm:text-[60px] lg:text-[80px] font-polysans font-normal leading-[40px] sm:leading-[70px] lg:leading-[100px] text-center text-global-6 max-w-[1189px]">
                    The Ultimate Creator Toolkit<br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>All-in-One Powerful Platform.
                </h1>
                <p className="text-base sm:text-xl font-inter font-normal leading-[24px] sm:leading-[30px] text-center text-global-6 max-w-[727px] mt-6 sm:mt-[31px] px-4">
                    <span>Trimmo empowers creators and small businesses to grow smarter and faster,</span><br className="hidden sm:block" />
                    <span className="sm:hidden"> </span><span>— From mini sites to smart links, chats to social scheduling.</span>
                </p>
                <Button className="w-[160px] sm:w-[197px] h-[40px] sm:h-[45px] mt-6 sm:mt-[41px] animate-scale-in animation-delay-500">
                    Try Trimmo Free
                </Button>
            </div>

            {/* Price Card - Responsive positioning */}
            <div className="hidden lg:block absolute top-[222px] right-[140px] animate-scale-in animation-delay-600">
                <div className="flex flex-col w-[200px] lg:w-[257px] h-[220px] lg:h-[293px] bg-global-8 rounded-[30px] items-center justify-center hover-lift">
                    <Image
                        src="/images/app/img_01_2.png"
                        alt="pricing"
                        width={120}
                        height={113}
                        className="w-[90px] lg:w-[120px] h-[85px] lg:h-[113px]"
                    />
                    <span className="text-lg lg:text-xl font-polysans font-semibold leading-6 text-center text-global-6 mt-[8px]">
                        $20.00
                    </span>
                </div>
            </div>

            {/* Newsletter Signup - Responsive */}
            <div className="absolute top-[400px] sm:top-[651px] left-4 sm:left-[447px] flex flex-col items-center animate-fade-in-left animation-delay-700 bg-white rounded-[20px] p-2">
                <div className="flex flex-col w-[280px] sm:w-[253px] items-center">
                    <Image
                        src="/images/app/img_user_img.png"
                        alt="user"
                        width={80}
                        height={81}
                        className="w-[60px] sm:w-[80px] h-[61px] sm:h-[81px] rounded-full hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm sm:text-base font-medium text-global-1 mt-[9px]">Sign Up For Newsletter</span>
                    <div className="flex flex-col w-[260px] sm:w-[220px] mt-[12px] space-y-3">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-[42px] px-4 text-xs text-global-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-global-9 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                // checked={agreeTerms}
                                // onChange={(e) => setAgreeTerms(e.target.checked)}
                                className="w-[23px] h-[23px] accent-global-9"
                            />
                            <span className="text-[13px] font-inter font-normal text-global-2">
                                Agree Terms & Conditions
                            </span>
                        </div>
                        <button
                            // onClick={handleSubscribe}
                            className="w-full h-[42px] bg-global-6 text-[13px] font-bold text-global-1 rounded-[21px] hover:bg-global-7 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Card - Responsive */}
            <div className="absolute top-[700px] sm:top-[651px] left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-[800px] animate-fade-in-up animation-delay-800">
                <div className="relative w-[350px] sm:w-[550px] h-[400px] sm:h-[560px]">
                    <Image
                        src="/images/app/img_25_witch_haze_1.png"
                        alt="profile background"
                        width={550}
                        height={265}
                        className="w-auto h-full sm:h-full rounded-[20px] hover-lift"
                    />
                    <div className="absolute top-[15px] sm:top-[20px] left-[10px] sm:left-[15px] flex flex-col w-[200px] sm:w-[235px] space-y-3 sm:space-y-4">
                        {/* Profile Header - Responsive */}
                        <div className="flex flex-row items-center space-x-2 sm:space-x-4">
                            <Image
                                src="/images/app/img_image.png"
                                alt="Alessandro"
                                width={100}
                                height={100}
                                className="w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] rounded-[40px] hover:scale-110 transition-transform duration-300"
                            />
                            <div className="flex flex-col">
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg sm:text-xl font-polysans font-bold text-global-1">Alessandro</span>
                                    <Image src="/images/app/img_frame.svg" alt="verified" width={20} height={20} className="sm:w-[24px] sm:h-[24px]" />
                                    <Image src="/images/app/img_frame_white_a700.png" alt="badge" width={20} height={20} className="sm:w-[24px] sm:h-[24px]" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-global-1">Founder of Russo Atelier.</span>
                                <div className="flex space-x-2 mt-1">
                                    <Image src="/images/app/img_search.svg" alt="social" width={16} height={16} className="sm:w-[20px] sm:h-[20px] hover:scale-110 transition-transform duration-300" />
                                    <Image src="/images/app/img_lucide_facebook.svg" alt="facebook" width={16} height={16} className="sm:w-[20px] sm:h-[20px] hover:scale-110 transition-transform duration-300" />
                                    <Image src="/images/app/img_arrowright.svg" alt="arrow" width={16} height={16} className="sm:w-[20px] sm:h-[20px] hover:scale-110 transition-transform duration-300" />
                                    <Image src="/images/app/img_lucide_twitter.svg" alt="twitter" width={16} height={16} className="sm:w-[20px] sm:h-[20px] hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                            <Image
                                src="/images/app/img_share.png"
                                alt="share"
                                width={36}
                                height={36}
                                className="ml-auto w-[28px] sm:w-[36px] h-[28px] sm:h-[36px] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        {/* Profile Tags - Responsive */}
                        <div className="space-y-2">
                            <div className="bg-gradient-to-r from-[#ffffffb2] to-[#ffffff4c] border border-white rounded-[20px] px-3 sm:px-4 py-2 shadow-lg hover-lift">
                                <span className="text-xs font-semibold text-global-4">Fashion Blog</span>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffffffb2] to-[#ffffff4c] border border-white rounded-[20px] px-3 sm:px-4 py-2 shadow-lg hover-lift">
                                <span className="text-xs font-semibold text-global-4">Runway Show Videos</span>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffffffb2] to-[#ffffff4c] border border-white rounded-[20px] px-3 sm:px-4 py-2 shadow-lg hover-lift">
                                <span className="text-xs font-semibold text-global-4">Pinterest Mood Board</span>
                            </div>
                            {/* Product Items - Responsive */}
                            <div className="bg-gradient-to-r from-[#ffffffb2] to-[#ffffff4c] border border-white rounded-[26px] px-2 py-2 shadow-lg flex items-center space-x-2 hover-lift">
                                <Image src="/images/app/img_products.png" alt="product" width={42} height={42} className="w-[35px] sm:w-[42px] h-[35px] sm:h-[42px]" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-global-4">Loose Fit With Tencel</span>
                                    <span className="text-xs font-semibold text-global-5">$50.00</span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffffffb2] to-[#ffffff4c] border border-white rounded-[26px] px-2 py-2 shadow-lg flex items-center space-x-2 hover-lift">
                                <Image src="/images/app/img_products.png" alt="product" width={42} height={42} className="w-[35px] sm:w-[42px] h-[35px] sm:h-[42px]" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-global-4">Padded Shopper</span>
                                    <span className="text-xs font-semibold text-global-5">$50.00</span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffffffb2] to-[#ffffff4c] border border-white rounded-lg px-3 sm:px-4 py-1 shadow-lg hover-lift">
                                <span className="text-xs font-semibold text-global-4">Click More Video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Interface - Responsive */}
            <div className="hidden lg:block absolute top-[695px] right-[400px] animate-fade-in-right animation-delay-900">
                <div className="relative">
                    <div className="rounded-[30px] p-4 hover-lift">
                        <Image
                            src="/images/app/img_live_chat.png"
                            alt="live chat"
                            width={345}
                            height={280}
                            className="w-[300px] lg:w-[345px] h-[240px] lg:h-[280px] rounded-[30px]"
                        />
                    </div>
                    <div className="absolute top-[-82px] right-[-100px] bg-white rounded-[12px] p-4 w-[150px] h-[178px] hover-lift">
                        <Image
                            src="/images/app/img_untitled_1_2_1.png"
                            alt="qr code"
                            width={93}
                            height={93}
                            className="w-[93px] h-[93px] rounded-md mx-auto hover:scale-110 transition-transform duration-300"
                        />
                        <Image
                            src="/images/app/img_color.svg"
                            alt="color picker"
                            width={62}
                            height={24}
                            className="w-[62px] h-[24px] mx-auto mt-2"
                        />
                        <Image
                            src="/images/app/img_scan.png"
                            alt="scan"
                            width={29}
                            height={53}
                            className="absolute top-[-17px] left-[-19px] animate-pulse-slow"
                        />
                    </div>
                </div>
            </div>

            {/* WhatsApp Card - Responsive */}
            <div className="absolute top-[1100px] sm:top-[428px] left-4 sm:left-[72px] animate-scale-in animation-delay-600">
                <div className="flex flex-col w-[280px] sm:w-[290px] h-[260px] sm:h-[290px] bg-global-12 border border-[#28b53e19] rounded-[20px] p-4 sm:p-6 hover-lift">
                    <div className="flex justify-center mb-4">
                        <div className="w-[45px] sm:w-[53px] h-[45px] sm:h-[53px] bg-gradient-to-b from-[#20b038] to-[#60d66a] rounded-[26px] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <Image src="/images/app/img_whatsapp.png" alt="whatsapp" width={30} height={30} className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px]" />
                        </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-global-6 mb-4">Whatsapp</h3>
                    <div className="relative">
                        <div className="flex items-center space-x-2 mb-2">
                            <Image src="/images/app/img_users.svg" alt="users" width={16} height={16} />
                            <span className="text-sm font-medium text-global-6">1M</span>
                        </div>
                        <div className="bg-global-7 rounded-[20px] px-4 py-2 shadow-lg flex items-center justify-between hover:bg-global-6 transition-colors duration-300">
                            <span className="text-base font-bold text-global-6">Follow</span>
                            <span className="text-base font-bold text-global-6">11k+</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
