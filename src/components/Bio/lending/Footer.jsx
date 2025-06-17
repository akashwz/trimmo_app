import { t } from "i18next";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const productsArray = [
    {
      link: `${t("lang_the_trimmo_blog")}`,
      redirect: "/bio/help",
      target: `_self`,
    },
    // {
    //   link: `Engineering Blog`,
    //   redirect: "/bio/",
    //   target: `_self`,
    // },
    {
      link: `${t("lang_marketplace")}`,
      redirect: "/bio/marketplaces",
      target: `_self`,
    },
    {
      link: `${t("lang_what_new")}`,
      redirect: "/bio/",
      target: `_self`,
    },
    {
      link: `${t("lang_about")}`,
      redirect: "/bio/about",
      target: `_self`,
    },
    // {
    //   link: `Press`,
    //   redirect: "/bio/",
    //   target: `_self`,
    // },

    {
      link: `${t("lang_careers")}`,
      redirect: "/bio/",
      target: `_self`,
    },
  ];
  const shopeasyArray = [
    {
      link: `${t("lang_trimmo_for_enterprise")}`,
      redirect: "/bio/",
      target: `_self`,
    },
    {
      link: `${t("lang_creator_report")}`,
      redirect: "/bio/",
      target: `_self`,
    },
    {
      link: `${t("lang_charities")}`,
      redirect: "/bio/",
      target: `_self`,
    },
    {
      link: `${t("lang_what_trending")}`,
      redirect: "/bio/",
      target: `_self`,
    },
    {
      link: `${t("lang_creator_profile_directory")}`,
      redirect: "/bio/",
      target: `_self`,
    },
    {
      link: `${t("lang_explore_templates")}`,
      redirect: "/bio/",
      target: `_self`,
    },
  ];
  const developerArray = [
    {
      link: `${t("lang_help_topics")}`,
      redirect: "/bio/help",
      target: `_self`,
    },
    {
      link: `${t("lang_getting_started")}`,
      redirect: "/bio/register",
      target: `_self`,
    },
    // {
    //   link: `Trimmo Pro`,
    //   redirect: "/bio/",
    //   target: `_self`,
    // },
    {
      link: `${t("lang_features_how_tos")}`,
      redirect: "/bio/advanced-features",
      target: `_self`,
    },
    // {
    //   link: `FAQs`,
    //   redirect: "/bio/",
    //   target: `_self`,
    // },
    // {
    //   link: `Report a Violation`,
    //   redirect: "/bio/",
    //   target: `_self`,
    // },
  ];
  const supportArray = [
    // {
    //   link: `Terms & Conditions`,
    //   redirect: "/bio/",
    //   target: `_blank`,
    // },
    {
      link: `${t("lang_privacy_notice")}`,
      redirect: "/bio/privacy-policy",
      target: `_blank`,
    },
    // {
    //   link: `Cookie Notice`,
    //   redirect: "/bio/",
    //   target: `_self`,
    // },
    // {
    //   link: `Trust Center`,
    //   redirect: "/bio/",
    //   target: `_self`,
    // },
    // {
    //   link: `Cookie Preferences`,
    //   redirect: "/bio/",
    //   target: `_self`,
    // },
  ];

  return (
    <footer className="container ">
      <div className="grid p-6 lg:p-14 rounded-xl bg-[#29292B] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4">
        <div className="flex flex-col space-y-2">
          <h6 className="text-[#F1F0E6] font-medium mb-3 text-[24px]">{t("lang_company")}</h6>
          {productsArray?.map((elem, index) => {
            return (
              <a
                key={index}
                target={elem?.target}
                className="text-[#F1F0E6] text-sm font-light"
                href={elem?.redirect}
              >
                {elem?.link}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col space-y-2">
          <h6 className="text-[#F1F0E6] font-medium mb-3 text-[24px]">{t("lang_community")}</h6>
          {shopeasyArray?.map((elem, index) => {
            return (
              <a
                key={index}
                target={elem?.target}
                className="text-[#F1F0E6] text-sm font-light"
                href={elem?.redirect}
              >
                {elem?.link}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col space-y-2">
          <h6 className="text-[#F1F0E6] font-medium mb-3 text-[24px]">{t("lang_support")}</h6>
          {developerArray?.map((elem, index) => {
            return (
              <a
                key={index}
                target={elem?.target}
                className="text-[#F1F0E6] text-sm font-light"
                href={elem?.redirect}
              >
                {elem?.link}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col space-y-2">
          <h6 className="text-[#F1F0E6] font-medium mb-3 text-[24px]">{t("lang_trust_legal")}</h6>
          {supportArray?.map((elem, index) => {
            return (
              <a
                key={index}
                target={elem?.target}
                className="text-[#F1F0E6] text-sm font-light"
                href={elem?.redirect}
              >
                {elem?.link}
              </a>
            );
          })}
        </div>
      </div>
      {/* <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 rounded-xl bg-[#29292B] p-6 lg:p-10">
          <div className="flex items-center">
            <p className="text-[30px] font-bold m-0 text-[#F1F0E6]">We Are Available On</p>
          </div>
          <div className="flex flex-wrap items-center">
            <ul className="text-sm font-normal text-[#F1F0E6] flex flex-wrap items-center justify-center gap-4 text-center m-0 p-0">
              <li>Help Center</li>
              <li>|</li>
              <li>Terms of Service</li>
              <li>|</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex items-center justify-end">
            <Image src="/images/bio/footer-img.svg" alt="footer-img" height={500} width={300} className="inline-block max-w-[95%] max-h-full"/>
          </div>
      </div> */}
    </footer>
  );
};

export default Footer;
