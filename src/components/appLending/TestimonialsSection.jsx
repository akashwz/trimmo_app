import Image from "next/image";
import React from "react";

const TestimonialsSection = () => {
  return (
    <div className="relative w-full bg-global-1 py-16 overflow-hidden">
      {/* Gradient Background */}
      <Image
        src="/images/app/img_gradiantcolor_lime_300.png"
        alt="background gradient"
        width={1791}
        height={678}
        className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[120%] max-w-none h-auto pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-8 max-w-[1400px] mx-auto px-4">
        {/* Heading & More Testimonials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] leading-snug text-global-6 font-polysans max-w-4xl">
            Lorem Ipsum is simply dummy text of the <br />
            printing and <span className="text-[#ffffff7f]">typesetting industry.</span>
          </h2>

          <div className="flex items-center gap-2">
            <span className="text-base font-polysans font-semibold text-global-6">
              More Testimonial
            </span>
            <Image
              src="/images/app/img_frame_white_a700_24x24.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-col bg-global-14 rounded-[20px] p-6 h-full">
              <Image src="/images/app/img_arrow.svg" alt="quote" width={45} height={21} />

              <p className="text-base font-inter font-normal leading-6 text-global-1 mt-6 mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry standard dummy text ever since the 1500s,
              </p>

              <div className="flex items-center mt-auto gap-4">
                <Image
                  src="/images/app/img_image_4.png"
                  alt="testimonial author"
                  width={60}
                  height={60}
                  className="rounded-full"
                />

                <div className="flex flex-col">
                  <span className="text-lg font-polysans font-semibold text-global-3">
                    Aeliyug Sans
                  </span>
                  <span className="text-sm font-inter font-medium text-global-3">Founder, CEO</span>
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
