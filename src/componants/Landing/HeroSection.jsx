import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const sectionItem = [
    {
      title: "Trimmo QR and Short Link",
      content:
        "Generate dynamic QR codes and branded short links to simplify sharing, tracking, and boosting campaigns.",
      link: "https://trimmo.link",
    },
    {
      title: "Trimmo.Chat",
      content:
        "Engage instantly with customers through smart, seamless chat solutions for enhanced communication.",
      link: "https://trimmo.chat",
    },
    {
      title: "Trimmo.Bio",
      content:
        "Design your personalized bio link page to showcase your content, links, and brand effortlessly.",
      link: "https://trimmo.bio/",
    },
  ];

  return (
    <div className="container">
      <div className="text-center mb-16 flex flex-col items-center justify-center gap-2 w-full sm:w-[95%] mx-auto pt-[50px] md:pt-[100px]">
        <button className="btn-outline max-w-fit">New Version Trimmo</button>
        <h1 className="font-secondary text-[27px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight font-semibold">
          Free Tools to Boost Your Digital Presence Using Smart Tools
        </h1>
        <p className="info-text description w-[85%] lg:w-[60%]">
          Trimmo offers QR codes, short links, chat, and bio solutions to help you improve your
          online engagements.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sectionItem.map((val, index) => {
          return (
            <div className="flex flex-col text-center gap-2" key={index}>
              <Link href={val.link} target="_blank">
                <img src="images/app/img-01.svg" alt="img-01" className="max-w-full inline-block" />
                <span className="text-[16px] inline-block font-semibold font-secondary">
                  {val.title}
                </span>
                <p className="info-text text-sm">{val.content}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
