import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className="inset-0 pt-[10%]"
          style={{
            backgroundImage: `url('/images/app/Line.svg'), url('/images/app/Width.svg'), linear-gradient(to bottom, #034737 50%, #ffffff)`,
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundSize: "cover, cover, cover",
          }}
        >
          <div className="container">
            <div className="transform animate-fade-in-up animation-delay-400 flex flex-col gap-14">
              <div className="section-title text-global-6 flex flex-col items-center justify-center w-[80%] mx-auto gap-12">
                <h2 className="text-[32px] sm:text-[40px] lg:text-[60px] text-center font-polysans font-normal leading-[120%]">
                  Build Stronger Digital Connections
                </h2>
                <p className="font-extralight sm:text-md font-inter text-center max-w-[60%] leading-[180%]">
                  Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the
                  right information. Build, edit, and track everything inside the Bitly Connections Platform.
                </p>
              </div>
              <div className="img-box">
                <div className="img-inner flex justify-center items-center gap-36">
                  <div className="img-inner img-01 w-[17%]">
                    <img src="/images/app/Shape-03.webp" alt="" />
                  </div>
                  <div className="img-inner img-02 w-[17%]">
                    <img src="/images/app/Shape-05.webp" alt="" />
                  </div>
                  <div className="img-inner img-03 relative w-[23%]">
                    <img src="/images/app/Shape-04.webp" alt="" />
                    <div className="absolute img-inner top-[-30%] right-[-30%] w-[44%]">
                      <img src="/images/app/Shape-06.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-absolute-01 img-inner absolute top-[25%] left-[-10%] w-[17%]">
                <img src="/images/app/Shape-01.webp" alt="" />
              </div>
              <div className="img-absolute-02 img-inner absolute top-[10%] right-[-10%] w-[14%]">
                <img src="/images/app/Shape-02.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
