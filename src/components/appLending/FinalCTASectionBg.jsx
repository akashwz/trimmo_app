import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const FinalCTASectionBg = () => {
  return (
<div className="relative w-full py-[100px] mt-[100px] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-[700px] w-[1300px] h-[350px] bg-global-5 rounded-[650px] blur-[353px] opacity-75"></div>
        <div className="absolute top-[154px] left-[-325px] w-[1300px] h-[350px] bg-global-4 rounded-[650px] blur-[353px] opacity-75"></div>
        <div className="absolute top-[175px] left-[1181px] w-[1070px] h-[667px] bg-global-10 rounded-[535px] blur-[500px] opacity-75"></div>
        <div className="absolute top-[359px] left-[-301px] w-[700px] h-[250px] bg-global-10 rounded-[350px] blur-[500px] opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex flex-row w-[1137px] h-[329px] mt-[175px] items-center">
            <div className="flex flex-col w-[904px] h-[320px] items-center">
              <h2 className="text-[70px] font-polysans font-normal leading-[80px] text-center text-global-1 w-[904px] h-[160px]">
                Why juggle 5 different tools,<br />when 1 does it all?
              </h2>
              <p className="text-xl font-inter font-normal leading-[25px] text-center text-global-1 w-[729px] h-[28px] mt-[27px]">
                Trimmo turns chaos into control — so you can focus on content, not logistics.
              </p>
              <Button className="w-[163px] h-[45px] mt-[59px]">
                Get Started
              </Button>
            </div>
            <div className="flex flex-col w-[60px] h-[60px] ml-[173px] bg-global-3 rounded-md items-center justify-center">
              <Image src="/images/app/img_vector_lime_300.svg" alt="icon" width={28} height={28} />
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-[223px] left-[457px] w-[65px] h-[64px]">
            <Image src="/images/app/img_shape_4_copy_6.svg" alt="shape" width={65} height={64} />
            <Image src="/images/app/img_mask_group.svg" alt="mask" width={65} height={64} className="absolute top-0 left-0" />
            <Image src="/images/app/img_vector_lime_300_19x19.svg" alt="vector" width={19} height={19} className="absolute top-[18px] left-[23px]" />
          </div>
          <div className="absolute top-[175px] left-[1545px] w-[50px] h-[49px] bg-global-3 border-[6px] border-global-9 rounded-[25px]"></div>
          <div className="absolute top-[22px] left-[975px] flex flex-col w-[60px] h-[60px] bg-global-3 rounded-md items-center justify-center">
            <Image src="/images/app/img_shape_3_copy_6.svg" alt="shape" width={40} height={12} />
          </div>
          <Image
            src="/images/app/img_trimmolink.svg"
            alt="trimmo link"
            width={60}
            height={60}
            className="absolute top-[165px] left-[325px]"
          />
        </div>
      </div>
  );
};

export default FinalCTASectionBg;
