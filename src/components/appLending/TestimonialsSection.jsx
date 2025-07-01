import Image from "next/image";
import React from "react";

const TestimonialsSection = () => {
    return (
        <div className="relative w-full h-[839px] bg-global-1 mt-[100px]">
            <Image
                src="/images/app/img_gradiantcolor_lime_300.png"
                alt="background gradient"
                width={1791}
                height={678}
                className="absolute top-[161px] left-[65px] w-[1791px] h-[678px]"
            />
            <div className="relative z-10">
                <div className="flex flex-row w-[1532px] h-[159px] ml-[195px] pt-[100px] items-center">
                    <h2 className="text-[44px] font-polysans font-normal leading-[52px] text-global-6 w-[1034px] h-[159px]">
                        <span>Lorem Ipsum is simply dummy text of the</span><br />
                        <span>printing and </span>
                        <span className="text-[#ffffff7f]">typesetting industry.</span>
                    </h2>
                    <div className="flex items-center ml-auto space-x-2">
                        <span className="text-base font-polysans font-semibold text-global-6">More Testimonial</span>
                        <Image src="/images/app/img_frame_white_a700_24x24.svg" alt="arrow" width={24} height={24} />
                    </div>
                </div>
                <div className="flex flex-row w-[1532px] h-[450px] ml-[195px] mt-[50px] space-x-[30px]">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex flex-col w-[360px] h-[450px] bg-global-14 rounded-[20px] p-[30px]">
                            <Image src="/images/app/img_arrow.svg" alt="quote" width={45} height={21} />
                            <p className="text-base font-inter font-normal leading-6 text-global-1 w-[300px] h-[120px] mt-[30px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                            </p>
                            <div className="flex flex-row w-[300px] h-[60px] mt-[139px] items-center">
                                <Image
                                    src="/images/app/img_image_4.png"
                                    alt="testimonial author"
                                    width={60}
                                    height={60}
                                    className="rounded-[30px]"
                                />
                                <div className="flex flex-col ml-[9px]">
                                    <span className="text-lg font-polysans font-semibold text-global-3">Aeliyug Sans</span>
                                    <span className="text-sm font-inter font-medium text-global-3">Founder,CEO</span>
                                </div>
                                <Image
                                    src="/images/app/img_image_2.png"
                                    alt="company logo"
                                    width={90}
                                    height={39}
                                    className="ml-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
