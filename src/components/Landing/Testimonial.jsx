import React from "react";

const Testimonial = () => {
  return (
    <div className="container">
      <div className="text-center">
        <button disabled className="btn-outline mx-auto">
          Testimonial
        </button>
        <h3 className="sec-title text-center">Our Client Say</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-primary min-h-[200px] md:min-h-[320px] lg:min-h-[420px] rounded-[10px] text-white p-4 text-center flex flex-col gap-4 items-center justify-between">
          <img
            src="images/app/white-logo.svg"
            alt="white-logo"
            className="inline-block max-w-full"
          />
          <div>
            <img
              src="images/app/star-white.svg"
              alt="star-white"
              className="inline-block max-w-full"
            />
            <button className="btn-white mt-2">More Client Review</button>
          </div>
          <span className="text-base text-white font-medium">15 Review</span>
        </div>
        <div className="bg-[#00000008] border border-[#0000004D] min-h-[200px] md:min-h-[320px] lg:min-h-[420px] rounded-[10px] p-4 flex flex-col gap-4 justify-between">
          <div className="flex items-center flex-wrap">
            <img
              src="images/app/star-black.svg"
              alt="star-white"
              className="inline-block max-w-full"
            />
            <span className="secondary-font text-[16px] font-semibold">4.5</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt mi a felis
            faucibus dignissim.Nulla ut diam scelerisque, laoreet ipsum quis,posuere sem
          </p>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div>
            <span className="secondary-font block text-[16px] font-semibold">Poster Mockup</span>
            <span className="text-sm">20 Aug , 2024</span>
          </div>
        </div>
        <div className="bg-[#00000008] border border-[#0000004D] min-h-[200px] md:min-h-[320px] lg:min-h-[420px] rounded-[10px] p-4 flex flex-col gap-4 justify-between">
          <div className="flex items-center flex-wrap">
            <img
              src="images/app/star-black.svg"
              alt="star-white"
              className="inline-block max-w-full"
            />
            <span className="secondary-font text-[16px] font-semibold">4.5</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt mi a felis
            faucibus dignissim.Nulla ut diam scelerisque, laoreet ipsum quis,posuere sem
          </p>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div>
            <span className="secondary-font block text-[16px] font-semibold">Poster Mockup</span>
            <span className="text-sm">20 Aug , 2024</span>
          </div>
        </div>
        <div className="bg-[#00000008] border border-[#0000004D] min-h-[200px] md:min-h-[320px] lg:min-h-[420px] rounded-[10px] p-4 flex flex-col gap-4 justify-between">
          <div className="flex items-center flex-wrap">
            <img
              src="images/app/star-black.svg"
              alt="star-white"
              className="inline-block max-w-full"
            />
            <span className="secondary-font text-[16px] font-semibold">4.5</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt mi a felis
            faucibus dignissim.Nulla ut diam scelerisque, laoreet ipsum quis,posuere sem
          </p>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div>
            <span className="secondary-font block text-[16px] font-semibold">Poster Mockup</span>
            <span className="text-sm">20 Aug , 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
