import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#000000] text-white ">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-20 gap-4">
          <div>
            <img src="images/app/footer-logo.svg" alt="footer-logo" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div>
              <h6 className="font-secondary mb-3 font-semibold text-[18px]">Company</h6>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Newsroom
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Give Where You Live
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-secondary mb-3 font-semibold text-[18px]">Help</h6>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Hire an Expert
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Talk to Sales
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-secondary mb-3 font-semibold text-[18px]">Social Media</h6>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Linkdin
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-base text-[#CCCCCC] hover:text-white duration-150"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex py-5 border-t border-opacity-25 border-white flex-wrap items-center justify-between gap-4">
          <p className="text-sm md:text-base">Copyright © 2024, trimmoo</p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="#" className="text-sm md:text-base hover:underline duration-150">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:underline duration-150">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
