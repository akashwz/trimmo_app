import React from "react";
import Button from "../ui/Button";

export const SocialMediaPowerSection = () => {
  const socialIcons = [
    { top: "top-[188px]", left: "left-[687px]", src: "/images/app/img_frame_green_a700_01.svg" },
    { top: "top-[91px]", left: "left-[593px]", src: "/images/app/img_frame_light_blue_800.svg" },
    { top: "top-[23px]", left: "left-[478px]", src: "/images/app/img_frame_red_a700.svg" },
    { top: "top-0", left: "left-[342px]", src: "/images/app/img_frame_yellow_a200.svg" },
    { top: "top-6", left: "left-[209px]", src: "/images/app/img_frame_white_a700_70x70.png" },
    { top: "top-[91px]", left: "left-[94px]", src: "/images/app/img_frame_blue_500.svg" },
    { top: "top-[188px]", left: "left-0", src: "/images/app/img_frame_blue_a400.svg" },
  ];

  return (
    <section className="relative w-full h-[600px] overflow-hidden my-[100px]">
      <div className="relative h-full w-full">
        <div className="absolute w-[1010px] h-[540px] top-0 left-[500px] bg-[#1f905c1a] rounded-[505px_505px_0px_0px]" />
        <div className="absolute w-[810px] h-[440px] top-[100px] left-[600px] bg-[#1f905c33] rounded-[430px_430px_0px_0px]" />
        <div className="absolute w-[610px] h-[330px] top-[210px] left-[700px] bg-[#1f905c1a] rounded-[430px_430px_0px_0px]" />

        <div className="absolute w-[1082px] h-[239px] top-[361px] left-[500px]">
          <Button className="absolute top-[194px] left-[418px] bg-[#cefc6c] text-black hover:bg-[#cefc6c]/90 rounded-[27.5px] px-[37px] py-[13px]">
            <span className="[font-family:'PolySans-Median',Helvetica] font-normal text-base">
              Let&apos;s Start Connecting
            </span>
          </Button>

          <h2 className="absolute top-0 left-0 [font-family:'PolySans-Median',Helvetica] font-normal text-black text-6xl text-center tracking-[0] leading-normal">
            All Your Social Media Power in One
            <br />
            to Manage, Schedule, Chat &amp; Convert.
          </h2>
        </div>

        <div className="absolute w-[757px] h-[258px] top-[73px] left-[630px]">
          {socialIcons.map((icon, index) => (
            <img
              key={`social-icon-${index}`}
              className={`absolute w-[70px] h-[70px] ${icon.top} ${icon.left}`}
              alt="Social media icon"
              src={icon.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
