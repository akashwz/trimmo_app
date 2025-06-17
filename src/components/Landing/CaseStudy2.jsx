import React from "react";

const CaseStudy2 = () => {
  const keyFeature = [
    {
      title: "Easy Sharing Options",
    },
    {
      title: "One Link, Multiple Platforms",
    },
    {
      title: "Social Media Integration",
    },
    {
      title: "Simple Copy-Paste Link",
    },
    {
      title: "Instant Sharing",
    },
  ];

  return (
    <div className="container">
      <div className="flex gap-5 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[50%] h-auto flex flex-col justify-end">
          <span className="text-[16px] inline-block font-semibold font-secondary">
            02 . Share Everywhere, Hassle-Free
          </span>
          <p className="info-text text-sm">
            Copy and share your Trimmo App link across Instagram, TikTok, Twitter, emails, or any
            platform. Simplify sharing with one unified link.
          </p>
          <ul className="mt-20">
            {keyFeature.map((val, index) => {
              return (
                <li className="font-secondary text-base font-medium" key={index}>
                  - {val.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full lg:w-[50%] bg-[#D9D9D9] h-[300px] sm:h-[400px] lg:h-[600px]"></div>
      </div>
    </div>
  );
};

export default CaseStudy2;
