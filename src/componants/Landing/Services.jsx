import Link from "next/link";
import React from "react";

const Services = () => {
  const sectionItem = [
    {
      title: "Streamline Your Online Presence",
      content:
        "Consolidate all your social media profiles and links into one personalized, shareable bio link. With Trimmo App, managing your online identity has never been easier",
      link: "https://trimmo.link",
      img: "images/app/link.svg",
    },
    {
      title: "Boost Engagement with Advanced Analytics",
      content:
        "Track clicks, monitor user behavior, and optimize your strategy with Trimmo App’s built-in analytics. Understand your audience better and grow your influence.",
      link: "https://trimmo.chat",
      img: "images/app/comment.svg",
    },
    {
      title: "Customize Your Brand Identity",
      content:
        "Design a bio link page that matches your style with customizable layouts, colors, and even custom domains. Perfect for personal use or businesses.",
      link: "https://trimmo.bio/",
      img: "images/app/user-pen.svg",
    },
  ];

  return (
    <div className="container">
      <div className="text-center">
        <button disabled className="btn-outline mx-auto">
          Services
        </button>
        <h3 className="sec-title text-center">What we can do for you</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 services">
        {sectionItem.map((val, index) => {
          return (
            <div className="flex flex-col gap-2">
              <img
                src={val.img}
                width={44}
                height={44}
                alt="link"
                className="inline-block max-w-full"
              />
              <span className="text-[16px] inline-block font-semibold font-secondary">
                {val.title}
              </span>
              <p className="info-text text-sm">{val.content}</p>
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

export default Services;
