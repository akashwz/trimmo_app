'use client';

import React from 'react';
import Link from 'next/link';

const Footer = ({ className = '', ...props }) => {
  return (
    <div 
      className={`flex flex-row w-full h-[668px] bg-gradient-to-b from-[#034737] to-[#007e60] ${className}`} 
      {...props}
    >
      <div className="flex flex-col w-[1532px] h-[562px] mt-[88px] ml-[195px]">
        <div className="flex flex-row w-[1531px] h-[419px]">
          {/* Products Column */}
          <div className="flex flex-col w-[465px] h-[419px]">
            <span className="text-[22px] font-polysans font-bold leading-[27px] text-left text-global-6 w-[98px] h-[31px]">
              Products
            </span>
            <Link href="/products-overview" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[144px] h-5 mt-[10px]">
              Products Overview
            </Link>
            <Link href="/models-overview" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[141px] h-5 mt-2">
              Models Overview
            </Link>
            <Link href="/search" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[65px] h-5 mt-2">
              Search
            </Link>
            <Link href="/generate" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[82px] h-5 mt-2">
              Generate
            </Link>
            <Link href="/embed" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[56px] h-5 mt-2">
              Embed
            </Link>
            <Link href="/pricing" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[73px] h-5 mt-2">
              Pricing
            </Link>
            
            <span className="text-[22px] font-polysans font-semibold leading-[27px] text-left text-global-6 w-[65px] h-[31px] mt-[27px]">
              Social
            </span>
            <Link href="/linkedin" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[66px] h-5 mt-[10px]">
              Linkdin
            </Link>
            <Link href="/youtube" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[66px] h-5 mt-[1px]">
              youtube
            </Link>
            <Link href="/instagram" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[76px] h-5 mt-[1px]">
              Instagram
            </Link>
            <Link href="/facebook" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[75px] h-5 mt-[1px]">
              Facebook
            </Link>
          </div>

          {/* For Developers Column */}
          <div className="flex flex-col w-[454px] h-[338px] ml-[195px] mt-0.5">
            <span className="text-[22px] font-polysans font-semibold leading-[27px] text-left text-global-6 w-[163px] h-[31px]">
              For Developers
            </span>
            <Link href="/sample-apps" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[110px] h-5 mt-[10px]">
              Sample Apps
            </Link>
            <Link href="/developer-hub" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[117px] h-5 mt-[3px]">
              Developer Hub
            </Link>
            <Link href="/api-docs" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[83px] h-5 mt-[3px]">
              API Docs
            </Link>
            <Link href="/sdks" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[47px] h-5 mt-[3px]">
              SDKs
            </Link>
            <Link href="/discord" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[74px] h-5 mt-[3px]">
              Discord
            </Link>
            <Link href="/status" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[65px] h-5 mt-[3px]">
              Status
            </Link>
            <Link href="/research" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[83px] h-5 mt-[3px]">
              Research
            </Link>
            <Link href="/enterprise" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[101px] h-5 mt-[3px]">
              Enterprice
            </Link>
            <Link href="/security" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[83px] h-5 mt-[3px]">
              Security
            </Link>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col w-[500px] h-[325px]">
            <span className="text-[22px] font-polysans font-semibold leading-[27px] text-left text-global-6 w-[101px] h-[31px]">
              Solutions
            </span>
            <Link href="/advertising" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[111px] h-5 mt-[10px]">
              Advertising
            </Link>
            <Link href="/automotive" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[103px] h-5 mt-[1px]">
              Automotive
            </Link>
            <Link href="/government-security" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[179px] h-5 mt-[1px]">
              Government & Security
            </Link>
            <Link href="/media-entertainment" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[179px] h-5 mt-[2px]">
              Media & Entertainment
            </Link>
            
            <Link href="/company" className="text-[22px] font-polysans font-semibold leading-[27px] text-left text-global-6 w-[101px] h-[31px] mt-[25px]">
              Company
            </Link>
            <Link href="/about-us" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[75px] h-5 mt-[8px]">
              About Us
            </Link>
            <Link href="/careers" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[73px] h-5 mt-[3px]">
              Careers
            </Link>
            <Link href="/blog" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[45px] h-5 mt-[3px]">
              Blog
            </Link>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col w-[112px] h-[160px]">
            <span className="text-[22px] font-polysans font-semibold leading-[27px] text-left text-global-6 w-[99px] h-[31px]">
              Products
            </span>
            <Link href="/terms-of-use" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[107px] h-5 mt-[10px]">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[112px] h-5 mt-[1px]">
              Privacy Policy
            </Link>
            <Link href="/trust-center" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[107px] h-5 mt-[1px]">
              Trust Center
            </Link>
            <Link href="/website-terms" className="text-base font-inter font-normal leading-[30px] text-left text-global-6 w-[112px] h-5 mt-[2px]">
              Website Terms
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-[1530px] h-px bg-footer-1 mt-[101px]"></div>
        <div className="flex justify-center mt-5">
          <span className="text-base font-inter font-medium leading-5 text-center text-global-6 w-[278px] h-[23px]">
            ©2025 Trimmo, All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;