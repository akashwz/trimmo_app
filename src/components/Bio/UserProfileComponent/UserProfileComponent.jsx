"use client";

import API from "@/api";
import LinksButton from "@/components/Bio/LinksButton/LinksButton";
import ThumbView from "@/components/Bio/LinksButton/ThumbView";
import SocialShare from "@/components/Bio/SocialShare/SocialShare";
import SvgSection from "@/components/Bio/SvgSection/SvgSection";
import { Transition } from "@/controller/Transitions";
import { GET_BIO } from "@/redux/action.type";
import { clearBio, getAnalytics } from "@/redux/slices/authSlice";
// import { fontMap } from "@/utils/fonts";
import { Backdrop, CircularProgress, Dialog } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Share } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const User = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const unwrappedParams = React.use(params);
  const slug = unwrappedParams?.user;
  const { bioData } = useSelector((state) => state?.authSlice);
  const { loader } = useSelector((state) => state.errorReducer);
  const url = process.env.NEXT_PUBLIC_APP_URL + `/${bioData && bioData?.username}`;
  const [copied, setCopied] = useState(false);
  //   const { appreance } = useSelector((state) => state?.apperanceSlice);
  const appreance = bioData && bioData?.customize_theme;

  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredShareButton, setIsHoveredShareButton] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    if (bioData?.select_profile === "avatar_profile" && bioData?.avatar_profile) {
      setIsPopupOpen(!isPopupOpen);
    }
  };

  useEffect(() => {
    if (bioData?.avatar) {
      setLoading(false);
    }
  }, [bioData]);

  const closeSharePopup = () => {
    setShowSharePopup(false);
  };

  const handleMouseEnter = (id) => setIsHovered(id);
  const handleMouseLeave = () => setIsHovered(null);
  const handleMouseEnterShareButton = (value) => setIsHoveredShareButton(value);
  const handleMouseLeaveShareButton = () => setIsHoveredShareButton(false);

  const lightColor = appreance?.secondaryColor;

  useEffect(() => {
    if (slug) {
      getBioDetails(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (bioData?.is_published === false) {
      router.push("/");
    }
  }, [bioData]);

  const getBioDetails = async (data) => {
    try {
      const apiCall = await API({ url: `/bio/${data}`, method: "get" });
      if (apiCall?.data?.data?.username) {
        dispatch({
          type: GET_BIO,
          payload: apiCall?.data?.data,
        });
      } else {
        dispatch(clearBio());
        router.push("/");
      }
    } catch (error) {
      dispatch(clearBio());
      router.push("/");
    }
  };

  const fromColor = appreance?.form_color;
  const viaColor = appreance?.via_color;
  const toColor = appreance?.to_color;

  const gradientTo =
    appreance?.value === "gradient_up"
      ? "to top"
      : appreance?.value === "gradient_down"
      ? "to bottom"
      : appreance?.value === "gradient_left"
      ? "to left"
      : "to right";

  const handleButtonClick = (url, userId, linkId) => {
    dispatch(getAnalytics(userId, linkId));

    if (url && typeof window !== "undefined") {
      window.open(url, "_blank");
    } else {
      console.error("URL is not provided");
    }
  };

  const [activeTabPreview, setActiveTabPreview] = useState("Links");

  const handleTabClickPreview = async (tab) => {
    setActiveTabPreview(tab);
  };

  const AllLinks = [
    {
      items:
        bioData?.social_media?.flatMap((widget) =>
          widget.items.filter((item) => item.status === true),
        ) || [],
    },
  ];
  const linkCondition = AllLinks[0]?.items?.filter((x) => x.widget_name !== "social media");
  const AllShop = [
    {
      items:
        bioData?.shop?.flatMap((widget) => widget.items.filter((item) => item.status === true)) ||
        [],
    },
  ];

  const foundApp = bioData?.authorize_app?.find((app) => app.name === "Shopeasy");

  const { buttonClass, buttonStyle } = useMemo(() => {
    let buttonClass = "";
    let buttonStyle = {};

    switch (appreance?.selectedButton) {
      case "fill-1":
        buttonClass = "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium";
        buttonStyle = {};
        break;

      case "fill-2":
        buttonClass =
          "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px] hover:bg-gray-200";
        buttonStyle = {};
        break;

      case "fill-3":
        buttonClass =
          "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px] hover:bg-gray-200";
        buttonStyle = {};
        break;

      case "outline-1":
        buttonClass =
          "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium transition-all duration-300";
        buttonStyle = {
          border: isHoveredShareButton
            ? "2px solid transparent"
            : `2px solid ${appreance?.buttonColor}`,
          buttonHoverBg: "transparent",
        };
        break;

      case "outline-2":
        buttonClass =
          "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
        buttonStyle = {
          border: isHoveredShareButton
            ? "2px solid transparent"
            : `2px solid ${appreance?.buttonColor}`,
          buttonHoverBg: "transparent",
        };
        break;

      case "outline-3":
        buttonClass =
          "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
        buttonStyle = {
          border: isHoveredShareButton
            ? "2px solid transparent"
            : `2px solid ${appreance?.buttonColor}`,
          buttonHoverBg: "transparent",
        };
        break;

      case "soft-shadow-1":
        buttonClass = "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium";
        buttonStyle = {
          boxShadow: `0px 4px 6px ${appreance?.shadowColor}`,
        };
        break;

      case "soft-shadow-2":
        buttonClass =
          "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
        buttonStyle = {
          boxShadow: `0px 4px 6px ${appreance?.shadowColor}`,
        };
        break;

      case "soft-shadow-3":
        buttonClass =
          "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
        buttonStyle = {
          boxShadow: `0px 4px 6px ${appreance?.shadowColor}`,
        };
        break;

      case "hard-shadow-1":
        buttonClass = "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium";
        buttonStyle = {
          boxShadow: isHoveredShareButton
            ? `3px 3px ${appreance?.shadowColor}`
            : `3px 3px ${appreance?.shadowColor}`,
        };
        break;

      case "hard-shadow-2":
        buttonClass =
          "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
        buttonStyle = {
          boxShadow: isHoveredShareButton
            ? `3px 3px ${appreance?.shadowColor}`
            : `3px 3px ${appreance?.shadowColor}`,
        };
        break;

      case "hard-shadow-3":
        buttonClass =
          "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
        buttonStyle = {
          boxShadow: isHoveredShareButton
            ? `3px 3px ${appreance?.shadowColor}`
            : `3px 3px ${appreance?.shadowColor}`,
        };
        break;

      default:
        buttonClass = "";
        buttonStyle = {};
        break;
    }

    return { buttonClass, buttonStyle };
  }, [appreance]);

  const isVideo = appreance?.bg_image?.endsWith(".webm") || appreance?.bg_image?.endsWith(".mp4");
  const isGif = appreance?.bg_image?.endsWith(".gif");
  const isImage = appreance?.bg_image?.match(/\.(jpeg|jpg|png|webp)$/);
  const profileSrc =
    bioData?.select_profile === "avatar_profile"
      ? bioData?.avatar_profile
      : bioData?.profile_picture;

  const profileStyle = {
    borderTopRightRadius: `${bioData?.customize_theme?.profile_radius_top}px`,
    borderBottomLeftRadius: `${bioData?.customize_theme?.profile_radius_bottom}px`,
    borderTopLeftRadius: `${bioData?.customize_theme?.profile_radius_left}px`,
    borderBottomRightRadius: `${bioData?.customize_theme?.profile_radius_right}px`,
    border: `${bioData?.customize_theme?.profile_border_width}px ${bioData?.customize_theme?.profile_border_style} ${bioData?.customize_theme?.profile_border_color}`,
  };

  // const fontClass =
  //   appreance?.typography_font && fontMap
  //     ? fontMap[appreance?.typography_font]?.fontFamily
  //     : appreance?.typography_font;
  const fontClass = appreance?.typography_font;
  // const fontClass = "Righteous, display";

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Lobster&family=Oswald&family=Anton&family=Righteous&family=Bungee&family=Pacifico&family=Fredoka&family=Monoton&family=Fredericka+the+Great&family=Black+Ops+One&family=Ruslan+Display&family=Orbitron&family=Bangers&family=Cinzel+Decorative&family=Chewy&family=Creepster&family=Faster+One&family=Zilla+Slab+Highlight&family=Unica+One&family=Sonsie+One&family=Abril+Fatface&family=Chicle&family=Shrikhand&family=Cinzel+Decorative&family=Rye&family=Arvo&family=Zilla+Slab&family=Crete+Round&family=Josefin+Slab&family=Bevan&family=Alfa+Slab+One&family=Slabo+27px&family=Ultra&family=Vast+Shadow&family=Caudex&family=Patua+One&family=Bree+Serif&family=Aleo&family=Libre+Baskerville&family=Caveat&family=Dancing+Script&family=Amatic+SC&family=Indie+Flower&family=Patrick+Hand&family=Sacramento&family=Shadows+Into+Light&family=Satisfy&family=Alex+Brush&family=Fira+Code&family=JetBrains+Mono&family=Source+Code+Pro&family=Inconsolata&family=Roboto+Mono&family=Space+Mono&family=IBM+Plex+Mono&family=Cousine&family=PT+Mono&family=Ubuntu+Mono&family=Courier+Prime&family=Yellowtail&family=Gloria+Hallelujah&family=Cedarville+Cursive&family=Style+Script&family=Cookie&family=Coming+Soon&family=Great+Vibes&family=Luckiest+Guy&family=Reenie+Beanie&family=Kristi&family=Just+Another+Hand&family=Homemade+Apple&family=Handlee&family=Architects+Daughter&family=Allura&family=Covered+By+Your+Grace&family=Rock+Salt&family=Zeyada&family=La+Belle+Aurore&family=Give+You+Glory&family=Cutive+Mono&family=Share+Tech+Mono&family=Oxygen+Mono&family=DM+Mono&family=Lekton&family=Syne+Mono&family=VT323&family=Overpass+Mono&family=Anonymous+Pro&family=Roboto+Slab&family=Playfair+Display&family=Merriweather&family=Lora&family=EB+Garamond&family=PT+Serif&family=Noto+Serif&family=Crimson+Text&family=Cormorant&family=Cormorant+Garamond&family=Roboto&family=Open+Sans&family=Lato&family=Montserrat&family=Poppins&family=Inter&family=Raleway&family=Nunito&family=Mulish&family=Bebas+Neue&family=Teko&family=Lilita+One&family=Archivo+Black&family=Passion+One&family=Racing+Sans+One&family=Titan+One&family=Federo&family=Ubuntu&family=Quicksand&family=Josefin+Sans&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }, []);

  return (
    <div
      className="themeSection_font"
      style={{
        "--theme-font": appreance?.text_font,
        // "--theme-font": fontClass,
        // textTransform: bioData?.customize_theme?.typography_style === "uppercase" && "uppercase",
        // textDecoration: bioData?.customize_theme?.typography_style === "underline" && "underline",
        // fontStyle: bioData?.customize_theme?.typography_style === "italic" && "italic",
        // fontWeight: bioData?.customize_theme?.typography_style === "bold" && "bold",
      }}
    >
      {loader && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={loader}
          className="flex flex-col"
        >
          <CircularProgress color="inherit" />
          <p>Loading...</p>
        </Backdrop>
      )}
      {bioData?.username && (
        <>
          <div
            className=" bg-cover bg-no-repeat bg-center]"
            style={{
              backgroundImage: bioData?.customize_theme?.container_image
                ? `url(${bioData?.customize_theme?.container_image})`
                : "",
              padding: bioData?.customize_theme?.container_padding
                ? `${bioData?.customize_theme?.container_padding}px`
                : "0px",
            }}
          >
            <div
              className="overflow-auto flex items-center justify-between flex-col"
              style={{
                background:
                  appreance?.selectedBg === "flat_colour"
                    ? appreance?.basicColor
                    : appreance?.selectedBg === "gradient"
                    ? appreance?.value === "gradient_up"
                      ? `linear-gradient(${gradientTo}, ${fromColor}, ${toColor})`
                      : `linear-gradient(${gradientTo}, ${fromColor}, ${toColor})`
                    : appreance?.selectedBg === "image" && appreance?.bg_image
                    ? `url(${appreance?.bg_image})`
                    : "none",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              {/* Background video */}
              {appreance?.selectedBg === "image" && isVideo && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                >
                  <source src={appreance?.bg_image} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Background GIF */}
              {appreance?.selectedBg === "image" && isGif && (
                <img
                  src={appreance?.bg_image}
                  alt="Background GIF"
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                />
              )}

              {/* Background Image */}
              {appreance?.selectedBg === "image" && isImage && (
                <img
                  src={appreance?.bg_image}
                  alt="Background Image"
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                />
              )}
              <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto relative">
                <div
                  className={`relative ${
                    bioData?.customize_theme?.cover_image_show === false && "top-[60px] mt-10"
                  }`}
                >
                  {bioData?.customize_theme?.cover_image_show === true && (
                    <>
                      {["webp", "gif", "jpg", "jpeg", "png"].includes(
                        bioData?.customize_theme?.cover_image?.split(".").pop(),
                      ) ? (
                        <img
                          src={
                            bioData?.customize_theme?.cover_image
                              ? bioData?.customize_theme?.cover_image
                              : "/images/bio/background_image.svg"
                          }
                          alt="Background"
                          className="w-full max-h-[28rem] object-contain"
                        />
                      ) : (
                        <video
                          src={bioData?.customize_theme?.cover_image}
                          alt="Background"
                          className="w-full max-h-[28rem] object-contain"
                          autoPlay
                          loop
                          muted
                        />
                      )}
                    </>
                  )}
                  {bioData?.customize_theme?.profile_image_show === true && (
                    <div
                      className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10 mb-2`}
                    >
                      {(bioData?.select_profile === "avatar_profile" && bioData?.avatar_profile) ||
                      (bioData?.select_profile === "profile" && bioData?.profile_picture) ? (
                        <div
                          className="relative w-[100px] h-full flex items-center justify-center text-white text-[30px]"
                          style={{
                            borderTopRightRadius: `${bioData?.customize_theme?.profile_radius_top}px`,
                            borderBottomLeftRadius: `${bioData?.customize_theme?.profile_radius_bottom}px`,
                            borderTopLeftRadius: `${bioData?.customize_theme?.profile_radius_left}px`,
                            borderBottomRightRadius: `${bioData?.customize_theme?.profile_radius_right}px`,
                          }}
                        >
                          {profileSrc?.trim().toLowerCase().endsWith(".webm") ? (
                            <video
                              src={profileSrc}
                              className="h-[100px] w-[100px] object-cover"
                              style={profileStyle}
                              // controls
                              autoPlay
                              loop
                              muted
                            />
                          ) : (
                            <img
                              src={profileSrc}
                              alt="Avatar"
                              className="h-[100px] w-[100px] object-cover"
                              style={profileStyle}
                              onClick={handlePopupToggle}
                            />
                          )}
                        </div>
                      ) : (
                        <div
                          className="relative capitalize w-[70px] h-[70px] bg-[#000000] flex items-center justify-center text-white text-[30px]"
                          style={{
                            borderTopRightRadius: `${bioData?.customize_theme?.profile_radius_top}px`,
                            borderBottomLeftRadius: `${bioData?.customize_theme?.profile_radius_bottom}px`,
                            borderTopLeftRadius: `${bioData?.customize_theme?.profile_radius_left}px`,
                            borderBottomRightRadius: `${bioData?.customize_theme?.profile_radius_right}px`,
                          }}
                        >
                          {bioData?.name?.charAt(0)}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <div
                    className={`absolute top-0 right-2 flex justify-center items-center ${buttonClass}`}
                    style={{
                      zIndex: 1,
                      backgroundColor:
                        appreance?.selectedButton === "outline-1" ||
                        appreance?.selectedButton === "outline-2" ||
                        appreance?.selectedButton === "outline-3"
                          ? "transparent"
                          : isHoveredShareButton
                          ? appreance?.buttonHoverBg
                          : appreance?.buttonColor,
                      color: isHoveredShareButton
                        ? appreance?.buttonHoverFontColor
                        : appreance?.buttonFontColor,
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      cursor: "pointer",
                      ...buttonStyle,
                    }}
                    onClick={() => setShowSharePopup(true)}
                    onMouseEnter={() => handleMouseEnterShareButton(true)}
                    onMouseLeave={handleMouseLeaveShareButton}
                  >
                    <Share
                      className="w-4 h-4"
                      fill={`${
                        isHoveredShareButton === true
                          ? appreance?.buttonHoverFontColor
                          : appreance?.buttonFontColor
                      }`}
                      // fill={appreance?.buttonFontColor}
                    />
                  </div>
                  <div
                    className="text-center mt-4 relative mb-10"
                    style={{
                      boxShadow: bioData?.customize_theme?.background_box_shadow_spread
                        ? `0 -35px 40px 60px ${bioData?.customize_theme?.basicColor}`
                        : "none",
                    }}
                  >
                    <div className="flex relative rounded-t-[50%] bottom-0 flex-col items-center">
                      <h2
                        className={`${
                          bioData?.customize_theme?.cover_image_show === false &&
                          bioData?.customize_theme?.profile_image_show === false
                            ? "mt-[3rem]"
                            : bioData?.customize_theme?.cover_image_show === false
                            ? "mt-[6rem]"
                            : bioData?.customize_theme?.profile_image_show === false
                            ? "mt-[0px]"
                            : "mt-[2rem]"
                        } font-bold flex mx-9 themeText_font`}
                        style={{
                          color: bioData?.customize_theme?.username_text_color,
                          fontSize: `${bioData?.customize_theme?.username_text_size}px`,
                          justifyContent: bioData?.customize_theme?.bio_text_align,
                          textAlign: bioData?.customize_theme?.bio_text_align,
                          lineHeight: `${bioData?.customize_theme?.bio_line_height}%`,
                          "--theme-text-font": `${bioData?.customize_theme?.typography_font}`,
                          textTransform: bioData?.customize_theme?.typography_case,
                          textDecoration: bioData?.customize_theme?.typography_style?.includes(
                            "underline",
                          )
                            ? "underline"
                            : "none",
                          fontStyle: bioData?.customize_theme?.typography_style?.includes("italic")
                            ? "italic"
                            : "normal",
                          fontWeight: bioData?.customize_theme?.typography_style?.includes("bold")
                            ? "bold"
                            : "normal",
                        }}
                      >
                        {bioData?.name}&nbsp;
                        {bioData?.blue_tick === true ? (
                          <img src="./images/bio/verified-account.svg" alt="blue-tick" />
                        ) : (
                          ""
                        )}
                      </h2>
                      {bioData?.bio && (
                        <p
                          className="text-xs sm:text-sm text-black mt-4 mx-9"
                          style={{
                            color: bioData?.customize_theme?.description_text_color,
                            fontSize: `${bioData?.customize_theme?.description_text_size}px`,
                            lineHeight: `${bioData?.customize_theme?.bio_line_height}%`,
                            textAlign: bioData?.customize_theme?.bio_text_align,
                            textTransform: bioData?.customize_theme?.text_case,
                            textDecoration: bioData?.customize_theme?.text_style?.includes(
                              "underline",
                            )
                              ? "underline"
                              : "none",
                            fontStyle: bioData?.customize_theme?.text_style?.includes("italic")
                              ? "italic"
                              : "normal",
                            fontWeight: bioData?.customize_theme?.text_style?.includes("bold")
                              ? "bold"
                              : "normal",
                          }}
                        >
                          {bioData?.bio}
                        </p>
                      )}

                      {foundApp?.name === "Shopeasy" && (
                        <>
                          <div
                            className={`flex border-2 border-${bioData?.customize_theme?.buttonHoverBg} rounded-full justify-between mt-4`}
                            style={{
                              borderColor: bioData?.customize_theme?.buttonHoverBg,
                            }}
                          >
                            <button
                              className={`px-6 w-full py-2 rounded-full font-bold transition-all duration-300`}
                              style={{
                                backgroundColor:
                                  activeTabPreview === "Links"
                                    ? bioData?.customize_theme?.buttonHoverBg
                                    : "transparent",
                                color:
                                  activeTabPreview === "Links"
                                    ? bioData?.customize_theme?.buttonHoverFontColor
                                    : bioData?.customize_theme?.buttonFontColor,
                              }}
                              onClick={() => handleTabClickPreview("Links")}
                            >
                              Links
                            </button>

                            <button
                              className={`px-6 w-full py-2 rounded-full font-bold transition-all duration-300`}
                              style={{
                                backgroundColor:
                                  activeTabPreview === "Shop"
                                    ? bioData?.customize_theme?.buttonHoverBg
                                    : "transparent",
                                color:
                                  activeTabPreview === "Shop"
                                    ? bioData?.customize_theme?.buttonHoverFontColor
                                    : bioData?.customize_theme?.buttonFontColor,
                              }}
                              onClick={() => handleTabClickPreview("Shop")}
                            >
                              Shop
                            </button>
                          </div>
                        </>
                      )}
                      <div
                        className={`mt-4 w-full ${
                          bioData?.customize_theme?.button_container === true && "mx-7"
                        }`}
                        // style={{
                        //   borderRadius:
                        //     bioData?.customize_theme?.button_container === true ? "10px" : "",
                        //   border:
                        //     bioData?.customize_theme?.button_container === true
                        //       ? `2px solid ${bioData?.customize_theme?.buttonFontColor}`
                        //       : "",
                        //   padding:
                        //     bioData?.customize_theme?.button_container === true ? "10px" : "",
                        // }}
                      >
                        {activeTabPreview === "Shop" ? (
                          <div className="w-full mt-4 overflow-auto custom-scrollbar">
                            {bioData?.shop?.map((obj, index) => {
                              return (
                                <>
                                  {obj?.widget_type === "products" ||
                                  obj?.widget_type === "categories" ? (
                                    <div>
                                      <ThumbView
                                        obj={obj}
                                        changeAppearanceData={appreance}
                                        handleMouseEnter={handleMouseEnter}
                                        isHovered={isHovered}
                                        handleMouseLeave={handleMouseLeave}
                                        handleButtonClick={handleButtonClick}
                                      />
                                    </div>
                                  ) : (
                                    <div
                                      key={index}
                                      className="w-full"
                                      style={{
                                        borderRadius:
                                          bioData?.customize_theme?.button_container === true
                                            ? "10px"
                                            : "",
                                        border:
                                          bioData?.customize_theme?.button_container === true
                                            ? `2px solid ${bioData?.customize_theme?.buttonFontColor}`
                                            : "",
                                        padding:
                                          bioData?.customize_theme?.button_container === true
                                            ? "10px"
                                            : "",
                                      }}
                                    >
                                      <LinksButton
                                        obj={obj}
                                        changeAppearanceData={appreance}
                                        handleMouseEnter={handleMouseEnter}
                                        isHovered={isHovered}
                                        handleMouseLeave={handleMouseLeave}
                                        handleButtonClick={handleButtonClick}
                                        activeTabPreview={activeTabPreview}
                                      />
                                    </div>
                                  )}
                                </>
                              );
                            })}
                          </div>
                        ) : // (activeTabPreview === "Links" &&
                        //     AllLinks[0]?.items?.length &&
                        //     linkCondition?.length < 5) ||
                        //   activeTabPreview === "Shop" ? (
                        //   <div
                        //     style={{
                        //       borderRadius:
                        //         bioData?.customize_theme?.button_container === true ? "10px" : "",
                        //       border:
                        //         bioData?.customize_theme?.button_container === true
                        //           ? `2px solid ${bioData?.customize_theme?.buttonFontColor}`
                        //           : "",
                        //       padding:
                        //         bioData?.customize_theme?.button_container === true ? "10px" : "",
                        //     }}
                        //   >
                        //     <LinksButton
                        //       obj={activeTabPreview === "Links" ? AllLinks[0] : AllShop[0]}
                        //       changeAppearanceData={appreance}
                        //       handleMouseEnter={handleMouseEnter}
                        //       isHovered={isHovered}
                        //       handleMouseLeave={handleMouseLeave}
                        //       handleButtonClick={handleButtonClick}
                        //       activeTabPreview={activeTabPreview}
                        //     />
                        //   </div>
                        // )
                        activeTabPreview === "Links" &&
                          AllLinks[0]?.items?.length &&
                          linkCondition?.length < 5 ? (
                          bioData?.social_media?.map((obj, index) => {
                            return (
                              <div
                                key={index}
                                className="w-full"
                                style={{
                                  borderRadius: appreance?.button_container === true ? "10px" : "",
                                  border:
                                    appreance?.button_container === true
                                      ? `2px solid ${appreance?.profile_border_color}`
                                      : "",
                                  padding: appreance?.button_container === true ? "10px" : "",
                                }}
                              >
                                <LinksButton
                                  obj={obj}
                                  changeAppearanceData={appreance}
                                  handleMouseEnter={handleMouseEnter}
                                  isHovered={isHovered}
                                  handleMouseLeave={handleMouseLeave}
                                  handleButtonClick={handleButtonClick}
                                  activeTabPreview={activeTabPreview}
                                />
                              </div>
                            );
                          })
                        ) : (
                          bioData?.social_media &&
                          bioData?.social_media?.map((obj, index) => {
                            return obj?._id === "social media" ? (
                              <div
                                key={obj?._id}
                                className="flex flex-wrap justify-center gap-4 mx-9"
                              >
                                {obj?.items?.map((item) => {
                                  let buttonClass = "";
                                  let buttonStyle = {};
                                  switch (appreance?.selectedButtonSocialMedia) {
                                    case "fill-1":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium";
                                      buttonStyle = {
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                      };
                                      break;

                                    case "fill-2":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
                                      buttonStyle = {
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                      };
                                      break;

                                    case "fill-3":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
                                      buttonStyle = {
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                      };
                                      break;

                                    case "outline-1":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium transition-all duration-300";
                                      buttonStyle = {
                                        border:
                                          isHovered === item?._id
                                            ? `2px solid ${appreance?.socialMediaButtonHoverBorderColor}`
                                            : `2px solid ${appreance?.socialMediaButtonBorderColor}`,
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                      };
                                      break;

                                    case "outline-2":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
                                      buttonStyle = {
                                        border:
                                          isHovered === item?._id
                                            ? `2px solid ${appreance?.socialMediaButtonHoverBorderColor}`
                                            : `2px solid ${appreance?.socialMediaButtonBorderColor}`,
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                      };
                                      break;

                                    case "outline-3":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
                                      buttonStyle = {
                                        border:
                                          isHovered === item?._id
                                            ? `2px solid ${appreance?.socialMediaButtonHoverBorderColor}`
                                            : `2px solid ${appreance?.socialMediaButtonBorderColor}`,
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                      };
                                      break;

                                    case "soft-shadow-1":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium";
                                      buttonStyle = {
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                        boxShadow: `0px 4px 6px ${appreance?.shadowColor}`,
                                      };
                                      break;

                                    case "soft-shadow-2":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
                                      buttonStyle = {
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                        boxShadow: `0px 4px 6px ${appreance?.shadowColor}`,
                                      };
                                      break;

                                    case "soft-shadow-3":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
                                      buttonStyle = {
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                        boxShadow: `0px 4px 6px ${appreance?.shadowColor}`,
                                      };
                                      break;

                                    case "hard-shadow-1":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium";
                                      buttonStyle = {
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                        boxShadow:
                                          isHovered === item?._id
                                            ? `3px 3px ${appreance?.shadowColor}`
                                            : `5px 5px ${appreance?.shadowColor}`,
                                      };
                                      break;

                                    case "hard-shadow-2":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
                                      buttonStyle = {
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                        boxShadow:
                                          isHovered === item?._id
                                            ? `3px 3px ${appreance?.shadowColor}`
                                            : `5px 5px ${appreance?.shadowColor}`,
                                      };
                                      break;

                                    case "hard-shadow-3":
                                      buttonClass =
                                        "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
                                      buttonStyle = {
                                        backgroundColor:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverBg
                                            : appreance?.socialMediaButtonColor,
                                        color:
                                          isHovered === item?._id
                                            ? appreance?.socialMediaButtonHoverFontColor
                                            : appreance?.socialMediaButtonFontColor,
                                        boxShadow:
                                          isHovered === item?._id
                                            ? `3px 3px ${appreance?.shadowColor}`
                                            : `5px 5px ${appreance?.shadowColor}`,
                                      };
                                      break;

                                    default:
                                      return null;
                                  }
                                  if (item?.status === true) {
                                    return (
                                      <div
                                        key={item?._id}
                                        className={`flex justify-center items-center cursor-pointer ${buttonClass}`}
                                        style={{
                                          order: item?.sort_order,
                                          ...(appreance?.social_media_show_as_a_button === true
                                            ? buttonStyle
                                            : {}),
                                        }}
                                        onMouseEnter={() => handleMouseEnter(item?._id)}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() =>
                                          handleButtonClick(item?.url, bioData?._id, item?._id)
                                        }
                                      >
                                        {/* <SvgSection
                                          svgContent={item?.logo}
                                          fill={`${
                                            isHovered === item?._id
                                              ? appreance?.socialMediaButtonHoverFontColor
                                              : appreance?.socialMediaButtonFontColor
                                          }`}
                                          className={`${
                                            item.widget_name !== "social media" && "rounded-full"
                                          } h-8 w-8 flex justify-center items-center`}
                                          width="25px"
                                          height="25px"
                                        /> */}
                                        <SvgSection
                                          svgContent={item?.logo}
                                          stroke={
                                            appreance?.icon_type === "border"
                                              ? isHovered === item?._id
                                                ? appreance?.socialMediaButtonHoverFontColor
                                                : appreance?.socialMediaButtonFontColor
                                              : "none"
                                          }
                                          fill={
                                            appreance?.icon_type === "fill"
                                              ? isHovered === item?._id
                                                ? appreance?.socialMediaButtonHoverFontColor
                                                : appreance?.socialMediaButtonFontColor
                                              : "none"
                                          }
                                          className={`${
                                            item.widget_name !== "social media" && "rounded-full"
                                          } h-8 w-8 flex justify-center items-center`}
                                          width="25px"
                                          height="25px"
                                        />
                                      </div>
                                    );
                                  }
                                })}
                              </div>
                            ) : (
                              <div key={index} className="px-5 sm:mx-5">
                                {obj?.widget_type === "products" ||
                                obj?.widget_type === "categories" ? (
                                  <div>
                                    <ThumbView
                                      obj={obj}
                                      changeAppearanceData={appreance}
                                      handleMouseEnter={handleMouseEnter}
                                      isHovered={isHovered}
                                      handleMouseLeave={handleMouseLeave}
                                      handleButtonClick={handleButtonClick}
                                    />
                                  </div>
                                ) : (
                                  <div
                                    key={index}
                                    className="w-full"
                                    style={{
                                      borderRadius:
                                        bioData?.customize_theme?.button_container === true
                                          ? "10px"
                                          : "",
                                      border:
                                        bioData?.customize_theme?.button_container === true
                                          ? `2px solid ${bioData?.customize_theme?.profile_border_color}`
                                          : "",
                                      padding:
                                        bioData?.customize_theme?.button_container === true
                                          ? "10px"
                                          : "",
                                    }}
                                  >
                                    <LinksButton
                                      obj={obj}
                                      changeAppearanceData={appreance}
                                      handleMouseEnter={handleMouseEnter}
                                      isHovered={isHovered}
                                      handleMouseLeave={handleMouseLeave}
                                      handleButtonClick={handleButtonClick}
                                      activeTabPreview={activeTabPreview}
                                    />
                                  </div>
                                )}
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-5">
                <Link
                  className="bg-white p-3 rounded-full flex items-center pr-5 pl-5"
                  href="/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join {bioData?.name} on &nbsp;
                  <img alt="trimmo-logo" width={70} src="/images/bio/trimmo-black-logo.svg" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      <SocialShare
        showSharePopup={showSharePopup}
        url={url}
        image={bioData?.og_image}
        username={bioData?.username}
        name={bioData?.name}
        closeSharePopup={closeSharePopup}
      />
      <Dialog
        open={isPopupOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => closeSharePopup()}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            maxWidth: "800px !important",
            width: "100%",
            borderRadius: "12px",
          },
        }}
      >
        <div
          className="bg-white shadow-lg rounded-lg p-4 z-50"
          style={{
            backgroundImage: `url("https://www.bitmoji.com/img/6dc4e4c1.bg.cache.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="relative w-12 h-12 bg-[#000000] flex items-center justify-center rounded-full text-white text-[30px]">
                <img
                  src={bioData?.avatar_profile}
                  alt="avatar profile"
                  className="rounded-full cursor-pointer"
                  onClick={handlePopupToggle}
                />
              </div>
              &nbsp;{`@${bioData?.username}`}
            </div>
            <div onClick={handlePopupToggle} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#ffffff"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
          </div>
          {loading ? (
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          ) : bioData?.avatar ? (
            <img src={bioData.avatar} alt="avatar" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Avatar
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default User;
