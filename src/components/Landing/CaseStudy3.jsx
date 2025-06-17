import React from "react";

const CaseStudy3 = () => {
  const keyFeature = [
    {
      title: "Data Protection",
    },
    {
      title: "Secure Transactions",
    },
    {
      title: "Privacy Assurance",
    },
    {
      title: "Two-Factor Authentication",
    },
    {
      title: "Safe User Interaction",
    },
  ];

  return (
    <div className="container">
      <div className="flex gap-5 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[50%] h-auto flex flex-col justify-end">
          <span className="text-[16px] inline-block font-semibold font-secondary">
            03 . Secure and Reliable for Peace of Mind
          </span>
          <p className="info-text text-sm">
            Your security is our priority. Trimmo App ensures data protection and safe interaction
            for you and your audience.
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

export default CaseStudy3;
