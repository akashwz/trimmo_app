import React from "react";
import { Card, CardContent } from "../ui/card";
import Button from "../ui/Button";
import Image from "next/image";

export const FeatureCardsBottom = () => {
  const featureCards = [
    {
      title: "Real-time analytics to measure\nwhat works",
      description: "Create your free Trimmo profile\nand start sharing smarter.",
      bgColor: "bg-[#f7f4ed]",
      hasButton: false,
    },
    {
      title: "Beautiful templates that speak\nyour brand",
      description:
        "Lorem Ipsum is simply dummy text of the printing and\ntypesetting industry. Lorem Ipsum has been the industry's.",
      bgColor: "bg-[#e9edec]",
      hasButton: true,
    },
    {
      title: "Accept payments, collect leads,\nrun surveys",
      description:
        "Lorem Ipsum is simply dummy text of the printing and\ntypesetting industry. Lorem Ipsum has been the industry's.",
      bgColor: "bg-[#f7f4ed]",
      hasButton: false,
    },
  ];

  return (
    <section className="w-full max-w-[1530px] mx-auto px-4 py-16">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] leading-snug">
          <span className="text-black">
            Lorem Ipsum is simply dummy text of the <br className="hidden sm:block" />
            printing and{" "}
          </span>
          <span className="text-[#00000080]">typesetting industry.</span>
        </h2>

        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-base font-semibold text-global-1">Read More</span>
          <Image src="/images/app/img_frame_black_900.svg" alt="arrow" width={24} height={24} />
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureCards.map((card, index) => (
          <Card
            key={`feature-card-${index}`}
            className={`${card.bgColor} rounded-[20px] border-none flex flex-col h-full p-8`}
          >
            <CardContent className="flex flex-col items-center text-center space-y-6">
              <h3 className="font-normal text-black text-2xl leading-snug whitespace-pre-line">
                {card.title}
              </h3>

              <p className="font-normal text-description-color text-base leading-6 whitespace-pre-line">
                {card.description}
              </p>

              {card.hasButton && (
                <Button className="mt-2 bg-[#cefc6c] text-black rounded-[22.5px] px-6 py-3 hover:bg-[#c5f055] flex items-center gap-2.5">
                  <span className="text-base">Start Building</span>
                  <img
                    className="w-6 h-6"
                    alt="Arrow right"
                    src="/images/app/img_frame_black_900.svg"
                  />
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
