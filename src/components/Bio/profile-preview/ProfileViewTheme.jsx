"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LinksButton from "../LinksButton/LinksButton";
import ThumbView from "../LinksButton/ThumbView";
import SvgSection from "../SvgSection/SvgSection";
import { Box, Skeleton } from "@mui/material";

const ProfileViewTheme = ({
  socialMedia,
  userData,
  changeAppearanceData,
  activeTabPreview,
  handleTabClickPreview,
  shopData,
}) => {
  const { bioData } = useSelector((state) => state?.authSlice);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  const foundApp = bioData?.authorize_app?.find((app) => app.name === "Shopeasy");

  const fromColor = changeAppearanceData?.form_color;
  const viaColor = changeAppearanceData?.via_color;
  const toColor = changeAppearanceData?.to_color;
  const gradientTo =
    changeAppearanceData?.value === "gradient_up"
      ? "to top"
      : changeAppearanceData?.value === "gradient_down"
      ? "to bottom"
      : changeAppearanceData?.value === "gradient_left"
      ? "to left"
      : "to right";

  const handleMouseEnter = (id) => setIsHovered(id);
  const handleMouseLeave = () => setIsHovered(null);
  const AllLinks = [
    {
      items:
        bioData?.social_media?.flatMap((widget) =>
          widget?.items?.filter((item) => item.status === true),
        ) || [],
    },
  ];
  const linkCondition =
    AllLinks[0]?.items?.length &&
    AllLinks[0]?.items?.filter((x) => x?.widget_name !== "social media");

  const handleButtonClick = (url) => {
    if (url && typeof window !== "undefined") {
      window.open(url, "_blank");
    } else {
      console.error("URL is not provided");
    }
  };
  useEffect(() => {
    if (changeAppearanceData) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // 1000ms = 1 second
      return () => clearTimeout(timer);
    }
  }, [changeAppearanceData]);
  const isVideo =
    changeAppearanceData?.bg_image?.endsWith(".webm") ||
    changeAppearanceData?.bg_image?.endsWith(".mp4");
  const isGif = changeAppearanceData?.bg_image?.endsWith(".gif");
  const isImage = changeAppearanceData?.bg_image?.match(/\.(jpeg|jpg|png|webp)$/);

  const profileSrc =
    userData?.data?.select_profile === "avatar_profile"
      ? userData?.data?.avatar_profile
      : userData?.data?.profile_picture;

  const profileStyle = {
    borderTopRightRadius: `${changeAppearanceData?.profile_radius_top}px`,
    borderBottomLeftRadius: `${changeAppearanceData?.profile_radius_bottom}px`,
    borderTopLeftRadius: `${changeAppearanceData?.profile_radius_left}px`,
    borderBottomRightRadius: `${changeAppearanceData?.profile_radius_right}px`,
    border: `${changeAppearanceData?.profile_border_width}px ${changeAppearanceData?.profile_border_style} ${changeAppearanceData?.profile_border_color}`,
  };

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Lobster&family=Oswald&family=Anton&family=Righteous&family=Bungee&family=Pacifico&family=Fredoka&family=Monoton&family=Fredericka+the+Great&family=Black+Ops+One&family=Ruslan+Display&family=Orbitron&family=Bangers&family=Cinzel+Decorative&family=Chewy&family=Creepster&family=Faster+One&family=Zilla+Slab+Highlight&family=Unica+One&family=Sonsie+One&family=Abril+Fatface&family=Chicle&family=Shrikhand&family=Cinzel+Decorative&family=Rye&family=Arvo&family=Zilla+Slab&family=Crete+Round&family=Josefin+Slab&family=Bevan&family=Alfa+Slab+One&family=Slabo+27px&family=Ultra&family=Vast+Shadow&family=Caudex&family=Patua+One&family=Bree+Serif&family=Aleo&family=Libre+Baskerville&family=Caveat&family=Dancing+Script&family=Amatic+SC&family=Indie+Flower&family=Patrick+Hand&family=Sacramento&family=Shadows+Into+Light&family=Satisfy&family=Alex+Brush&family=Fira+Code&family=JetBrains+Mono&family=Source+Code+Pro&family=Inconsolata&family=Roboto+Mono&family=Space+Mono&family=IBM+Plex+Mono&family=Cousine&family=PT+Mono&family=Ubuntu+Mono&family=Courier+Prime&family=Yellowtail&family=Gloria+Hallelujah&family=Cedarville+Cursive&family=Style+Script&family=Cookie&family=Coming+Soon&family=Great+Vibes&family=Luckiest+Guy&family=Reenie+Beanie&family=Kristi&family=Just+Another+Hand&family=Homemade+Apple&family=Handlee&family=Architects+Daughter&family=Allura&family=Covered+By+Your+Grace&family=Rock+Salt&family=Zeyada&family=La+Belle+Aurore&family=Give+You+Glory&family=Cutive+Mono&family=Share+Tech+Mono&family=Oxygen+Mono&family=DM+Mono&family=Lekton&family=Syne+Mono&family=VT323&family=Overpass+Mono&family=Anonymous+Pro&family=Roboto+Slab&family=Playfair+Display&family=Merriweather&family=Lora&family=EB+Garamond&family=PT+Serif&family=Noto+Serif&family=Crimson+Text&family=Cormorant&family=Cormorant+Garamond&family=Roboto&family=Open+Sans&family=Lato&family=Montserrat&family=Poppins&family=Inter&family=Raleway&family=Nunito&family=Mulish&family=Bebas+Neue&family=Teko&family=Lilita+One&family=Archivo+Black&family=Passion+One&family=Racing+Sans+One&family=Titan+One&family=Federo&family=Ubuntu&family=Quicksand&family=Josefin+Sans&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }, []);

  return (
    <div
      className={`flex items-center justify-center border-black border-[3px] border-solid rounded-[15px] bg-cover bg-no-repeat bg-center themeSection_font`}
      style={{
        background: changeAppearanceData?.container_image
          ? `url(${changeAppearanceData?.container_image})`
          : "pink",
        padding: changeAppearanceData?.container_padding
          ? `${changeAppearanceData?.container_padding}px`
          : "0px",
        "--theme-font": `${changeAppearanceData?.text_font}`,
        transition: "400ms all",
      }}
    >
      <div
        className="bg-white w-80 shadow-lg overflow-auto h-[60vh] custom-scrollbar"
        style={{
          borderRadius: changeAppearanceData?.container_image ? "" : "10px",
        }}
      >
        <div
          className="text-center !bg-cover !bg-no-repeat !bg-center flex flex-col h-full"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: changeAppearanceData?.cover_image_show === true ? "" : "100%",
          }}
        >
          {loading ? (
            <>
              <Box
                sx={{
                  height: "60vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2, // spacing between skeletons
                }}
              >
                <Skeleton variant="circular" width={60} height={60} />
                <Skeleton variant="text" sx={{ fontSize: "1.8rem", width: 160 }} />
                <Skeleton variant="rectangular" width={220} height={50} />
              </Box>
            </>
          ) : (
            <div
              className="h-full flex flex-col justify-between overflow-auto custom-scrollbar !bg-cover !bg-no-repeat !bg-center relative"
              style={{
                zIndex: changeAppearanceData?.background_box_shadow_spread ? 3 : 0,
                boxShadow: changeAppearanceData?.background_box_shadow_spread
                  ? `-101px 40px 35px ${changeAppearanceData?.basicColor}`
                  : "none",
                position: changeAppearanceData?.background_box_shadow_spread ? "relative" : "",
                // background:
                //   changeAppearanceData?.selectedBg === "flat_colour"
                //     ? changeAppearanceData?.basicColor
                //     : changeAppearanceData?.selectedBg === "gradient"
                //     ? `linear-gradient(${gradientTo}, ${fromColor}, ${viaColor}, ${toColor})`
                //     : "none",
                background:
                  changeAppearanceData?.selectedBg === "flat_colour"
                    ? changeAppearanceData?.basicColor
                    : changeAppearanceData?.selectedBg === "gradient"
                    ? `linear-gradient(${gradientTo}, ${fromColor}, ${toColor})`
                    : changeAppearanceData?.selectedBg === "image" && changeAppearanceData?.bg_image
                    ? changeAppearanceData?.bg_image.endsWith(".mp4") ||
                      changeAppearanceData?.bg_image.endsWith(".webm")
                      ? "none" // Video will be rendered separately
                      : `url(${changeAppearanceData?.bg_image})`
                    : "none",
              }}
            >
              {/* Background video */}
              {changeAppearanceData?.selectedBg === "image" && isVideo && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-[100vh] object-cover z-[-1]"
                >
                  <source src={changeAppearanceData?.bg_image} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Background GIF */}
              {/* {changeAppearanceData?.selectedBg === "image" && isGif && (
              <img
                src={changeAppearanceData?.bg_image}
                alt="Background GIF"
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
              />
            )} */}

              {/* Background Image */}
              {/* {changeAppearanceData?.selectedBg === "image" && isImage && (
              <img
                src={changeAppearanceData?.bg_image}
                alt="Background Image"
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
              />
            )} */}
              <div
                className={`relative ${
                  changeAppearanceData?.cover_image_show === false && "top-[60px] mt-10"
                }`}
              >
                {changeAppearanceData?.cover_image_show === true && (
                  <>
                    {["webp", "gif", "jpg", "jpeg", "png"].includes(
                      changeAppearanceData?.cover_image?.split(".").pop(),
                    ) ? (
                      <img
                        src={
                          changeAppearanceData?.cover_image
                            ? changeAppearanceData?.cover_image
                            : "/images/bio/background_image.svg"
                        }
                        alt="Background"
                        className="w-full object-contain"
                      />
                    ) : (
                      <video
                        src={changeAppearanceData?.cover_image}
                        alt="Background"
                        className="w-full object-contain"
                        autoPlay
                        loop
                        muted
                      />
                    )}
                  </>
                )}
                {changeAppearanceData?.profile_image_show === true && (
                  <div
                    className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10 mb-2`}
                  >
                    {(userData?.data?.select_profile === "avatar_profile" &&
                      userData?.data?.avatar_profile) ||
                    (userData?.data?.select_profile === "profile" &&
                      userData?.data?.profile_picture) ? (
                      <div
                        className="relative w-[100px] h-full flex items-center justify-center text-white text-[30px]"
                        style={{
                          borderTopRightRadius: `${changeAppearanceData?.profile_radius_top}px`,
                          borderBottomLeftRadius: `${changeAppearanceData?.profile_radius_bottom}px`,
                          borderTopLeftRadius: `${changeAppearanceData?.profile_radius_left}px`,
                          borderBottomRightRadius: `${changeAppearanceData?.profile_radius_right}px`,
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
                          />
                        )}
                      </div>
                    ) : (
                      <div
                        className="relative capitalize w-[70px] h-[70px] bg-[#000000] flex items-center justify-center text-white text-[30px]"
                        style={{
                          borderTopRightRadius: `${changeAppearanceData?.profile_radius_top}px`,
                          borderBottomLeftRadius: `${changeAppearanceData?.profile_radius_bottom}px`,
                          borderTopLeftRadius: `${changeAppearanceData?.profile_radius_left}px`,
                          borderBottomRightRadius: `${changeAppearanceData?.profile_radius_right}px`,
                        }}
                      >
                        {userData?.data?.name?.charAt(0) ?? userData?.data?.username?.charAt(0)}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div
                className="px-3"
                style={{
                  zIndex: changeAppearanceData?.background_box_shadow_spread === true ? 3 : 0,
                  boxShadow: changeAppearanceData?.background_box_shadow_spread
                    ? `0 -35px 40px 30px ${changeAppearanceData?.basicColor}`
                    : "none",
                  position:
                    changeAppearanceData?.background_box_shadow_spread === true ? "relative" : "",
                }}
              >
                <div
                  style={{
                    textAlign: changeAppearanceData?.bio_text_align,
                  }}
                >
                  <h2
                    className={`${
                      changeAppearanceData?.cover_image_show === false &&
                      changeAppearanceData?.profile_image_show === false
                        ? "mt-[3rem]"
                        : changeAppearanceData?.cover_image_show === false
                        ? "mt-[7rem]"
                        : changeAppearanceData?.profile_image_show === false
                        ? "mt-[0px]"
                        : "mt-[3rem]"
                    } text-lg flex themeText_font`}
                    style={{
                      color: changeAppearanceData?.username_text_color,
                      fontSize: `${changeAppearanceData?.username_text_size}px`,
                      justifyContent: changeAppearanceData?.bio_text_align,
                      // textAlign: changeAppearanceData?.bio_text_align,
                      lineHeight: `${changeAppearanceData?.bio_line_height}%`,
                      "--theme-text-font": `${changeAppearanceData?.typography_font}`,
                      textTransform: changeAppearanceData?.typography_case,
                      textDecoration: changeAppearanceData?.typography_style?.includes("underline")
                        ? "underline"
                        : "none",
                      fontStyle: changeAppearanceData?.typography_style?.includes("italic")
                        ? "italic"
                        : "normal",
                      fontWeight: changeAppearanceData?.typography_style?.includes("bold")
                        ? "bold"
                        : "normal",
                    }}
                  >
                    {userData?.data?.name ?? userData?.data?.username}&nbsp;
                    {userData?.data?.blue_tick === true ? (
                      <img src="/images/bio/verified-account.svg" alt="blue-tick" />
                    ) : (
                      ""
                    )}
                  </h2>
                  <p
                    className="text-sm text-gray-200 mt-2"
                    style={{
                      color: userData?.data?.bio
                        ? changeAppearanceData?.description_text_color
                        : "E5E7EB",
                      fontSize: `${changeAppearanceData?.description_text_size}px`,
                      lineHeight: `${changeAppearanceData?.bio_line_height}%`,
                      textAlign: changeAppearanceData?.bio_text_align,
                      textTransform: changeAppearanceData?.text_case,
                      textDecoration: changeAppearanceData?.text_style?.includes("underline")
                        ? "underline"
                        : "none",
                      fontStyle: changeAppearanceData?.text_style?.includes("italic")
                        ? "italic"
                        : "normal",
                      fontWeight: changeAppearanceData?.text_style?.includes("bold")
                        ? "bold"
                        : "normal",
                    }}
                  >
                    {userData?.data?.bio || ""}
                  </p>
                </div>

                {foundApp?.name === "Shopeasy" && (
                  <>
                    <div
                      className={`flex border-2 border-${changeAppearanceData?.socialMediaButtonHoverBg} rounded-full justify-between mt-4`}
                      style={{
                        borderColor: changeAppearanceData?.socialMediaButtonHoverBg,
                      }}
                    >
                      <button
                        className={`px-6 w-full py-2 rounded-full font-bold transition-all duration-300 
                    `}
                        style={{
                          backgroundColor:
                            activeTabPreview === "Links"
                              ? changeAppearanceData?.socialMediaButtonHoverBg
                              : "transparent",
                          color:
                            activeTabPreview === "Links"
                              ? changeAppearanceData?.socialMediaButtonHoverFontColor
                              : changeAppearanceData?.socialMediaButtonFontColor,
                        }}
                        onClick={() => handleTabClickPreview("Links")}
                      >
                        Links
                      </button>

                      <button
                        className={`px-6 w-full py-2 rounded-full font-bold transition-all duration-300 
                  `}
                        style={{
                          backgroundColor:
                            activeTabPreview === "Shop"
                              ? changeAppearanceData?.socialMediaButtonHoverBg
                              : "transparent",
                          color:
                            activeTabPreview === "Shop"
                              ? changeAppearanceData?.socialMediaButtonHoverFontColor
                              : changeAppearanceData?.socialMediaButtonFontColor,
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
                >
                  {activeTabPreview === "Shop" ? (
                    <div className="w-full mt-4">
                      {shopData?.map((obj, index) => {
                        return (
                          <>
                            {/* {obj?._id !== "social media" && obj?._id} */}
                            {obj?.widget_type === "products" ||
                            obj?.widget_type === "categories" ? (
                              <div>
                                <ThumbView
                                  obj={obj}
                                  changeAppearanceData={changeAppearanceData}
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
                                    changeAppearanceData?.button_container === true ? "10px" : "",
                                  border:
                                    changeAppearanceData?.button_container === true
                                      ? `2px solid ${changeAppearanceData?.profile_border_color}`
                                      : "",
                                  padding:
                                    changeAppearanceData?.button_container === true ? "10px" : "",
                                }}
                              >
                                <LinksButton
                                  obj={obj}
                                  changeAppearanceData={changeAppearanceData}
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
                  ) : activeTabPreview === "Links" &&
                    AllLinks[0]?.items?.length &&
                    linkCondition?.length < 5 ? (
                    socialMedia?.map((obj, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full"
                          style={{
                            borderRadius:
                              changeAppearanceData?.button_container === true ? "10px" : "",
                            border:
                              changeAppearanceData?.button_container === true
                                ? `2px solid ${changeAppearanceData?.profile_border_color}`
                                : "",
                            padding: changeAppearanceData?.button_container === true ? "10px" : "",
                          }}
                        >
                          <LinksButton
                            obj={obj}
                            changeAppearanceData={changeAppearanceData}
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
                    socialMedia &&
                    socialMedia?.map((obj, index) => {
                      return obj?._id === "social media" ? (
                        <div
                          key={obj?._id}
                          className="w-full mt-4 flex flex-wrap justify-center gap-4 mb-4"
                        >
                          {obj?.items?.map((obj) => {
                            let buttonClass = "";
                            let buttonStyle = {};

                            switch (changeAppearanceData?.selectedButtonSocialMedia) {
                              case "fill-1":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium";
                                buttonStyle = {
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                };
                                break;

                              case "fill-2":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
                                buttonStyle = {
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                };
                                break;

                              case "fill-3":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
                                buttonStyle = {
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                };
                                break;

                              case "outline-1":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium transition-all duration-300";
                                buttonStyle = {
                                  border:
                                    isHovered === obj?._id
                                      ? `2px solid ${changeAppearanceData?.socialMediaButtonHoverBorderColor}`
                                      : `2px solid ${changeAppearanceData?.socialMediaButtonBorderColor}`,
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                };
                                break;

                              case "outline-2":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
                                buttonStyle = {
                                  border:
                                    isHovered === obj?._id
                                      ? `2px solid ${changeAppearanceData?.socialMediaButtonHoverBorderColor}`
                                      : `2px solid ${changeAppearanceData?.socialMediaButtonBorderColor}`,
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                };
                                break;

                              case "outline-3":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
                                buttonStyle = {
                                  border:
                                    isHovered === obj?._id
                                      ? `2px solid ${changeAppearanceData?.socialMediaButtonHoverBorderColor}`
                                      : `2px solid ${changeAppearanceData?.socialMediaButtonBorderColor}`,
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                };
                                break;

                              case "soft-shadow-1":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium";
                                buttonStyle = {
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                  boxShadow: `0px 4px 6px ${changeAppearanceData?.socialMediaShadowColor}`,
                                };
                                break;

                              case "soft-shadow-2":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
                                buttonStyle = {
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                  boxShadow: `0px 4px 6px ${changeAppearanceData?.socialMediaShadowColor}`,
                                };
                                break;

                              case "soft-shadow-3":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
                                buttonStyle = {
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                  boxShadow: `0px 4px 6px ${changeAppearanceData?.socialMediaShadowColor}`,
                                };
                                break;

                              case "hard-shadow-1":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium";
                                buttonStyle = {
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                  boxShadow:
                                    isHovered === obj?._id
                                      ? `3px 3px ${changeAppearanceData?.socialMediaShadowColor}`
                                      : `5px 5px ${changeAppearanceData?.socialMediaShadowColor}`,
                                };
                                break;

                              case "hard-shadow-2":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[8px]";
                                buttonStyle = {
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                  boxShadow:
                                    isHovered === obj?._id
                                      ? `3px 3px ${changeAppearanceData?.socialMediaShadowColor}`
                                      : `5px 5px ${changeAppearanceData?.socialMediaShadowColor}`,
                                };
                                break;

                              case "hard-shadow-3":
                                buttonClass =
                                  "flex items-center mt-2 h-[40px] w-[40px] py-2 text-sm font-medium rounded-[50px]";
                                buttonStyle = {
                                  backgroundColor:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverBg
                                      : changeAppearanceData?.socialMediaButtonColor,
                                  color:
                                    isHovered === obj?._id
                                      ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                      : changeAppearanceData?.socialMediaButtonFontColor,
                                  boxShadow:
                                    isHovered === obj?._id
                                      ? `3px 3px ${changeAppearanceData?.socialMediaShadowColor}`
                                      : `5px 5px ${changeAppearanceData?.socialMediaShadowColor}`,
                                };
                                break;

                              default:
                                return null;
                            }
                            if (obj?.status === true) {
                              return (
                                <div
                                  key={obj?._id}
                                  className={`flex justify-center items-center cursor-pointer ${buttonClass}`}
                                  style={{
                                    order: obj?.sort_order,
                                    ...(changeAppearanceData?.social_media_show_as_a_button === true
                                      ? buttonStyle
                                      : {}),
                                  }}
                                  onMouseEnter={() => handleMouseEnter(obj?._id)}
                                  onMouseLeave={handleMouseLeave}
                                  onClick={() =>
                                    handleButtonClick(obj?.url, bioData?._id, obj?._id)
                                  }
                                >
                                  <SvgSection
                                    svgContent={obj?.logo}
                                    stroke={
                                      changeAppearanceData?.icon_type === "border"
                                        ? isHovered === obj?._id &&
                                          obj?.widget_name === "social media"
                                          ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                          : changeAppearanceData?.socialMediaButtonFontColor
                                        : "none"
                                    }
                                    fill={
                                      changeAppearanceData?.icon_type === "fill"
                                        ? isHovered === obj?._id &&
                                          obj?.widget_name === "social media"
                                          ? changeAppearanceData?.socialMediaButtonHoverFontColor
                                          : changeAppearanceData?.socialMediaButtonFontColor
                                        : "none"
                                    }
                                    className={`${
                                      obj.widget_name !== "social media" && "rounded-full"
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
                        <>
                          {obj?.widget_type === "products" || obj?.widget_type === "categories" ? (
                            <div>
                              <ThumbView
                                obj={obj}
                                changeAppearanceData={changeAppearanceData}
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
                                  changeAppearanceData?.button_container === true ? "10px" : "",
                                border:
                                  changeAppearanceData?.button_container === true
                                    ? `2px solid ${changeAppearanceData?.profile_border_color}`
                                    : "",
                                padding:
                                  changeAppearanceData?.button_container === true ? "10px" : "",
                              }}
                            >
                              <LinksButton
                                obj={obj}
                                changeAppearanceData={changeAppearanceData}
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
                    })
                  )}
                </div>
              </div>
              <div className="flex justify-center p-[10px] relative bottom-0">
                <img src="/images/bio/trimmo-black-logo.svg" className="w-20" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileViewTheme;
