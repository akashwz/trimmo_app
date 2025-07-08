"use client";

import ConfettiComponent from "@/components/Bio/confetti/Confetti";
import SocialShare from "@/components/Bio/SocialShare/SocialShare";
import { getSingleThemeData } from "@/redux/slices/apperanceSlice";
import { CircularProgress } from "@mui/material";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LinkReady = ({ handleDialogClose,imageData, setImageData }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state?.authSlice);
    const [cardImage, setCardImage] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);
   
    const [showSharePopup, setShowSharePopup] = useState(false);
    const url = process.env.NEXT_PUBLIC_APP_URL + `/${userData?.data?.username}`;
    const { loader } = useSelector((state) => state.errorReducer);

    const closeSharePopup = () => {
        setShowSharePopup(false);
    };

    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Stops after 5 seconds
    };
    useEffect(() => {
        if (typeof localStorage !== "undefined") {
            const getCardIndex = localStorage.getItem("selectedCard");
            setCardImage(getCardIndex);
        }
    }, []);

    useEffect(() => {
        if (cardImage?.length > 0) {
            triggerConfetti();
        }
    }, [cardImage]);

    useEffect(() => {
        fatchData();
    }, []);

    const fatchData = async () => {
        const getCardIndex = localStorage.getItem("selectedCard");
        if (getCardIndex) {
            const data = await dispatch(getSingleThemeData(JSON.parse(getCardIndex)));
            console.log(data, 'data=-=-=->>');
            setImageData(data?.payload?.image);
        }
    };

    return (
        <div className="mt-[10%] w-full lg:flex overflow-hidden m-auto 2xl:me-auto 2xl:w-[70%] text-center items-center flex-col overflow-hidden">
            <div className="text-center overflow-hidden">
                <ConfettiComponent runConfetti={showConfetti} />
            </div>
            <h3 className="mb-2 text-xl md:text-3xl">{t("lang_your_trimmo_bio_is_ready")}</h3>
            <p className="info-text block">{t("lang_it_time_to_share_it_with_the_world")}</p>
            <img
                src={`${imageData}`}
                height={500}
                width={300}
                alt="hero-phone"
                className="block max-h-[60vh] mt-4 mx-auto "
            />
            <div className="flex link-ready gap-2 md:gap-4 mt-4 justify-center">
                <button
                    type="button"
                    className="w-auto bg-green-400 hover:bg-[#ebff57] hover:text-[#000] text-white font-medium py-2 px-4 md:px-8 rounded-full shadow-md text-sm md:text-base transition-all duration-200 ease-in-out mt-2"
                    onClick={() => setShowSharePopup(true)}
                >
                    {t("lang_share_your_Bio")}
                </button>
                <button
                    type="button"
                    className="w-auto bg-transparent hover:bg-black text-black hover:text-white border-2 border-black font-medium py-2 text-sm md:text-base px-4 md:px-8 rounded-full shadow-md transition-all duration-200 ease-in-out mt-2 items-center flex justify-center"
                    onClick={() => {
                        router.push("/bio/edit-profile")
                        handleDialogClose();
                    }}

                >
                    {t("lang_continue_editing")} &nbsp;{" "}
                    {loader && <CircularProgress color="inherit" size={20} />}
                </button>
            </div>
            <SocialShare
                showSharePopup={showSharePopup}
                url={url}
                image={userData?.data?.og_image}
                username={userData?.data?.username}
                closeSharePopup={closeSharePopup}
            />
        </div>
    );
};

export default LinkReady;
