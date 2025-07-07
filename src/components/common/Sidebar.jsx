import { editUser, logOut } from "@/redux/slices/authSlice";
import {
  Tooltip,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutYourSelf from "../Bio/BioSetUpComponment/AboutYourSelf";

const Sidebar = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state?.authSlice || {});

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const [openDialog, setOpenDialog] = useState(false);
  const [profile, setProfile] = useState("");

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
    setOpenDialog(false);
  };

  const handleEditSite = () => {
    setOpenDialog(true);
    // router.push(userData?.data?.template ? "/bio/edit-profile" : "/bio/about-yourself");
  };

  const handleContinue = async () => {
    const response = await dispatch(editUser({ designation: profile }));
    console.log(response?.payload?.success, "response");
    if(response?.payload?.success){
        
    }
  };

  return (
    <div
      className={`h-screen w-14 ${
        pathName.includes("/bio") ? "relative" : "fixed"
      } top-0 left-0 bg-[#1E1E21] z-50 flex flex-col justify-between items-center py-4`}
    >
      <div className="flex flex-col gap-2">
        <Tooltip title="Dashboard">
          <Image
            onClick={() => router.push("/dashboard")}
            src="/images/common/trimmo-app-logo.svg"
            className="cursor-pointer hover:bg-[#3A3A3E] p-2 rounded-md"
            height={40}
            width={40}
            alt="logo"
          />
        </Tooltip>

        <Tooltip title="Site">
          <Image
            onClick={handleEditSite}
            src="/images/common/trimmo-bio.svg"
            className="cursor-pointer hover:bg-[#3A3A3E] p-2 rounded-md"
            height={40}
            width={40}
            alt="bio"
          />
        </Tooltip>

        <Tooltip title="Link">
          <Image
            onClick={() => router.push("/link/home")}
            src="/images/common/trimmo-link.svg"
            className="cursor-pointer hover:bg-[#3A3A3E] p-2 rounded-md"
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

      {/* Site Popup Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogContent>
          <AboutYourSelf
            handleContinue={handleContinue}
            profile={profile}
            setProfile={setProfile}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sidebar;
