"use client";
import {
  createShortLink,
  getCustomizeQR,
  resetCreateShortLinkStatus,
} from "@/store/slices/customSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Lock } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import GenerateQR from "./GenerateQR";

function CreateLink() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { createShortLinkStatus, createShortLinkError, customizeQRData } = useSelector(
    (state) => state.customSlice,
  );
  const [destination, setDestination] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [domain, setDomain] = useState("");
  const [shortCode, setShortCode] = useState("");

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
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#ffffff" },
          { offset: 1, color: "#ffffff" },
        ],
      },
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

  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    if (createShortLinkStatus === "success") {
      router.push("/home");
      dispatch(resetCreateShortLinkStatus());
    }
  }, [createShortLinkStatus]);

  const handleChange = (e) => {
    setDomain(e.target.value);
  };

  useEffect(() => {
    if (customizeQRData?.customize) {
      setSettings((prev) => ({
        ...prev,
        ...customizeQRData.customize,
      }));
    }
  }, [customizeQRData]);

  const handleCreateShortLink = () => {
    if (!destination.trim()) {
      setError("Destination is required.");
      return;
    }
    setError("");
    const payload = {
      destination,
      title,
      domain,
      shortCode,
      qrcode: settings,
    };

    dispatch(createShortLink(payload));
  };

  useEffect(() => {
    setSettings((prev) => ({
      ...prev,
      data: destination,
    }));
  }, [destination]);

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  return (
    <>
      <div className="h-[93vh] flex flex-col w-full">
        <div className="flex-1 min-h-[200px] overflow-y-auto p-4 bg-gray-100 w-full md:w-[80%] xl:w-[60%] mx-auto">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-col  w-full mb-12">
                <div className="flex flex-col sm:flex-row justify-between  items-center">
                  <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
                    Create a link
                  </h1>
                  {/* <button className="box-border rounded bg-white px-4 py-2 text-sm leading-5 font-medium text-secondarycolor transition hover:bg-whitelight border flex items-center">
                    <FileUp className="mr-1 h-5 w-5" />
                    <span>Bulk upload</span>
                  </button> */}
                </div>
                <p className="text-[13px] mt-2">
                  You can create 5 more custom back-halves this month.
                  <Link href={"#"} className="ml-2 hover:underline ">
                    Upgrade for more.
                  </Link>
                </p>
              </div>
              <div className="w-full mx-auto bg-white p-5 rounded shadow-sm ">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                        Destination
                      </label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={destination}
                        // onChange={(e) => setDestination(e.target.value)} // Update state
                        onChange={(e) => handleDestination(e)} // Update state
                        placeholder="https://example.com/my-long-url"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      {/* Error Message */}
                      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                        Title (optional)
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // Update state
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-7">
                    <h2 className="text-2xl text-primarycolor font-semibold font-montserrat">
                      Short link
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="p-2 w-full md:w-[50%]">
                        <div className="relative">
                          <label
                            htmlFor="HeadlineAct"
                            className="leading-7 text-sm text-gray-600 flex items-baseline"
                          >
                            Domain
                            <Lock className="h-3 w-3 ml-1 fill-text-text-gray-600" />
                          </label>

                          <select
                            name="HeadlineAct"
                            id="HeadlineAct"
                            value={domain}
                            onChange={handleChange}
                            className="w-full h-10 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          >
                            <option value="">Please select</option>
                            <option value="JM">bit.ly</option>
                            <option value="SRV">trimmo.link</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:pt-10 text-xl text-primarycolor font-medium">/</div>
                      <div className="p-2 md:w-[50%]">
                        <div className="relative">
                          <label htmlFor="shortcode" className="leading-7 text-sm text-gray-600">
                            Custom back-half (optional)
                          </label>
                          <input
                            type="shortcode"
                            id="shortcode"
                            name="shortcode"
                            value={shortCode}
                            onChange={(e) => setShortCode(e.target.value)}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <p className="text-[13px]">
                      You can create 5 more custom back-halves this month.
                      <Link href={"#"} className="ml-2 hover:underline ">
                        Upgrade for more.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <GenerateQR settings={settings} setSettings={setSettings} destination={destination} />
            </div>
          </section>
        </div>

        {/* bottom fixed section */}
        <div className="sticky bottom-0 flex items-center justify-between p-4 bg-white border-t ">
          <button className="box-border rounded bg-whitelight px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-[#050505] transition hover:text-[#267e55] border hover:border-themeGreen">
            Cancel
          </button>
          <button
            onClick={() => handleCreateShortLink()}
            className="block bg-themeGreen  rounded px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-white transition hover:bg-[#267e55]"
          >
            Create your link
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateLink;
