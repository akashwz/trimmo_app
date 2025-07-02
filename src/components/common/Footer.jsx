"use client";

import React from "react";
import Link from "next/link";

const Footer = ({ className = "", ...props }) => {
  return (
    <div
      className={`flex flex-col w-full bg-gradient-to-b from-[#034737] to-[#007e60] py-10 px-4 ${className}`}
      {...props}
    >
      <div className="w-full max-w-[1532px] mx-auto flex flex-col space-y-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Products */}
          <div className="flex flex-col space-y-2">
            <span className="text-[22px] font-polysans font-bold text-global-6">Products</span>
            <Link href="/products-overview" className="text-base text-global-6">
              Products Overview
            </Link>
            <Link href="/models-overview" className="text-base text-global-6">
              Models Overview
            </Link>
            <Link href="/search" className="text-base text-global-6">
              Search
            </Link>
            <Link href="/generate" className="text-base text-global-6">
              Generate
            </Link>
            <Link href="/embed" className="text-base text-global-6">
              Embed
            </Link>
            <Link href="/pricing" className="text-base text-global-6">
              Pricing
            </Link>

            <span className="mt-4 text-[22px] font-polysans font-semibold text-global-6">
              Social
            </span>
            <Link href="/linkedin" className="text-base text-global-6">
              LinkedIn
            </Link>
            <Link href="/youtube" className="text-base text-global-6">
              YouTube
            </Link>
            <Link href="/instagram" className="text-base text-global-6">
              Instagram
            </Link>
            <Link href="/facebook" className="text-base text-global-6">
              Facebook
            </Link>
          </div>

          {/* For Developers */}
          <div className="flex flex-col space-y-2">
            <span className="text-[22px] font-polysans font-semibold text-global-6">
              For Developers
            </span>
            <Link href="/sample-apps" className="text-base text-global-6">
              Sample Apps
            </Link>
            <Link href="/developer-hub" className="text-base text-global-6">
              Developer Hub
            </Link>
            <Link href="/api-docs" className="text-base text-global-6">
              API Docs
            </Link>
            <Link href="/sdks" className="text-base text-global-6">
              SDKs
            </Link>
            <Link href="/discord" className="text-base text-global-6">
              Discord
            </Link>
            <Link href="/status" className="text-base text-global-6">
              Status
            </Link>
            <Link href="/research" className="text-base text-global-6">
              Research
            </Link>
            <Link href="/enterprise" className="text-base text-global-6">
              Enterprise
            </Link>
            <Link href="/security" className="text-base text-global-6">
              Security
            </Link>
          </div>

          {/* Solutions */}
          <div className="flex flex-col space-y-2">
            <span className="text-[22px] font-polysans font-semibold text-global-6">Solutions</span>
            <Link href="/advertising" className="text-base text-global-6">
              Advertising
            </Link>
            <Link href="/automotive" className="text-base text-global-6">
              Automotive
            </Link>
            <Link href="/government-security" className="text-base text-global-6">
              Government & Security
            </Link>
            <Link href="/media-entertainment" className="text-base text-global-6">
              Media & Entertainment
            </Link>

            <span className="mt-4 text-[22px] font-polysans font-semibold text-global-6">
              Company
            </span>
            <Link href="/about-us" className="text-base text-global-6">
              About Us
            </Link>
            <Link href="/careers" className="text-base text-global-6">
              Careers
            </Link>
            <Link href="/blog" className="text-base text-global-6">
              Blog
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-2">
            <span className="text-[22px] font-polysans font-semibold text-global-6">Legal</span>
            <Link href="/terms-of-use" className="text-base text-global-6">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="text-base text-global-6">
              Privacy Policy
            </Link>
            <Link href="/trust-center" className="text-base text-global-6">
              Trust Center
            </Link>
            <Link href="/website-terms" className="text-base text-global-6">
              Website Terms
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-footer-1"></div>

        {/* Bottom Text */}
        <div className="flex justify-center">
          <span className="text-base text-center text-global-6">
            ©2025 Trimmo, All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
