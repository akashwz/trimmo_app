import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const FeatureCardsBottom = () => {
  return (
<div className="flex flex-row w-[1530px] h-[523px] ml-[195px] mt-[30px] space-x-[30px]">
        <div className="flex flex-col w-[490px] h-[523px] bg-global-13 rounded-[20px] p-[30px] items-center justify-center">
          <h3 className="text-2xl font-polysans font-normal leading-[34px] text-center text-global-1 w-[340px] h-[68px]">
            Real-time analytics to measure<br />what works
          </h3>
          <p className="text-base font-inter font-normal leading-6 text-center text-global-5 w-[237px] h-12 mt-[10px]">
            Create your free Trimmo profile<br />and start sharing smarter.
          </p>
        </div>
        <div className="flex flex-col w-[490px] h-[523px] bg-global-11 rounded-[20px] p-[30px]">
          <h3 className="text-2xl font-polysans font-normal leading-[34px] text-left text-global-1 w-[339px] h-[68px] mt-[257px]">
            Beautiful templates that speak<br />your brand
          </h3>
          <p className="text-base font-inter font-normal leading-6 text-left text-global-5 w-[444px] h-12 mt-[18px]">
            Lorem Ipsum is simply dummy text of the printing and<br />
            typesetting industry. Lorem Ipsum has been the industry.
          </p>
          <Button className="w-[212px] h-[50px] mt-[28px]">
            <span>Start Building</span>
            <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} className="ml-2" />
          </Button>
        </div>
        <div className="flex flex-col w-[490px] h-[523px] bg-global-13 rounded-[20px] p-[30px] items-center justify-center">
          <h3 className="text-2xl font-polysans font-normal leading-[34px] text-center text-global-1 w-[349px] h-[68px]">
            Accept payments, collect leads,<br />run surveys
          </h3>
          <p className="text-base font-inter font-normal leading-6 text-center text-global-5 w-[444px] h-12 mt-[10px]">
            Lorem Ipsum is simply dummy text of the printing and<br />
            typesetting industry. Lorem Ipsum has been the industry.
          </p>
        </div>
      </div>
  );
};

export default FeatureCardsBottom;
