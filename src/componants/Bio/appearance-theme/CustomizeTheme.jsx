import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Divider,
  Skeleton,
  Tooltip,
} from "@mui/material";
import ColorPicker from "../Color/ColorPicker";
import {
  CloudUpload,
  TextCenter,
  TextLeft,
  TextRight,
  TypeBold,
  TypeItalic,
  TypeUnderline,
  X,
} from "react-bootstrap-icons";
import { useEffect, useRef, useState } from "react";
import { fontOptions } from "@/utils/FontOptions";

const CustomizeTheme = ({
  expandedTheme,
  handleChangeTheme,
  changeAppearanceData,
  setShowColorPicker,
  showColorPicker,
  handleCloseColor,
  handleChangeAppearance,
  loaderCustom,
  handleImageCover,
  removeImageCover,
  removeImageContainer,
  handleImageContainer,
  uploadProgress,
}) => {
  const primaryDropdownRef = useRef(null);
  const textDropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [focusedKey, setFocusedKey] = useState(null);

  // handle click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (primaryDropdownRef.current && !primaryDropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
      if (textDropdownRef.current && !textDropdownRef.current.contains(event.target)) {
        setIsOpenFont(false);
        setSearchTerm("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = fontOptions.map((group) => ({
    ...group,
    options: group.options.filter((font) =>
      font.name.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  }));

  const handleSelectClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelectClickFont = () => {
    setIsOpenFont((prevState) => !prevState);
  };

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
    <div className="mt-5">
      <Accordion expanded={expandedTheme} onChange={handleChangeTheme}>
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
          <h3>Profile setting</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="my-4">
              <p className="text-[#71717A] text-sm">Primary Font</p>
              <div className="relative" ref={primaryDropdownRef}>
                <div
                  onClick={handleSelectClick}
                  className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-700 text-sm py-2.5 px-4 appearance-none bg-[#FAFAFA] mt-2 cursor-pointer"
                >
                  <span>{changeAppearanceData?.typography_font || "Select Font"}</span>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
                    <input
                      type="text"
                      placeholder="Search fonts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full border-b border-gray-300 py-2 px-4 text-sm focus:outline-none"
                    />
                    <div className="max-h-60 overflow-auto">
                      {filteredOptions?.map(
                        (group) =>
                          group.options.length > 0 && (
                            <div key={group.label}>
                              <div className="px-4 py-2 font-semibold">{group.label}</div>
                              {group.options.map((font) => (
                                <div
                                  key={font.value}
                                  onClick={() => {
                                    handleChangeAppearance(font.value, "typography_font");
                                    setIsOpen(false); // Close dropdown after selection
                                  }}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                >
                                  <span style={{ fontFamily: font.style, fontSize: "18px" }}>
                                    {font.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="my-4">
              <p className="text-[#71717A] text-sm">Text Font</p>
              <div className="relative" ref={textDropdownRef}>
                <div
                  onClick={handleSelectClickFont}
                  className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-700 text-sm py-2.5 px-4 appearance-none bg-[#FAFAFA] mt-2 cursor-pointer"
                >
                  <span>{changeAppearanceData?.text_font || "Select Font"}</span>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {isOpenFont && (
                  <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
                    <input
                      type="text"
                      placeholder="Search fonts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full border-b border-gray-300 py-2 px-4 text-sm focus:outline-none"
                    />
                    <div className="max-h-60 overflow-auto">
                      {filteredOptions?.map(
                        (group) =>
                          group.options.length > 0 && (
                            <div key={group.label}>
                              <div className="px-4 py-2 font-semibold">{group.label}</div>
                              {group.options.map((font) => (
                                <div
                                  key={font.value}
                                  onClick={() => {
                                    handleChangeAppearance(font.value, "text_font");
                                    setIsOpen(false); // Close dropdown after selection
                                  }}
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                >
                                  <span style={{ fontFamily: font.style, fontSize: "18px" }}>
                                    {font.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="space-y-2">
                <p className="mt-2 text-[#71717A] text-sm">Title decoration</p>
                <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                  {textAligns?.map((dir) => (
                    <Tooltip title={dir?.label} key={dir?.value}>
                      <button
                        onClick={() => {
                          const currentStyles = changeAppearanceData?.typography_style || [];
                          const isSelected = currentStyles.includes(dir.value);
                          const updatedStyles = isSelected
                            ? currentStyles.filter((val) => val !== dir.value) // remove
                            : [...currentStyles, dir.value]; // add

                          handleChangeAppearance(updatedStyles, "typography_style");
                        }}
                        className={`w-12 h-10 flex items-center justify-center text-xl border-r last:border-r-0
        ${
          changeAppearanceData?.typography_style?.includes(dir.value)
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
              <div className="space-y-2">
                <p className="mt-2 text-[#71717A] text-sm">Text decoration</p>
                <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                  {textAligns?.map((dir) => (
                    <Tooltip title={dir?.label} key={dir?.value}>
                      <button
                        onClick={() => {
                          const currentStyles = changeAppearanceData?.text_style || [];
                          const isSelected = currentStyles.includes(dir.value);
                          const updatedStyles = isSelected
                            ? currentStyles.filter((val) => val !== dir.value) // remove
                            : [...currentStyles, dir.value]; // add

                          handleChangeAppearance(updatedStyles, "text_style");
                        }}
                        className={`w-12 h-10 flex items-center justify-center text-xl border-r last:border-r-0
        ${
          changeAppearanceData?.text_style?.includes(dir.value)
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="space-y-2">
                <p className="mt-2 text-[#71717A] text-sm">Title case</p>
                <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                  {titleCase?.map((dir) => (
                    <Tooltip title={dir?.label} key={dir?.value}>
                      <button
                        value={changeAppearanceData?.typography_case}
                        onClick={() =>
                          handleChangeAppearance(
                            changeAppearanceData?.typography_case === dir?.value ? "" : dir?.value,
                            "typography_case",
                          )
                        }
                        className={`w-12 h-10 flex items-center justify-center text-xl border-r last:border-r-0
                               ${
                                 changeAppearanceData?.typography_case === dir?.value
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
              <div className="space-y-2">
                <p className="mt-2 text-[#71717A] text-sm">Text case</p>
                <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                  {titleCase?.map((dir) => (
                    <Tooltip title={dir?.label} key={dir?.value}>
                      <button
                        value={changeAppearanceData?.text_case}
                        onClick={() =>
                          handleChangeAppearance(
                            changeAppearanceData?.text_case === dir?.value ? "" : dir?.value,
                            "text_case",
                          )
                        }
                        className={`w-12 h-10 flex items-center justify-center text-xl border-r last:border-r-0
                               ${
                                 changeAppearanceData?.text_case === dir?.value
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div>
              <p className="mt-2 text-[#71717A] text-sm">Title color</p>
              <div className="flex items-center gap-3 relative mt-1">
                <div
                  className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                  style={{
                    backgroundColor: changeAppearanceData?.username_text_color,
                  }}
                  onClick={() => setShowColorPicker("username_text_color")}
                ></div>

                <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                  <input
                    type="text"
                    value={changeAppearanceData?.username_text_color?.replace(/^#/, "")}
                    onChange={(e) =>
                      handleChangeAppearance(`#${e.target.value}`, "username_text_color")
                    }
                    className="w-full outline-none bg-[#FAFAFA]"
                    onClick={() => setShowColorPicker("container_color_change")}
                  />
                </div>
                <span
                  className="absolute right-2 cursor-pointer"
                  onClick={() => setShowColorPicker("container_color_change")}
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
              {showColorPicker === "container_color_change" && (
                <ColorPicker
                  handleChange={(color) => handleChangeAppearance(color, "username_text_color")}
                  setting={changeAppearanceData?.username_text_color}
                  handleCloseColor={handleCloseColor}
                />
              )}
            </div>
            <div>
              <p className="mt-2 text-[#71717A] text-sm">Text color</p>
              <div className="flex items-center gap-3 relative mt-1">
                <div
                  className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                  style={{
                    backgroundColor: changeAppearanceData?.description_text_color,
                  }}
                  onClick={() => setShowColorPicker("description_text_color")}
                ></div>
                <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                  <input
                    type="text"
                    value={changeAppearanceData?.description_text_color?.replace(/^#/, "")}
                    onChange={(e) =>
                      handleChangeAppearance(`#${e.target.value}`, "description_text_color")
                    }
                    className="w-full outline-none bg-[#FAFAFA]"
                    onClick={() => setShowColorPicker("description_text_color")}
                  />
                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowColorPicker("description_text_color")}
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
              </div>
              {showColorPicker === "description_text_color" && (
                <ColorPicker
                  handleChange={(color) => handleChangeAppearance(color, "description_text_color")}
                  setting={changeAppearanceData?.description_text_color}
                  handleCloseColor={handleCloseColor}
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div>
              <p className="mt-2 text-[#71717A] text-sm">Title size</p>
              <div className="relative mt-2">
                <input
                  type="number"
                  id="title_size"
                  name="title_size"
                  value={changeAppearanceData?.username_text_size}
                  onChange={(e) => handleChangeAppearance(e.target.value, "username_text_size")}
                  placeholder="Text size"
                  className="w-full pr-10 rounded-md border border-gray-300 focus:border-black focus:ring-0 text-sm outline-none text-gray-700 py-[3px] px-4 leading-8 transition-colors duration-200 ease-in-out bg-[#FAFAFA]"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  Px
                </span>
              </div>
            </div>
            <div>
              <p className="mt-2 text-[#71717A] text-sm">Text size</p>
              <div className="relative mt-2">
                <input
                  type="number"
                  id="text_size"
                  name="text_size"
                  value={changeAppearanceData?.description_text_size}
                  onChange={(e) => handleChangeAppearance(e.target.value, "description_text_size")}
                  placeholder="Text size"
                  className="w-full pr-10 rounded-md border border-gray-300 focus:border-black focus:ring-0 text-sm outline-none text-gray-700 py-[3px] px-4 leading-8 transition-colors duration-200 ease-in-out bg-[#FAFAFA]"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  Px
                </span>
              </div>
            </div>

            <div>
              <p className="mt-2 text-[#71717A] text-sm">Text line height</p>
              <div className="relative mt-2">
                <input
                  type="number"
                  id="text_line_height"
                  name="text_line_height"
                  max={200}
                  min={100}
                  step={10}
                  value={changeAppearanceData?.bio_line_height || 120}
                  onChange={(e) => {
                    const value = e.target.value;
                    // if (value === "") {
                    //   handleChangeAppearance("", "bio_line_height");
                    //   return;
                    // }

                    // const numberValue = parseInt(value, 10);
                    // if (numberValue >= 100 && numberValue <= 200) {
                    handleChangeAppearance(value, "bio_line_height");
                    // }
                  }}
                  placeholder="Text size"
                  className="w-full pr-10 rounded-md border border-gray-300 focus:border-black focus:ring-0 text-sm outline-none text-gray-700 py-[3px] px-4 leading-8 transition-colors duration-200 ease-in-out bg-[#FAFAFA]"
                />

                <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  %
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="mt-4 text-[#71717A] text-sm">Text alignment</p>
            <div className="space-y-2 mt-2">
              <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                {directions?.map((dir) => (
                  <Tooltip title={dir?.label} key={dir?.value}>
                    <button
                      value={changeAppearanceData?.bio_text_align}
                      onClick={(e) => handleChangeAppearance(dir?.value, "bio_text_align")}
                      className={`w-12 h-10 flex items-center justify-center text-xl border-r last:border-r-0
                               ${
                                 changeAppearanceData?.bio_text_align === dir?.value
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

          <div className="max-w-md mt-4">
            <p className="text-[#71717A] text-sm">Profile Image Radius</p>
            <div className="grid grid-cols-4 gap-0 mt-2 overflow-hidden rounded-lg border border-gray-200">
              {[
                { label: "Top", key: "profile_radius_top" },
                { label: "Bottom", key: "profile_radius_bottom" },
                { label: "Left", key: "profile_radius_left" },
                { label: "Right", key: "profile_radius_right" },
              ]?.map((item) => (
                <input
                  key={item.key}
                  type="number"
                  min={0}
                  max={100}
                  value={changeAppearanceData[item?.key]}
                  onChange={(e) => handleChangeAppearance(e.target.value, item?.key)}
                  onFocus={() => setFocusedKey(item?.key)}
                  onBlur={() => setFocusedKey(null)}
                  className={`text-center text-sm py-2 px-1 border-r last:border-r-0 outline-none transition-all duration-200
                  ${
                    focusedKey === item.key
                      ? "bg-black text-white"
                      : "bg-[#FAFAFA] text-gray-800 hover:bg-gray-100"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* <Divider
            style={{
              marginTop: "16px",
            }}
          /> */}

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="profileShow"
              checked={changeAppearanceData?.profile_image_show}
              onChange={(e) => handleChangeAppearance(e.target.checked, "profile_image_show")}
              className="w-5 h-5 accent-green-500 cursor-pointer peer"
            />
            <label
              htmlFor="profileShow"
              className="text-gray-700 text-sm font-medium cursor-pointer"
            >
              Show Profile Image
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div>
              <p className="mt-2 text-[#71717A] text-sm">Border width</p>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="range"
                  id="text_size"
                  name="text_size"
                  value={changeAppearanceData?.profile_border_width}
                  onChange={(e) => handleChangeAppearance(e.target.value, "profile_border_width")}
                  min={0}
                  max={10}
                  className="w-full appearance-none h-2 rounded-full bg-green-200 cursor-pointer accent-green-500 peer"
                />
                <span className="text-sm font-medium text-gray-700">
                  {changeAppearanceData?.profile_border_width}
                </span>
              </div>
            </div>

            <div>
              <p className="mt-2 text-[#71717A] text-sm">Border style</p>
              <select
                id="profile_border_style"
                name="profile_border_style"
                value={changeAppearanceData?.profile_border_style}
                onChange={(e) => handleChangeAppearance(e.target.value, "profile_border_style")}
                className="w-full mx-auto bg-[#FAFAFA] rounded-md border border-gray-300 focus:border-black focus:ring-0 text-sm outline-none text-gray-700 py-[10px] px-4 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="none">None</option>
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
              </select>
            </div>
            <div>
              <p className="mt-2 text-[#71717A] text-sm">Border color</p>
              <div className="flex items-center gap-3 relative mt-1">
                <div
                  className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                  style={{
                    backgroundColor: changeAppearanceData?.profile_border_color,
                  }}
                  onClick={() => setShowColorPicker("profile_border_color")}
                ></div>
                <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                  <input
                    type="text"
                    value={changeAppearanceData?.profile_border_color?.replace(/^#/, "")}
                    onChange={(e) =>
                      handleChangeAppearance(`#${e.target.value}`, "profile_border_color")
                    }
                    className="w-full outline-none bg-[#FAFAFA]"
                    onClick={() => setShowColorPicker("profile_border_color")}
                  />
                </div>
                <span
                  className="absolute right-2 cursor-pointer"
                  onClick={() => setShowColorPicker("profile_border_color")}
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
              {showColorPicker === "profile_border_color" && (
                <ColorPicker
                  handleChange={(color) => handleChangeAppearance(color, "profile_border_color")}
                  setting={changeAppearanceData?.profile_border_color}
                  handleCloseColor={handleCloseColor}
                />
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="coverShow"
              checked={changeAppearanceData?.cover_image_show}
              onChange={(e) => handleChangeAppearance(e.target.checked, "cover_image_show")}
              className="w-5 h-5 accent-green-500 cursor-pointer peer"
            />
            <label htmlFor="coverShow" className="text-gray-700 text-sm font-medium cursor-pointer">
              Show Cover Image
            </label>
          </div>
          <div>
            <p className="mt-2 text-[#71717A] text-sm">Cover image</p>
            <div className="flex flex-col items-center sm:flex-row relative input gap-4 mt-2">
              {!loaderCustom && !changeAppearanceData?.cover_image ? (
                <label className="inline-flex file-tag-hover relative flex-col items-center justify-center w-full h-[220px] cursor-pointer rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                  <input
                    id="dropzone-file"
                    type="file"
                    name="image"
                    accept="image/jpeg, image/png, image/jpg, image/webp, image/svg"
                    onChange={(e) => handleImageCover(e.target.files[0])}
                    disabled={loaderCustom}
                    className="hidden peer"
                  />
                  <CloudUpload className="w-9 h-9" />
                  <span className="text-sm block font-medium text-gray-500 mt-2">
                    Upload Photo or Video
                  </span>
                </label>
              ) : loaderCustom ? (
                <div className="flex flex-col px-10 items-center justify-center w-full h-[220px] border border-gray-300 rounded-lg">
                  {/* <CircularProgress color="inherit" size={30} /> */}
                  <div class="w-full mx-10 bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-green-500 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 text-green-700 text-center text-sm font-medium">
                    {uploadProgress}%
                  </div>
                </div>
              ) : (
                <div className="relative flex items-center justify-center w-full h-[220px] border border-gray-300 rounded-lg overflow-hidden">
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
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video
                      src={changeAppearanceData?.cover_image}
                      alt="Background"
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                    />
                  )}

                  <button
                    type="button"
                    onClick={removeImageCover}
                    className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300 text-blue-500 hover:bg-blue-100 transition-all duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
          {changeAppearanceData?.container_padding && (
            <div>
              {/* <div>Container color</div>
              <div className="flex gap-3 mt-2">
                <div
                  className="w-[35px] shadow h-[35px] rounded-[6px] cursor-pointer"
                  style={{
                    backgroundColor: changeAppearanceData?.container_color,
                  }}
                  onClick={() => setShowColorPicker("container_color")}
                ></div>

                <input
                  type="text"
                  value={changeAppearanceData?.container_color}
                  onChange={(e) => handleChangeAppearance(e.target.value, "container_color")}
                  className="cursor-pointer flex items-center border main-border-color w-full pl-1 py-[9px] rounded-[6px] space-x-2 text-sm font-medium table-text peer"
                  onClick={() => setShowColorPicker("container_color")}
                />
              </div>
              {showColorPicker === "container_color" && (
                <ColorPicker
                  handleChange={(color) => handleChangeAppearance(color, "container_color")}
                  setting={changeAppearanceData?.container_color}
                  handleCloseColor={handleCloseColor}
                />
              )} */}
              <div className="mt-2">Container image</div>
              <div className="flex flex-col items-center sm:flex-row justify-center relative input gap-4">
                {!loaderCustom && !changeAppearanceData?.container_image ? (
                  <label className="inline-flex file-tag-hover relative flex-col items-center border-dashed border-[2px] w-full h-[120px] sm:h-[200px] justify-center cursor-pointer main-border-color rounded-[6px]">
                    <input
                      id="dropzone-file"
                      type="file"
                      name="image"
                      accept="image/jpeg, image/png, image/jpg, image/webp, image/svg"
                      onChange={(e) => handleImageContainer(e.target.files[0])}
                      disabled={loaderCustom}
                      className="hidden peer"
                    />
                    <CloudUpload className="w-9 h-9" />
                    <span className="text-sm block font-medium text-center">
                      Click to upload cover image
                    </span>
                  </label>
                ) : loaderCustom ? (
                  <Skeleton className="w-full h-[200px]" variant="rounded" />
                ) : (
                  <div className="flex relative items-center h-[200px] w-full justify-center border main-border-color rounded-[6px] cursor-pointer">
                    <img
                      src={changeAppearanceData?.container_image}
                      className="max-w-[180px] max-h-[180px] sm:max-w-[340px] w-[340px] sm:max-h-[180px]"
                      alt="Cover Image"
                    />
                    <button
                      type="button"
                      onClick={removeImageContainer}
                      className="absolute top-0 rounded-tr right-0 z-30 w-[25px] h-[25px] flex items-center justify-center text-red-600 primary-bg-color border-s border-b main-border-color text-xs"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomizeTheme;
