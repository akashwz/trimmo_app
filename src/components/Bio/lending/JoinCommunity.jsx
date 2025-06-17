import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { t } from "i18next";

const JoinCommunity = () => {
  const IMGS = [
    "/images/bio/community-01.png",
    "/images/bio/community-02.png",
    "/images/bio/community-03.png",
    "/images/bio/community-04.png",
    "/images/bio/community-05.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        {t("lang_join_the_trimmo_community")}
      </h2>
      <Slider {...settings}>
        {IMGS.map((img, index) => (
          <div key={index} className="px-2 cursor-grab">
            <img
              src={img}
              alt={`Community ${index + 1}`}
              className=" h-[600px] rounded-lg shadow-md hover:scale-95 transition-transform duration-300"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default JoinCommunity;
