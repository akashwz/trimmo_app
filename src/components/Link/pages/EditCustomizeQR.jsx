"use client";
import {
  editCustomizeQr,
  getCustomizeQrById,
  resetEditCustomizeQrStatus,
} from "@/store/slices/customSlice";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "../QRCode";

function EditCustomizeQR() {
  const params = useParams();
  const linkId = params?.id;
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    customizeQrByIdStatus,
    customizeQrByIdData,
    customizeQrByIdError,
    editCustomizeQrStatus,
  } = useSelector((state) => state.customSlice);
  const [title, setTitle] = useState("");
  const [settings, setSettings] = useState({
    width: 300,
    height: 300,
    margin: 10,
    type: "svg",
    data: "https://qr-code-styling.com",
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
  });

  useEffect(() => {
    dispatch(getCustomizeQrById(linkId));
  }, []);

  useEffect(() => {
    if (customizeQrByIdData) {
      setSettings(customizeQrByIdData?.customize);
    }
    setTitle(customizeQrByIdData?.name || "");
  }, [customizeQrByIdData]);

  useEffect(() => {
    if (editCustomizeQrStatus === "success") {
      router.push("/customizeqr");
      dispatch(resetEditCustomizeQrStatus());
    }
  }, [editCustomizeQrStatus]);

  const handleEditCustomizeQR = () => {
    const payload = {
      id: linkId,
      customize: settings,
      is_default: true,
      name: title,
    };
    dispatch(editCustomizeQr(payload));
  };
  return (
    <>
      <div className="h-[93vh] flex flex-col w-full">
        <div className="flex-1 min-h-[200px] overflow-y-auto p-4 bg-gray-100 w-full md:w-[80%] xl:w-[60%] mx-auto">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-col  w-full mb-12">
                <div className="flex flex-col sm:flex-row justify-between  items-center">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Edit a Customize QR
                  </h1>
                </div>
                <p className="text-[13px] mt-2">
                  You can create 5 more custom back-halves this month.
                  <Link href={"#"} className="ml-2 hover:underline ">
                    Upgrade for more.
                  </Link>
                </p>
              </div>
              <div className="w-full bg-white p-5 rounded shadow-sm mt-4">
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
                <QRCode settings={settings} setSettings={setSettings} />
              </div>
            </div>
          </section>
        </div>

        {/* bottom fixed section */}
        <div className="sticky bottom-0 flex items-center justify-between p-4 bg-white border-t ">
          <button
            onClick={() => router.push("/customizeqr")}
            className="box-border rounded bg-whitelight px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-[#050505] transition hover:text-[#267e55] border hover:border-green"
          >
            Cancel
          </button>
          <button
            onClick={handleEditCustomizeQR}
            className="block bg-green  rounded px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-white transition hover:bg-[#267e55]"
          >
            Edit your link
          </button>
        </div>
      </div>
    </>
  );
}

export default EditCustomizeQR;
