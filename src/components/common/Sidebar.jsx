"use client";

import { addBio, editUser, logOut } from "@/redux/slices/authSlice";
import {
  Dialog,
  DialogContent,
  Menu,
  MenuItem,
  Tooltip
} from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutYourSelf from "../Bio/BioSetUpComponment/AboutYourSelf";
import SelectTemplate from "../Bio/BioSetUpComponment/SelectTemplate";
import SelectPlateForm from "../Bio/BioSetUpComponment/SelectPlatForm";
import ProfileDetails from "../Bio/BioSetUpComponment/ProfileDetails";
import LinkReady from "../Bio/BioSetUpComponment/LinkReady";
import { getSingleThemeData } from "@/redux/slices/apperanceSlice";

const Sidebar = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state?.authSlice || {});
  const isLinkPage = pathName.startsWith("/link");
  const isBioPage = pathName.startsWith("/bio");
  const isDashboardPage = pathName.startsWith("/dashboard");

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  // Use string keys for dialog management
  const [openDialog, setOpenDialog] = useState(""); // "" = closed

  const [profile, setProfile] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [platform, setPlatform] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    bio: "",
    profile_picture: "",
  });
  const [imageData, setImageData] = useState();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    dispatch(logOut());
    router.push("/");
  };

  const handleDialogClose = () => {
    setOpenDialog(""); // Reset key to close dialog
  };

  const handleEditSite = () => {
    setOpenDialog("aboutYourSelf"); // Open specific dialog using key
  };

  const handleContinue = async () => {
    const response = await dispatch(editUser({ designation: profile }));
    console.log(response?.payload?.success, "response");
    if (response?.payload?.success) {
      setOpenDialog("selectTemplate");
    }
  };
  const handleSelectTemplate = async () => {
    const response = await dispatch(editUser({ template: selectedCard, }));
    console.log(response?.payload?.success, "response=-=->>");
    if (response?.payload?.success) {
      setOpenDialog("selectPlatform");
      localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
    }
  };

  const handleSubmit = async () => {
    if (socialMedia?.length > 0) {
      const payload = socialMedia?.map((elem) => {
        return {
          ...elem,
          url: `${elem?.initUrl}${elem?.url}`,
          status: elem?.url ? true : false,
        };
      });
      const response = await dispatch(addBio({ social_media: payload }));
      console.log(response, 'response=-=-=-=->>>>');
      if (response?.payload) {
        setOpenDialog("profileDetails");
      }
    } else if (platform?.length > 0) {
      const response = await dispatch(addBio({ social_media: platform }));
      console.log(response, 'response=-=-=-=->>>>');
      if (response?.payload) {
        setOpenDialog("profileDetails");
      }
    }
  };

  const handleProfileDetail = async () => {
    const response = await dispatch(editUser(userDetails));
    console.log(response?.payload?.success, "response=-=->>123");
    if (response?.payload?.success) {
      setOpenDialog("linkReady");
      fatchData();
    }
  };

  const fatchData = async () => {
    const getCardIndex = localStorage.getItem("selectedCard");
    if (getCardIndex) {
      const data = await dispatch(getSingleThemeData(JSON.parse(getCardIndex)));
      console.log(data, 'data=-=-=->>');
      setImageData(data?.payload?.image);
    }
  };

  return (
    <div
      className={`h-screen w-14 ${pathName.includes("/bio") ? "relative" : "fixed"
        } top-0 left-0 bg-[#1E1E21] z-50 flex flex-col justify-between items-center py-4`}
    >
      {/* Top Icons */}
      <div className="flex flex-col gap-2">
        <Tooltip title="Dashboard">
          <Image
            onClick={() => router.push("/dashboard")}
            src="/images/common/trimmo-app-logo.svg"
            className={`cursor-pointer p-2 rounded-md hover:bg-[#3A3A3E] ${isDashboardPage ? "bg-[#3A3A3E]" : ""
              }`}
            height={40}
            width={40}
            alt="logo"
          />
        </Tooltip>

        <Tooltip title="Site">
          <Image
            onClick={handleEditSite}
            src="/images/common/trimmo-bio.svg"
            className={`cursor-pointer p-2 rounded-md hover:bg-[#3A3A3E] ${isBioPage ? "bg-[#3A3A3E]" : ""
              }`}
            height={40}
            width={40}
            alt="bio"
          />
        </Tooltip>

        <Tooltip title="Link">
          <Image
            onClick={() => router.push("/link/home")}
            src="/images/common/trimmo-link.svg"
            className={`cursor-pointer p-2 rounded-md hover:bg-[#3A3A3E] ${isLinkPage ? "bg-[#3A3A3E]" : ""
              }`}
            height={40}
            width={40}
            alt="link"
          />
        </Tooltip>

      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-4">
        <button className="p-2 text-white hover:text-green-400">🔔</button>
        <button className="p-2 text-white hover:text-green-400">🔒</button>

        <button
          onClick={handleMenuClick}
          className="p-2 text-black bg-white rounded hover:bg-gray-200"
        >
          SE
        </button>

        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>

      {/* About Yourself Dialog */}
      <Dialog open={openDialog === "aboutYourSelf"} onClose={handleDialogClose}>
        <DialogContent>
          <AboutYourSelf
            handleContinue={handleContinue}
            profile={profile}
            setProfile={setProfile}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={openDialog === "selectTemplate"} onClose={handleDialogClose}>
        <DialogContent>
          <SelectTemplate handleSelectTemplate={handleSelectTemplate} setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
        </DialogContent>
      </Dialog>
      <Dialog open={openDialog === "selectPlatform"} onClose={handleDialogClose}>
        <DialogContent>
          <SelectPlateForm handleSubmit={handleSubmit} platform={platform} setPlatform={setPlatform} socialMedia={socialMedia} setSocialMedia={setSocialMedia} />
        </DialogContent>
      </Dialog>
      <Dialog open={openDialog === "profileDetails"} onClose={handleDialogClose}>
        <DialogContent>
          <ProfileDetails handleProfileDetail={handleProfileDetail} userDetails={userDetails} setUserDetails={setUserDetails} />
        </DialogContent>
      </Dialog>
      <Dialog open={openDialog === "linkReady"} onClose={handleDialogClose}>
        <DialogContent>
          <LinkReady handleDialogClose={handleDialogClose} imageData={imageData} setImageData={setImageData} />
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Sidebar;
