import Image from "next/image";
import React, { useState } from "react";

export const HelpSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // By default, first item open

  const accordionItems = [
    {
      title: "Mini Site - Lorem Ipsum is simply",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      title: "Shorten Links & Customized QR",
      content:
        "Easily shorten your links and create custom QR codes to share your content anywhere.",
    },
    {
      title: "All-in-One Social Media Chat",
      content:
        "Manage all your social media chats from one central place, saving time and improving response rate.",
    },
    {
      title: "Social Media Posting & Scheduling",
      content: "Schedule your social media posts and automate your content calendar.",
    },
    {
      title: "Just everything you need in one place",
      content: "All essential marketing tools in one seamless, easy-to-use platform.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#034737] to-[#007e60] px-8 py-16">
      <div className="container max-w-[1530px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 z-8">
        {/* Left Content */}
        <div className="lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
            How Trimmo helps you <br />
            <span className="text-white">turn clicks into </span>
            <span className="text-gray-400">conversations,</span>
            <br />
            <span className="text-gray-400">followers into loyal customers.</span>
          </h2>

          {/* Accordion */}
          <div className="mt-8 space-y-4">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-t border-[#A2E05F] pt-4">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div>
                    <span className="text-[#A2E05F] font-bold mr-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <span
                    className="text-white transform transition-transform duration-200"
                    style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ⌃
                  </span>
                </div>

                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-300">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 mt-8 lg:mt-0 animate-fade-in-right">
          <Image
            src="/images/app/img_img.svg"
            alt="illustration"
            width={620}
            height={756}
            className="w-[300px] sm:w-[400px] lg:w-[620px] h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
