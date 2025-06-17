import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ColorPicker from "../Color/ColorPicker";

const ButtonSocialMedia = ({
  expandedButtonSocialMedia,
  changeAppearanceData,
  handleChangeButtonSocialMedia,
  showColorPicker,
  setShowColorPicker,
  handleCloseColor,
  handleSocialMediaButton,
}) => {
  return (
    <div className="mt-4">
      <Accordion expanded={expandedButtonSocialMedia} onChange={handleChangeButtonSocialMedia}>
        <AccordionSummary
          expandIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
              />
            </svg>
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Social media setting</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className="mt-4 text-[#71717A] text-sm">Icon Type</p>

          <div className="inline-flex bg-[#1a1a1a] text-white rounded-full p-1 mt-1">
            <button
              className={`px-4 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                changeAppearanceData?.icon_type === "fill" ? "bg-white text-black" : "text-white"
              }`}
              onClick={(e) => handleSocialMediaButton("fill", "icon_type")}
            >
              Solid
            </button>
            <button
              className={`px-4 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                changeAppearanceData?.icon_type === "border" ? "bg-white text-black" : "text-white"
              }`}
              onClick={(e) => handleSocialMediaButton("border", "icon_type")}
            >
              Stroke
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="socialMediaButton"
              checked={changeAppearanceData?.social_media_show_as_a_button}
              onChange={(e) =>
                handleSocialMediaButton(e.target.checked, "social_media_show_as_a_button")
              }
              className="w-5 h-5 accent-green-500 cursor-pointer peer"
            />
            <label
              htmlFor="socialMediaButton"
              className="text-gray-700 text-sm font-medium cursor-pointer"
            >
              Set as a button
            </label>
          </div>

          {changeAppearanceData?.social_media_show_as_a_button === true && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="mt-2 text-[#71717A] text-sm">Fill</p>
                <div className="flex flex-wrap gap-2 sm:gap-6 md:gap-8 lg:gap-4">
                  {["fill-1", "fill-2", "fill-3"].map((type, index) => (
                    <div
                      key={type}
                      onClick={() => handleSocialMediaButton(type, "selectedButtonSocialMedia")}
                      className={`cursor-pointer rounded-[8px] flex items-center justify-center transition-all duration-200 ${
                        changeAppearanceData?.selectedButtonSocialMedia === type
                          ? "border-2 border-[#222]"
                          : "border-2 border-transparent hover:border-gray-300"
                      }`}
                    >
                      <div className={`fill-button-${["first", "second", "third"][index]}`}></div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mt-2 text-[#71717A] text-sm">Outline</p>
                <div className="flex flex-wrap gap-2 sm:gap-6 md:gap-8 lg:gap-4">
                  {["outline-1", "outline-2", "outline-3"].map((type, index) => (
                    <div
                      key={type}
                      onClick={() => handleSocialMediaButton(type, "selectedButtonSocialMedia")}
                      className={`cursor-pointer rounded-[8px] flex items-center justify-center transition-all duration-200 ${
                        changeAppearanceData?.selectedButtonSocialMedia === type
                          ? "border-2 border-[#222]"
                          : "border-2 border-transparent hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`outlined-button-${["first", "second", "third"][index]}`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mt-2 text-[#71717A] text-sm">Soft shadow</p>
                <div className="flex flex-wrap gap-4">
                  {["soft-shadow-1", "soft-shadow-2", "soft-shadow-3"].map((type, index) => {
                    const shapeClass =
                      index === 1 ? "rounded-[8px]" : index === 2 ? "rounded-full" : "";

                    return (
                      <div
                        key={type}
                        onClick={() => handleSocialMediaButton(type, "selectedButtonSocialMedia")}
                        className={`w-[130px] h-[52px] p-1 cursor-pointer rounded-[8px] transition-all duration-200 ${
                          changeAppearanceData?.selectedButtonSocialMedia === type
                            ? "border-2 border-[#222]"
                            : "border-2 border-transparent hover:border-gray-300"
                        }`}
                      >
                        <div className={`w-full h-full shadow-lg bg-white ${shapeClass}`}></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="mt-2 text-[#71717A] text-sm">Hard shadow</p>
                <div className="flex flex-wrap gap-4">
                  {["hard-shadow-1", "hard-shadow-2", "hard-shadow-3"].map((type, index) => {
                    const shapeClass =
                      index === 1 ? "rounded-[8px]" : index === 2 ? "rounded-full" : "";

                    return (
                      <div
                        key={type}
                        onClick={() => handleSocialMediaButton(type, "selectedButtonSocialMedia")}
                        className={`w-[130px] h-[52px] p-1 cursor-pointer rounded-[8px] transition-all duration-200 ${
                          changeAppearanceData?.selectedButtonSocialMedia === type
                            ? "border-2 border-[#222]"
                            : "border-2 border-transparent hover:border-gray-300"
                        }`}
                      >
                        <div
                          className={`w-full h-full bg-white border border-[#212529] shadow-[4px_4px_0px_rgba(0,0,0,1)] ${shapeClass}`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="md:max-w-xs">
              <p className="mt-2 text-[#71717A] text-sm">Button Color</p>

              <div className="flex items-center gap-3 relative mt-1">
                <div
                  className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                  style={{
                    backgroundColor: changeAppearanceData?.socialMediaButtonColor,
                  }}
                  onClick={() => setShowColorPicker("social_media_button_color")}
                ></div>

                <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                  <input
                    type="text"
                    value={changeAppearanceData?.socialMediaButtonColor?.replace(/^#/, "")}
                    onChange={(e) =>
                      handleSocialMediaButton(`#${e.target.value}`, "socialMediaButtonColor")
                    }
                    className="w-full outline-none bg-[#FAFAFA]"
                    onClick={() => setShowColorPicker("social_media_button_color")}
                  />
                </div>

                <span
                  className="absolute right-2 cursor-pointer"
                  onClick={() => setShowColorPicker("social_media_button_color")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g opacity="0.5" clipPath="url(#clip0)">
                      <path
                        d="M9.25 2.992L11.583 5.326M12.852 4.049c.308-.308.481-.726.481-1.162 0-.437-.173-.855-.481-1.163a1.641 1.641 0 00-2.316 0L2.741 9.51a1.374 1.374 0 00-.292.484l-.77 2.539a.355.355 0 00.367.451l2.539-.77c.183-.056.35-.156.485-.292l7.786-7.787z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.5 0.075)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>

              {showColorPicker === "social_media_button_color" && (
                <ColorPicker
                  handleChange={(color) => handleSocialMediaButton(color, "socialMediaButtonColor")}
                  setting={changeAppearanceData?.socialMediaButtonColor}
                  handleCloseColor={handleCloseColor}
                />
              )}
            </div>
            <div className="md:max-w-xs">
              <p className="mt-2 text-[#71717A] text-sm">Button Hover Color</p>

              <div className="flex items-center gap-3 relative mt-1">
                <div
                  className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                  style={{
                    backgroundColor: changeAppearanceData?.socialMediaButtonHoverBg,
                  }}
                  onClick={() => setShowColorPicker("social_media_button_hover_bg")}
                ></div>
                <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                  <input
                    type="text"
                    value={changeAppearanceData?.socialMediaButtonHoverBg?.replace(/^#/, "")}
                    onChange={(e) =>
                      handleSocialMediaButton(`#${e.target.value}`, "socialMediaButtonHoverBg")
                    }
                    className="w-full outline-none bg-[#FAFAFA]"
                    onClick={() => setShowColorPicker("social_media_button_hover_bg")}
                  />
                </div>
                <span
                  className="absolute right-2 cursor-pointer"
                  onClick={() => setShowColorPicker("social_media_button_hover_bg")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g opacity="0.5" clipPath="url(#clip0)">
                      <path
                        d="M9.25 2.992L11.583 5.326M12.852 4.049c.308-.308.481-.726.481-1.162 0-.437-.173-.855-.481-1.163a1.641 1.641 0 00-2.316 0L2.741 9.51a1.374 1.374 0 00-.292.484l-.77 2.539a.355.355 0 00.367.451l2.539-.77c.183-.056.35-.156.485-.292l7.786-7.787z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.5 0.075)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              {showColorPicker === "social_media_button_hover_bg" && (
                <ColorPicker
                  handleChange={(color) =>
                    handleSocialMediaButton(color, "socialMediaButtonHoverBg")
                  }
                  setting={changeAppearanceData?.socialMediaButtonHoverBg}
                  handleCloseColor={handleCloseColor}
                />
              )}
            </div>
            {changeAppearanceData?.selectedButtonSocialMedia === "hard-shadow-1" ||
            changeAppearanceData?.selectedButtonSocialMedia === "hard-shadow-2" ||
            changeAppearanceData?.selectedButtonSocialMedia === "hard-shadow-3" ||
            changeAppearanceData?.selectedButtonSocialMedia === "soft-shadow-1" ||
            changeAppearanceData?.selectedButtonSocialMedia === "soft-shadow-2" ||
            changeAppearanceData?.selectedButtonSocialMedia === "soft-shadow-3" ? (
              <div className="md:max-w-xs">
                <p className="mt-2 text-[#71717A] text-sm">Shadow Color</p>

                <div className="flex items-center gap-3 relative mt-1">
                  <div
                    className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                    style={{
                      backgroundColor: changeAppearanceData?.socialMediaShadowColor,
                    }}
                    onClick={() => setShowColorPicker("social_media_shadow_color")}
                  ></div>
                  <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                    <input
                      type="text"
                      value={changeAppearanceData?.socialMediaShadowColor?.replace(/^#/, "")}
                      onChange={(e) =>
                        handleSocialMediaButton(`#${e.target.value}`, "socialMediaShadowColor")
                      }
                      className="w-full outline-none bg-[#FAFAFA]"
                      onClick={() => setShowColorPicker("social_media_shadow_color")}
                    />
                  </div>
                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowColorPicker("social_media_shadow_color")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g opacity="0.5" clipPath="url(#clip0)">
                        <path
                          d="M9.25 2.992L11.583 5.326M12.852 4.049c.308-.308.481-.726.481-1.162 0-.437-.173-.855-.481-1.163a1.641 1.641 0 00-2.316 0L2.741 9.51a1.374 1.374 0 00-.292.484l-.77 2.539a.355.355 0 00.367.451l2.539-.77c.183-.056.35-.156.485-.292l7.786-7.787z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5 0.075)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                {showColorPicker === "social_media_shadow_color" && (
                  <ColorPicker
                    handleChange={(color) =>
                      handleSocialMediaButton(color, "socialMediaShadowColor")
                    }
                    setting={changeAppearanceData?.socialMediaShadowColor}
                    handleCloseColor={handleCloseColor}
                  />
                )}
              </div>
            ) : (
              ""
            )}
            {changeAppearanceData?.selectedButtonSocialMedia === "outline-1" ||
            changeAppearanceData?.selectedButtonSocialMedia === "outline-2" ||
            changeAppearanceData?.selectedButtonSocialMedia === "outline-3" ? (
              <>
                <div className="md:max-w-xs">
                  <p className="mt-2 text-[#71717A] text-sm">Border Color</p>

                  <div className="flex items-center gap-3 relative mt-1">
                    <div
                      className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                      style={{
                        backgroundColor: changeAppearanceData?.socialMediaButtonBorderColor,
                      }}
                      onClick={() => setShowColorPicker("social_media_button_border_color")}
                    ></div>

                    <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                      <input
                        type="text"
                        value={changeAppearanceData?.socialMediaButtonBorderColor?.replace(
                          /^#/,
                          "",
                        )}
                        onChange={(e) =>
                          handleSocialMediaButton(`#${e.target.value}`, "buttonBorderColor")
                        }
                        className="w-full outline-none bg-[#FAFAFA]"
                        onClick={() => setShowColorPicker("social_media_button_border_color")}
                      />
                    </div>

                    <span
                      className="absolute right-2 cursor-pointer"
                      onClick={() => setShowColorPicker("social_media_button_border_color")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <g opacity="0.5" clipPath="url(#clip0)">
                          <path
                            d="M9.25 2.992L11.583 5.326M12.852 4.049c.308-.308.481-.726.481-1.162 0-.437-.173-.855-.481-1.163a1.641 1.641 0 00-2.316 0L2.741 9.51a1.374 1.374 0 00-.292.484l-.77 2.539a.355.355 0 00.367.451l2.539-.77c.183-.056.35-.156.485-.292l7.786-7.787z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="14"
                              height="14"
                              fill="white"
                              transform="translate(0.5 0.075)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  {showColorPicker === "social_media_button_border_color" && (
                    <ColorPicker
                      handleChange={(color) =>
                        handleSocialMediaButton(color, "socialMediaButtonBorderColor")
                      }
                      setting={changeAppearanceData?.socialMediaButtonBorderColor}
                      handleCloseColor={handleCloseColor}
                    />
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </div>

          {changeAppearanceData?.selectedButtonSocialMedia === "soft-shadow-1" ||
          changeAppearanceData?.selectedButtonSocialMedia === "soft-shadow-2" ||
          changeAppearanceData?.selectedButtonSocialMedia === "soft-shadow-3" ||
          changeAppearanceData?.selectedButtonSocialMedia === "outline-1" ||
          changeAppearanceData?.selectedButtonSocialMedia === "outline-2" ||
          changeAppearanceData?.selectedButtonSocialMedia === "outline-3" ||
          changeAppearanceData?.selectedButtonSocialMedia === "fill-1" ||
          changeAppearanceData?.selectedButtonSocialMedia === "fill-2" ||
          changeAppearanceData?.selectedButtonSocialMedia === "fill-3" ||
          changeAppearanceData?.selectedButtonSocialMedia === "hard-shadow-1" ||
          changeAppearanceData?.selectedButtonSocialMedia === "hard-shadow-2" ||
          changeAppearanceData?.selectedButtonSocialMedia === "hard-shadow-3" ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="md:max-w-xs">
                <p className="mt-2 text-[#71717A] text-sm">Button Text Color</p>
                <div className="flex items-center gap-3 relative mt-1">
                  <div
                    className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                    style={{
                      backgroundColor: changeAppearanceData?.socialMediaButtonFontColor,
                    }}
                    onClick={() => setShowColorPicker("social_media_button_font_color")}
                  ></div>

                  <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                    <input
                      type="text"
                      value={changeAppearanceData?.socialMediaButtonFontColor?.replace(/^#/, "")}
                      onChange={(e) =>
                        handleSocialMediaButton(`#${e.target.value}`, "socialMediaButtonFontColor")
                      }
                      className="w-full outline-none bg-[#FAFAFA]"
                      onClick={() => setShowColorPicker("social_media_button_font_color")}
                    />
                  </div>
                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowColorPicker("social_media_button_font_color")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g opacity="0.5" clipPath="url(#clip0)">
                        <path
                          d="M9.25 2.992L11.583 5.326M12.852 4.049c.308-.308.481-.726.481-1.162 0-.437-.173-.855-.481-1.163a1.641 1.641 0 00-2.316 0L2.741 9.51a1.374 1.374 0 00-.292.484l-.77 2.539a.355.355 0 00.367.451l2.539-.77c.183-.056.35-.156.485-.292l7.786-7.787z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5 0.075)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                {showColorPicker === "social_media_button_font_color" && (
                  <ColorPicker
                    handleChange={(color) =>
                      handleSocialMediaButton(color, "socialMediaButtonFontColor")
                    }
                    setting={changeAppearanceData?.socialMediaButtonFontColor}
                    handleCloseColor={handleCloseColor}
                  />
                )}
              </div>
              <div className="md:max-w-xs">
                <p className="mt-2 text-[#71717A] text-sm">Button Hover Text Color</p>

                <div className="flex items-center gap-3 relative mt-1">
                  <div
                    className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                    style={{
                      backgroundColor: changeAppearanceData?.socialMediaButtonHoverFontColor,
                    }}
                    onClick={() => setShowColorPicker("social_media_button_hover_font_color")}
                  ></div>

                  <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                    <input
                      type="text"
                      value={changeAppearanceData?.socialMediaButtonHoverFontColor?.replace(
                        /^#/,
                        "",
                      )}
                      onChange={(e) =>
                        handleSocialMediaButton(
                          `#${e.target.value}`,
                          "socialMediaButtonHoverFontColor",
                        )
                      }
                      className="w-full outline-none bg-[#FAFAFA]"
                      onClick={() => setShowColorPicker("social_media_button_hover_font_color")}
                    />
                  </div>
                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowColorPicker("social_media_button_hover_font_color")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g opacity="0.5" clipPath="url(#clip0)">
                        <path
                          d="M9.25 2.992L11.583 5.326M12.852 4.049c.308-.308.481-.726.481-1.162 0-.437-.173-.855-.481-1.163a1.641 1.641 0 00-2.316 0L2.741 9.51a1.374 1.374 0 00-.292.484l-.77 2.539a.355.355 0 00.367.451l2.539-.77c.183-.056.35-.156.485-.292l7.786-7.787z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5 0.075)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                {showColorPicker === "social_media_button_hover_font_color" && (
                  <ColorPicker
                    handleChange={(color) =>
                      handleSocialMediaButton(color, "socialMediaButtonHoverFontColor")
                    }
                    setting={changeAppearanceData?.socialMediaButtonHoverFontColor}
                    handleCloseColor={handleCloseColor}
                  />
                )}
              </div>

              {changeAppearanceData?.selectedButtonSocialMedia === "outline-1" ||
              changeAppearanceData?.selectedButtonSocialMedia === "outline-2" ||
              changeAppearanceData?.selectedButtonSocialMedia === "outline-3" ? (
                <>
                  <div className="md:max-w-xs">
                    <p className="mt-2 text-[#71717A] text-sm">Border hover Color</p>

                    <div className="flex items-center gap-3 relative mt-1">
                      <div
                        className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                        style={{
                          backgroundColor: changeAppearanceData?.socialMediaButtonHoverBorderColor,
                        }}
                        onClick={() => setShowColorPicker("social_media_button_border_hover_color")}
                      ></div>

                      <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                        <input
                          type="text"
                          value={changeAppearanceData?.socialMediaButtonHoverBorderColor?.replace(
                            /^#/,
                            "",
                          )}
                          onChange={(e) =>
                            handleSocialMediaButton(
                              `#${e.target.value}`,
                              "socialMediaButtonHoverBorderColor",
                            )
                          }
                          className="w-full outline-none bg-[#FAFAFA]"
                          onClick={() =>
                            setShowColorPicker("social_media_button_border_hover_color")
                          }
                        />
                      </div>

                      <span
                        className="absolute right-2 cursor-pointer"
                        onClick={() => setShowColorPicker("social_media_button_border_hover_color")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <g opacity="0.5" clipPath="url(#clip0)">
                            <path
                              d="M9.25 2.992L11.583 5.326M12.852 4.049c.308-.308.481-.726.481-1.162 0-.437-.173-.855-.481-1.163a1.641 1.641 0 00-2.316 0L2.741 9.51a1.374 1.374 0 00-.292.484l-.77 2.539a.355.355 0 00.367.451l2.539-.77c.183-.056.35-.156.485-.292l7.786-7.787z"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width="14"
                                height="14"
                                fill="white"
                                transform="translate(0.5 0.075)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>

                    {showColorPicker === "social_media_button_border_hover_color" && (
                      <ColorPicker
                        handleChange={(color) =>
                          handleSocialMediaButton(color, "socialMediaButtonHoverBorderColor")
                        }
                        setting={changeAppearanceData?.socialMediaButtonHoverBorderColor}
                        handleCloseColor={handleCloseColor}
                      />
                    )}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ButtonSocialMedia;
