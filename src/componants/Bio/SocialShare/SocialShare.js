"use client";

import { Transition } from "@/controller/Transitions";
import { Dialog, Tooltip } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { CheckCircleFill, Envelope, Facebook, Twitter, Whatsapp, X } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import ReportPopup from "./ReportPopup";
import { getCookie } from "cookies-next";

const SocialShare = ({ showSharePopup, url, closeSharePopup, image, username, name }) => {
  const { userData } = useSelector((state) => state?.authReducer || {});
  const [copied, setCopied] = useState(false);
  const [showReportPopup, setShowReportPopup] = useState(false);
  const token = getCookie("token");
  const closeReportPopup = () => {
    setShowReportPopup(false);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
  };

  const handleReportPopupOpen = () => {
    setShowReportPopup(true);
    closeSharePopup();
  };

  return (
    <>
      <Dialog
        open={showSharePopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => closeSharePopup()}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            maxWidth: "900px !important",
            width: "100%",
            borderRadius: "12px",
          },
        }}
      >
        <div className="w-full secondary-bg-color sm:p-6 p-3 rounded-full">
          <div className="flex text-primary justify-between w-full">
            <div className="flex-1">
              <p className="text-lg font-medium">Share Profile</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                closeSharePopup();
              }}
              className="close-btn hover:bg-gray-200"
            >
              <Tooltip title="close">
                <X className="w-7 h-7" />
              </Tooltip>
            </button>
          </div>
          <div className="flex flex-col md:flex-row mt-4 gap-6 items-center">
            {image && (
              <div className="w-full md:w-auto">
                <img src={image} alt="og-image" width={900} className="rounded-2xl max-w-full" />
              </div>
            )}
            <div className="flex w-full flex-col items-center justify-between my-3">
              <FacebookShareButton
                className="flex items-center justify-center w-full px-6 !text-white !cursor-pointer !bg-[#395498] rounded-full !p-2 mt-2 gap-2"
                url={url}
              >
                <Facebook className="w-5 h-5" fill="white" /> Share on Facebook
              </FacebookShareButton>

              <TwitterShareButton
                className="flex items-center justify-center w-full px-6 !text-white !cursor-pointer !bg-[#45a4e1] rounded-full !p-2 mt-2 gap-2"
                url={url}
              >
                <Twitter className="w-5 h-5" fill="white" /> Share on Twitter
              </TwitterShareButton>

              <WhatsappShareButton
                className="flex items-center justify-center w-full px-6 !text-white !cursor-pointer !bg-[#46c254] rounded-full !p-2 mt-2 gap-2"
                url={url}
              >
                <Whatsapp className="w-5 h-5" fill="white" /> Share on WhatsApp
              </WhatsappShareButton>

              <EmailShareButton
                className="flex items-center justify-center w-full px-6 !text-white !cursor-pointer !bg-[#60696c] rounded-full !p-2 mt-2 gap-2"
                url={url}
              >
                <Envelope className="w-5 h-5" fill="white" /> Share on Mail
              </EmailShareButton>

              <div className="relative mb-4 w-full h-[50px] px-4 pe-1 rounded-[30px] border border-black border-opacity-10 bg-[#F1F0E6] flex items-center justify-between mt-2">
                <span className="truncate">{url}</span>
                <button
                  type="button"
                  className="bg-[#26d36780] text-sm p-2 font-medium rounded-full copy-url"
                  onClick={handleCopy}
                >
                  {!copied ? (
                    "Copy URL"
                  ) : (
                    <CheckCircleFill className="input-icon w-5 h-5" strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {!token && (
            <div className="flex flex-col md:flex-row border-t-2 border-gray-600 py-2 justify-between gap-4">
              <div>
                <p className="text-gray-800 font-medium text-base md:text-lg">
                  Join {name} on Trimmo Bio
                </p>
                <p className="text-gray-500 mb-4 text-sm">
                  Get your own free Trimmo Bio. The only link in bio trusted by 1M+ people.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 h-auto md:h-12">
                <Link
                  className="bg-black text-white px-8 py-2 rounded-full flex items-center justify-center"
                  href="/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign up free
                </Link>
                <Link
                  className="bg-gray-200 text-gray-700 px-8 py-2 rounded-full flex items-center justify-center"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find out more
                </Link>
              </div>
            </div>
          )}
          {username !== userData?.data?.username && (
            <div className="border-t-2 border-gray-400 pt-4" onClick={handleReportPopupOpen}>
              <a href="#" className="text-gray-600 flex font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="injected-svg mr-2"
                  data-src="https://cdn.hugeicons.com/icons/flag-03-stroke-standard.svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  role="img"
                  color="#8d8d8d"
                >
                  <path
                    d="M4 21V8"
                    stroke="#8d8d8d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.00609 14.9977C4.00057 14.9977 3.99609 14.9932 3.99609 14.9877M3.99609 14.9877V3H19.9999L15.9826 8.99775L20 15L3.99609 14.9877Z"
                    stroke="#8d8d8d"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                Report Trimmo Bio
              </a>
            </div>
          )}
        </div>
      </Dialog>
      <ReportPopup
        showReportPopup={showReportPopup}
        url={url}
        closeReportPopup={closeReportPopup}
      />
    </>
  );
};

export default SocialShare;
