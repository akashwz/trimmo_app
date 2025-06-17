"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { t } from "i18next";

const Cms1 = () => {
  const router = useRouter();

  // State to track if the component is in view
  const [inView, setInView] = useState(false);

  // Intersection observer to trigger animation when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the component is in view
      },
    );

    const element = document.getElementById("cms1-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="cms1-section" className="herosection py-32">
      <div className="container">
        <div className="block my-10 lg:flex items-center gap-12">
          <div className={`w-full cms-1 lg:w-[45%] relative ${inView ? "animate-slideUp" : ""}`}>
            <div className="w-[41%] m-auto animate-slideUp">
              <img
                src="/images/bio/cms-main.png"
                alt="hero"
                className="block max-w-full mb-5 lg:mb-0 mx-auto"
              />
            </div>

            <div className="absolute w-[38%] top-[23%] right-[-2%] animate-float">
              <img
                src="/images/bio/cms-2.png"
                alt="hero"
                className="block max-w-full mb-5 lg:mb-0 mx-auto"
              />
            </div>

            <div className="absolute w-[16%] top-[-15%] left-[33%] animate-float">
              <img
                src="/images/bio/cms-3.png"
                alt="hero"
                className="block max-w-full mb-5 lg:mb-0 mx-auto"
              />
            </div>

            <div
              className="absolute w-[19%] top-[-25%] left-[8%] animate-float"
              style={{ animationDelay: "1200m" }}
            >
              <img
                src="/images/bio/cms-4.png"
                alt="hero"
                className="block max-w-full mb-5 lg:mb-0 mx-auto"
              />
            </div>

            <div
              className="absolute w-[11%] bottom-[20%] left-[0%] animate-float"
              style={{ animationDelay: "1400m" }}
            >
              <img
                src="/images/bio/cms-5.png"
                alt="hero"
                className="block max-w-full mb-5 lg:mb-0 mx-auto"
              />
            </div>

            <div
              className="absolute w-[12%] right-[5%] bottom-[10%] animate-float"
              style={{ animationDelay: "1600m" }}
            >
              <img
                src="/images/bio/cms-6.png"
                alt="hero"
                className="block max-w-full mb-5 lg:mb-0 mx-auto"
              />
            </div>
          </div>

          <div className="w-full lg:w-[55%] py-5 lg:py-20">
            <h2 className="mb-2 containe-font"> {t("lang_build_your_trimo_bio")}</h2>
            <p className="info-text">{t("lang_build_your_trimo_bio_desc")}</p>
            <button
              type="button"
              className="btn-black mt-8 hover:bg-[#ebff57] hover:text-[#000]"
              onClick={() => router.push("/register")}
            >
              {t("lang_claim_your_url")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cms1;
