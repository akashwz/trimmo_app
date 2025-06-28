"use client";
import {
  createShortLink,
  getCustomizeQR,
  resetCreateShortLinkStatus,
} from "@/redux/slices/customSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Lock, X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import GenerateQR from "./GenerateQR";
import { Dialog, DialogContent, Divider } from "@mui/material";

const defaultSettings = {
  width: 300,
  height: 300,
  margin: 10,
  type: "svg",
  data: "",
  image: "",
  dotsOptions: {
    type: "classy-rounded",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        { offset: 0, color: "#6B2A61" },
        { offset: 1, color: "#B35A90" },
      ],
    },
  },
  cornersSquareOptions: {
    type: "extra-rounded",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        { offset: 0, color: "#6B2A61" },
        { offset: 1, color: "#B35A90" },
      ],
    },
  },
  cornersDotOptions: {
    type: "dot",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        { offset: 0, color: "#6B2A61" },
        { offset: 1, color: "#B35A90" },
      ],
    },
  },
  backgroundOptions: {
    color: "#FFFFFF",
  },
  qrOptions: {
    typeNumber: 0,
    mode: "Byte",
    errorCorrectionLevel: "H",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 5,
    hideBackgroundDots: true,
    imageSize: 0,
  },
};

function CreateLink({
  openLinkPopup,
  setOpenLinkPopup,
  handleCreateShortLink,
  handleDestination,
  destination,
  error,
  domain,
  title,
  shortCode,
  setTitle,
  settings,
  setSettings,
  handleChange,
  setShortCode,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { createShortLinkStatus, customizeQRData } = useSelector((state) => state.customSlice);
  const [shortUrl, setShortUrl] = useState(`${domain}/${shortCode}`);

  useEffect(() => {
    dispatch(getCustomizeQR({ is_default: true }));
    if (customizeQRData?.customize) {
      setSettings(customizeQRData?.customize);
    } else {
      setSettings(defaultSettings);
    }
  }, []);

  useEffect(() => {
    if (createShortLinkStatus === "success") {
      router.push("/link/home");
      dispatch(resetCreateShortLinkStatus());
    }
  }, [createShortLinkStatus]);

  useEffect(() => {
    setSettings((prev) => ({
      ...prev,
      data: shortUrl,
    }));
  }, [shortUrl]);
  console.log(shortUrl, "shortUrl");
  useEffect(() => {
    setShortUrl(`${domain}/${shortCode}`);
  }, [shortCode, domain]);

  useEffect(() => {
    if (customizeQRData?.customize) {
      setSettings((prev) => ({
        ...prev,
        ...customizeQRData.customize,
      }));
    }
  }, [customizeQRData]);

  const handleClose = () => {
    setOpenLinkPopup(false);
  };

  return (
    <Dialog open={openLinkPopup} onClose={handleClose} fullWidth maxWidth="md">
      <DialogContent className="!p-0">
        <div className="flex flex-col w-full">
          <div className="flex-1 overflow-y-auto p-4 bg-white w-full mx-auto">
            <section className="text-gray-600 body-font relative">
              <div className="flex justify-between mb-2">
                <div className="flex flex-col w-full px-5">
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900">
                      Create a link
                    </h1>
                  </div>
                  <p className="text-[13px]">
                    You can create 5 more custom back-halves this month.
                    <Link href={"#"} className="ml-2 hover:underline">
                      Upgrade for more.
                    </Link>
                  </p>
                </div>
                <X
                  width={24}
                  height={24}
                  className="text-gray-500 hover:text-gray-900 cursor-pointer"
                  onClick={handleClose}
                />
              </div>
              <Divider />
              <div className="container flex flex-col md:flex-row bg-white mx-auto">
                <div>
                  <div className="w-full mx-auto p-5 rounded shadow-sm">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label className="leading-7 text-sm text-gray-600">Destination</label>
                          <input
                            type="text"
                            id="destination"
                            value={destination}
                            onChange={handleDestination}
                            placeholder="https://example.com/my-long-url"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition duration-200"
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>
                      </div>

                      <div className="p-2 w-full">
                        <div className="relative">
                          <label className="leading-7 text-sm text-gray-600">
                            Title (optional)
                          </label>
                          <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition duration-200"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col mt-7">
                        <h2 className="text-2xl text-primarycolor font-semibold">Short link</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                          <div className="p-2 w-full md:w-[50%]">
                            <div className="relative">
                              <label className="leading-7 text-sm text-gray-600 flex items-baseline">
                                Domain
                                <Lock className="h-3 w-3 ml-1" />
                              </label>
                              <select
                                name="domain"
                                value={domain}
                                onChange={handleChange}
                                className="w-full h-10 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3"
                              >
                                <option value="https://bit.ly">bit.ly</option>
                                <option value="https://trimmo.link">trimmo.link</option>
                              </select>
                            </div>
                          </div>
                          <div className="md:pt-10 text-xl text-primarycolor font-medium">/</div>
                          <div className="p-2 md:w-[50%]">
                            <div className="relative">
                              <label className="leading-7 text-sm text-gray-600">
                                Custom back-half (optional)
                              </label>
                              <input
                                type="text"
                                id="shortCode"
                                value={shortCode}
                                onChange={(e) => setShortCode(e.target.value)}
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-2 w-full">
                        <p className="text-[13px]">
                          You can create 5 more custom back-halves this month.
                          <Link href={"#"} className="ml-2 hover:underline">
                            Upgrade for more.
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <GenerateQR settings={settings} setSettings={setSettings} destination={shortUrl} />
              </div>
            </section>
          </div>

          {/* bottom fixed section */}
          <div className="sticky bottom-0 flex items-center justify-between p-4 bg-white border-t">
            <button
              onClick={handleClose}
              className="box-border rounded bg-gray-200 px-5 py-2 text-[16px] font-medium text-black transition hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateShortLink}
              className="block bg-themeGreen rounded px-5 py-2 text-[16px] font-medium text-white transition hover:bg-green-700"
            >
              Create your link
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateLink;
