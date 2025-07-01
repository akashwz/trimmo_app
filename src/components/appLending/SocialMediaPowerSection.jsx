import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const SocialMediaPowerSection = () => {
  return (
<div className="relative w-full h-[1324px] mt-[100px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/app/img_bg_gray_50.png')" }}>
          <div className="flex flex-col w-[1080px] h-[527px] ml-[407px] mt-[336px] items-center">
            {/* Social Media Icons */}
            <div className="flex flex-row w-[569px] h-[161px] space-x-[45px] mb-[27px]">
              <Image src="/images/app/img_frame_blue_500.svg" alt="social 1" width={70} height={70} className="rounded-lg mt-[91px]" />
              <Image src="/images/app/img_frame_white_a700_70x70.png" alt="social 2" width={70} height={70} className="rounded-lg mt-[24px]" />
              <Image src="/images/app/img_frame_yellow_a200.svg" alt="social 3" width={70} height={70} className="rounded-lg" />
              <Image src="/images/app/img_frame_red_a700.svg" alt="social 4" width={70} height={70} className="rounded-lg mt-[23px]" />
              <Image src="/images/app/img_frame_light_blue_800.svg" alt="social 5" width={70} height={70} className="rounded-lg mt-[91px]" />
            </div>
            <div className="flex flex-row w-[757px] h-[70px] space-x-[617px]">
              <Image src="/images/app/img_frame_blue_a400.svg" alt="social 6" width={70} height={70} className="rounded-lg" />
              <Image src="/images/app/img_frame_green_a700_01.svg" alt="social 7" width={70} height={70} className="rounded-lg" />
            </div>
            <h2 className="text-[60px] font-polysans font-semibold leading-[72px] text-center text-global-1 w-[1080px] h-[144px] mt-[50px]">
              All Your Social Media Power in One<br />to Manage, Schedule, Chat & Convert.
            </h2>
            <Button className="w-[245px] h-[45px] mt-[50px]">
              Let's Start Connecting
            </Button>
          </div>
        </div>
      </div>
  );
};

export default SocialMediaPowerSection;
