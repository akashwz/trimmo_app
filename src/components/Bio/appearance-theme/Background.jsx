import API from "@/api";
import ToastNotification from "@/controller/ToastNotification";
import { updateApperance } from "@/redux/Action/appearance.action";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Dialog,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Skeleton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, CloudUpload, X } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import ColorPicker from "../Color/ColorPicker";

const Background = ({
  selectedImage,
  userData,
  expanded,
  changeAppearanceData,
  setChangeAppearanceData,
  handleChange,
  handlebgSelect,
  isPopupOpen,
  closeSharePopup,
  setShowColorPicker,
  showColorPicker,
  handleCloseColor,
  handleGradiantColorChange,
}) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleChangeTab = (event) => {
    const newValue = Number(event.target.value); // Ensure it's a number
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const threedImages = [
    "https://cdn.trimmo.bio/trimmo_bio/3d-01.webp",
    "https://cdn.trimmo.bio/trimmo_bio/3d-02.webp",
    "https://cdn.trimmo.bio/trimmo_bio/3d-03.webp",
  ];

  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  useEffect(() => {
    handleImageLoad();
  }, []);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const AbstractsImages = [
    "https://cdn.trimmo.bio/trimmo_bio/colorful-01.webp",
    "https://cdn.trimmo.bio/trimmo_bio/colorful-02.webp",
    "https://cdn.trimmo.bio/trimmo_bio/colorful-03.webp",
    "https://cdn.trimmo.bio/trimmo_bio/colorful-04.webp",
    "https://cdn.trimmo.bio/trimmo_bio/colorful-05.webp",
    "https://cdn.trimmo.bio/trimmo_bio/colorful-06.webp",
  ];
  const bohoImages = [
    "https://cdn.trimmo.bio/trimmo_bio/boho-01.webp",
    "https://cdn.trimmo.bio/trimmo_bio/boho-02.webp",
    "https://cdn.trimmo.bio/trimmo_bio/boho-03.webp",
    "https://cdn.trimmo.bio/trimmo_bio/boho-04.webp",
    "https://cdn.trimmo.bio/trimmo_bio/boho-05.webp",
  ];
  const comicsImages = [
    "https://cdn.trimmo.bio/trimmo_bio/movie-big-hero.webp",
    "https://cdn.trimmo.bio/trimmo_bio/movie-black-widow.webp",
    "https://cdn.trimmo.bio/trimmo_bio/movie-dumbo.webp",
    "https://cdn.trimmo.bio/trimmo_bio/movie-kung-fu-panda.webp",
    "https://cdn.trimmo.bio/trimmo_bio/movie-spiderman.webp",
    "https://cdn.trimmo.bio/trimmo_bio/movie-the-angry-birds.webp",
    "https://cdn.trimmo.bio/trimmo_bio/movie-the-batman.webp",
  ];

  const handleImageClick = (imagePath) => {
    dispatch(
      updateApperance({
        ...changeAppearanceData,
        bg_image: imagePath,
      }),
    );
    setChangeAppearanceData({
      ...changeAppearanceData,
      bg_image: imagePath,
    });
  };
  const renderImageList = (images) =>
    images?.map((item, index) => (
      <div key={`${item}-${index}`} className="relative w-full mt-4">
        {!loadedImages[index] && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-100 rounded-md">
            <div className="w-6 h-6 border-4 border-gray-300 border-t-[#222] rounded-full animate-spin" />
          </div>
        )}
        <img
          src={item}
          alt={`Image ${index + 1}`}
          className={`w-full h-[150px] p-1 rounded-xl object-cover cursor-pointer transition-opacity duration-300 ${
            changeAppearanceData?.bg_image === item
              ? "border-2 border-[#222]"
              : "border-2 border-transparent"
          } ${!loadedImages[index] ? "opacity-0" : "opacity-100"}`}
          onLoad={() => handleImageLoad(index)}
          onClick={() => handleImageClick(item)}
        />
      </div>
    ));

  const [loader, setLoader] = useState(false);
  const handleImage = async (file) => {
    // Allowed file types (Images + GIF + Videos)
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/webp",
      "video/mp4",
      "video/webm",
      "video/ogg",
    ];
    const maxSize = 20 * 1024 * 1024; // 20MB

    if (!file) {
      ToastNotification.error("No file selected.");
      return;
    }

    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      ToastNotification.error("Invalid file type. Only images, GIF, and video files are allowed.");
      return;
    }

    // Validate file size
    if (file.size > maxSize) {
      ToastNotification.error("File size exceeds 20MB limit.");
      return;
    }

    setLoader(true);
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev < 90) {
          const randomIncrease = Math.floor(Math.random() * 5) + 1; // random between 1 and 5
          return Math.min(prev + randomIncrease, 90); // cap at 90
        }
        return prev;
      });
    }, 700); // every 700ms
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "profile");
    formData.append("file_type", "background");

    try {
      setUploadProgress(5); // Start at 5% just for the feels
      const apiCall = await API({
        url: `/bio/fileupload`,
        method: "post",
        data: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100); // Boom! API done
      setTimeout(() => {
        if (apiCall?.status === 200 || apiCall?.status === 304) {
          dispatch(
            updateApperance({
              ...changeAppearanceData,
              bg_image: apiCall?.data?.data?.url,
            }),
          );
          setChangeAppearanceData((prev) => ({
            ...prev,
            bg_image: apiCall?.data?.data?.url,
          }));
          ToastNotification.success("File uploaded successfully!");
        }
        setLoader(false);
        setUploadProgress(0);
      }, 500);
    } catch (error) {
      clearInterval(progressInterval);
      setUploadProgress(0);
      setLoader(false);
      ToastNotification.error(error?.response?.data?.message || "File upload failed.");
    }
  };

  const removeImage = async () => {
    try {
      const apiCall = await API({
        url: `/bio/delete_file_s3?file_url=${userData?.profile_picture}`,
        method: "delete",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        dispatch(updateApperance({ ...changeAppearanceData, bg_image: "" }));
      }
    } catch (error) {
      ToastNotification.error(error);
    }
  };

  const defaultColors = [
    { color: "#ffffff", value: "#ffffff" },
    { color: "#FF3B30", value: "#FF3B30" },
    { color: "#FF9500", value: "#FF9500" },
    { color: "#34C759", value: "#34C759" },
    { color: "#007AFF", value: "#007AFF" },
    { color: "#AF52DE", value: "#AF52DE" },
    { color: "#852221", value: "#852221" },
    { color: "#A2845E", value: "#A2845E" },
  ];

  const defaultGradients = [
    {
      fromColor: "#EEAECA",
      viaColor: "#ffffff",
      toColor: "#94BBE9",
      name: "Gradient 1",
    },
    {
      fromColor: "#2A7B9B",
      viaColor: "#fce3e3",
      toColor: "#EDDD53",
      name: "Gradient 2",
    },
    {
      fromColor: "#833AB4",
      viaColor: "#d8bfea",
      toColor: "#FCB045",
      name: "Gradient 3",
    },
    {
      fromColor: "#60EFFF",
      viaColor: "#c6dbf7",
      toColor: "#0061FF",
      name: "Gradient 4",
    },
    {
      fromColor: "#FF8989",
      viaColor: "#ffe5c1",
      toColor: "#A9FF68",
      name: "Gradient 5",
    },
    {
      fromColor: "#392D69",
      viaColor: "#ffe5c1",
      toColor: "#B57BEE",
      name: "Gradient 6",
    },
    {
      fromColor: "#F3F98A",
      viaColor: "#ffe5c1",
      toColor: "#95ECB0",
      name: "Gradient 7",
    },
    {
      fromColor: "#F9AB8F",
      viaColor: "#ffe5c1",
      toColor: "#F40752",
      name: "Gradient 8",
    },
  ];

  const handleClick = (item) => {
    handleGradiantColorChange(item?.fromColor, item?.viaColor, item?.toColor);
  };

  const directions = [
    { label: "Gradient Up", value: "gradient_up", icon: <ArrowUp /> },
    { label: "Gradient Down", value: "gradient_down", icon: <ArrowDown /> },
    { label: "Gradient Left", value: "gradient_left", icon: <ArrowLeft /> },
    { label: "Gradient Right", value: "gradient_right", icon: <ArrowRight /> },
  ];

  return (
    <div className="mt-4">
      <Accordion expanded={expanded} onChange={handleChange}>
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
          <h3>Background</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start my-6">
            <div
              onClick={() => handlebgSelect("flat_colour", "selectedBg")}
              className="w-full sm:w-auto"
            >
              <div
                className={`${
                  changeAppearanceData?.selectedBg === "flat_colour"
                    ? "border-none bg-[#222] text-white"
                    : "border-2 border-[#E4E4E7] bg-[#FAFAFA]"
                } rounded-[8px] p-2 cursor-pointer min-w-[110px]`}
              >
                <div className="text-center text-sm sm:text-base">Flat Color</div>
              </div>
            </div>

            <div
              onClick={() => handlebgSelect("gradient", "selectedBg")}
              className="w-full sm:w-auto"
            >
              <div
                className={`${
                  changeAppearanceData?.selectedBg === "gradient"
                    ? "border-none bg-[#222] text-white"
                    : "border-2 border-[#E4E4E7] bg-[#FAFAFA]"
                } rounded-[8px] p-2 cursor-pointer min-w-[110px]`}
              >
                <div className="text-center text-sm sm:text-base">Gradient</div>
              </div>
            </div>
            <div onClick={() => handlebgSelect("image", "selectedBg")} className="w-full sm:w-auto">
              <div
                className={`${
                  changeAppearanceData?.selectedBg === "image"
                    ? "border-none bg-[#222] text-white"
                    : "border-2 border-[#E4E4E7] bg-[#FAFAFA]"
                } rounded-[8px] p-2 cursor-pointer min-w-[110px]`}
              >
                <div className="text-center text-sm sm:text-base">Image</div>
              </div>
            </div>
          </div>

          {changeAppearanceData?.selectedBg === "flat_colour" ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="w-full md:w-auto">
                <p className="text-[#71717A] text-sm">Default color</p>
                <div className="flex flex-wrap mt-1">
                  {defaultColors.map((item, index) => (
                    <div
                      className="rounded-full p-[2px]"
                      key={index}
                      style={{
                        border:
                          changeAppearanceData?.basicColor === item?.color
                            ? "2px solid black"
                            : "2px solid transparent",
                      }}
                    >
                      <div
                        className={`h-7 w-7 rounded-full ${
                          item?.color === "#ffffff" && "border"
                        } cursor-pointer`}
                        style={{
                          backgroundColor: item.color,
                        }}
                        onClick={() => handlebgSelect(item.color, "basicColor")}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:max-w-xs">
                <p className="text-[#71717A] text-sm">Custom color</p>

                <div className="flex items-center gap-3 relative mt-1">
                  <div
                    className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                    style={{ backgroundColor: changeAppearanceData?.basicColor }}
                    onClick={() => setShowColorPicker("flat_colour")}
                  ></div>

                  <div className="flex items-center border border-gray-300 bg-[#FAFAFA] w-full pl-12 py-[9px] rounded-md text-sm font-medium">
                    <input
                      type="text"
                      value={changeAppearanceData?.basicColor?.replace(/^#/, "")}
                      onChange={(e) => handlebgSelect(`#${e.target.value}`, "basicColor")}
                      className="w-full outline-none bg-[#FAFAFA]"
                      onClick={() => setShowColorPicker("flat_colour")}
                    />
                  </div>

                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowColorPicker("flat_colour")}
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

                {showColorPicker === "flat_colour" && (
                  <ColorPicker
                    handleChange={(color) => handlebgSelect(color, "basicColor")}
                    setting={changeAppearanceData?.basicColor}
                    handleCloseColor={handleCloseColor}
                  />
                )}
              </div>
            </div>
          ) : changeAppearanceData?.selectedBg === "gradient" ? (
            <>
              <div>
                <p className="mt-2 text-[#71717A] text-sm">Gradient Directions</p>
                <div className="space-y-2 mt-2">
                  <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                    {directions?.map((dir) => (
                      <Tooltip title={dir?.label} key={dir?.value}>
                        <button
                          value={changeAppearanceData?.value}
                          onClick={(e) => handlebgSelect(dir?.value, "value")}
                          className={`w-12 h-10 flex items-center justify-center text-xl border-r last:border-r-0
                               ${
                                 changeAppearanceData?.value === dir?.value
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="w-full md:w-auto">
                  <p className="mt-2 text-[#71717A] text-sm">Default color</p>
                  <div className="flex flex-wrap mt-1">
                    {defaultGradients.map((item, index) => (
                      <div
                        className="rounded-full m-[1px]"
                        key={index}
                        style={{
                          border:
                            changeAppearanceData?.form_color === item?.fromColor &&
                            // changeAppearanceData?.via_color === item?.viaColor &&
                            changeAppearanceData?.to_color === item?.toColor
                              ? "2px solid black"
                              : "2px solid transparent",
                        }}
                      >
                        <div
                          key={index}
                          className={`h-7 w-7 rounded-full cursor-pointer`}
                          style={{
                            // background: `linear-gradient(to bottom, ${item?.fromColor}, ${item?.viaColor}, ${item?.toColor})`,
                            background: `linear-gradient(to bottom, ${item?.fromColor}, ${item?.toColor})`,
                          }}
                          onClick={() => handleClick(item)}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:max-w-xs">
                  <p className="mt-2 text-[#71717A] text-sm">Gradiant From Color</p>

                  <div className="flex items-center gap-3 relative mt-1">
                    <div
                      className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                      style={{ backgroundColor: changeAppearanceData?.form_color }}
                      onClick={() => setShowColorPicker("form_colour")}
                    ></div>

                    <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                      <input
                        type="text"
                        value={changeAppearanceData?.form_color?.replace(/^#/, "")}
                        onChange={(e) => handlebgSelect(`#${e.target.value}`, "form_color")}
                        className="w-full outline-none bg-[#FAFAFA]"
                        onClick={() => setShowColorPicker("form_colour")}
                      />
                    </div>

                    <span
                      className="absolute right-2 cursor-pointer"
                      onClick={() => setShowColorPicker("form_colour")}
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

                  {showColorPicker === "form_colour" && (
                    <ColorPicker
                      handleChange={(color) => handlebgSelect(color, "form_color")}
                      setting={changeAppearanceData?.form_color}
                      handleCloseColor={handleCloseColor}
                    />
                  )}
                </div>
                <div className="md:max-w-xs">
                  <p className="mt-2 text-[#71717A] text-sm">Gradiant To Color</p>

                  <div className="flex items-center gap-3 relative mt-1">
                    <div
                      className="w-[30px] h-[30px] rounded-md shadow cursor-pointer border border-gray-300 absolute left-1"
                      style={{ backgroundColor: changeAppearanceData?.to_color }}
                      onClick={() => setShowColorPicker("to_colour")}
                    ></div>

                    <div className="flex items-center border border-gray-300 w-full pl-12 py-[9px] rounded-md text-sm font-medium bg-[#FAFAFA]">
                      <input
                        type="text"
                        value={changeAppearanceData?.to_color?.replace(/^#/, "")}
                        onChange={(e) => handlebgSelect(`#${e.target.value}`, "to_color")}
                        className="w-full outline-none bg-[#FAFAFA]"
                        onClick={() => setShowColorPicker("to_colour")}
                      />
                    </div>

                    <span
                      className="absolute right-2 cursor-pointer"
                      onClick={() => setShowColorPicker("to_colour")}
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

                  {showColorPicker === "to_colour" && (
                    <ColorPicker
                      handleChange={(color) => handlebgSelect(color, "to_color")}
                      setting={changeAppearanceData?.to_color}
                      handleCloseColor={handleCloseColor}
                    />
                  )}
                </div>
              </div>
            </>
          ) : changeAppearanceData?.selectedBg === "image" ? (
            <>
              <div>
                <div className="relative w-52">
                  <select
                    id="profile_border_style"
                    name="profile_border_style"
                    value={value}
                    onChange={handleChangeTab}
                    className="w-full appearance-none border border-gray-300 rounded-lg shadow-sm bg-[#FAFAFA] text-gray-700 text-base py-[6px] px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                  >
                    <option value={0}>All image style</option>
                    <option value={1}>3D</option>
                    <option value={2}>Abstracts</option>
                    <option value={3}>Boho</option>
                    <option value={4}>Comics</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div onClick={() => handlebgSelect("image")} className="mt-4">
                    <div
                      className={`rounded-lg flex items-center justify-center h-[150px] relative overflow-hidden ${
                        changeAppearanceData?.selectedBg === "image"
                          ? "border-2 border-[#222]"
                          : "border-2 border-transparent"
                      }`}
                    >
                      {!loader && !userData?.data?.customize_theme?.bg_image ? (
                        <label className="inline-flex file-tag-hover relative flex-col items-center justify-center w-full h-full cursor-pointer rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                          <input
                            type="file"
                            name="image"
                            accept="image/jpeg,image/png,image/jpg,image/webp,image/svg"
                            onChange={(e) => handleImage(e.target.files[0])}
                            disabled={loader}
                            className="hidden"
                          />
                          <CloudUpload className="w-10 h-10 text-gray-400" />
                          <span className="text-sm text-center font-medium">
                            Upload Photo or Video
                          </span>
                        </label>
                      ) : loader ? (
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
                        <div className="relative w-full h-full p-1">
                          {["webp", "gif", "jpg", "jpeg", "png"].includes(
                            userData?.data?.customize_theme?.bg_image
                              ?.split(".")
                              .pop()
                              ?.toLowerCase(),
                          ) ? (
                            <img
                              src={
                                userData?.data?.customize_theme?.bg_image
                                  ? userData?.data?.customize_theme?.bg_image
                                  : "/images/bio/background_image.svg"
                              }
                              alt="Uploaded"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <video
                              src={userData?.data?.customize_theme?.bg_image}
                              className="w-full h-full object-cover rounded-lg"
                              autoPlay
                              loop
                              muted
                            />
                          )}
                          <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300 text-blue-500 hover:bg-blue-100 transition-all duration-200"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  {value === 0 && (
                    <>
                      {renderImageList(threedImages)}
                      {renderImageList(AbstractsImages)}
                      {renderImageList(bohoImages)}
                      {renderImageList(comicsImages)}
                    </>
                  )}
                  {value === 1 && renderImageList(threedImages)}
                  {value === 2 && renderImageList(AbstractsImages)}
                  {value === 3 && renderImageList(bohoImages)}
                  {value === 4 && renderImageList(comicsImages)}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Background;
