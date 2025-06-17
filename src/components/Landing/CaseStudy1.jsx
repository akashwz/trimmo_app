import React from "react";

const CaseStudy1 = () => {
  const keyFeature = [
    {
      title: "Responsive Design",
    },
    {
      title: "Cross-Device Compatibility",
    },
    {
      title: "Fast Loading Speed",
    },
    {
      title: "Optimized for Smartphones",
    },
    {
      title: "User-Friendly Interface",
    },
  ];

  return (
    <div className="container">
      <div className="flex gap-5 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[50%] h-auto flex flex-col justify-between">
          <div>
            <button disabled className="btn-outline">
              Case Study
            </button>
            <h3 className="sec-title">More Ways Trimmo App Helps You Grow</h3>
          </div>
          <div>
            <span className="text-[16px] inline-block font-semibold font-secondary">
              01 . Mobile-Friendly for On-the-Go Users
            </span>
            <p className="info-text text-sm">
              Ensure your bio link page looks stunning and works seamlessly across all devices,
              including smartphones and tablets. Reach your audience anytime, anywhere.
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
        </div>
        <div className="w-full lg:w-[50%] bg-[#D9D9D9] h-[300px] sm:h-[400px] lg:h-[600px] flex items-end"></div>
      </div>
    </div>
  );
};

export default CaseStudy1;
