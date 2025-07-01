import Image from "next/image";
import React from "react";

const CreatorsSection = () => {
  return (
<div className="flex flex-row w-full h-[653px] bg-global-9">
        <div className="flex flex-col w-[1600px] h-[453px] ml-[195px] mt-[100px]">
          <div className="flex flex-row w-[1532px] h-[53px] items-center">
            <h2 className="text-[44px] font-polysans font-normal leading-[53px] text-global-1 w-[803px] h-[53px]">
              <span>Built for Creators. </span>
              <span className="text-[#0000007f]">Loved by Businesses.</span>
            </h2>
            <div className="flex items-center ml-auto space-x-2">
              <span className="text-base font-polysans font-semibold text-global-1">Read More</span>
              <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} />
            </div>
          </div>
          <div className="flex flex-row w-[1600px] h-[350px] mt-[50px] space-x-[90px]">
            {/* Artist Portfolio */}
            <div className="flex flex-col w-[242px] h-[350px]">
              <Image src="/images/app/img_exclude.png" alt="artist icon" width={50} height={50} />
              <h3 className="text-2xl font-polysans font-semibold leading-[30px] text-global-1 w-[242px] h-[60px] mt-[158px]">
                Artist portfolio in one<br />bio link
              </h3>
              <p className="text-base font-inter font-normal leading-6 text-global-1 w-[231px] h-[72px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </p>
            </div>
            <div className="w-px h-[350px] bg-global-2"></div>
            {/* D2C Brand */}
            <div className="flex flex-col w-[241px] h-[350px]">
              <Image src="/images/app/img_vector_50x50.png" alt="brand icon" width={50} height={50} />
              <h3 className="text-2xl font-polysans font-semibold leading-[30px] text-global-1 w-[241px] h-[60px] mt-[158px]">
                D2C brand with shop<br />links & chat
              </h3>
              <p className="text-base font-inter font-normal leading-6 text-global-1 w-[231px] h-[72px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </p>
            </div>
            <div className="w-px h-[350px] bg-global-2"></div>
            {/* Podcaster */}
            <div className="flex flex-col w-[284px] h-[350px]">
              <div className="w-[70px] h-[70px] bg-global-1 border border-global-1 rounded-[18px] flex items-center justify-center">
                <div className="w-[30px] h-[30px] bg-white"></div>
              </div>
              <h3 className="text-2xl font-polysans font-semibold leading-[30px] text-global-1 w-[284px] h-[60px] mt-[158px]">
                Podcaster with episodes,<br />newsletter, & tips
              </h3>
              <p className="text-base font-inter font-normal leading-6 text-global-1 w-[231px] h-[72px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </p>
            </div>
            <div className="w-px h-[350px] bg-global-2"></div>
            {/* Small Business */}
            <div className="flex flex-col w-[302px] h-[350px]">
              <Image src="/images/app/img_exclude_black_900.svg" alt="business icon" width={56} height={56} />
              <h3 className="text-2xl font-polysans font-semibold leading-[30px] text-global-1 w-[302px] h-[60px] mt-[158px]">
                Small business with offers,<br />QR, and contact
              </h3>
              <p className="text-base font-inter font-normal leading-6 text-global-1 w-[231px] h-[72px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CreatorsSection;
