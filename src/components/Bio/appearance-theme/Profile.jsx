import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import EditBio from "../edit-bio/EditBio";
import { useDispatch, useSelector } from "react-redux";
import { clearEditData, editUser, getBio } from "@/redux/slices/authSlice";
import SelectPlatformPopup from "../SelectPlatformPopup/SelectPlatformPopup";
import ImageCropper from "../ImageCropper/ImageCropper";
import { CloudUpload, InfoCircle, Pencil, X } from "react-bootstrap-icons";
import ToastNotification from "@/controller/ToastNotification";
import API from "@/api";

const Profile = ({ expandedProfile, handleChangeProfile }) => {
  const [bioPopup, setBioPopup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { userData, bioData } = useSelector((state) => state?.authSlice);
  const { loader } = useSelector((state) => state.errorReducer);
  const [showPlatform, setShowPlatform] = useState(false);
  const [showOptions, setShowOptions] = useState({
    show: false,
    widget_name: "",
  });

  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const closeBioPopup = () => {
    setBioPopup(false);
    dispatch(clearEditData());
  };

  const closePlatformPopup = () => {
    setShowPlatform(false);
    setShowOptions({ show: false, widget_name: "" });
  };

  // fgdfgdfgdfgdfg

  const [userDetail, setUserDetail] = useState({
    name: "",
    bio: "",
    profile_picture: "",
    select_profile: "",
    cover_image: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  // useEffect(() => {
  //   if (userData?.data?.username) {
  //     dispatch(getBio(userData?.data?.username));
  //   }
  // }, [userData?.data?.username]);
  useEffect(() => {
    if (bioData) {
      setUserDetail({
        name: bioData?.name,
        bio: bioData?.bio,
        profile_picture: bioData?.profile_picture,
        cover_image: bioData?.cover_image,
        avatar_profile: bioData?.avatar_profile,
        select_profile: bioData?.select_profile,
      });
      setSelectedImage(bioData?.select_profile);
    }
  }, [bioData]);

  const [initialUserDetail, setInitialUserDetail] = useState({});
  useEffect(() => {
    if (bioData) {
      setUserDetail({
        name: bioData.name || "",
        bio: bioData.bio || "",
        profile_picture: bioData?.profile_picture || "",
        select_profile: bioData?.select_profile || "",
      });
      setInitialUserDetail({
        name: bioData.name || "",
        bio: bioData.bio || "",
        profile_picture: bioData?.profile_picture || "",
        select_profile: bioData?.select_profile || "",
      });
    }
  }, [bioData]);

  const isFormEdited =
    userDetail.name !== initialUserDetail.name ||
    userDetail.bio !== initialUserDetail.bio ||
    userDetail.profile_picture !== initialUserDetail.profile_picture ||
    userDetail.select_profile !== initialUserDetail.select_profile;

  const handleUpdate = async () => {
    await dispatch(editUser(userDetail));
    setInitialUserDetail({ ...userDetail });
  };
  const [loaderCustom, setLoaderCustom] = useState(false);

  const handleSelect = (type) => {
    setUserDetail({ ...userDetail, select_profile: type });
    setSelectedImage(type);
  };

  const [imageSrc, setImageSrc] = useState(null); // For cropper
  const [showCropper, setShowCropper] = useState(false);
  const [rawFile, setRawFile] = useState(null);

  const handleImage = async (file) => {
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
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!file) return ToastNotification.error("No file selected.");
    if (!allowedTypes.includes(file.type)) return ToastNotification.error("Invalid file type.");
    if (file.size > maxSize) return ToastNotification.error("File size exceeds 2MB.");

    const isImage = file.type.startsWith("image/") && file.type !== "image/gif";

    if (isImage) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result); // Pass to cropper
        setRawFile(file);
        setShowCropper(true);
      };
    } else {
      // Direct upload for gif/video
      uploadToServer(file);
    }
  };

  const uploadToServer = async (file) => {
    setLoaderCustom(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "profile");

    try {
      const apiCall = await API({
        url: `/bio/fileupload`,
        method: "post",
        data: formData,
      });

      if (apiCall?.status === 200 || apiCall?.status === 304) {
        setUserDetail((prev) => ({
          ...prev,
          profile_picture: apiCall?.data?.data?.url,
        }));
        if (apiCall?.data?.data?.url) {
          await removeImage();
          await dispatch(editUser({ ...userDetail, profile_picture: apiCall?.data?.data?.url }));
        }
        ToastNotification.success("File uploaded successfully!");
      }
    } catch (error) {
      ToastNotification.error(error?.response?.data?.message || "File upload failed.");
    } finally {
      setLoaderCustom(false);
    }
  };

  const removeImage = async () => {
    try {
      const apiCall = await API({
        url: `/bio/delete_file_s3?file_url=${userDetail?.profile_picture}`,
        method: "delete",
      });
      if (apiCall.status === 200 || apiCall.status === 304) {
        setUserDetail({ ...userDetail, profile_picture: "" });
      }
    } catch (error) {
      ToastNotification.error(error);
    }
  };

  return (
    <div>
      <Accordion expanded={expandedProfile} onChange={handleChangeProfile}>
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
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
              />
            </svg>
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Profile</h3>
        </AccordionSummary>
        <AccordionDetails>
          {/* <div className="flex flex-col sm:flex-row sm:justify-evenly gap-4 w-full">
                <div
                  className={`mb-4 flex flex-col items-center justify-center relative w-full sm:w-[220px] ${
                    selectedImage === "profile" ? "border-black border-[2px]" : "border-gray-300"
                  } rounded-lg overflow-hidden`}
                  onClick={() => handleSelect("profile")}
                >
                  {!loaderCustom && !userDetail?.profile_picture ? (
                    <>
                      <label className="inline-flex file-tag-hover relative flex-col items-center justify-center w-full h-[220px] cursor-pointer rounded-lg transition-all duration-300">
                        <input
                          id="dropzone-file"
                          type="file"
                          name="image"
                          accept="image/jpeg, image/png, image/jpg, image/webp, image/svg"
                          onChange={(e) => handleImage(e.target.files[0])}
                          disabled={loaderCustom}
                          className="hidden"
                        />
                        <CloudUpload className="w-10 h-10 text-gray-400" />
                        <span className="text-sm block font-medium text-gray-500 mt-2 text-center">
                          Click to upload profile photo or video
                        </span>
                      </label>

                      {showCropper && (
                        <ImageCropper
                          imageSrc={imageSrc}
                          onClose={() => setShowCropper(false)}
                          onCropComplete={(croppedBlob) => {
                            const croppedFile = new File([croppedBlob], rawFile.name, {
                              type: rawFile.type,
                            });
                            uploadToServer(croppedFile);
                          }}
                        />
                      )}
                    </>
                  ) : loaderCustom ? (
                    <div className="flex items-center justify-center w-full h-[220px] border border-gray-300 rounded-lg">
                      <CircularProgress color="inherit" size={30} />
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-center w-full h-[220px] border border-gray-300 rounded-lg overflow-hidden">
                      {userDetail?.profile_picture.trim().toLowerCase().endsWith(".webm") ? (
                        <video
                          src={userDetail?.profile_picture.trim()}
                          className="max-w-[180px] max-h-[180px] rounded-[6px] border main-border-color"
                          controls
                          autoPlay
                          loop
                          muted
                        />
                      ) : (
                        <img
                          src={userDetail?.profile_picture.trim()}
                          className="max-w-[180px] max-h-[180px] rounded-[6px] border main-border-color"
                          alt={`Uploaded profile image`}
                        />
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage();
                        }}
                        className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300 text-blue-500 hover:bg-blue-100 transition-all duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  <p className="mt-2 text-sm text-gray-600 font-medium">Profile</p>
                </div>

                <div
                  className={`mb-4 flex flex-col items-center justify-center relative input ${
                    selectedImage === "avatar_profile"
                      ? "border-black border-[2px]"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleSelect("avatar_profile")}
                >
                  <div className="flex relative items-center h-[200px] w-full sm:w-[200px] justify-center border rounded-[6px] cursor-pointer">
                    <img
                      src={bioData?.avatar_profile}
                      className="max-w-[180px] max-h-[180px]"
                      alt="Avatar Profile"
                    />
                  </div>
                  <p className="mt-2">Avatar</p>
                </div>
              </div> */}
          <div className="w-full secondary-bg-color p-6 rounded-full">
            <form
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
              method="post"
              className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 items-center"
            >
              <div className="relative w-[150px] h-[150px] flex items-center justify-center">
                <div
                  className="w-full h-full rounded-full bg-[#D9D9D9] flex items-center justify-center"
                  // onClick={() => handleSelect(selectedImage === "avatar_profile" ? "profile" : "avatar_profile")}
                >
                  {selectedImage === "profile" ? (
                    <>
                      <label
                        onClick={(e) => {
                          e.stopPropagation();
                          // removeImage();
                        }}
                        className="w-[140px] h-[140px] rounded-full bg-white flex items-center justify-center cursor-pointer relative"
                      >
                        {userDetail?.profile_picture ? (
                          <>
                            <div className="relative w-full h-full">
                              {userDetail?.profile_picture
                                .trim()
                                .toLowerCase()
                                .endsWith(".webm") ? (
                                <video
                                  src={userDetail?.profile_picture.trim()}
                                  className="w-full h-full object-cover rounded-full"
                                  autoPlay
                                  loop
                                  muted
                                />
                              ) : (
                                <img
                                  src={userDetail?.profile_picture.trim()}
                                  alt="Profile"
                                  className="w-full h-full object-cover rounded-full"
                                />
                              )}
                            </div>
                            <div className="absolute w-8 h-8 bg-white flex justify-center items-center rounded-full bottom-0">
                              <Pencil className="text-gray-800 w-4 h-4" />
                            </div>
                          </>
                        ) : (
                          <Pencil className="text-gray-500 w-8 h-8" />
                        )}
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/jpg,image/webp,video/mp4,video/webm,video/ogg"
                          onChange={(e) => handleImage(e.target.files[0])}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </label>
                      {showCropper && (
                        <ImageCropper
                          imageSrc={imageSrc}
                          onClose={() => {
                            setShowCropper(false);
                            setImageSrc(null);
                          }}
                          onCropComplete={(croppedBlob) => {
                            const croppedFile = new File([croppedBlob], rawFile.name, {
                              type: rawFile.type,
                            });
                            uploadToServer(croppedFile);
                          }}
                          onSkip={() => {
                            setShowCropper(false);
                            uploadToServer(rawFile); // Upload original image
                          }}
                        />
                      )}
                    </>
                  ) : (
                    <div className="w-[140px] h-[140px] rounded-full bg-white flex items-center justify-center">
                      <img
                        src={bioData?.avatar_profile}
                        alt="Avatar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  )}
                </div>

                {/* Avatar Bubble */}
                {bioData?.avatar_profile && (
                  <div
                    className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg border"
                    onClick={() =>
                      handleSelect(
                        selectedImage === "avatar_profile" ? "profile" : "avatar_profile",
                      )
                    }
                  >
                    {(selectedImage === "avatar_profile"
                      ? userDetail?.profile_picture.trim()
                      : bioData?.avatar_profile
                    ).endsWith(".webm") ? (
                      <video
                        className="object-cover rounded-full w-full h-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src={
                            selectedImage === "avatar_profile"
                              ? userDetail?.profile_picture.trim()
                              : bioData?.avatar_profile
                          }
                          type="video/webm"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={
                          selectedImage === "avatar_profile"
                            ? userDetail?.profile_picture.trim()
                            : bioData?.avatar_profile
                        }
                        alt="Avatar"
                        className="object-cover rounded-full h-10 w-10"
                      />
                    )}
                  </div>
                )}
              </div>

              <div className="w-full">
                <div className="mb-4 relative input">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Add to name"
                    value={userDetail?.name}
                    onChange={(e) =>
                      setUserDetail({
                        ...userDetail,
                        name: e.target.value,
                      })
                    }
                    className="w-full bg-transparent rounded-full border border-black focus:border-black focus:bg-white focus:ring-0 text-sm outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out peer"
                  />
                </div>
                <div className="mb-4 relative input">
                  <div className="flex justify-between">
                    <label>Bio</label>
                    <label>allowed 160 characters</label>
                  </div>
                  <textarea
                    type="text"
                    placeholder="Add to bio"
                    value={userDetail?.bio}
                    onChange={(e) =>
                      setUserDetail({
                        ...userDetail,
                        bio: e.target.value,
                      })
                    }
                    maxLength="160"
                    className="w-full bg-transparent rounded-lg border border-black focus:border-black focus:bg-white focus:ring-0 text-sm outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out peer"
                  />
                </div>
                <button
                  type="button"
                  disabled={!isFormEdited || loader}
                  onClick={handleUpdate}
                  className="bg-green-400 hover:bg-[#ebff57] hover:text-[#000] text-white font-medium py-2 px-8 rounded-full shadow-md transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-400 disabled:hover:text-white items-center flex justify-center"
                >
                  Save &nbsp; {loader && <CircularProgress color="inherit" size={20} />}
                </button>
              </div>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
      <EditBio
        userName={userData?.data?.username}
        bioPopup={bioPopup}
        handleBioCloseConfirm={closeBioPopup}
      />
      <SelectPlatformPopup
        showPlatform={showPlatform}
        closePlatformPopup={closePlatformPopup}
        username={userData?.data?.username}
      />
    </div>
  );
};

export default Profile;
