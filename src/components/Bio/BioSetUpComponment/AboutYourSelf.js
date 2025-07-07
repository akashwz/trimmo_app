"use client";

import { clearEditData, editUser } from "@/redux/slices/authSlice";
import { CircularProgress } from "@mui/material";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AboutYourSelf = ({ params ,handleContinue,profile,setProfile}) => {
  
  const router = useRouter();
  const { editData, userData } = useSelector((state) => state?.authSlice);
  const { loader } = useSelector((state) => state.errorReducer);

  const profileList = ["Creator", "Business", "Musician", "Real estate", "Personal", "Other"];

  return (
    <div className="flex items-center mb-5 justify-center w-full">
      <div className=" text-center aboutyourself w-full">
        <h2 className="mb-1 mt-5 lg:mb-3">{t("lang_welcome_to_trimmo")}</h2>
        <p className="info-text block">
          {t("lang_select_one_category_that_best_describes_your_trimmo_bio")}
        </p>
        <div className="flex flex-col my-5 gap-4">
          {profileList?.map((elem, index) => (
            <button
              type="button"
              key={index}
              className={`${profile === elem ? "btn-black" : "btn-outline"}`}
              onClick={() => setProfile(elem)}
            >
              {elem}
            </button>
          ))}
        </div>
        <button
          type="button"
          disabled={!profile || loader}
          //   onClick={() => dispatch(editUser({ designation: profile }))}
          onClick={handleContinue}
          className="w-full mx-auto bg-green-400 hover:bg-[#ebff57] hover:text-[#000] text-white font-medium py-2 px-8 rounded-full shadow-md transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-400 disabled:hover:text-white items-center flex justify-center"
        >
          {t("lang_continue")} &nbsp; {loader && <CircularProgress color="inherit" size={20} />}
        </button>
      </div>
    </div>
  );
};

export default AboutYourSelf;
