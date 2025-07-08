"use client";

import { getTheme } from "@/redux/slices/apperanceSlice";
import { editUser } from "@/redux/slices/authSlice";
import { CircularProgress } from "@mui/material";
import { t } from "i18next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectTemplate = ({handleSelectTemplate,selectedCard,setSelectedCard}) => {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState([]);
  const [imageData, setImageData] = useState([]);
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.errorReducer);
  const { userData } = useSelector((state) => state?.authSlice);

  useEffect(() => {
    if (userData?.data?.template) {
      router.push("/bio/edit-profile");
    } else {
      fetchTheme();
    }
  }, []);

  const fetchTheme = async () => {
    try {
      const data = await dispatch(getTheme());

      // setImageData(data.slice(0, 3));
      console.log(data, 'data');
      setImageData(data?.payload);
    } catch (error) {
      console.error("Error fetching theme:", error);
    }
  };

  const handleThemeSelect = async (id) => {
    setSelectedCard(id.toString());
  };

  const handleAddLocalStoreage = () => {
    localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
  };

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="w-full flex items-center justify-center overflow-auto text-center">
      <div>
        <h2 className="mb-0 lg:mb-3">{t("lang_welcome_to_trimmo")}</h2>
        <p className="info-text block">{t("lang_trimmo_theme_desc")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {imageData?.map((image, index) => (
            <div
              key={index}
              className="flex items-center my-4 justify-center cursor-pointer"
              onClick={() => handleThemeSelect(image?._id)}
            >
              <div
                className={`border p-1 rounded-lg ${
                  selectedCard === image?._id ? "border-black" : "border-transparent"
                } hover:border-black`}
              >
                {!imageLoaded[index] && (
                  <div
                    className="skeleton-loader"
                    style={{
                      height: "340px",
                      width: "185px",
                    }}
                  ></div>
                )}
                <Image
                  src={image?.image}
                  alt={`template-0${index + 1}`}
                  height={1200}
                  width={1200}
                  className={`mx-auto ${!imageLoaded[index] ? "hidden" : ""}`}
                  onLoadingComplete={() => handleImageLoad(index)}
                  priority
                />
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleSelectTemplate}
          disabled={selectedCard === null || loader}
          className="w-full mx-auto bg-green-400 hover:bg-[#ebff57] hover:text-[#000] text-white font-medium py-2 px-8 rounded-full shadow-md transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-400 disabled:hover:text-white items-center flex justify-center"
        >
          {t("lang_continue")} &nbsp; {loader && <CircularProgress color="inherit" size={20} />}
        </button>
      </div>
    </div>
  );
};

export default SelectTemplate;
