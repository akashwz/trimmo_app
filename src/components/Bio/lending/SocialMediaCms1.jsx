import React from "react";
import IconCloud from "../Animation/IconCloud";
import { t } from "i18next";
const SocialMediaCms1 = () => {
  const slugs = [
    "instagram",
    "youtube",
    "facebook",
    "spotify",
    "snapchat",
    "pinterest",
    "whatsapp",
    "telegram",
    "github",
    "tiktok",
    // "linkedin",
    // "twitter",
  ];

  return (
    <section>
      <div className="container">
        <div className="block my-10 lg:flex lg:gap-8 items-center">
          <div className="w-full mb-8 lg:mb-0 lg:w-[50%]">
            <h4 className="text-[32px] secondary-font mb-2 font-medium">
              {t("lang_east_to_use_trimmo_bio_select_social_media")}
            </h4>
            <p className="text-sm md:text-[18px] mb-8 leading-6">{t("lang_lorem_desc")}</p>
            <button className="btn-black">{t("lang_claim_your_url")}</button>
          </div>
          <div className="bg-[#E3E2D5] rounded-[10px] w-full max-w-md aspect-square mx-auto flex items-center justify-center p-10">
            <IconCloud iconSlugs={slugs} />
          </div>

          {/* <div
            ref={boxRef}
            className='w-full lg:w-[40%] relative min-h-[400px] bg-[#E3E2D5] overflow-hidden'
          >
            {iconPaths.map((path, index) => (
              <img
                key={index}
                ref={el => (iconsRef.current[index] = el)}
                src={`/images/bio${path}`}
                alt={`Icon ${index + 1}`}
                style={{
                  position: 'absolute',
                  width: '70px',
                  height: '70px',
                  left: 0, // Initial position
                  top: 0 // Initial position
                }}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaCms1;
