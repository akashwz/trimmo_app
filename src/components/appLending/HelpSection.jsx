import React from "react";
import ExpandableList from "../ui/ExpandableList";
import Image from "next/image";

const HelpSection = () => {
  return (
<div className="flex flex-col lg:flex-row w-full bg-gradient-to-b from-[#034737] to-[#007e60] responsive-section">
        <div className="flex flex-col container-responsive lg:w-1/2 animate-fade-in-left">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-polysans font-normal leading-[40px] sm:leading-[50px] lg:leading-[60px] text-left">
            <span className="text-global-6">How Trimmo helps you</span><br />
            <span className="text-global-6">turn clicks into </span>
            <span className="text-[#ffffff7f]">conversations,</span><br />
            <span className="text-[#ffffff7f]">followers into loyal customers.</span>
          </h2>
          <ExpandableList className="mt-8 lg:mt-[50px]" />
        </div>
        <div className="flex justify-center lg:justify-end lg:w-1/2 mt-8 lg:mt-0 animate-fade-in-right">
          <Image
            src="/images/app/img_img.svg"
            alt="illustration"
            width={620}
            height={756}
            className="w-[300px] sm:w-[400px] lg:w-[620px] h-auto max-w-full"
          />
        </div>
      </div>
  );
};

export default HelpSection;
