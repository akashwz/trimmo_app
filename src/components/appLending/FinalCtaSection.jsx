import Image from "next/image";
import React from "react";

const FinalCtaSection = () => {
  return (
<div className="flex flex-row w-[1530px] h-[106px] ml-[195px] mt-[100px] items-center">
        <h2 className="text-[44px] font-polysans font-normal leading-[52px] text-global-1 w-[832px] h-[106px]">
          <span>Lorem Ipsum is simply dummy text of the</span><br />
          <span>printing and </span>
          <span className="text-[#0000007f]">typesetting industry.</span>
        </h2>
        <div className="flex items-center ml-auto space-x-2">
          <span className="text-base font-polysans font-semibold text-global-1">Read More</span>
          <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} />
        </div>
      </div>
  );
};

export default FinalCtaSection;
