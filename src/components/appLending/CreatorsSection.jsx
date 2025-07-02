import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Button from "../ui/Button";
import { Separator } from "../ui/separator";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export const CreatorsSection = () => {
  const features = [
    {
      icon: "/images/app/img_exclude.png",
      iconAlt: "Exclude",
      title: "Artist portfolio in one\nbio link",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      icon: "/images/app/img_vector_50x50.png",
      iconAlt: "Shape",
      title: "D2C brand with shop\nlinks & chat",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      icon: "/images/app/Star 1.svg",
      iconAlt: "Star",
      title: "Podcaster with episodes,\nnewsletter, & tips",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      icon: "/images/app/img_exclude_black_900.svg",
      iconAlt: "Exclude",
      title: "Small business with offers,\nQR, and contact",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#cefc6c]">
      <div className="container max-w-[1530px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h2 className="font-polysans text-[28px] sm:text-[36px] md:text-[44px] leading-snug">
            <span className="text-black">Built for Creators. </span>
            <span className="text-black/50">Loved by Businesses.</span>
          </h2>

          <Button variant="link" className="flex items-center gap-2 p-0 h-auto">
            <span className="font-polysans font-normal text-black text-base leading-5">
              Read More
            </span>
            <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col bg-transparent border-none shadow-none items-start gap-6"
            >
              <CardContent className="flex flex-col items-start justify-between p-0 h-full gap-6">
                <Image
                  width={50}
                  height={50}
                  src={feature.icon}
                  alt={feature.iconAlt}
                  className="w-[40px] sm:w-[50px] h-auto"
                />

                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-polysans text-xl sm:text-2xl text-black whitespace-pre-line leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-black leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
