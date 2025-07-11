"use client";

import API from "@/api";
import ConfirmationPopUp from "@/components/Bio/confirmation-popup/ConfirmationPopUp";
import EditBio from "@/components/Bio/edit-bio/EditBio";
import EditLinkDetailsPopUp from "@/components/Bio/EditPopUp/EditLinkDetailsPopUp";
import EditWidgetPopUp from "@/components/Bio/EditPopUp/EditWidgetPopUp";
import LayoutSetting from "@/components/Bio/LayoutSetting/LayoutSetting";
import ProfileViewTheme from "@/components/Bio/profile-preview/ProfileViewTheme";
import SelectPlatformPopup from "@/components/Bio/SelectPlatformPopup/SelectPlatformPopup";
import SocialShare from "@/components/Bio/SocialShare/SocialShare";
import ThumbnailSetting from "@/components/Bio/ThumbnailSetting/ThumbnailSetting";
import WidgetPopUp from "@/components/Bio/WidgetPopUp/WidgetPopUp";
import ToastNotification from "@/controller/ToastNotification";
import { Transition } from "@/controller/Transitions";
import {
  clearBio,
  clearEditData,
  createBio,
  createWidget,
  deleteAuthorizedApp,
  deleteBio,
  deleteWidget,
  getAllPlateform,
  getBio,
  getSingleAppInfo,
  thirdPartyAuth,
  updateBio,
  updateWidget,
} from "@/redux/slices/authSlice";
import { encryptDevData } from "@/utils/encryptionUtils";
import { socket } from "@/utils/socket";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Skeleton,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { CheckCircleFill, CloudUpload, PlusCircle, Share, Trash, X } from "react-bootstrap-icons";
import ReactDragListView from "react-drag-listview";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { t } from "i18next";

const EditProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userData, bioData, getSingleAppData } = useSelector((state) => state?.authSlice);
  const [copied, setCopied] = useState(false);
  const [socialMedia, setSocialMedia] = useState([]);
  const [shopData, setShopData] = useState([]);
  const [customLink, setCustomLink] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const [deleteType, setDeleteType] = useState("");
  const [addLink, setAddLink] = useState(false);
  const [openWidgetPlaceholder, setOpenWidgetPlaceholder] = useState(false);
  const [appPlaceholderData, setAppPlaceholderData] = useState();
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [selectedWidgetId, setSelectedWidgetId] = useState(null);

  const url = process.env.NEXT_PUBLIC_APP_URL + `/${userData?.data?.username}`;
  const [showModal, setShowModal] = useState(false);
  const [addLinkData, setAddLinkData] = useState({
    _id: "",
  });
  const [bioPopup, setBioPopup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [changeAppearanceData, setChangeAppearanceData] = useState({
    bg_image: "",
    cover_image: "",
    selectedBg: "flat_colour",
    basicColor: "#ffffff",
    buttonColor: "#f3f4f6",
    buttonFontColor: "#374151",
    buttonHoverBg: "#374151",
    buttonHoverFontColor: "#f3f4f6",
    shadowColor: "#1414b5",
    value: "gradient_down",
    selectedButton: "fill-2",
    form_color: "#d8b4fe",
    via_color: "#fbcfe8",
    to_color: "#fef08a",
    button_text_align: "center",
    username_text_color: "#000000",
    username_text_size: 18,
    description_text_color: "#000000",
    description_text_size: 14,
    bio_text_align: "center",
    bio_line_height: 20,
    profile_radius_top: 100,
    profile_radius_bottom: 100,
    profile_radius_left: 100,
    profile_radius_right: 100,
    social_media_show_as_a_button: false,
    remove_button_bg: false,
    background_box_shadow_spread: "#000000",
    profile_border_width: 2,
    profile_border_style: "solid",
    profile_border_color: "#ffffff",
    profile_image_show: true,
    cover_image_show: true,
    container_padding: 0,
    container_image: "https://cdn.trimmo.bio/trimmo_bio/bg-cover-image.webp",
    button_container: false,
    typography_font: "Roboto Slab, serif",
    typography_style: "",
    typography_case: "",
    text_font: "Roboto Slab, serif",
    text_style: "",
    text_case: "",
    selectedButtonSocialMedia: "fill-2",
    socialMediaButtonColor: "#ffffff",
    socialMediaButtonFontColor: "#000000",
    socialMediaButtonHoverBg: "#000000",
    socialMediaButtonHoverFontColor: "#ffffff",
    socialMediaShadowColor: "#000000",
    icon_type: "fill",
    buttonBorderColor: "#000000",
    buttonBorderHoverColor: "#000000",
    button_margin_bottom: 4,
    button_margin_top: 4,
    container_color: "#ffffff",
    socialMediaButtonBorderColor: "#000000",
    socialMediaButtonHoverBorderColor: "#ffffff",
    button_typography_style: "",
    button_typography_case: "",
  });

  const [activeTabPreview, setActiveTabPreview] = useState("Links");
  const yesButtonRef = useRef(null);
  useEffect(() => {
    if (openConfirmDialog) {
      const timer = setTimeout(() => {
        yesButtonRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [openConfirmDialog]);
  const handleTabClickPreview = async (tab) => {
    setActiveTabPreview(tab);
  };

  const [allApps, setAllApps] = useState([]);
  const [widgetSelected, setWidgetSelected] = useState();
  const [widgetShopData, setWidgetShopData] = useState();

  const { allPlateformItems } = useSelector((state) => state?.authSlice);

  const [openAccordion, setOpenAccordion] = useState({ id: null, type: null });

  const handleToggle = (id, type) => {
    setOpenAccordion((prev) =>
      prev.id === id && prev.type === type ? { id: null, type: null } : { id, type },
    );
  };

  const [activeTab, setActiveTab] = useState("layout");
  const [selectedOption, setSelectedOption] = useState();
  const [selectedOptionLayout, setSelectedOptionLayout] = useState();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleOptionChange = (e, elem) => {
    setSelectedOption(Number(e.target.value));
    dispatch(
      updateBio(
        elem,
        { link_setting: Number(e.target.value), type: activeShopTab === "Links" ? "link" : "shop" },
        userData?.data?.username,
      ),
    );
  };

  const handleOptionChangeLayout = (e, elem) => {
    setSelectedOptionLayout(Number(e.target.value));
    dispatch(
      updateBio(
        elem,
        {
          layout_setting: Number(e.target.value),
          type: activeShopTab === "Links" ? "link" : "shop",
        },
        userData?.data?.username,
      ),
    );
  };

  useEffect(() => {
    dispatch(getAllPlateform(["default", "third party", "shop", "open app"]));
    setAllApps(allPlateformItems);
    if (bioData) {
      setChangeAppearanceData(bioData?.customize_theme);
    }
  }, [bioData]);

  // useEffect(() => {
  //   apperanceDataGet();
  // }, []);

  // const apperanceDataGet = async () => {
  //   try {
  //     const apiCall = await API({
  //       url: `/bio/${userData?.data?.username}`,
  //       method: "get",
  //     });
  //     if (apiCall?.data?.data?.username) {
  //       // dispatch({
  //       //   type: UPDATE_APPERANCE,
  //       //   payload: apiCall?.data?.data?.customize_theme,
  //       // });
  //       setChangeAppearanceData(apiCall?.data?.data?.customize_theme);
  //     }
  //   } catch (error) {
  //     dispatch(clearBio());
  //     router.push("/");
  //   }
  // };

  const closeBioPopup = () => {
    setBioPopup(false);
    dispatch(clearEditData());
  };
  useEffect(() => {
    const fetchBio = async () => {
      try {
        const result = await dispatch(getBio(userData.data.username)).unwrap();
      } catch (err) {
        console.error(err, "Error fetching bio");
      }
    };

    if (userData?.data?.username) {
      fetchBio();
    }
  }, [userData]);

  useEffect(() => {
    if (bioData?.social_media) {
      setSocialMedia(bioData?.social_media);
    }
    if (bioData?.shop) {
      setShopData(bioData?.shop);
    }
  }, [bioData]);
  useEffect(() => {
    if (bioData?.social_media) {
      setCustomLink(bioData?.social_media);
    }
  }, [bioData]);

  const handleSwitchChangeCustomLink = (elem) => {
    const updatedCustomLink = customLink?.map((item) =>
      item._id === elem._id ? { ...item, status: !item.status } : item,
    );

    setCustomLink(updatedCustomLink);

    dispatch(
      updateBio(
        elem?._id,
        { status: !elem.status, type: activeShopTab === "Links" ? "link" : "shop" },
        userData?.data?.username,
      ),
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
  };

  const deleteItem = () => {
    const type = activeShopTab === "Links" ? "link" : "shop";
    dispatch(deleteBio(deleteId, userData?.data?.username, type));
    setShowModal(false);
  };
  const closePopUp = () => {
    setDeleteId();
    setShowModal(false);
  };
  const closeWidgetPopUp = () => {
    setShowAddSocialMedia(false);
    setOpenWidgetPlaceholder(false);
  };
  const handleAddAppWidget = (item) => {
    setOpenWidgetPlaceholder(true);
    setAddDefaultApp({});
    setAppPlaceholderData({ ...item, app_name: item?.name?.toLowerCase() });
  };
  const handleSectionClose = () => {
    setOpenWidgetPlaceholder(false);
  };
  const addWidget = async () => {
    const defaultName =
      activeShopTab === "Links"
        ? `widget-${socialMedia.length + 1}`
        : `widget-${shopData.length + 1}`;

    const newWidget = {
      _id: addLinkData?._id || defaultName,
      items: [],
    };

    dispatch(
      createWidget(
        {
          widget_name: newWidget?._id,
          type: activeShopTab === "Links" ? "link" : "shop",
        },
        userData?.data?.username,
      ),
    );
    // dispatch(getBio(userData?.data?.username));
    setAddLinkData({ _id: "" });
    setAddLink(false);
  };
  const createLink = () => {
    const updatedSocialMedia = {
      ...addSocialMedia,
      type: activeShopTab === "Links" ? "link" : activeShopTab === "Shop" ? "shop" : "",
    };

    dispatch(createBio(updatedSocialMedia, userData?.data?.username));

    setAddSocialMedia({});
    setShowAddSocialMedia(false);
  };

  const [cardImage, setCardImage] = useState(null);

  useEffect(() => {
    const getCardIndex = JSON.parse(localStorage.getItem("selectedCard"));
    setCardImage(getCardIndex);
  }, []);

  const handleMobileCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  // const [socialMediaList, setSocialMediaList] = useState(socialMedia);
  // const [customLinkList, setCustomLinkList] = useState(customLink);
  const [filterId, setFilterId] = useState(null);
  const [filterParentId, setFilterParentId] = useState(null);
  // useEffect(() => {
  //   if (Array.isArray(socialMedia)) {
  //     setSocialMediaList(socialMedia);
  //   } else {
  //     console.error("Invalid socialMedia data:", socialMedia);
  //   }
  // }, [socialMedia]);

  // useEffect(() => {
  //   if (Array.isArray(customLink)) {
  //     setCustomLinkList(customLink);
  //   } else {
  //     console.error("Invalid customLink data:", customLink);
  //   }
  // }, [customLink]);

  const handleDragCustomLink = {
    onDragEnd(dragIndex, hoverIndex, parentIndex) {
      // const updatedList = [...socialMedia];
      // const items = updatedList[parentIndex]?.items || [];
      // const reorderedItems = [...items];
      // const [draggedItem] = reorderedItems.splice(dragIndex, 1);
      // reorderedItems.splice(hoverIndex, 0, draggedItem);

      // const updatedItemsWithSortOrder = reorderedItems.map((item, index) => ({
      //   ...item,
      //   sort_order: index,
      // }));

      // const newUpdatedList = updatedList.map((widgetItem, index) => {
      //   if (index === parentIndex) {
      //     return {
      //       ...widgetItem,
      //       items: updatedItemsWithSortOrder,
      //     };
      //   }
      //   return widgetItem;
      // });
      // setSocialMedia(newUpdatedList);
      dispatch(
        updateBio(
          filterId,
          {
            sort_order: hoverIndex,
            type: activeShopTab === "Links" ? "link" : "shop",
          },
          userData?.data?.username,
        ),
      );
    },
    nodeSelector: ".drag-item",
    handleSelector: "div",
    scrollSpeed: 5,
  };
  const handleDragParent = {
    onDragEnd(dragIndex, hoverIndex) {
      // const updatedList = [...socialMedia];
      // const items = updatedList?.items || [];
      // const reorderedItems = [...items];
      // const [draggedItem] = reorderedItems.splice(dragIndex, 1);
      // reorderedItems.splice(hoverIndex, 0, draggedItem);

      // const updatedItemsWithSortOrder = reorderedItems.map((item, index) => ({
      //   ...item,
      //   widget_order: index,
      // }));
      // setSocialMedia(updatedItemsWithSortOrder);
      dispatch(
        updateWidget(
          filterParentId,
          {
            widget_order: hoverIndex,
            type: activeShopTab === "Links" ? "link" : "shop",
          },
          userData?.data?.username,
        ),
      );
    },
    nodeSelector: ".drag-parent-item",
    handleSelector: ".drag-select-item",
  };

  const [showOptions, setShowOptions] = useState({
    show: false,
    widget_name: "",
  });
  const [addSocialMedia, setAddSocialMedia] = useState({});
  const [showAddSocialMedia, setShowAddSocialMedia] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [loaderCustom, setLoaderCustom] = useState(false);
  const [expand, setExpand] = useState(false);
  const [addDefaultApp, setAddDefaultApp] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupClose, setIsPopupClose] = useState(false);
  const [removeAppId, setRemoveAppId] = useState(false);
  const [authApps, setAuthApps] = useState(bioData?.authorize_app);
  const [socketData, setSocketData] = useState(null);
  const inputRef = useRef(null);
  useEffect(() => {
    if (showAddSocialMedia) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100); // slight delay to ensure modal DOM is rendered
    }
  }, [showAddSocialMedia]);

  const handleExpand = (panel, id) => {
    if (expand === panel && showOptions.widget_name === id) {
      setExpand(false);
      setShowOptions({ show: false, widget_name: "" });
    } else {
      setExpand(panel);
      setShowOptions({ show: false, widget_name: id });
    }
  };

  const handleSocialImage = async (file) => {
    setLoaderCustom(true);
    let fileName = file?.name;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "profile");
    try {
      const apiCall = await API({
        url: `/bio/fileupload`,
        method: "post",
        params: { isLogo: true },
        data: formData,
      });
      if (apiCall?.status === 200 || apiCall?.status === 304) {
        setAddSocialMedia({
          ...addSocialMedia,
          logo: apiCall?.data?.data?.url,
        });
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoaderCustom(false);
    }
  };
  const removeImage = async () => {
    try {
      const apiCall = await API({
        url: `/bio/delete_file_s3?file_url=${addSocialMedia?.logo}`,
        method: "delete",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        setAddSocialMedia({ ...addSocialMedia, logo: "" });
      }
    } catch (error) {
      ToastNotification.error(error);
    }
  };

  // const handleDefaultImageUpload = async (files) => {
  //   const appType = appPlaceholderData?.name?.toLowerCase();

  //   // Define allowed file types
  //   const fileTypeMap = {
  //     video: ["video/mp4", "video/avi", "video/mov", "video/mkv"],
  //     music: ["audio/mpeg", "audio/wav", "audio/ogg", "audio/aac"],
  //     separator: ["image/jpeg", "image/png", "image/jpg", "image/webp"],
  //     gallery: [
  //       "image/jpeg", "image/png", "image/jpg", "image/webp", // Image formats
  //       "video/mp4", "video/avi", "video/mov", "video/mkv"  // Video formats
  //     ],
  //   };

  //   const allowedTypes = fileTypeMap[appType] || [];
  //   const fileArray = Array.isArray(files) ? files : Array.from(files); // Ensure it's an array

  //   if (!fileArray.length) {
  //     alert("No files selected!");
  //     return;
  //   }

  //   setLoaderCustom(true);

  //   try {
  //     let uploadedFiles = [];

  //     for (let file of fileArray) {
  //       if (!allowedTypes.includes(file.type)) {
  //         alert(`Invalid file type! Please upload a valid ${appType} file.`);
  //         continue;
  //       }

  //       // Prepare FormData
  //       const formData = new FormData();
  //       formData.append("file", file);
  //       formData.append("folder", "profile");

  //       // API call to upload the file
  //       const apiCall = await API({
  //         url: `/bio/fileupload`,
  //         method: "post",
  //         params: { isLogo: true },
  //         data: formData,
  //       });

  //       if (apiCall?.status === 200 || apiCall?.status === 304) {
  //         uploadedFiles.push(apiCall?.data?.data?.url);
  //       }
  //     }

  //     // Update state based on the uploaded files
  //     setAddDefaultApp((prev) => ({
  //       ...prev,
  //       url: uploadedFiles.length > 1 ? uploadedFiles : uploadedFiles[0],
  //     }));
  //   } catch (error) {
  //     console.log("Upload error", error);
  //   } finally {
  //     setLoaderCustom(false);
  //   }
  // };

  const handleDefaultImageUpload = async (files) => {
    const appType = appPlaceholderData?.name?.toLowerCase();

    const fileTypeMap = {
      video: ["video/mp4", "video/avi", "video/mov", "video/mkv"],
      music: ["audio/mpeg", "audio/wav", "audio/ogg", "audio/aac"],
      separator: ["image/jpeg", "image/png", "image/jpg", "image/webp"],
      gallery: [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp", // Image formats
        "video/mp4",
        "video/avi",
        "video/mov",
        "video/mkv",
        "video/webm", // Video formats
      ],
    };

    const allowedTypes = fileTypeMap[appType] || [];
    const fileArray = Array.isArray(files) ? files : Array.from(files);

    if (!fileArray.length) {
      alert("No files selected!");
      return;
    }

    setLoaderCustom(true);

    try {
      let uploadedFiles = [];

      for (let file of fileArray) {
        if (!allowedTypes.includes(file.type)) {
          alert(`Invalid file type! Please upload a valid ${appType} file.`);
          continue;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", "profile");

        const apiCall = await API({
          url: `/bio/fileupload`,
          method: "post",
          params: { isLogo: true },
          data: formData,
        });

        if (apiCall?.status === 200 || apiCall?.status === 304) {
          uploadedFiles.push(apiCall?.data?.data?.url);
        }
      }

      // 👇 Merge with previous URLs if gallery
      if (appType === "gallery") {
        const prevUrls = addDefaultApp?.url
          ? addDefaultApp.url.split(",").map((url) => url.trim())
          : [];

        const mergedUrls = [...prevUrls, ...uploadedFiles];

        setAddDefaultApp((prev) => ({
          ...prev,
          url: mergedUrls.join(","),
        }));
      } else {
        // For single image/music/video upload
        setAddDefaultApp((prev) => ({
          ...prev,
          url: uploadedFiles[0] || "",
        }));
      }
    } catch (error) {
      console.log("Upload error", error);
    } finally {
      setLoaderCustom(false);
    }
  };

  const removeDefaultImage = async (index) => {
    try {
      if (
        appPlaceholderData?.name?.toLowerCase() === "gallery" &&
        Array.isArray(addDefaultApp?.url)
      ) {
        const fileUrlToRemove = addDefaultApp.url[index];

        const apiCall = await API({
          url: `/bio/delete_file_s3?file_url=${fileUrlToRemove}`,
          method: "delete",
        });

        if (apiCall.status === 200 || apiCall.status === 304) {
          setAddDefaultApp({
            ...addDefaultApp,
            url: addDefaultApp.url.filter((_, i) => i !== index),
          });
        }
      } else {
        const apiCall = await API({
          url: `/bio/delete_file_s3?file_url=${addDefaultApp?.url}`,
          method: "delete",
        });

        if (apiCall.status === 200 || apiCall.status === 304) {
          setAddDefaultApp({ ...addDefaultApp, url: "" });
        }
      }
    } catch (error) {
      ToastNotification.error("Error deleting file: " + error.message);
    }
  };

  const handleWidgetLogoUpload = async (file, elem) => {
    setLoaderCustom(true);
    let fileName = file?.name;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "profile");
    try {
      const apiCall = await API({
        url: `/bio/fileupload`,
        method: "post",
        params: { isLogo: true },
        data: formData,
      });
      if (apiCall?.status === 200 || apiCall?.status === 304) {
        setAddSocialMedia({
          ...addSocialMedia,
          logo: apiCall?.data?.data?.url,
          type: activeShopTab === "Links" ? "link" : "shop",
        });
        dispatch(
          updateBio(
            elem,
            { logo: apiCall?.data?.data?.url, type: activeShopTab === "Links" ? "link" : "shop" },
            userData?.data?.username,
          ),
        );
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoaderCustom(false);
    }
  };
  const removeWidgetImage = async (logoUrl, elem) => {
    try {
      const apiCall = await API({
        url: `/bio/delete_file_s3?file_url=${logoUrl}`,
        method: "delete",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        setAddSocialMedia({ ...addSocialMedia, logo: "" });
        dispatch(
          updateBio(
            elem,
            { logo: "", type: activeShopTab === "Links" ? "link" : "shop" },
            userData?.data?.username,
          ),
        );
      }
    } catch (error) {
      ToastNotification.error(error);
    }
  };
  const closePlatformPopup = () => {
    setShowPlatform(false);
    setShowOptions({ show: false, widget_name: "" });
  };
  const closeSharePopup = () => {
    setShowSharePopup(false);
  };

  const [widgetName, setWidgetName] = useState();
  const [widgetNameShow, setWidgetNameShow] = useState();
  const [widgetId, setWidgetId] = useState();
  const [widgetIndex, setWidgetIndex] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const initialWidgetName = useRef("");
  const [activeShopTab, setActiveShopTab] = useState("Links");
  const foundApp = bioData?.authorize_app?.find((app) => app.name === "Shopeasy");

  useEffect(() => {
    if (activeShopTab === "Links" && socialMedia[widgetIndex]) {
      setWidgetName(socialMedia[widgetIndex]._id);
    } else if (activeShopTab === "Shop" && shopData[widgetIndex]) {
      setWidgetName(shopData[widgetIndex]._id);
    }
  }, [activeShopTab, widgetIndex, socialMedia, shopData]);

  useEffect(() => {
    if (activeShopTab === "Links" && socialMedia[widgetIndex]) {
      setWidgetNameShow(socialMedia[widgetIndex].display_widget_name);
    } else if (activeShopTab === "Shop" && shopData[widgetIndex]) {
      setWidgetNameShow(shopData[widgetIndex].display_widget_name);
    }
  }, [activeShopTab, widgetIndex, socialMedia, shopData]);

  const handleWidgetNameChange = (e, id, parentIndex) => {
    const newWidgetName = e.target.value;

    if (activeShopTab === "Links") {
      setSocialMedia((prevElements) =>
        prevElements.map((elem, ind) =>
          ind === parentIndex ? { ...elem, _id: newWidgetName } : elem,
        ),
      );
    } else if (activeShopTab === "Shop") {
      setShopData((prevElements) =>
        prevElements.map((elem, ind) =>
          ind === parentIndex ? { ...elem, _id: newWidgetName } : elem,
        ),
      );
    }

    setWidgetName(newWidgetName);
  };
  const handleWidgetNameShowChange = (e, id, parentIndex) => {
    const newWidgetName = e.target.checked;

    if (activeShopTab === "Links") {
      setSocialMedia((prevElements) =>
        prevElements.map((elem, ind) =>
          ind === parentIndex ? { ...elem, display_widget_name: newWidgetName } : elem,
        ),
      );
    } else if (activeShopTab === "Shop") {
      setShopData((prevElements) =>
        prevElements.map((elem, ind) =>
          ind === parentIndex ? { ...elem, display_widget_name: newWidgetName } : elem,
        ),
      );
    }

    setWidgetNameShow(newWidgetName);
  };

  const handleCustomWidgetName = (id) => {
    dispatch(
      updateWidget(
        widgetId,
        {
          widget_name: widgetName,
          type: activeShopTab === "Links" ? "link" : "shop",
          display_widget_name: widgetNameShow,
        },
        userData?.data?.username,
      ),
    );
    setWidgetId(null);
    setIsEditable(null);
  };

  const handleWidgetNamePopUpClose = () => {
    setIsEditable(null);
  };

  const handleDetailsPopUpClose = () => {
    seIsEditDetail(null);
  };

  const handleAppAuthorize = (ref_id) => {
    dispatch(getSingleAppInfo(ref_id));
    setIsPopupOpen(true);
  };

  const handleCloseDialog = () => {
    setIsPopupOpen(false);
  };

  const handleRemoveDialog = (id) => {
    setRemoveAppId(id);
    setIsPopupClose(true);
  };

  useEffect(() => {
    socket.connect();

    const handleConnect = () => {
      socket.emit("registerUser", userData?.data?._id?.toString());
    };

    const handleDisconnect = () => {
      console.log("Socket disconnected");
    };

    const handleAuthorize = (data) => {
      const updateData = authApps?.find((x) => x?._id?.toString() === data?.app_id);
      setSocketData(data);
      if (data.success) {
        setAuthApps([...authApps, { _id: data?.app_id }]);
      } else {
        const updateData = authApps?.filter((x) => x?._id?.toString() !== data?.app_id);
        setAuthApps(updateData);
      }
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("authorize", handleAuthorize);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("authorize", handleAuthorize);
      socket.disconnect();
    };
  }, [userData?.data?._id, authApps]);

  const deleteAuthItem = async (id) => {
    try {
      const apiData = await dispatch(deleteAuthorizedApp(id ? id : removeAppId, bioData?.username));
      if (apiData?.code === 200) {
        // dispatch(getAllPlateform(["third party", "shop", "open app"]));
        setIsPopupClose(false);
        setRemoveAppId(null);
      }
    } catch (error) {
      console.error("Error in handleInstallNow:", error);
    }
  };

  const handleInstallNow = async (item) => {
    try {
      if (!item?._id) {
        console.error("Invalid item ID");
        return;
      }
      let authCode = encryptDevData({ app: item?._id, code: "public" });
      const apiData = await dispatch(thirdPartyAuth(authCode, bioData?.username));
      if (apiData?.code === 200) {
        setIsPopupOpen(false);
      } else {
      }
    } catch (error) {
      console.error("Error in handleInstallNow:", error);
    }
  };

  const handleRedirectUrl = (url, id) => {
    if (typeof window !== "undefined") {
      const newUrl = `${url}&app=${id}`;
      const popupFeatures = "width=600,height=600,top=100,left=100,scrollbars=yes,resizable=yes";
      // window.open(newUrl, "_blank");
      window.open(newUrl, "popupWindow", popupFeatures);
    }
  };

  const handleCloseRemoveDialog = () => {
    setIsPopupClose(false);
    setRemoveAppId(null);
  };

  const handleSvgClick = (e, id, parentIndex) => {
    e.stopPropagation();
    setWidgetId(id);
    setIsEditable(true);
    setWidgetIndex(parentIndex);
  };

  const [isEditDetail, seIsEditDetail] = useState(false);
  const [widgetData, setWidgetData] = useState();
  const [inputValues, setInputValues] = useState({
    name: widgetData?.name || "",
    description: widgetData?.description || "",
    url: widgetData?.url || "",
  });

  const handleInputChange = (e, field) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleUpdateClick = (elem) => {
    // const updatedCustomLink = customLink?.map((item) =>
    //   item._id === elem._id
    //     ? {
    //         ...item,
    //         name: inputValues?.name,
    //         description: inputValues?.description,
    //         url: inputValues?.url,
    //         type: activeShopTab === "Links" ? "link" : "shop",
    //         ...addDefaultApp,
    //       }
    //     : item,
    // );

    // if (!customLink.some((item) => item._id === elem._id)) {
    //   updatedCustomLink.push({
    //     ...elem,
    //     name: inputValues?.name,
    //     description: inputValues?.description,
    //     url: inputValues?.url,
    //     type: activeShopTab === "Links" ? "link" : "shop",
    //     ...addDefaultApp,
    //   });
    // }

    // setCustomLink(updatedCustomLink);

    if (
      ((inputValues?.name !== elem?.name ||
        inputValues?.description !== elem?.description ||
        inputValues?.url !== elem?.url) &&
        inputValues?.name?.length > 0) ||
      addDefaultApp
    ) {
      dispatch(
        updateBio(
          elem?._id,
          {
            name: inputValues?.name,
            description: inputValues?.description,
            url: inputValues?.url,
            type: activeShopTab === "Links" ? "link" : "shop",
            ...addDefaultApp,
          },
          userData?.data?.username,
        ),
      );
    }
    seIsEditDetail(null);
  };

  const handleWidgetData = (e, item) => {
    e.stopPropagation();
    setWidgetData(item);
    seIsEditDetail(true);
    setInputValues({
      name: item?.name || "",
      description: item?.description || "",
      url: item?.url || "",
    });
    setAddDefaultApp(widgetData?.content && JSON.parse(widgetData?.content));
  };

  const handleDeleteWidget = (widget_id) => {
    dispatch(deleteWidget(widget_id, userData?.data?.username));
  };

  const handleTabClick = async (tab) => {
    setActiveShopTab(tab);
  };

  const handleBuyNowClick = (product_slug_name) => {
    if (typeof window !== "undefined") {
      window.open(`${foundApp?.value}/product/${product_slug_name}`);
    }
  };

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

  return (
    <>
      <div
        className="relative flex-grow p-3.5 lg:p-5 overflow-y-auto h-screen"
        style={{
          scrollbarWidth: "thin",
        }}
      >
        <div className="w-[100%] lg:w-[80%] profile-detail flex flex-col py-10 mx-auto justify-center">
          {/* <div className="flex flex-wrap justify-between w-full items-center  gap-4">
            <div className="flex items-center gap-4 w-full text-center">
              {(userData?.data?.select_profile === "avatar_profile" &&
                userData?.data?.avatar_profile) ||
              (userData?.data?.select_profile === "profile" && userData?.data?.profile_picture) ? (
                <div className="relative w-[65px] h-[65px] bg-[#ffffff] flex items-center justify-center rounded-full text-[30px]">
                  {profileSrc?.trim().toLowerCase().endsWith(".webm") ? (
                    <video
                      src={profileSrc}
                      className="h-full w-full object-cover rounded-full"
                      // controls
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    <img src={profileSrc} alt="Avatar" className="rounded-full h-full w-full" />
                  )}
                  <Tooltip title="Edit">
                    <div
                      className="bg-white w-7 h-7 rounded-full flex items-center justify-center absolute -bottom-2 right-0 cursor-pointer hover:bg-black group"
                      onClick={() => {
                        setBioPopup(true);
                        setAnchorEl(null);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pen group-hover:fill-white fill-black"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                      </svg>
                    </div>
                  </Tooltip>
                </div>
              ) : (
                <div className="relative w-[64px] h-[64px] bg-[#26D367] capitalize flex items-center justify-center rounded-full text-white text-[30px]">
                  {userData?.data?.username?.charAt(0)}
                  <Tooltip title="Edit">
                    <div
                      className="bg-white w-7 h-7 rounded-full flex items-center justify-center absolute -bottom-2 right-0 cursor-pointer hover:bg-black group"
                      onClick={() => {
                        setBioPopup(true);
                        setAnchorEl(null);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pen group-hover:fill-white fill-black"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                      </svg>
                    </div>
                  </Tooltip>
                </div>
              )}
              <div className="details">
                <span
                  className="flex text-lg font-medium text-black text-start cursor-pointer hover:underline"
                  onClick={() => {
                    setBioPopup(true);
                    setAnchorEl(null);
                  }}
                >
                  {userData?.data?.name}&nbsp;
                  {userData?.data?.blue_tick === true ? (
                    <img src="./images/verified-account.svg" />
                  ) : (
                    ""
                  )}
                </span>
                <span
                  className="text-sm text-[#666] text-start block cursor-pointer hover:underline"
                  onClick={() => {
                    setBioPopup(true);
                    setAnchorEl(null);
                  }}
                >
                  {bioData?.bio}
                </span>
              </div>
            </div>
          </div> */}
          {foundApp?.name === "Shopeasy" && (
            <>
              <div className="flex bg-gray-500 rounded-full p-1 justify-between mt-4">
                <button
                  className={`px-6 w-full py-2 rounded-full font-bold transition-all duration-300 ${
                    activeShopTab === "Links" ? "bg-white text-black shadow" : "text-white"
                  }`}
                  onClick={() => handleTabClick("Links")}
                >
                  {t("lang_links")}
                </button>

                <button
                  className={`px-6 w-full py-2 rounded-full font-bold transition-all duration-300 ${
                    activeShopTab === "Shop" ? "bg-white text-black shadow" : "text-white"
                  }`}
                  onClick={() => handleTabClick("Shop")}
                >
                  {t("lang_shop")}
                </button>
              </div>
            </>
          )}
          <div className="flex justify-between space-x-2 items-center">
            <button
              type="button"
              onClick={() => setAddLink(true)}
              className="btn-green my-4 w-[60px] hover:bg-[#ebff57] hover:text-[#000] hover:border-[#ebff57]"
            >
              + {t("lang_add_collection")}
            </button>
          </div>
          {addLink && (
            <div className="w-full bg-white rounded-[20px] p-5 mt-4 duration-300 transition-transform">
              <div className="flex items-center border-b pb-2.5 justify-between mb-2">
                <p className="font-medium capitalize">{t("lang_add_widget")}</p>
                <X
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => {
                    setAddLinkData({ _id: "" });
                    setAddLink(false);
                  }}
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="w-full flex items-center">
                  <div className="w-full">
                    <div className="flex items-center pt-1">
                      <input
                        type="text"
                        autoFocus
                        className="w-full font-normal text-gray-800 placeholder:text-gray-400 outline-none peer"
                        placeholder="Add name here.."
                        value={addLinkData?._id}
                        onChange={(e) =>
                          setAddLinkData({
                            ...addLinkData,
                            _id: e.target.value,
                          })
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            addWidget();
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className={`${
                      !addLinkData?._id && activeShopTab !== "Links" && activeShopTab !== "Shop"
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } text-white transition-all duration-300`}
                    onClick={addWidget}
                  >
                    <Tooltip title={`${t("lang_add_link")}`}>
                      <PlusCircle className="w-5 h-5" />
                    </Tooltip>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeShopTab === "Links" && (
            <>
              {socialMedia?.length > 0 && (
                <ReactDragListView {...handleDragParent}>
                  {socialMedia
                    ?.filter((item) => !(item instanceof Error))
                    ?.sort((a, b) => a.widget_order - b.widget_order)
                    .map((elem, parentIndex) => {
                      const isOpen = showOptions.widget_name === elem?._id && expand === "panel1";
                      return (
                        <div
                          className="mt-5 drag-parent-item"
                          onDragStart={() => setFilterParentId(elem?.widget_id)}
                          key={parentIndex}
                        >
                          <div className="border rounded-lg overflow-hidden bg-white">
                            <button
                              onClick={() => handleExpand("panel1", elem?._id)}
                              className="drag-select-item w-full flex items-center justify-between p-4 bg-white transition-all border-b"
                            >
                              <h3 className="flex items-center gap-3">
                                {elem?._id}
                                {elem?._id !== "social media" && (
                                  <>
                                    <div
                                      className="ml-2 cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleSvgClick(e, elem.widget_id, parentIndex);
                                      }}
                                    >
                                      <Tooltip title="Edit">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-pencil"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zM12.793 5.5 10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zM4.025 10.675l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                        </svg>
                                      </Tooltip>
                                    </div>
                                    {!elem?.items?.length && (
                                      <div
                                        className="ml-2 cursor-pointer"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setSelectedWidgetId(elem.widget_id);
                                          setOpenConfirmDialog(true);
                                        }}
                                      >
                                        <Tooltip title="Remove">
                                          <Trash className="w-[18px] h-[18px] fill-red-600 cursor-pointer" />
                                        </Tooltip>
                                      </div>
                                    )}
                                  </>
                                )}
                              </h3>
                              <svg
                                className={`transform transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : "rotate-0"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="#000"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                              </svg>
                            </button>

                            {isOpen && (
                              <AccordionDetails>
                                {elem?._id === "social media" ? (
                                  <div className="w-full bg-[#F4F4EF] rounded-xl p-4 duration-300 transition-transform mt-4">
                                    <div className="flex items-center justify-between mb-2">
                                      <p className="font-medium">
                                        {t("lang_add")} {elem?._id}
                                      </p>
                                      {/* <div className="flex items-center justify-between gap-2">
                                       <X
                                         className="w-5 h-5 cursor-pointer"
                                         onClick={() => {
                                           setShowOptions(false);
                                         }}
                                       />
                                     </div> */}
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-between gap-2">
                                      <button
                                        type="button"
                                        className="p-2 text-sm mt-2 hover:bg-[#ebff57] hover:text-[#000] hover:border-[#ebff57] bg-[#26D367] border rounded-full w-full text-white"
                                        onClick={() => setShowPlatform(true)}
                                      >
                                        + {t("lang_add_link_from_existing_platform")}
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="w-full bg-[#F4F4EF] rounded-xl p-4 duration-300 transition-transform mt-4">
                                    <div className="flex items-center justify-between mb-2">
                                      <p className="font-medium">
                                        {t("lang_add")} {elem?._id}
                                      </p>
                                      {/* <div className="flex items-center justify-between gap-2">
                                       <X
                                         className="w-5 h-5 cursor-pointer"
                                         onClick={() => {
                                           setShowOptions(false);
                                         }}
                                       />
                                     </div> */}
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-between gap-2">
                                      <button
                                        type="button"
                                        className="p-2 text-sm mt-2 hover:bg-[#ebff57] hover:text-[#000] hover:border-[#ebff57] bg-[#26D367] border rounded-full w-full text-white"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (elem?._id === "social media") {
                                            setShowOptions({
                                              show: true,
                                              widget_name: elem?._id,
                                            });
                                            setExpand("panel1");
                                          } else {
                                            setExpand("panel1");
                                            setShowAddSocialMedia(true);
                                            setAddSocialMedia({
                                              logo: "",
                                              name: "",
                                              url: "",
                                              description: "",
                                              widget_id: elem?.widget_id,
                                              type: activeShopTab === "Links" ? "link" : "shop",
                                            });
                                            dispatch(
                                              getAllPlateform(
                                                (["categories", "products"].includes(
                                                  elem?.widget_type,
                                                ) && ["shop"]) ||
                                                  (elem?.widget_type &&
                                                    ["categories", "products"].includes(
                                                      elem?.widget_type,
                                                    ) && ["default", "third party", "open app"]) ||
                                                  (!elem?.widget_type &&
                                                    elem?.items?.length && [
                                                      "default",
                                                      "third party",
                                                      "open app",
                                                    ]) || [
                                                    "default",
                                                    "third party",
                                                    "open app",
                                                    "shop",
                                                  ],
                                              ),
                                            );
                                            setAllApps(allPlateformItems);
                                            setWidgetSelected(elem?.widget_id);
                                            setWidgetShopData({
                                              display_type: elem?.display_type,
                                              widget_type: elem?.widget_type,
                                            });
                                          }
                                        }}
                                      >
                                        + {t("lang_add_link_from_existing_platform")}
                                      </button>
                                    </div>
                                  </div>
                                )}
                                <ReactDragListView
                                  {...{
                                    ...handleDragCustomLink,
                                    onDragEnd: (dragIndex, hoverIndex) =>
                                      handleDragCustomLink.onDragEnd(
                                        dragIndex,
                                        hoverIndex,
                                        parentIndex,
                                      ),
                                  }}
                                >
                                  <div className="space-y-4">
                                    {elem?.items
                                      ?.filter((item) => !(item instanceof Error))
                                      ?.sort((a, b) => a.sort_order - b.sort_order)
                                      ?.map((item, index) => {
                                        if (!item || !item._id) return null;

                                        return (
                                          <>
                                            {item?.name && (
                                              <div
                                                key={index}
                                                onDragStart={() => setFilterId(item._id)}
                                                className="w-full bg-white rounded-lg border border-gray-200 px-4 py-2 flex hover:border-gray-400 cursor-pointer justify-between mt-4 drag-item duration-150 flex-col"
                                              >
                                                <div className="flex flex-row w-full">
                                                  <div className="w-full flex items-center text-ellipsis overflow-hidden whitespace-nowrap gap-3">
                                                    {item?.link_type !== "products" &&
                                                      item?.link_type !== "categories" &&
                                                      item?.preview_layout !== "none" && (
                                                        <Tooltip title="Thumbnail">
                                                          <div className="w-10 h-10 flex items-center justify-center relative">
                                                            {!loaderCustom && !item?.logo ? (
                                                              <label className="w-10 h-10 bg-[#E5E5E5] flex flex-col items-center justify-center rounded-xl cursor-pointer transition duration-300 ease-in-out">
                                                                <input
                                                                  id="dropzone-file"
                                                                  type="file"
                                                                  name="image"
                                                                  accept="image/jpeg, image/png, image/jpg, image/webp, image/svg"
                                                                  onChange={(e) =>
                                                                    handleWidgetLogoUpload(
                                                                      e.target.files[0],
                                                                      item?._id,
                                                                    )
                                                                  }
                                                                  disabled={loaderCustom}
                                                                  className="hidden peer"
                                                                />
                                                                <CloudUpload className="w-4 h-4 text-gray-500 hover:text-blue-500 transition duration-300" />
                                                              </label>
                                                            ) : loaderCustom ? (
                                                              <Skeleton
                                                                className="rounded-xl"
                                                                variant="rectangular"
                                                              />
                                                            ) : (
                                                              <div className="relative group">
                                                                <img
                                                                  src={
                                                                    elem?._id === "social media"
                                                                      ? item?.thumbnail
                                                                      : item?.logo
                                                                  }
                                                                  className="w-10 h-10 rounded-xl shadow-md border border-gray-200 object-cover transition-transform duration-300 group-hover:scale-105"
                                                                  alt="logo"
                                                                />
                                                                {elem?._id !== "social media" && (
                                                                  <Tooltip title="remove">
                                                                    <button
                                                                      type="button"
                                                                      onClick={() =>
                                                                        removeWidgetImage(
                                                                          item?.logo,
                                                                          item?._id,
                                                                        )
                                                                      }
                                                                      className="absolute top-0 right-0 text-black bg-white rounded-full shadow-md hover:bg-red-600 hover:text-white transition duration-300 flex items-center justify-center w-4 h-4"
                                                                    >
                                                                      <X className="w-6 h-6" />
                                                                    </button>
                                                                  </Tooltip>
                                                                )}
                                                              </div>
                                                            )}
                                                          </div>
                                                        </Tooltip>
                                                      )}
                                                    <div className="w-full">
                                                      <div className="flex items-center">
                                                        <div>{item?.name}</div>
                                                      </div>
                                                      <div className="flex items-center">
                                                        <Tooltip title={item?.url}>
                                                          <div className="w-full text-xs text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap">
                                                            {item?.url}
                                                          </div>
                                                        </Tooltip>
                                                      </div>
                                                      <div
                                                        className="flex items-center"
                                                        style={{
                                                          display:
                                                            elem?._id === "social media" && "none",
                                                        }}
                                                      >
                                                        <div className="w-full text-xs text-gray-400">
                                                          {item?.description}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex items-center space-x-4">
                                                    {item?.link_type !== "products" &&
                                                      item?.link_type !== "categories" && (
                                                        <div
                                                          className="space-x-2 mr-2 cursor-pointer"
                                                          onClick={(e) => handleWidgetData(e, item)}
                                                        >
                                                          <Tooltip title="Edit">
                                                            <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="16"
                                                              height="16"
                                                              fill="currentColor"
                                                              class="bi bi-pencil"
                                                              viewBox="0 0 16 16"
                                                            >
                                                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                                            </svg>
                                                          </Tooltip>
                                                        </div>
                                                      )}
                                                    {elem?._id !== "social media" &&
                                                      item?.link_type !== "products" &&
                                                      item?.link_type !== "categories" &&
                                                      item?.preview_layout !== "none" && (
                                                        <div className="mt-2 flex space-x-8">
                                                          <Tooltip title="Layout Setting">
                                                            <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="20"
                                                              height="20"
                                                              fill="currentColor"
                                                              className={`bi bi-wind cursor-pointer ${
                                                                openAccordion?.type ===
                                                                  "layout_setting" &&
                                                                openAccordion?.id === item._id
                                                                  ? "text-blue-500"
                                                                  : ""
                                                              }`}
                                                              viewBox="0 0 16 16"
                                                              onClick={() =>
                                                                handleToggle(
                                                                  item._id,
                                                                  "layout_setting",
                                                                )
                                                              }
                                                            >
                                                              <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                                                            </svg>
                                                          </Tooltip>
                                                        </div>
                                                      )}
                                                    <label class="inline-flex items-center cursor-pointer">
                                                      <input
                                                        type="checkbox"
                                                        value=""
                                                        class="sr-only peer"
                                                        checked={item.status}
                                                        onChange={() =>
                                                          handleSwitchChangeCustomLink(item)
                                                        }
                                                      />
                                                      <div class="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-black dark:peer-checked:bg-black"></div>
                                                    </label>
                                                    <button
                                                      type="button"
                                                      className="transition-all duration-300"
                                                      onClick={() => {
                                                        setDeleteId(item?._id);
                                                        setDeleteType(
                                                          activeShopTab === "Links"
                                                            ? "link"
                                                            : "shop",
                                                        );
                                                        setShowModal(true);
                                                      }}
                                                    >
                                                      <Tooltip title="Remove">
                                                        <Trash className="w-[18px] h-[18px] fill-red-600 cursor-pointer" />
                                                      </Tooltip>
                                                    </button>
                                                  </div>
                                                </div>

                                                <div>
                                                  {openAccordion.id === item._id &&
                                                    openAccordion.type === "layout_setting" && (
                                                      <LayoutSetting
                                                        activeTab={activeTab}
                                                        handleTabChange={handleTabChange}
                                                        selectedOption={selectedOption}
                                                        selectedOptionLayout={selectedOptionLayout}
                                                        handleOptionChange={handleOptionChange}
                                                        handleOptionChangeLayout={
                                                          handleOptionChangeLayout
                                                        }
                                                        elem={item._id}
                                                        item={item}
                                                      />
                                                    )}

                                                  {openAccordion.id === item._id &&
                                                    openAccordion.type === "image_upload" && (
                                                      <ThumbnailSetting
                                                        elem={item._id}
                                                        item={item}
                                                        loaderCustom={loaderCustom}
                                                        removeWidgetImage={removeWidgetImage}
                                                        handleWidgetLogoUpload={
                                                          handleWidgetLogoUpload
                                                        }
                                                      />
                                                    )}
                                                </div>
                                                {item?.re_auth_app === true && (
                                                  <div
                                                    onClick={() => handleAppAuthorize(item?.ref_id)}
                                                  >
                                                    {t("lang_this_app_is_not_authorize_click_here")}
                                                  </div>
                                                )}
                                              </div>
                                            )}
                                          </>
                                        );
                                      })}
                                  </div>
                                </ReactDragListView>
                              </AccordionDetails>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </ReactDragListView>
              )}
            </>
          )}

          {activeShopTab === "Shop" && (
            <>
              {shopData?.length > 0 && (
                <ReactDragListView {...handleDragParent}>
                  {shopData
                    ?.filter((item) => !(item instanceof Error))
                    ?.sort((a, b) => a.widget_order - b.widget_order)
                    .map((elem, parentIndex) => {
                      const isOpen = showOptions.widget_name === elem?._id && expand === "panel1";
                      return (
                        <div
                          className="mt-5 drag-parent-item"
                          onDragStart={() => setFilterParentId(elem?.widget_id)}
                          key={parentIndex}
                        >
                          <div className="border rounded-lg overflow-hidden bg-white">
                            <button
                              onClick={() => handleExpand("panel1", elem?._id)}
                              className="drag-select-item w-full flex items-center justify-between p-4 bg-white transition-all border-b"
                            >
                              <h3 className="flex items-center gap-3">
                                {elem?._id}
                                <>
                                  <div
                                    className="ml-2 cursor-pointer"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSvgClick(e, elem.widget_id, parentIndex);
                                    }}
                                  >
                                    <Tooltip title="Edit">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-pencil"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zM12.793 5.5 10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zM4.025 10.675l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                      </svg>
                                    </Tooltip>
                                  </div>
                                  {!elem?.items?.length && (
                                    <div
                                      className="space-x-2 mr-2 cursor-pointer"
                                      onClick={() => {
                                        setSelectedWidgetId(elem.widget_id);
                                        setOpenConfirmDialog(true);
                                      }}
                                    >
                                      <Tooltip title="Remove">
                                        <Trash className="w-[18px] h-[18px] fill-red-600 cursor-pointer" />
                                      </Tooltip>
                                    </div>
                                  )}
                                </>
                              </h3>
                              <svg
                                className={`transform transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : "rotate-0"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="#000"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                              </svg>
                            </button>
                            {isOpen && (
                              <AccordionDetails>
                                {elem?._id === "social media" ? (
                                  <div className="w-full bg-[#F4F4EF] rounded-xl p-4 duration-300 transition-transform mt-2">
                                    <div className="flex items-center justify-between mb-2">
                                      <p className="font-medium">
                                        {t("lang_add")} {elem?._id}
                                      </p>
                                      {/* <div className="flex items-center justify-between gap-2">
                                      <X
                                        className="w-5 h-5 cursor-pointer"
                                        onClick={() => {
                                          setShowOptions(false);
                                        }}
                                      />
                                    </div> */}
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-between gap-2">
                                      <button
                                        type="button"
                                        className="p-2 text-sm mt-2 hover:bg-[#ebff57] hover:text-[#000] hover:border-[#ebff57] bg-[#26D367] border rounded-full w-full text-white"
                                        onClick={() => setShowPlatform(true)}
                                      >
                                        + {t("lang_add_link_from_existing_platform")}
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="w-full bg-[#F4F4EF] rounded-xl p-4 mt-4 duration-300 transition-transform">
                                    <div className="flex items-center justify-between mb-2">
                                      <p className="font-medium">
                                        {t("lang_add")} {elem?._id}
                                      </p>
                                      {/* <div className="flex items-center justify-between gap-2">
                                      <X
                                        className="w-5 h-5 cursor-pointer"
                                        onClick={() => {
                                          setShowOptions(false);
                                        }}
                                      />
                                    </div> */}
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-between gap-2">
                                      <button
                                        type="button"
                                        className="p-2 text-sm mt-2 hover:bg-[#ebff57] hover:text-[#000] hover:border-[#ebff57] bg-[#26D367] border rounded-full w-full text-white"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (elem?._id === "social media") {
                                            setShowOptions({
                                              show: true,
                                              widget_name: elem?._id,
                                            });
                                            setExpand("panel1");
                                          } else {
                                            setExpand("panel1");
                                            setShowAddSocialMedia(true);
                                            setAddSocialMedia({
                                              logo: "",
                                              name: "",
                                              url: "",
                                              description: "",
                                              widget_id: elem?.widget_id,
                                              type: activeShopTab === "Links" ? "link" : "shop",
                                            });
                                            dispatch(
                                              getAllPlateform(
                                                (["categories", "products"].includes(
                                                  elem?.widget_type,
                                                ) && ["shop"]) ||
                                                  (elem?.widget_type &&
                                                    ["categories", "products"].includes(
                                                      elem?.widget_type,
                                                    ) && ["default", "third party", "open app"]) ||
                                                  (!elem?.widget_type &&
                                                    elem?.items?.length && [
                                                      "default",
                                                      "third party",
                                                      "open app",
                                                    ]) || [
                                                    "default",
                                                    "third party",
                                                    "open app",
                                                    "shop",
                                                  ],
                                              ),
                                            );
                                            setAllApps(allPlateformItems);
                                            setWidgetSelected(elem?.widget_id);
                                            setWidgetShopData({
                                              display_type: elem?.display_type,
                                              widget_type: elem?.widget_type,
                                            });
                                          }
                                        }}
                                      >
                                        + {t("lang_add_link_from_existing_platform")}
                                      </button>
                                    </div>
                                  </div>
                                )}
                                <ReactDragListView
                                  {...{
                                    ...handleDragCustomLink,
                                    onDragEnd: (dragIndex, hoverIndex) =>
                                      handleDragCustomLink.onDragEnd(
                                        dragIndex,
                                        hoverIndex,
                                        parentIndex,
                                      ),
                                  }}
                                >
                                  <div className="space-y-4">
                                    {elem?.items
                                      ?.filter((item) => !(item instanceof Error))
                                      ?.sort((a, b) => a.sort_order - b.sort_order)
                                      ?.map((item, index) => {
                                        if (!item || !item._id) return null;

                                        return (
                                          <div
                                            key={index}
                                            onDragStart={() => setFilterId(item._id)}
                                            className="w-full bg-white rounded-lg border border-gray-200 px-4 py-2 flex hover:border-gray-400 cursor-pointer justify-between mt-4 drag-item duration-150 flex-col"
                                          >
                                            <div className="flex flex-row w-full">
                                              <div className="w-full flex items-center text-ellipsis overflow-hidden whitespace-nowrap gap-3">
                                                {elem?._id !== "social media" &&
                                                  item?.link_type !== "products" &&
                                                  item?.link_type !== "categories" &&
                                                  item?.preview_layout !== "none" && (
                                                    <div className="w-10 h-10 bg-[#E5E5E5] flex justify-center items-center rounded-md">
                                                      <Tooltip title="Thumbnail">
                                                        <div className="w-10 h-10 flex items-center justify-center relative">
                                                          {!loaderCustom && !item?.logo ? (
                                                            <label className="w-10 h-10 bg-[#E5E5E5] flex flex-col items-center justify-center rounded-xl cursor-pointer transition duration-300 ease-in-out">
                                                              <input
                                                                id="dropzone-file"
                                                                type="file"
                                                                name="image"
                                                                accept="image/jpeg, image/png, image/jpg, image/webp, image/svg"
                                                                onChange={(e) =>
                                                                  handleWidgetLogoUpload(
                                                                    e.target.files[0],
                                                                    item?._id,
                                                                  )
                                                                }
                                                                disabled={loaderCustom}
                                                                className="hidden peer"
                                                              />
                                                              <CloudUpload className="w-4 h-4 text-gray-500 hover:text-blue-500 transition duration-300" />
                                                            </label>
                                                          ) : loaderCustom ? (
                                                            <Skeleton
                                                              className="rounded-xl"
                                                              variant="rectangular"
                                                            />
                                                          ) : (
                                                            <div className="relative group">
                                                              <img
                                                                src={item?.logo}
                                                                className="w-10 h-10 rounded-xl shadow-md border border-gray-200 object-cover transition-transform duration-300 group-hover:scale-105"
                                                                alt="logo"
                                                              />
                                                              <Tooltip title="remove">
                                                                <button
                                                                  type="button"
                                                                  onClick={() =>
                                                                    removeWidgetImage(
                                                                      item?.logo,
                                                                      item?._id,
                                                                    )
                                                                  }
                                                                  className="absolute top-0 right-0 text-black bg-white rounded-full shadow-md hover:bg-red-600 hover:text-white transition duration-300 flex items-center justify-center w-4 h-4"
                                                                >
                                                                  <X className="w-6 h-6" />
                                                                </button>
                                                              </Tooltip>
                                                            </div>
                                                          )}
                                                        </div>
                                                      </Tooltip>
                                                    </div>
                                                  )}
                                                <div className="w-full">
                                                  <div className="flex items-center">
                                                    <div>{item?.name}</div>
                                                  </div>
                                                  <div className="flex items-center">
                                                    <Tooltip title={item?.url}>
                                                      <div className="w-full text-xs text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap">
                                                        {item?.url}
                                                      </div>
                                                    </Tooltip>
                                                  </div>
                                                  <div
                                                    className="flex items-center"
                                                    style={{
                                                      display:
                                                        elem?._id === "social media" && "none",
                                                    }}
                                                  >
                                                    <div className="w-full text-xs text-gray-400">
                                                      {item?.description}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex items-center space-x-4">
                                                {elem?._id !== "social media" &&
                                                  item?.link_type !== "products" &&
                                                  item?.link_type !== "categories" && (
                                                    <div
                                                      className="space-x-2 mr-2 cursor-pointer"
                                                      onClick={(e) => handleWidgetData(e, item)}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-pencil"
                                                        viewBox="0 0 16 16"
                                                      >
                                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                                      </svg>
                                                    </div>
                                                  )}
                                                {elem?._id !== "social media" &&
                                                  item?.link_type !== "products" &&
                                                  item?.link_type !== "categories" && (
                                                    <div className="mt-2 flex space-x-8">
                                                      <Tooltip title="Layout Setting">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="20"
                                                          height="20"
                                                          fill="currentColor"
                                                          className={`bi bi-wind cursor-pointer ${
                                                            openAccordion?.type ===
                                                              "layout_setting" &&
                                                            openAccordion?.id === item._id
                                                              ? "text-blue-500"
                                                              : ""
                                                          }`}
                                                          viewBox="0 0 16 16"
                                                          onClick={() =>
                                                            handleToggle(item._id, "layout_setting")
                                                          }
                                                        >
                                                          <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                                                        </svg>
                                                      </Tooltip>
                                                    </div>
                                                  )}
                                                <label class="inline-flex items-center cursor-pointer">
                                                  <input
                                                    type="checkbox"
                                                    value=""
                                                    class="sr-only peer"
                                                    checked={item.status}
                                                    onChange={() =>
                                                      handleSwitchChangeCustomLink(item)
                                                    }
                                                  />
                                                  <div class="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-black dark:peer-checked:bg-black"></div>
                                                </label>
                                                <button
                                                  type="button"
                                                  className="transition-all duration-300"
                                                  onClick={() => {
                                                    setDeleteId(item?._id);
                                                    setDeleteType(
                                                      activeShopTab === "Links" ? "link" : "shop",
                                                    );
                                                    setShowModal(true);
                                                  }}
                                                >
                                                  <Tooltip title="Remove">
                                                    <Trash className="w-[18px] h-[18px] fill-red-600 cursor-pointer" />
                                                  </Tooltip>
                                                </button>
                                              </div>
                                            </div>

                                            <div>
                                              {openAccordion.id === item._id &&
                                                openAccordion.type === "layout_setting" && (
                                                  <LayoutSetting
                                                    activeTab={activeTab}
                                                    handleTabChange={handleTabChange}
                                                    selectedOption={selectedOption}
                                                    selectedOptionLayout={selectedOptionLayout}
                                                    handleOptionChange={handleOptionChange}
                                                    handleOptionChangeLayout={
                                                      handleOptionChangeLayout
                                                    }
                                                    elem={item._id}
                                                    item={item}
                                                  />
                                                )}

                                              {openAccordion.id === item._id &&
                                                openAccordion.type === "image_upload" && (
                                                  <ThumbnailSetting
                                                    elem={item._id}
                                                    item={item}
                                                    loaderCustom={loaderCustom}
                                                    removeWidgetImage={removeWidgetImage}
                                                    handleWidgetLogoUpload={handleWidgetLogoUpload}
                                                  />
                                                )}
                                            </div>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </ReactDragListView>
                              </AccordionDetails>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </ReactDragListView>
              )}
            </>
          )}
        </div>
        <div className="px-5 lg:hidden my-auto flex justify-center mb-24">
          <div className="px-5 my-auto">
            <ProfileViewTheme
              socialMedia={socialMedia}
              userData={userData}
              shopData={shopData}
              changeAppearanceData={changeAppearanceData}
              handleTabClickPreview={handleTabClickPreview}
              activeTabPreview={activeTabPreview}
              fontName={changeAppearanceData?.typography_font}
            />
          </div>
        </div>
        <div
          className="w-[100%] lg:w-[77%] profile-share-link absolute mb-4 left-[50%] -translate-x-[50%] h-[50px] ps-4 pe-1 rounded-[30px] border border-black border-opacity-10 bg-white flex items-center justify-between cursor-pointer"
          onClick={handleCopy}
        >
          <span>{url}</span>
          <button
            type="button"
            className="btn-green copy-url hover:bg-[#ebff57] hover:text-[#000] hover:border-[#ebff57] text-white"
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
          >
            {!copied ? (
              <p>{t("lang_copy_url")}</p>
            ) : (
              <span className="flex items-center gap-2">
                <CheckCircleFill className="input-icon w-5 h-5" strokeWidth={1.5} />
                <p className="text-black">{t("lang_url_copied")}!</p>
              </span>
            )}
          </button>
        </div>
        <div className="inline-block fixed bottom-4 right-4 group copy-share-icon">
          <div
            onClick={handleMobileCopy}
            className="bottom-14 w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
            </svg>

            {copied && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-24 px-2 py-1 text-xs text-white bg-black rounded transition-opacity duration-300">
                {t("lang_link_copied")}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-screen hidden overflow-auto lg:flex border-l border-[#000000] border-opacity-10 flex-col">
        <button
          type="button"
          className="btn-green mt-2 mr-2 text-white gap-2 ms-auto hover:bg-[#ebff57] hover:border-[#ebff57] hover:text-[#000] flex items-center group"
          onClick={() => setShowSharePopup(true)}
        >
          <Share className="w-4 h-4 fill-white group-hover:fill-[#000]" />
          {t("lang_share")}
        </button>

        <div className="px-5 my-auto">
          <ProfileViewTheme
            socialMedia={socialMedia}
            userData={userData}
            shopData={shopData}
            changeAppearanceData={changeAppearanceData}
            handleTabClickPreview={handleTabClickPreview}
            activeTabPreview={activeTabPreview}
            fontName={changeAppearanceData?.typography_font}
          />
        </div>
      </div>
      {showModal && (
        <ConfirmationPopUp
          heading="Remove link"
          subheading="Are you sure you want to remove this link?"
          confirmationPopup={showModal}
          runFunction={deleteItem}
          handleCloseConfirm={closePopUp}
          confirmButton="Yes"
        />
      )}
      {showAddSocialMedia && (
        <WidgetPopUp
          heading="Add link"
          confirmationPopup={showAddSocialMedia}
          handleCloseConfirm={closeWidgetPopUp}
          allApps={allApps}
          handleAddAppWidget={handleAddAppWidget}
          handleSectionClose={handleSectionClose}
          openWidgetPlaceholder={openWidgetPlaceholder}
          appPlaceholderData={appPlaceholderData}
          addSocialMedia={addSocialMedia}
          setAddSocialMedia={setAddSocialMedia}
          showAddSocialMedia={showAddSocialMedia}
          setShowAddSocialMedia={setShowAddSocialMedia}
          setShowOptions={setShowOptions}
          handleSocialImage={handleSocialImage}
          removeImage={removeImage}
          loaderCustom={loaderCustom}
          createLink={createLink}
          activeShopTab={activeShopTab}
          widgetSelected={widgetSelected}
          addDefaultApp={addDefaultApp}
          setAddDefaultApp={setAddDefaultApp}
          handleDefaultImageUpload={handleDefaultImageUpload}
          removeDefaultImage={removeDefaultImage}
          widgetShopData={widgetShopData}
          inputRef={inputRef}
        />
      )}
      <EditBio
        userName={userData?.data?.username}
        bioPopup={bioPopup}
        handleBioCloseConfirm={closeBioPopup}
      />
      <SelectPlatformPopup
        showPlatform={showPlatform}
        closePlatformPopup={closePlatformPopup}
        username={userData?.data?.username}
        activeTabPreview={activeTabPreview}
      />
      <SocialShare
        showSharePopup={showSharePopup}
        url={url}
        image={userData?.data?.og_image}
        username={userData?.data?.username}
        closeSharePopup={closeSharePopup}
      />
      <Dialog
        open={isPopupOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            maxWidth: "800px !important",
            width: "100%",
            borderRadius: "12px",
          },
        }}
      >
        {getSingleAppData && (
          <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 close-btn hover:bg-gray-200"
              onClick={handleCloseDialog}
            >
              <Tooltip title="close">
                <X size={24} />
              </Tooltip>
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="p-3 bg-[#FAFAFA] rounded-lg border-[1px] border-[#00000012] border-solid">
                <img
                  src={getSingleAppData?.svg}
                  alt="widget"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  {getSingleAppData?.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {getSingleAppData?.short_description}
                </p>
              </div>
              {authApps?.find((app) => app?._id === getSingleAppData?._id) ||
              (socketData?.app_id === getSingleAppData?._id && socketData?.success) ? (
                <button
                  onClick={() => handleRemoveDialog(getSingleAppData?._id)}
                  className="mt-4 flex items-center gap-2 bg-white text-black border border-black px-4 py-2 rounded-md shadow-md transition group-hover:bg-gray-100"
                >
                  <span>{t("lang_remove_authorized")}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="black"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              ) : (
                <button
                  className="bg-[#26D367] text-black px-4 py-2 mt-3 rounded-md shadow-md transition hover:bg-green-600"
                  onClick={() =>
                    getSingleAppData?.type === "open app"
                      ? handleInstallNow(getSingleAppData)
                      : handleRedirectUrl(getSingleAppData?.redirect_url, getSingleAppData?._id)
                  }
                >
                  {getSingleAppData?.type === "open app" ? "Install Now" : "Add to your bio"}
                </button>
              )}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full h-48 bg-red-900 rounded-lg"></div>
              <div className="w-full h-48 bg-red-900 rounded-lg"></div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                {t("lang_overview")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {getSingleAppData?.long_description}
              </p>
            </div>
          </div>
        )}
      </Dialog>
      {isPopupClose && (
        <ConfirmationPopUp
          heading="Remove This Authorization?"
          subheading="Are you sure you want to remove this Authorization?"
          confirmationPopup={isPopupClose}
          runFunction={deleteAuthItem}
          handleCloseConfirm={handleCloseRemoveDialog}
          confirmButton="Yes"
        />
      )}
      {isEditable && (
        <EditWidgetPopUp
          heading={widgetName}
          confirmationPopup={isEditable}
          handleCustomWidgetName={handleCustomWidgetName}
          handleCloseConfirm={handleWidgetNamePopUpClose}
          widgetId={widgetId}
          widgetIndex={widgetIndex}
          handleWidgetNameChange={handleWidgetNameChange}
          handleWidgetNameShowChange={handleWidgetNameShowChange}
          isEditable={isEditable}
          widgetName={widgetName}
          widgetNameShow={widgetNameShow}
        />
      )}
      {isEditDetail && (
        <EditLinkDetailsPopUp
          heading="Edit widget data"
          confirmationPopup={isEditDetail}
          handleCloseConfirm={handleDetailsPopUpClose}
          handleUpdateClick={handleUpdateClick}
          isEditDetail={isEditDetail}
          widgetData={widgetData}
          handleInputChange={handleInputChange}
          inputValues={inputValues}
          addDefaultApp={addDefaultApp}
          setAddDefaultApp={setAddDefaultApp}
          appPlaceholderData={appPlaceholderData}
        />
      )}
      <Dialog
        open={openConfirmDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenConfirmDialog(false)}
        onEntered={() => {
          // ✅ Focus the "Yes" button after dialog transition
          if (yesButtonRef.current) {
            yesButtonRef.current.focus();
          }
        }}
        PaperProps={{
          sx: {
            maxWidth: "800px !important",
            width: "100%",
            borderRadius: "12px",
          },
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="bg-white shadow-lg rounded-lg p-6 z-50">
          <div className="flex text-primary items-center justify-between">
            <p className="text-lg font-medium">
              {t("lang_are_you_sure_you_want_to_delete_this_widget")}?
            </p>
            <button
              onClick={() => setOpenConfirmDialog(false)}
              className="close-btn hover:bg-gray-200"
            >
              <Tooltip title="Close">
                <X className="w-7 h-7" />
              </Tooltip>
            </button>
          </div>

          <hr className="my-4 main-border-color" />

          <div className="flex space-x-2">
            <button
              ref={yesButtonRef}
              className="px-5 py-2 me-2 text-sm rounded-full bg-red-600 text-white hover:bg-red-500 focus:ring-red-600 transition-all duration-300 items-center flex justify-center"
              onClick={() => {
                handleDeleteWidget(selectedWidgetId);
                setOpenConfirmDialog(false);
              }}
            >
              {t("lang_yes_delete_this_widget")}
            </button>
            <button
              className="px-5 py-2 text-sm rounded-full text-black font-medium bg-transparent border border-black transition-all duration-300"
              onClick={() => setOpenConfirmDialog(false)}
            >
              {t("lang_cancel")}
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EditProfile;
