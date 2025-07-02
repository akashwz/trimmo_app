"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { t } from "i18next";
import AnimatedTextCycle from "../Bio/Animation/AnimatedTextCycle";
const HeroSection = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const handleUserName = () => {
    localStorage.setItem("username", userName);
    router.push("/register");
  };
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="inset-0 pt-[10%] h-screen"
        style={{
          backgroundImage: `url('/images/app/Line.svg'), url('/images/app/Width.svg'), linear-gradient(to bottom, #034737 50%, #ffffff)`,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundSize: "cover, cover, cover",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-6 mx-auto">
            <div className="w-full text-global-6 flex flex-col justify-center">
              <h1 className="mb-6">
                {t("lang_all_your_social_media_links")},
                <AnimatedTextCycle
                  words={[
                    `${t("lang_seamless_profile")}`,
                    `${t("lang_beautiful_link")}`,
                    `${t("lang_smart_link")}`,
                    `${t("lang_profile_hub")}`,
                  ]}
                  interval={2000}
                  className="text-foreground animated-text font-semi-bold"
                />{" "}
              </h1>
              <div className="text-sm md:text-base xl:text-[18px]">{t("lang_hero_desc")}</div>
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-full min-h-[60px] p-3 sm:p-1.5 w-full shadow-md mt-10 gap-3 sm:gap-0">
                <div className="flex items-center text-black ms-0 sm:ms-3 font-medium whitespace-nowrap">
                  <span className="mb-1 sm:mb-0">{t("lang_claim_your_url")}/</span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="outline-none bg-transparent border-none placeholder:text-[#888888] text-[#222] ml-2 w-full sm:w-auto"
                  />
                </div>

                <div className="flex-grow hidden sm:block px-2" />

                <button
                  type="button"
                  onClick={handleUserName}
                  className="btn-green btn-claim w-full sm:w-auto text-center"
                >
                  {t("lang_claim")}{" "}
                  <span className="hidden 2xl:inline-block">{t("lang_your_url")}</span>
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="mx-auto relative max-w-full flex justify-center w-full">
                <div className="w-[37%] animate-float">
                  <img
                    src="/images/bio/hero-mainImage.png"
                    className="max-w-full block mx-auto"
                    alt="hero-image"
                  />
                </div>

                <div className="absolute left-[10%] top-10 w-[26%] animate-fadeIn">
                  <img
                    src="/images/bio/hero-mainImage-1.png"
                    className="max-w-full block mx-auto"
                    alt="hero-image"
                  />
                </div>

                <div className="flex absolute bottom-[-125px] left-0 right-0 gap-6 justify-center w-[89%] m-auto">
                  <div className="animate-slideUp animation-delay-0">
                    <img
                      src="/images/bio/hero-mainImage-2.png"
                      className="max-w-full block mx-auto"
                      alt="hero-image"
                    />
                  </div>
                  <div className="animate-slideUp animation-delay-200">
                    <img
                      src="/images/bio/hero-mainImage-3.png"
                      className="max-w-full block mx-auto"
                      alt="hero-image"
                    />
                  </div>
                  <div className="animate-slideUp animation-delay-400">
                    <img
                      src="/images/bio/hero-mainImage-4.png"
                      className="max-w-full block mx-auto"
                      alt="hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
