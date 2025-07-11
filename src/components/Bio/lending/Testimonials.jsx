"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonialArray = [
    {
      title: "Perfect for My Growing Brand!",
      subText:
        "Trimmo.bio has been a game-changer for my social media strategy. I used to struggle with sharing multiple links across Instagram and TikTok, but now I have one simple, clean bio link that connects my audience to everything I want them to see. The customization options are fantastic, and I love how professional my page looks!",
      author: "Aarti Singh",
      date: "10 January, 2023",
      image: "arti-singh.webp",
    },
    {
      title: "Easy to Use and Highly Effective!",
      subText:
        "I built my Trimmo bio page in just a few minutes, instantly streamlining my online presence. My followers can now easily access my website, YouTube channel, and online store—all from a single link. The analytics feature has also helped me track performance and optimize my content strategy.",
      author: "Priya Sharma",
      date: "22 March, 2023",
      image: "07.webp",
    },
    {
      title: "A Must-Have Tool for Creators",
      subText:
        "Trimmo.bio is exactly what I needed as a content creator. It's simple, mobile-friendly, and looks amazing on all devices. I even upgraded to a custom domain to maintain my brand identity, and the response from my audience has been incredible!",
      author: "David L., Small Business Owner",
      date: "15 Aug, 2023",
      image: "review3.webp",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (!isMounted) return null;
  return (
    <div className="flex container items-center flex-wrap lg:flex-nowrap gap-8">
      <div className="w-full lg:w-[50%]">
        <h2 className="font-bold mb-5 containe-font">Testimonials</h2>
        <Slider {...settings} className="mt-4">
          {testimonialArray?.map((item, index) => (
            <div
              key={index}
              className="w-full h-auto bg-secondary rounded-[50px] flex flex-col lg:flex-row items-center justify-center"
            >
              <div className="text-left w-full">
                <h4 className="text-[26px] mb-2 font-bold containe-font">{item?.title}</h4>
                <p className="text-sm md:text-[18px] mb-8 leading-6">{item?.subText}</p>
                <div className="flex items-center gap-2">
                  <div className="w-[60px] h-[60px] rounded-full bg-black overflow-hidden">
                    <img
                      src={`/images/bio/${item?.image}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[20px] font-bold containe-font">{item?.author}</div>
                    <span className="text-sm">{item?.des}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full lg:w-[50%] my-10">
        <img src="/images/bio/testimonials-img.svg" className="max-w-full block mx-auto" />
      </div>
    </div>
  );
};

export default Testimonials;
