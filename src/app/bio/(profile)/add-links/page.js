"use client";

import { addBio } from "@/redux/slices/authSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddLinks = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { platformData, bioData } = useSelector((state) => state?.authSlice);
  const [socialMedia, setSocialMedia] = useState([]);
  // useEffect(() => {
  //     if (platformData) {
  //         setSocialMedia(
  //             platformData?.map((media) => {
  //                 return {
  //                     name: media,
  //                     url: "",
  //                 };
  //             })
  //         );
  //     }
  // }, [platformData]);
  useEffect(() => {
    if (platformData) {
      setSocialMedia(platformData);
    }
  }, [platformData]);
  const handleSocialMedia = (e, elem) => {
    const updatedValue = e.target.value;
    const updatedSocialMedia = socialMedia.map((item) =>
      item.name === elem.name ? { ...item, url: item?.url + updatedValue } : item,
    );
    if (!socialMedia.some((item) => item.name === elem.name)) {
      updatedSocialMedia.push({ name: elem.name, url: item?.url + updatedValue });
    }
    setSocialMedia(updatedSocialMedia);
  };
  useEffect(() => {
    if (bioData?.user) {
      setSocialMedia([]);
      router?.push("/profile-details");
    }
  }, [bioData]);
  return (
    <div className="w-full mx-auto 2xl:me-auto 2xl:w-[70%] text-center">
      <h2 className="mb-3">Which Platforms are you on?</h2>
      <p className="info-text block">Select Profile Image</p>
      {socialMedia &&
        socialMedia.map((elem, index) => {
          return (
            <div key={index} className="flex items-start mt-5 lg:mt-8 w-full gap-2">
              <Image
                src={`/images/bio/${elem?.name}.svg`}
                height={50}
                width={50}
                alt={elem?.name}
                className="inline-block max-w-full"
              />
              <div className="flex username grow bg-[#29292B] text-[#29292B] text-left bg-opacity-10 p-3.5 rounded-md">
                <input
                  type="text"
                  placeholder={elem?.placeholder}
                  // value={elem?.url || ""}
                  className="w-full border-0 outline-none bg-transparent  peer"
                  onBlur={(e) => handleSocialMedia(e, elem)}
                />
              </div>
            </div>
          );
        })}
      <button
        type="button"
        className={`btn-green mt-5 lg:mt-12`}
        onClick={() => dispatch(addBio({ social_media: socialMedia }))}
      >
        Continue
      </button>
    </div>
  );
};

export default AddLinks;
