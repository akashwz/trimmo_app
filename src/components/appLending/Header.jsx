"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import Button from "../ui/Button";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useSelector } from "react-redux";

const Header = ({ bio, link, chat, socialMedia }) => {
  const token = getCookie("token");
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const { userData } = useSelector((state) => state?.authSlice || {});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Apply bg when scrolled more than 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLink = useMemo(() => {
    if (!token) return "/login";

    if (bio && userData?.data?.template) {
      return "/bio/edit-profile";
    } else if (bio) {
      return "/bio/about-yourself";
    } else if (link) {
      return "/link/home";
    } else if (chat) {
      return "/chat";
    } else if (socialMedia) {
      return "/social-media";
    } else {
      return "/dashboard";
    }
  }, [token, userData]);

  const MainTitle = useMemo(() => {
    if (!token) return t("lang_login");
    else if (token) {
      if (bio && userData?.data?.template) {
        return t("lang_my_account");
      } else if (bio) {
        return t("lang_getting_started");
      } else {
        return t("lang_my_account");
      }
    }
  }, [token, userData]);

  const handleClick = (e) => {
    e.stopPropagation();
    window.location.href = mainLink;
  };

  return (
    <>
      <header
        className={`fixed w-full z-10 transition-colors duration-300 ${
          isScrolled ? "bg-[#034737]" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="header-inner flex justify-between items-center py-6">
            <div
              className="header-logo cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              <Image
                src="/images/app/img_vector_white_a700.svg"
                alt="Trimmo Logo"
                width={161}
                height={36}
                className="w-[120px] sm:w-[161px] h-[27px] sm:h-[36px] animate-fade-in-left"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-row gap-8 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-2 hover:text-global-9 transition-colors duration-300">
                <span className="text-base font-inter font-medium text-global-6">Product</span>
                <Image
                  src="/images/app/img_frame_white_a700_20x20.svg"
                  alt="dropdown"
                  width={20}
                  height={20}
                  className="transition-transform duration-300 hover:rotate-180"
                />
              </div>
              <span className="text-base font-inter font-medium text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer">
                Our data
              </span>
              <span className="text-base font-inter font-medium text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer">
                Resources
              </span>
              <span className="text-base font-inter font-medium text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer">
                Pricing
              </span>
              <span className="text-base font-inter font-medium text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer">
                Enterprise
              </span>
            </nav>

            {/* Right side navigation */}
            <div className="flex items-center space-x-2 sm:space-x-4 animate-fade-in-right animation-delay-300">
              <div className="hidden sm:flex items-center justify-center w-[50px] h-[30px] border-r border-[#ffffff19]">
                <Image
                  src="/images/app/img_globe.svg"
                  alt="language"
                  width={20}
                  height={20}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
              <button
                onClick={handleClick}
                className="hidden sm:block text-sm sm:text-base font-polysans font-semibold text-global-6 hover:text-global-9 transition-colors duration-300 cursor-pointer"
              >
                {MainTitle}
              </button>
              {!token && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push("/register");
                  }}
                  className="w-[100px] sm:w-[145px] h-[35px] sm:h-[45px] text-xs sm:text-base"
                >
                  Free Trial
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
