"use client";
import {
  editShortLink,
  getAllShortLinks,
  getShortLinkById,
  resetEditShortLinkStatus,
} from "@/redux/slices/customSlice";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Lock } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "../QRCode";

function EditLink() {
  const params = useParams();
  const linkId = params?.id;
  const dispatch = useDispatch();
  const router = useRouter();
  const { shortLinkByIdData, editShortLinkStatus } = useSelector((state) => state.customSlice);

  const [destination, setDestination] = useState("");
  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState("");
  const [shortcode, setShortCode] = useState("");
  const [error, setError] = useState("");
  const [settings, setSettings] = useState(null);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateClick = () => {
    setIsGenerated(true);
    setDestination(shortLinkByIdData?.destination);
  };

  useEffect(() => {
    dispatch(getShortLinkById(linkId));
  }, []);

  useEffect(() => {
    if (shortLinkByIdData) {
      setDestination(shortLinkByIdData?.destination);
      setTitle(shortLinkByIdData?.title || "");
      setDomain(shortLinkByIdData?.domain || "");
      setShortCode(shortLinkByIdData?.shortcode || "");
      setSettings((prevSettings) => ({
        ...prevSettings,
        data: shortLinkByIdData?.shorturl || "",
        ...shortLinkByIdData?.qrcode,
      }));
      setIsGenerated(shortLinkByIdData?.qrcode);
    }
  }, [shortLinkByIdData]);
  useEffect(() => {
    if (editShortLinkStatus === "success") {
      router.push("/link/home");
      dispatch(resetEditShortLinkStatus());
    }
  }, [editShortLinkStatus]);

  const handleEditShortLink = async () => {
    if (!destination.trim()) {
      setError("Destination is required.");
      return;
    }
    setError("");
    const payload = {
      id: linkId,
      destination,
      title,
      qrcode: settings,
      domain,
      shortcode,
    };

    await dispatch(editShortLink(payload));
    const payloadData = {
      page: 1,
      limit: "all",
    };
    await dispatch(getAllShortLinks(payloadData));
  };

  useEffect(() => {
    setSettings((prev) => ({
      ...prev,
      data: `${domain}/${shortcode}`,
    }));
  }, [domain, shortcode]);

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };
  return (
    <>
      <div className="min-h-[200px] overflow-y-auto flex flex-col w-full">
        <div className="flex-1 p-4 bg-gray-100 w-full md:w-[80%] xl:w-[60%] mx-auto">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-col  w-full mb-12">
                <div className="flex flex-col sm:flex-row justify-between  items-center">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Edit a link
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
                        // onChange={(e) => setDestination(e.target.value)}
                        onChange={(e) => handleDestination(e)}
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
                        onChange={(e) => setTitle(e.target.value)}
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
                            <Lock className="h-3 w-3 ml-1 fill-text-text-gray-600 " />
                          </label>

                          <select
                            name="HeadlineAct"
                            id="HeadlineAct"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            className="w-full h-10 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          >
                            <option value="">Please select</option>
                            <option value="https://bit.ly">bit.ly</option>
                            <option value="https://trimmo.link">trimmo.link</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:pt-10 text-xl text-primarycolor font-medium">/</div>
                      <div className="p-2 md:w-[50%]">
                        <div className="relative">
                          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Custom back-half (optional)
                          </label>
                          <input
                            type="text"
                            id="shortcode"
                            value={shortcode}
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
                      <Link href={"#"} className="ml-2 hover:underline ">
                        Upgrade for more.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white p-5 rounded shadow-sm mt-4">
                <QRCode
                  settings={settings}
                  setSettings={setSettings}
                  handleGenerateClick={handleGenerateClick}
                  isGenerated={isGenerated}
                />
              </div>
            </div>
          </section>
        </div>

        {/* bottom fixed section */}
        <div className="sticky bottom-0 flex items-center justify-between p-4 bg-white border-t ">
          <button
            onClick={() => router.push("/link/home")}
            className="box-border rounded bg-whitelight px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-[#050505] transition hover:text-[#267e55] border hover:border-themeGreen"
          >
            Cancel
          </button>
          <button
            onClick={handleEditShortLink}
            className="block bg-themeGreen  rounded px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-white transition hover:bg-[#267e55]"
          >
            Edit your link
          </button>
        </div>
      </div>
    </>
  );
}

export default EditLink;
