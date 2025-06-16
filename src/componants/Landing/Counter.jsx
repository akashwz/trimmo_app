import Link from "next/link";
import React from "react";

const Counter = () => {
  const counterSection = [
    {
      title: "Links Generated with Trimmo.link",
      desc: "Easily create, customize, and share branded short links with advanced tracking and analytics. Trimmo.link allows you to easily increase your online presence.",
      link: "https://trimmo.link/",
    },
    {
      title: "Link-in-Bio Pages Created with Trimmo.bio",
      desc: "Create a personalized bio link page that displays all of your products, social network accounts, and important links in one place.",
      link: "https://trimmo.bio/",
    },
    {
      title: "Chatbots Integrated with Trimmo.chat",
      desc: "Trimmo.chat, Easy, and smart chatbot solutions provide quick engagement with your audience, improving communication and support.",
      link: "https://trimmo.chat/",
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {counterSection.map((val, index) => {
          return (
            <div className="flex flex-col gap-1 sm:gap-2" key={index}>
              <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-secondary font-medium">
                10K+
              </h2>
              <span className="text-[16px] inline-block font-semibold font-secondary">
                {val.title}
              </span>
              <p className="info-text text-sm">{val.desc}</p>
              <Link href={val.link} target="_blank" className="link mt-4">
                CTA Button
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
