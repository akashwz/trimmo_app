"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SharePopup from "../SharePopup";
import {
  BarChartLineFill,
  Calendar,
  Check2Circle,
  Copy,
  Lock,
  Pencil,
  Share,
  Tag,
  ThreeDots,
  Trash,
} from "react-bootstrap-icons";
import {
  createShortLink,
  deleteShortLink,
  getAllShortLinks,
  getCustomizeQR,
} from "@/redux/slices/customSlice";
import Image from "next/image";
import QRCodeStyling from "qr-code-styling";
import CreateLink from "./CreateLink";
import ConfirmationPopUp from "@/components/Bio/confirmation-popup/ConfirmationPopUp";

function generateRandomCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = Math.floor(Math.random() * 4) + 7; // Random length between 7 and 10
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

function HomePage() {
  const [openSharePopup, setOpenSharePopup] = useState(false);
  const [openLinkPopup, setOpenLinkPopup] = useState(false);
  const [currentShortCode, setCurrentShortCode] = useState(null);
  const [isConfirmationPopup, setIsConfirmationPopup] = useState(false);
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState("https://trimmo.link");
  const [shortcode, setShortCode] = useState(generateRandomCode());

  const handleChange = (e) => {
    setDomain(e.target.value);
  };

  const dispatch = useDispatch();
  const { shortLinkData } = useSelector((state) => state.customSlice);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateClick = () => {
    setIsGenerated(true);
  };

  const qrCodeRefs = useRef([]);
  const qrCodeInstances = useRef([]);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    qrCodeRefs.current = qrCodeRefs.current.slice(0, shortLinkData.length);

    shortLinkData.forEach((link, index) => {
      if (!qrCodeInstances.current[index]) {
        qrCodeInstances.current[index] = new QRCodeStyling({
          width: 160, // set desired width
          height: 160, // set desired height
          ...link.qrcode,
          data: link.shorturl,
        });
      }

      if (qrCodeRefs.current[index]) {
        qrCodeInstances.current[index].append(qrCodeRefs.current[index]);
      }
    });

    return () => {
      qrCodeInstances.current.forEach((instance) => {
        // instance && instance.clear();
      });
    };
  }, [shortLinkData, settings]);

  const fetchData = async () => {
    const payload = {
      page: 1,
      limit: "all",
    };
    await dispatch(getAllShortLinks(payload));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(date);
  };

  const [copiedIndex, setCopiedIndex] = useState(null);
  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  const handleShareClick = (shortCode) => {
    setCurrentShortCode(shortCode);
    setOpenSharePopup(true);
  };

  const handleDeleteShortLinkClick = async (id) => {
    const apiCall = await dispatch(deleteShortLink(id));
    setIsConfirmationPopup(false); // Close the popup after confirmation
    if (apiCall?.payload?.success === true) {
      fetchData();
    }
  };

  const handleGenerateLink = () => {
    setOpenLinkPopup(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDestination(value);

    if (!value) {
      setError("");
      return;
    }

    const urlPattern = /^https?:\/\/[\w.-]+\.[a-z]{2,}([/?].*)?$/i;
    if (urlPattern.test(value)) {
      setError("");
    } else {
      setError("Enter a valid URL.");
    }
  };

  const handleCreateShortLink = async () => {
    if (!destination.trim()) {
      setError("Destination is required.");
      return;
    }
    setError("");
    const payload = {
      destination,
      title,
      domain,
      shortcode,
      qrcode: isGenerated && settings,
    };
    const data = await dispatch(createShortLink(payload));
    if (data?.payload?.success === true) {
      setOpenLinkPopup(false);
      setDestination("");
      fetchData();
    }
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  return (
    <>
      {openSharePopup && (
        <SharePopup
          openSharePopup={openSharePopup}
          setOpenSharePopup={setOpenSharePopup}
          shortCode={currentShortCode}
        />
      )}
      {openLinkPopup && (
        <CreateLink
          openLinkPopup={openLinkPopup}
          setOpenLinkPopup={setOpenLinkPopup}
          handleCreateShortLink={handleCreateShortLink}
          destination={destination}
          handleDestination={handleDestination}
          error={error}
          domain={domain}
          title={title}
          shortCode={shortcode}
          setTitle={setTitle}
          settings={settings}
          setSettings={setSettings}
          handleChange={handleChange}
          setShortCode={setShortCode}
          handleGenerateClick={handleGenerateClick}
          isGenerated={isGenerated}
        />
      )}
      <div className="min-h-[200px] overflow-y-auto flex flex-col w-full">
        <div className="flex-1 p-4 bg-gray-100 w-full md:w-[80%] xl:w-[60%] mx-auto">
          <div className="flex flex-col items-center w-full mt-3 max-w-screen-xl mx-3">
            {/* section 1 */}
            <section className=" mt-3 mb-5 lg:mb-5 rounded-lg p-4 shadow-sm sm:p-6 lg:p-8 text-primarycolor bg-white w-full  ">
              <h2 className="font-semibold text-2xl font-montserrat">Shorten a long link</h2>
              <p className="text-lg lg:text-lg font-medium font-montserrat mt-3 sm:mt-7 md:mt-10 mb-2">
                Paste the URL to be shortened
              </p>

              <div className="border rounded border-primarycolor my-2">
                <div className="relative">
                  <input
                    type="text"
                    value={destination}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleInputChange(e.target.value);
                      }
                    }}
                    className="w-full rounded-lg bg-white text-primarycolor p-4 text-sm shadow-sm focus:outline-none pr-24 md:pr-36"
                    placeholder="Example: http://super-long-link.com/shorten-it"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-1">
                    <button
                      type="button"
                      disabled={!destination || error}
                      className={`group inline-block rounded-lg px-1 md:px-5 py-3 text-[10px] md:text-sm font-medium text-white
            ${destination && !error ? "bg-primarycolor" : "bg-gray-400 cursor-not-allowed"}`}
                      onClick={handleGenerateLink}
                    >
                      <span className="inline-block group-hover:scale-105">Shorten URL</span>
                    </button>
                  </span>
                </div>
              </div>
              {error && <p className="text-red-500 text-xs my-1">{error}</p>}
              <div className=" text-sm flex gap-4 items-center text-">
                <div className="flex flex-wrap gap-1 items-center">
                  <Check2Circle className="h-4 w-4" />
                  Short links
                </div>
                <div className="flex flex-wrap gap-1 items-center">
                  <Check2Circle className="h-4 w-4" />
                  QR Codes
                </div>
              </div>
            </section>

            {/* second section */}
            {shortLinkData &&
              shortLinkData.map((shortLink, index) => (
                <section
                  key={index}
                  className="mt-5 lg:mt-8 lg:mb-8 rounded-lg shadow-sm text-primarycolor bg-white w-full"
                >
                  <fieldset>
                    <legend className="sr-only">Checkboxes</legend>

                    <div className="space-y-2">
                      <label className="flex flex-col sm:flex-row flex-wrap cursor-pointer items-start gap-4 rounded-lg p-4 transition hover:bg-gray-50 w-full">
                        {/* QR Code Section */}
                        {shortLink?.qrcode ? (
                          <div
                            className="flex justify-center items-center rounded-lg h-40 w-40 mx-auto sm:mx-0"
                            ref={(el) => (qrCodeRefs.current[index] = el)}
                          />
                        ) : (
                          <div className="relative flex items-center justify-center">
                            <div
                              ref={(el) => (qrCodeRefs.current[index] = el)}
                              className={`flex justify-center flex-col items-center rounded-lg mb-6 transition-all duration-500 blur-sm`}
                            ></div>
                            <Link
                              href={`/link/edit/${shortLink?._id}`}
                              className="absolute bg-black text-white px-4 py-2 rounded-md text-sm"
                            >
                              Generate QR code
                            </Link>
                          </div>
                        )}

                        {/* Right Content */}
                        <div className="flex-1 w-full min-w-0">
                          {/* Title & Actions */}
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
                            <h3 className="text-xl font-semibold text-primarycolor font-montserrat line-clamp-2 break-words max-w-full">
                              {shortLink?.title || "Elated- Themes - portfolio | ThemeForest"}
                            </h3>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
                              <button
                                onClick={() => handleCopy(shortLink?.shorturl, index)}
                                className="box-border rounded bg-[#F5F5F5] p-1 text-[10px] leading-5 font-medium text-black transition hover:bg-whitelight border flex items-center"
                              >
                                <Copy className="mr-1 h-4 w-4" />
                              </button>

                              <button
                                onClick={() => handleShareClick(shortLink?.shortcode)}
                                className="box-border rounded bg-white p-1 text-[10px] leading-5 font-medium text-black transition hover:bg-whitelight border flex items-center"
                              >
                                <Share className="mr-1 h-4 w-4" />
                              </button>

                              <Link
                                href={`/link/edit/${shortLink?._id}`}
                                className="box-border rounded bg-white p-1 text-[10px] leading-5 font-medium text-black transition hover:bg-whitelight border flex items-center"
                              >
                                <Pencil className="h-4 w-4" />
                              </Link>

                              <button
                                onClick={() => setIsConfirmationPopup(true)}
                                className="box-border rounded bg-white p-1 text-[10px] leading-5 font-medium text-black transition hover:bg-whitelight border flex items-center"
                              >
                                <Trash className="h-4 w-4" />
                              </button>

                              {/* Confirmation Popup */}
                              <ConfirmationPopUp
                                heading="Delete Item"
                                subheading="Are you sure you want to delete this item?"
                                confirmationPopup={isConfirmationPopup}
                                runFunction={() => handleDeleteShortLinkClick(shortLink?._id)}
                                handleCloseConfirm={() => setIsConfirmationPopup(false)}
                                confirmButton="Yes"
                              />
                            </div>
                          </div>

                          {/* Links Section */}
                          <div className="w-full">
                            <div className="mb-2 hover:underline truncate">
                              <Link
                                target="_blank"
                                href={shortLink?.shorturl || "http://super-long-link.com"}
                                className="text-[#1276D2] font-medium text-sm"
                              >
                                {shortLink?.shorturl || "http://super-long-link.com"}
                              </Link>
                            </div>

                            <div className="mb-3 hover:underline truncate max-w-md">
                              <Link
                                target="_blank"
                                href={shortLink?.destination}
                                alt="longLink"
                                className="text-secondarycolor text-[16px] font-normal truncate block"
                              >
                                {shortLink?.destination || "http://super-long-link.com/shorten-it"}
                              </Link>
                            </div>

                            {/* Meta Info */}
                            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                              <div className="flex items-center gap-1">
                                <BarChartLineFill className="h-4 w-4 text-primarycolor fill-primarycolor" />
                              </div>

                              <div className="flex items-center gap-1 bg-[#F5F5F5] p-1 rounded">
                                <Lock className="h-4 w-[10px] text-primarycolor fill-primarycolor" />
                                <p className="text-primarycolor font-normal text-[10px]">
                                  Click data
                                </p>
                              </div>

                              <div className="flex items-center gap-1 p-1 rounded">
                                <Calendar className="h-4 w-[10px] text-primarycolor fill-primarycolor" />
                                <p className="text-primarycolor font-normal text-[10px]">
                                  {formatDate(shortLink?.createdAt)}
                                </p>
                              </div>

                              <div className="flex items-center gap-1 p-1 rounded">
                                <Tag className="h-4 w-[10px] fill-primarycolor" />
                                <p className="text-primarycolor font-normal text-[10px]">No tags</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </fieldset>
                </section>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
