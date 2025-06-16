import { Accordion, AccordionDetails, AccordionSummary, Divider, Tooltip } from "@mui/material";
import {
  TextCenter,
  TextLeft,
  TextRight,
  TypeBold,
  TypeItalic,
  TypeUnderline,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ColorPicker from "../Color/ColorPicker";

const Button = ({
  expandedButton,
  changeAppearanceData,
  handleChangeButton,
  showColorPicker,
  setShowColorPicker,
  handleCloseColor,
  handleChangeButtonAlignment,
  handleChangeAppearance,
}) => {
  const { appreance } = useSelector((state) => state?.appreanceReducer);

  const directions = [
    { label: "Left", value: "left", icon: <TextLeft /> },
    { label: "Center", value: "center", icon: <TextCenter /> },
    { label: "Right", value: "right", icon: <TextRight /> },
  ];

  const textAligns = [
    { label: "Bold", value: "bold", icon: <TypeBold /> },
    { label: "Italic", value: "italic", icon: <TypeItalic /> },
    { label: "Underline", value: "underline", icon: <TypeUnderline /> },
  ];

  const titleCase = [
    {
      label: "Uppercase",
      value: "uppercase",
      title: "AB",
    },
    {
      label: "Lowercase",
      value: "lowercase",
      title: "ab",
    },
    {
      label: "Capitalize",
      value: "capitalize",
      title: "Ab",
    },
  ];

  return (
    <div className="mt-4">
      <Accordion expanded={expandedButton} onChange={handleChangeButton}>
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
          <h3>Buttons</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="space-y-2 mt-2">
                  <p className="text-[#71717A] text-sm">Button Text Align</p>
                  <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                    {directions?.map((dir) => (
                      <Tooltip title={dir?.label} key={dir?.value}>
                        <button
                          onClick={() => {
                            const current = changeAppearanceData?.button_text_align;
                            const updatedValue = current === dir.value ? "" : dir.value;

                            handleChangeButtonAlignment(updatedValue, "button_text_align");
                          }}
                          className={`w-12 h-10 flex items-center justify-center text-xl border-r last:border-r-0
        ${
          changeAppearanceData?.button_text_align === dir.value
            ? "bg-black text-white"
            : "bg-[#FAFAFA] text-black hover:bg-gray-100"
        }`}
                        >
                          {dir?.icon}
                        </button>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="space-y-2 mt-2">
                  <p className="text-[#71717A] text-sm">Button Text Case</p>
                  <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                    {titleCase?.map((dir) => (
                      <Tooltip title={dir?.label} key={dir?.value}>
                        <button
                          value={changeAppearanceData?.button_typography_case}
                          onClick={(e) => {
                            const current = changeAppearanceData?.button_typography_case;
                            const updatedValue = current === dir.value ? "" : dir.value;

                            handleChangeButtonAlignment(updatedValue, "button_typography_case");
                          }}
                          className={`w-12 h-10 flex items-center justify-center text-xl border-r last:border-r-0
                               ${
                                 changeAppearanceData?.button_typography_case === dir?.value
                                   ? "bg-black text-white"
                                   : "bg-[#FAFAFA] text-black hover:bg-gray-100"
                               }`}
                        >
                          {dir?.title}
                        </button>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="space-y-2 mt-2">
                  <p className="text-[#71717A] text-sm">Button Text Decoration</p>
                  <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                    {textAligns?.map((dir) => (
                      <Tooltip title={dir?.label} key={dir?.value}>
                        <button
                          onClick={() => {
                            const current = changeAppearanceData?.button_typography_style || [];
                            const isSelected = current.includes(dir.value);
                            const updatedStyles = isSelected
                              ? current.filter((val) => val !== dir.value)
                              : [...current, dir.value];

                            handleChangeButtonAlignment(updatedStyles, "button_typography_style");
                          }}
                          className={`w-12 h-10 flex items-center justify-center text-xl border-r last:border-r-0
        ${
          changeAppearanceData?.button_typography_style?.includes(dir.value)
            ? "bg-black text-white"
            : "bg-[#FAFAFA] text-black hover:bg-gray-100"
        }`}
                        >
                          {dir?.icon}
                        </button>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <p className="mt-2 text-[#71717A] text-sm">Fill</p>
                <div className="flex flex-wrap gap-2 sm:gap-6 md:gap-8 lg:gap-4">
                  {["fill-1", "fill-2", "fill-3"].map((type, index) => (
                    <div
                      key={type}
                      onClick={() => handleChangeButtonAlignment(type, "selectedButton")}
                      className={`cursor-pointer rounded-[8px] flex items-center justify-center transition-all duration-200 ${
                        changeAppearanceData?.selectedButton === type
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
                      onClick={() => handleChangeButtonAlignment(type, "selectedButton")}
                      className={`cursor-pointer rounded-[8px] flex items-center justify-center transition-all duration-200 ${
                        changeAppearanceData?.selectedButton === type
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <p className="text-[#71717A] text-sm">Soft shadow</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {["soft-shadow-1", "soft-shadow-2", "soft-shadow-3"].map((type, index) => {
                    const shapeClass =
                      index === 1 ? "rounded-[8px]" : index === 2 ? "rounded-full" : "";

                    return (
                      <div
                        key={type}
                        onClick={() => handleChangeButtonAlignment(type, "selectedButton")}
                        className={`w-[130px] h-[52px] p-1 cursor-pointer rounded-[8px] transition-all duration-200 ${
                          changeAppearanceData?.selectedButton === type
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
                <p className="text-[#71717A] text-sm">Hard shadow</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {["hard-shadow-1", "hard-shadow-2", "hard-shadow-3"].map((type, index) => {
                    const shapeClass =
                      index === 1 ? "rounded-[8px]" : index === 2 ? "rounded-full" : "";

                    return (
                      <div
                        key={type}
                        onClick={() => handleChangeButtonAlignment(type, "selectedButton")}
                        className={`w-[130px] h-[52px] p-1 cursor-pointer rounded-[8px] transition-all duration-200 ${
                          changeAppearanceData?.selectedButton === type
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

            {/* <div className="mt-2">Special</div> */}
            {/* <div className="flex flex-wrap mt-2 gap-2 sm:gap-6 md:gap-8 lg:gap-4">
              <div
                className={`${
                  changeAppearanceData?.selectedButton === "special-button-1"
                    ? "border-2 border-[#222]"
                    : "border-2 border-transparent"
                } p-1`}
                onClick={() => handleChangeButtonAlignment("special-button-1", "selectedButton")}
              >
                <button className="wavy-button h-[50px] w-[180px] bg-black"></button>
              </div>
            </div> */}

            {/* <div
              className={`${
                changeAppearanceData?.selectedButton === "special-button-1"
                  ? "border-2 border-[#222]"
                  : "border-2 border-transparent"
              } p-1`}
              onClick={() => handleChangeButtonAlignment("special-button-1", "selectedButton")}
            >
              <div
                style={{ position: "relative", display: "inline-block", width: "25%" }}
                className="mt-2"
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: "4px",
                    width: "95%",
                    height: "120%",
                    border: "1px solid black",
                    boxSizing: "border-box",
                    zIndex: 1,
                  }}
                ></div>
                <button
                  style={{
                    position: "relative",
                    padding: "20px",
                    border: "1px solid black",
                    backgroundColor: "transparent",
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    outline: "none",
                    zIndex: 2,
                    width: "100%",
                  }}
                ></button>
              </div>
            </div> */}

            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                id="buttonBackground"
                checked={changeAppearanceData?.remove_button_bg}
                onChange={(e) => handleChangeButtonAlignment(e.target.checked, "remove_button_bg")}
                className="w-5 h-5 accent-green-500 cursor-pointer peer"
              />
              <label
                htmlFor="buttonBackground"
                className="text-gray-700 text-sm font-medium cursor-pointer"
              >
                Transparent Background
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="md:max-w-xs">
                <p className="text-[#71717A] text-sm">Button Color</p>

                <div className="flex items-center gap-3 relative mt-1">
                  <div
                    className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                    style={{
                      backgroundColor: changeAppearanceData?.buttonColor,
                    }}
                    onClick={() => setShowColorPicker("button_color")}
                  ></div>

                  <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                    <input
                      type="text"
                      value={changeAppearanceData?.buttonColor?.replace(/^#/, "")}
                      onChange={(e) =>
                        handleChangeButtonAlignment(`#${e.target.value}`, "buttonColor")
                      }
                      className="w-full outline-none bg-[#FAFAFA]"
                      onClick={() => setShowColorPicker("button_color")}
                    />
                  </div>

                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowColorPicker("button_color")}
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

                {showColorPicker === "button_color" && (
                  <ColorPicker
                    handleChange={(color) => handleChangeButtonAlignment(color, "buttonColor")}
                    setting={changeAppearanceData?.buttonColor}
                    handleCloseColor={handleCloseColor}
                  />
                )}
              </div>

              <div className="md:max-w-xs">
                <p className="text-[#71717A] text-sm">Button Hover Color</p>

                <div className="flex items-center gap-3 relative mt-1">
                  <div
                    className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                    style={{
                      backgroundColor: changeAppearanceData?.buttonHoverBg,
                    }}
                    onClick={() => setShowColorPicker("button_hover_bg")}
                  ></div>

                  <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                    <input
                      type="text"
                      value={changeAppearanceData?.buttonHoverBg?.replace(/^#/, "")}
                      onChange={(e) =>
                        handleChangeButtonAlignment(`#${e.target.value}`, "buttonHoverBg")
                      }
                      className="w-full outline-none bg-[#FAFAFA]"
                      onClick={() => setShowColorPicker("button_hover_bg")}
                    />
                  </div>

                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowColorPicker("button_hover_bg")}
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

                {showColorPicker === "button_hover_bg" && (
                  <ColorPicker
                    handleChange={(color) => handleChangeButtonAlignment(color, "buttonHoverBg")}
                    setting={changeAppearanceData?.buttonHoverBg}
                    handleCloseColor={handleCloseColor}
                  />
                )}
              </div>

              {changeAppearanceData?.selectedButton === "hard-shadow-1" ||
              changeAppearanceData?.selectedButton === "hard-shadow-2" ||
              changeAppearanceData?.selectedButton === "hard-shadow-3" ||
              changeAppearanceData?.selectedButton === "soft-shadow-1" ||
              changeAppearanceData?.selectedButton === "soft-shadow-2" ||
              changeAppearanceData?.selectedButton === "soft-shadow-3" ? (
                <div className="md:max-w-xs">
                  <p className="text-[#71717A] text-sm">Shadow Color</p>

                  <div className="flex items-center gap-3 relative mt-1">
                    <div
                      className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                      style={{
                        backgroundColor: changeAppearanceData?.shadowColor,
                      }}
                      onClick={() => setShowColorPicker("shadow_color")}
                    ></div>

                    <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                      <input
                        type="text"
                        value={changeAppearanceData?.shadowColor?.replace(/^#/, "")}
                        onChange={(e) =>
                          handleChangeButtonAlignment(`#${e.target.value}`, "shadowColor")
                        }
                        className="w-full outline-none bg-[#FAFAFA]"
                        onClick={() => setShowColorPicker("shadow_color")}
                      />
                    </div>

                    <span
                      className="absolute right-2 cursor-pointer"
                      onClick={() => setShowColorPicker("shadow_color")}
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

                  {showColorPicker === "shadow_color" && (
                    <ColorPicker
                      handleChange={(color) => handleChangeButtonAlignment(color, "shadowColor")}
                      setting={changeAppearanceData?.shadowColor}
                      handleCloseColor={handleCloseColor}
                    />
                  )}
                </div>
              ) : (
                ""
              )}
              {changeAppearanceData?.selectedButton === "outline-1" ||
              changeAppearanceData?.selectedButton === "outline-2" ||
              changeAppearanceData?.selectedButton === "outline-3" ? (
                <>
                  <div className="md:max-w-xs">
                    <p className="text-[#71717A] text-sm">Border Color</p>

                    <div className="flex items-center gap-3 relative mt-1">
                      <div
                        className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                        style={{
                          backgroundColor: changeAppearanceData?.buttonBorderColor,
                        }}
                        onClick={() => setShowColorPicker("button_border_color")}
                      ></div>

                      <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                        <input
                          type="text"
                          value={changeAppearanceData?.buttonBorderColor?.replace(/^#/, "")}
                          onChange={(e) =>
                            handleChangeButtonAlignment(`#${e.target.value}`, "buttonBorderColor")
                          }
                          className="w-full outline-none bg-[#FAFAFA]"
                          onClick={() => setShowColorPicker("button_border_color")}
                        />
                      </div>

                      <span
                        className="absolute right-2 cursor-pointer"
                        onClick={() => setShowColorPicker("button_border_color")}
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

                    {showColorPicker === "button_border_color" && (
                      <ColorPicker
                        handleChange={(color) =>
                          handleChangeButtonAlignment(color, "buttonBorderColor")
                        }
                        setting={changeAppearanceData?.buttonBorderColor}
                        handleCloseColor={handleCloseColor}
                      />
                    )}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            {changeAppearanceData?.selectedButton === "soft-shadow-1" ||
            changeAppearanceData?.selectedButton === "soft-shadow-2" ||
            changeAppearanceData?.selectedButton === "soft-shadow-3" ||
            changeAppearanceData?.selectedButton === "outline-1" ||
            changeAppearanceData?.selectedButton === "outline-2" ||
            changeAppearanceData?.selectedButton === "outline-3" ||
            changeAppearanceData?.selectedButton === "fill-1" ||
            changeAppearanceData?.selectedButton === "fill-2" ||
            changeAppearanceData?.selectedButton === "fill-3" ||
            changeAppearanceData?.selectedButton === "hard-shadow-1" ||
            changeAppearanceData?.selectedButton === "hard-shadow-2" ||
            changeAppearanceData?.selectedButton === "hard-shadow-3" ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="md:max-w-xs">
                  <p className="text-[#71717A] text-sm">Button Text Color</p>

                  <div className="flex items-center gap-3 relative mt-1">
                    <div
                      className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                      style={{
                        backgroundColor: changeAppearanceData?.buttonFontColor,
                      }}
                      onClick={() => setShowColorPicker("button_font_color")}
                    ></div>

                    <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                      <input
                        type="text"
                        value={changeAppearanceData?.buttonFontColor?.replace(/^#/, "")}
                        onChange={(e) =>
                          handleChangeButtonAlignment(`#${e.target.value}`, "buttonFontColor")
                        }
                        className="w-full outline-none bg-[#FAFAFA]"
                        onClick={() => setShowColorPicker("button_font_color")}
                      />
                    </div>

                    <span
                      className="absolute right-2 cursor-pointer"
                      onClick={() => setShowColorPicker("button_font_color")}
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

                  {showColorPicker === "button_font_color" && (
                    <ColorPicker
                      handleChange={(color) =>
                        handleChangeButtonAlignment(color, "buttonFontColor")
                      }
                      setting={changeAppearanceData?.buttonFontColor}
                      handleCloseColor={handleCloseColor}
                    />
                  )}
                </div>
                <div className="md:max-w-xs">
                  <p className="text-[#71717A] text-sm">Button Hover Text Color</p>

                  <div className="flex items-center gap-3 relative mt-1">
                    <div
                      className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                      style={{
                        backgroundColor: changeAppearanceData?.buttonHoverFontColor,
                      }}
                      onClick={() => setShowColorPicker("button_hover_font_color")}
                    ></div>

                    <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                      <input
                        type="text"
                        value={changeAppearanceData?.buttonHoverFontColor?.replace(/^#/, "")}
                        onChange={(e) =>
                          handleChangeButtonAlignment(`#${e.target.value}`, "buttonHoverFontColor")
                        }
                        className="w-full outline-none bg-[#FAFAFA]"
                        onClick={() => setShowColorPicker("button_hover_font_color")}
                      />
                    </div>

                    <span
                      className="absolute right-2 cursor-pointer"
                      onClick={() => setShowColorPicker("button_hover_font_color")}
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

                  {showColorPicker === "button_hover_font_color" && (
                    <ColorPicker
                      handleChange={(color) =>
                        handleChangeButtonAlignment(color, "buttonHoverFontColor")
                      }
                      setting={changeAppearanceData?.buttonHoverFontColor}
                      handleCloseColor={handleCloseColor}
                    />
                  )}
                </div>
                {changeAppearanceData?.selectedButton === "outline-1" ||
                changeAppearanceData?.selectedButton === "outline-2" ||
                changeAppearanceData?.selectedButton === "outline-3" ? (
                  <>
                    <div className="md:max-w-xs">
                      <p className="text-[#71717A] text-sm">Border hover Color</p>

                      <div className="flex items-center gap-3 relative mt-1">
                        <div
                          className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                          style={{
                            backgroundColor: changeAppearanceData?.buttonBorderHoverColor,
                          }}
                          onClick={() => setShowColorPicker("button_border_hover_color")}
                        ></div>

                        <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                          <input
                            type="text"
                            value={changeAppearanceData?.buttonBorderHoverColor?.replace(/^#/, "")}
                            onChange={(e) =>
                              handleChangeButtonAlignment(
                                `#${e.target.value}`,
                                "buttonBorderHoverColor",
                              )
                            }
                            className="w-full outline-none bg-[#FAFAFA]"
                            onClick={() => setShowColorPicker("button_border_hover_color")}
                          />
                        </div>

                        <span
                          className="absolute right-2 cursor-pointer"
                          onClick={() => setShowColorPicker("button_border_hover_color")}
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

                      {showColorPicker === "button_border_hover_color" && (
                        <ColorPicker
                          handleChange={(color) =>
                            handleChangeButtonAlignment(color, "buttonBorderHoverColor")
                          }
                          setting={changeAppearanceData?.buttonBorderHoverColor}
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div>
                <p className="text-[#71717A] text-sm">Button Gap</p>
                <div className="relative mt-2">
                  <input
                    type="number"
                    id="text_size"
                    name="text_size"
                    value={changeAppearanceData?.button_margin_top}
                    onChange={(e) => handleChangeAppearance(e.target.value, "button_margin_top")}
                    placeholder="Text size"
                    max={30}
                    min={-1}
                    step={1}
                    className="w-full mt-2 bg-transparent rounded-md border border-gray-300 focus:border-black focus:ring-0 text-sm outline-none text-gray-700 py-[3px] px-4 leading-8 transition-colors duration-200 ease-in-out peer"
                    style={{
                      background: "#FAFAFA",
                    }}
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mt-1">
                    Px
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Button;
