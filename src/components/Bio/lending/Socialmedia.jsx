"use client";
import { t } from "i18next";
import { useEffect, useRef } from "react";
const Socialmedia = () => {
  const sectionRef = useRef(null);

  const initGsap = async () => {
    const section = document.querySelector(".social-card");
    section.style.transform = "scale(1)";
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024 && section) {
        section.style.transform = "scale(1.7)";
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        const totalScroll = 2000;

        gsap.to(section, {
          scale: () => 1,
          scrollTrigger: {
            trigger: section,
            start: "center center",
            end: `+=${totalScroll}`,
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
          },
        });
      }
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", initGsap);
      return () => {
        window.removeEventListener("resize", initGsap);
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      onLoad={initGsap}
      className="overflow-hidden lg:min-h-[800px] relative herosection bg-[#E3E2D5]"
    >
      <div
        // style={{ scale: window.innerWidth >= 991 ? 1.7 : 1 }}
        className="social-card bg-[#E3E2D5] overflow-hidden lg:min-h-[800px] flex items-center justify-center relative py-10 md:py-10 w-full"
      >
        <div className="block text-div px-4 lg:w-[55%] mx-auto text-center lg:flex gap-5 items-center">
          <div className="w-full lg:mb-0">
            <h2 className="mb-2 containe-font">{t("lang_media_title")}</h2>
            <p className="info-text">{t("lang_media_desc")}</p>
            <button
              type="button"
              className="btn-black mt-8 hover:bg-[#ebff57] hover:text-[#000]"
              onClick={() => router.push("/register")}
            >
              {t("lang_claim_your_url")}
            </button>
          </div>
          {/* <div className='w-full lg:w-[45%]'>
            <Image
              src='/images/bio/social-media.png'
              height={663}
              width={673}
              alt='hero'
              className='block mx-auto'
            />
          </div> */}
        </div>
        <div className="hidden lg:block absolute w-full h-full card-div z-10 left-0 top-0">
          <img
            src="/images/bio/card-wp.svg"
            className="absolute left-10 top-10 social-card-img-1"
            alt="card-wp"
          />
          <img
            src="/images/bio/card-img.svg"
            className="absolute right-0 top-10 social-card-img"
            alt="card-img"
          />
          <img
            src="/images/bio/card-youtube.svg"
            className="absolute left-32 bottom-10 social-card-img"
            alt="card-youtube"
          />
          <img
            src="/images/bio/card-twitter.svg"
            className="absolute right-10 bottom-10 social-card-img"
            alt="card-twitter"
          />
        </div>
      </div>
    </section>
  );
};

export default Socialmedia;
