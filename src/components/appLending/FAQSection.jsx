import Image from "next/image";
import Link from "next/link";
import React from "react";

const FAQSection = () => {
  return (
  <div className="flex flex-col w-[1532px] h-[624px] ml-[195px] mt-[100px]">
        <div className="flex flex-row w-[1530px] h-[106px] items-center">
          <h2 className="text-[44px] font-polysans font-normal leading-[52px] text-global-1 w-[832px] h-[106px]">
            <span>Lorem Ipsum is simply dummy text of the</span><br />
            <span>printing and </span>
            <span className="text-[#0000007f]">typesetting industry.</span>
          </h2>
          <div className="flex items-center ml-auto space-x-2">
            <Link href="/read-more" className="text-base font-polysans font-semibold text-global-1">Read More</Link>
            <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-row w-[1530px] h-[488px] mt-[30px] space-x-[30px]">
          {/* FAQ Column 1 */}
          <div className="flex flex-col w-[750px] h-[488px] space-y-[30px]">
            <div className="flex flex-col w-[750px] h-[120px] bg-global-14 rounded-[20px] p-[20px]">
              <div className="flex flex-row w-[710px] h-[30px] items-center">
                <span className="text-xl font-polysans font-normal text-global-1 w-[334px] h-6">
                  01. All In One Chat - Lorem Ipsum is.
                </span>
                <Image src="/images/app/img_frame_black_900_30x30.svg" alt="expand" width={30} height={30} className="ml-auto" />
              </div>
              <p className="text-base font-inter font-normal leading-6 text-global-5 w-[444px] h-12 mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and<br />
                typesetting industry. Lorem Ipsum has been the industry.
              </p>
            </div>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-row w-[750px] h-[62px] bg-global-14 rounded-[10px] p-[20px] items-center">
                <span className="text-xl font-polysans font-normal text-global-1 w-[334px] h-6">
                  0{index + 2}. All In One Chat - Lorem Ipsum is.
                </span>
                <Image src="/images/app/img_frame_30x30.svg" alt="expand" width={30} height={30} className="ml-auto" />
              </div>
            ))}
          </div>
          {/* FAQ Column 2 */}
          <div className="flex flex-col w-[750px] h-[488px] space-y-[30px]">
            <div className="flex flex-col w-[750px] h-[120px] bg-global-14 rounded-[20px] p-[20px]">
              <div className="flex flex-row w-[710px] h-[30px] items-center">
                <span className="text-xl font-polysans font-normal text-global-1 w-[334px] h-6">
                  01. All In One Chat - Lorem Ipsum is.
                </span>
                <Image src="/images/app/img_frame_black_900_30x30.svg" alt="expand" width={30} height={30} className="ml-auto" />
              </div>
              <p className="text-base font-inter font-normal leading-6 text-global-5 w-[444px] h-12 mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and<br />
                typesetting industry. Lorem Ipsum has been the industry.
              </p>
            </div>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-row w-[750px] h-[62px] bg-global-14 rounded-[10px] p-[20px] items-center">
                <span className="text-xl font-polysans font-normal text-global-1 w-[334px] h-6">
                  0{index + 2}. All In One Chat - Lorem Ipsum is.
                </span>
                <Image src="/images/app/img_frame_30x30.svg" alt="expand" width={30} height={30} className="ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default FAQSection;
