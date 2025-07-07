"use client";

import { customizeQR, getCustomizeQR, updateQrSetting } from "@/redux/slices/customSlice";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "./Accordion";

const QRCode = ({
  settings,
  setSettings,
  showButton,
  destination,
  handleGenerateClick,
  isGenerated,
}) => {
  const qrCodeRef = useRef(null);
  const qrCodeInstance = useRef(null);
  const dispatch = useDispatch();
  console.log(settings, "settings");
  const { customizeQRList, qr_setting } = useSelector((state) => state.customSlice);
  console.log(customizeQRList, "customizeQRList");
  console.log("qr_setting-=-=", qr_setting);
  const [message, setMessage] = useState("");

  useEffect(() => {
    qrCodeInstance.current = new QRCodeStyling(settings);

    if (qrCodeRef.current) {
      qrCodeInstance.current.append(qrCodeRef.current);
    }

    return () => {
      if (qrCodeRef.current) {
        qrCodeRef.current.innerHTML = "";
      }
    };
  }, []);

  useEffect(() => {
    if (qrCodeInstance.current) {
      qrCodeInstance.current.update(settings);
    }
  }, [settings]);

  const handleSeleteQR = (e) => {
    const selectedId = e.target.value;
    const selectedItem = customizeQRList.find((item) => item._id === selectedId);
    console.log(selectedItem, "selectedItem");
    setSettings(selectedItem?.customize);
  };

  const handleChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNestedChange = (key, nestedKey, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [nestedKey]: value,
      },
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileType = file.type;

      // Check if the uploaded file is an SVG
      if (fileType !== "image/svg+xml") {
        setMessage("Only SVG images are allowed.");
        return;
      }

      const reader = new FileReader();

      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setSettings((prev) => ({
          ...prev,
          image: imageUrl,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDownload = (format) => {
    if (qrCodeInstance.current) {
      qrCodeInstance.current.download({ name: "qr-code", extension: format });
    }
  };

  const handleColorTypeChange = (type) => {
    dispatch(
      updateQrSetting({
        parentKey: "colorType",
        subKey: null,
        value: type,
      }),
    );
    if (type === "single") {
      handleNestedChange("dotsOptions", "color", qr_setting.gradientColors?.startColor);
      handleNestedChange("dotsOptions", "gradient", null);
    } else {
      handleNestedChange("dotsOptions", "gradient", {
        type: qr_setting["gradientType"],
        rotation: qr_setting["rotation"],
        colorStops: [
          { offset: 0, color: qr_setting.gradientColors?.startColor },
          { offset: 1, color: qr_setting.gradientColors?.endColor },
        ],
      });
    }
  };

  const handleGradientColorChange = (key, value) => {
    dispatch(
      updateQrSetting({
        parentKey: "gradientColors",
        subKey: key,
        value: value,
      }),
    );

    handleNestedChange("dotsOptions", "gradient", {
      type: qr_setting["gradientType"],
      rotation: qr_setting["rotation"],
      colorStops: [
        { offset: 0, color: key === "startColor" ? value : qr_setting.gradientColors?.startColor },
        { offset: 1, color: key === "endColor" ? value : qr_setting.gradientColors?.endColor },
      ],
    });
  };

  const handleRotationChange = (value) => {
    dispatch(
      updateQrSetting({
        parentKey: "rotation",
        subKey: null,
        value: value,
      }),
    );
    handleNestedChange("dotsOptions", "gradient", {
      type: qr_setting["gradientType"],
      rotation: value,
      colorStops: [
        { offset: 0, color: qr_setting.gradientColors?.startColor },
        { offset: 1, color: qr_setting.gradientColors?.endColor },
      ],
    });
  };

  const handleGradientTypeChange = (type) => {
    console.log(type, "type=-=>");
    dispatch(
      updateQrSetting({
        parentKey: "gradientType",
        subKey: null,
        value: type,
      }),
    );
    setSettings((prev) => ({
      ...prev,
      dotsOptions: {
        ...prev.dotsOptions,
        gradient: {
          ...prev.dotsOptions.gradient,
          type,
          rotation: qr_setting["rotation"],
        },
      },
    }));
  };

  const handleNestedChangeCorner = (key, nestedKey, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [nestedKey]: value,
      },
    }));
  };

  const handleColorTypeChangeCorner = (type) => {
    dispatch(
      updateQrSetting({
        parentKey: "colorTypeCorner",
        subKey: null,
        value: type,
      }),
    );
    if (type === "single") {
      handleNestedChangeCorner(
        "cornersSquareOptions",
        "color",
        qr_setting?.gradientColorsCorner?.startColor,
      );
      handleNestedChangeCorner("cornersSquareOptions", "gradient", null);
    } else {
      handleNestedChangeCorner("cornersSquareOptions", "gradient", {
        type: qr_setting["gradientTypeCorner"],
        rotation: qr_setting["rotationCornerDot"], // use correct rotation for corner
        colorStops: [
          { offset: 0, color: qr_setting?.gradientColorsCorner?.startColor },
          { offset: 1, color: qr_setting?.gradientColorsCorner?.endColor },
        ],
      });
    }
  };

  const handleGradientColorChangeCorner = (key, value) => {
    dispatch(
      updateQrSetting({
        parentKey: "gradientColorsCorner",
        subKey: key,
        value: value,
      }),
    );

    handleNestedChangeCorner("cornersSquareOptions", "gradient", {
      type: qr_setting["gradientTypeCorner"],
      rotation: qr_setting["rotation"],
      colorStops: [
        {
          offset: 0,
          color: key === "startColor" ? value : qr_setting?.gradientColorsCorner?.startColor,
        },
        {
          offset: 1,
          color: key === "endColor" ? value : qr_setting?.gradientColorsCorner?.endColor,
        },
      ],
    });
  };

  const handleRotationChangeCorner = (value) => {
    dispatch(
      updateQrSetting({
        parentKey: "rotationCorner",
        subKey: null,
        value: value,
      }),
    );
    handleNestedChangeCorner("cornersSquareOptions", "gradient", {
      type: qr_setting["gradientTypeCorner"],
      rotation: value,
      colorStops: [
        { offset: 0, color: qr_setting?.gradientColorsCorner?.startColor },
        { offset: 1, color: qr_setting?.gradientColorsCorner?.endColor },
      ],
    });
  };

  const handleGradientTypeChangeCorner = (type) => {
    dispatch(
      updateQrSetting({
        parentKey: "gradientTypeCorner",
        subKey: null,
        value: type,
      }),
    );

    setSettings((prev) => ({
      ...prev,
      cornersSquareOptions: {
        ...prev.cornersSquareOptions,
        gradient: {
          ...prev.cornersSquareOptions.gradient,
          type,
          rotation: qr_setting["rotation"],
        },
      },
    }));
  };

  const handleNestedChangeCornerDot = (key, nestedKey, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [nestedKey]: value,
      },
    }));
  };

  const handleColorTypeChangeCornerDot = (type) => {
    dispatch(
      updateQrSetting({
        parentKey: "colorTypeCornerDot",
        subKey: null,
        value: type,
      }),
    );
    if (type === "single") {
      handleNestedChangeCornerDot(
        "cornersDotOptions",
        "color",
        qr_setting?.gradientColorsCornerDot.startColor,
      );
      handleNestedChangeCornerDot("cornersDotOptions", "gradient", null);
    } else {
      handleNestedChangeCornerDot("cornersDotOptions", "gradient", {
        type: qr_setting?.gradientTypeCornerDot,
        rotation: qr_setting["rotation"],
        colorStops: [
          { offset: 0, color: qr_setting?.gradientColorsCornerDot.startColor },
          { offset: 1, color: qr_setting?.gradientColorsCornerDot.endColor },
        ],
      });
    }
  };

  const handleGradientColorChangeCornerDot = (key, value) => {
    dispatch(
      updateQrSetting({
        parentKey: "gradientColorsCornerDot",
        subKey: key,
        value: value,
      }),
    );

    handleNestedChangeCornerDot("cornersDotOptions", "gradient", {
      type: qr_setting?.gradientTypeCornerDot,
      rotation: qr_setting["rotation"],
      colorStops: [
        {
          offset: 0,
          color: key === "startColor" ? value : qr_setting?.gradientColorsCornerDot.startColor,
        },
        {
          offset: 1,
          color: key === "endColor" ? value : qr_setting?.gradientColorsCornerDot.endColor,
        },
      ],
    });
  };

  const handleRotationChangeCornerDot = (value) => {
    dispatch(
      updateQrSetting({
        parentKey: "rotationCornerDot",
        subKey: null,
        value: value,
      }),
    );
    handleNestedChangeCornerDot("cornersDotOptions", "gradient", {
      type: qr_setting?.gradientTypeCornerDot,
      rotation: value,
      colorStops: [
        { offset: 0, color: qr_setting?.gradientColorsCornerDot.startColor },
        { offset: 1, color: qr_setting?.gradientColorsCornerDot.endColor },
      ],
    });
  };

  const handleGradientTypeChangeCornerDot = (type) => {
    dispatch(
      updateQrSetting({
        parentKey: "gradientTypeCornerDot",
        subKey: null,
        value: type,
      }),
    );

    setSettings((prev) => ({
      ...prev,
      cornersDotOptions: {
        ...prev.cornersDotOptions,
        gradient: {
          ...prev.cornersDotOptions.gradient,
          type,
          rotation: qr_setting["rotation"],
        },
      },
    }));
  };

  const handleNestedChangeBackground = (key, nestedKey, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [nestedKey]: value,
      },
    }));
  };

  const handleColorTypeChangeBackground = (type) => {
    dispatch(
      updateQrSetting({
        parentKey: "colorTypeBackground",
        subKey: null,
        value: type,
      }),
    );
    if (type === "single") {
      handleNestedChangeBackground(
        "backgroundOptions",
        "color",
        qr_setting?.gradientColorsBackground.startColor,
      );
      handleNestedChangeBackground("backgroundOptions", "gradient", null);
    } else {
      handleNestedChangeBackground("backgroundOptions", "gradient", {
        type: qr_setting?.gradientTypeBackground,
        rotation: qr_setting["rotation"],
        colorStops: [
          { offset: 0, color: qr_setting?.gradientColorsBackground.startColor },
          { offset: 1, color: qr_setting?.gradientColorsBackground.endColor },
        ],
      });
    }
  };

  const handleGradientColorChangeBackground = (key, value) => {
    dispatch(
      updateQrSetting({
        parentKey: "gradientColorsBackground",
        subKey: key,
        value: value,
      }),
    );

    handleNestedChangeBackground("backgroundOptions", "gradient", {
      type: qr_setting?.gradientTypeBackground,
      rotation: qr_setting["rotation"],
      colorStops: [
        {
          offset: 0,
          color: key === "startColor" ? value : qr_setting?.gradientColorsBackground.startColor,
        },
        {
          offset: 1,
          color: key === "endColor" ? value : qr_setting?.gradientColorsBackground.endColor,
        },
      ],
    });
  };

  const handleRotationChangeBackground = (value) => {
    dispatch(
      updateQrSetting({
        parentKey: "rotationBackground",
        subKey: null,
        value: value,
      }),
    );
    handleNestedChangeBackground("backgroundOptions", "gradient", {
      type: qr_setting?.gradientTypeBackground,
      rotation: value,
      colorStops: [
        { offset: 0, color: qr_setting?.gradientColorsBackground.startColor },
        { offset: 1, color: qr_setting?.gradientColorsBackground.endColor },
      ],
    });
  };

  const handleGradientTypeChangeBackground = (type) => {
    dispatch(
      updateQrSetting({
        parentKey: "gradientTypeBackground",
        subKey: null,
        value: type,
      }),
    );

    setSettings((prev) => ({
      ...prev,
      backgroundOptions: {
        ...prev.backgroundOptions,
        gradient: {
          ...prev.backgroundOptions.gradient,
          type,
          rotation: qr_setting["rotation"],
        },
      },
    }));
  };

  const handleChangeHideBackgroundDots = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      imageOptions: {
        ...prev.imageOptions,
        [key]: value,
      },
    }));
  };

  const handleHideBackgroundDots = (value) => {
    setSettings((prev) => ({
      ...prev,
      imageOptions: {
        ...prev.imageOptions,
        hideBackgroundDots: value,
      },
    }));
  };

  const handleChangeQROption = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      qrOptions: {
        ...prev.qrOptions,
        [key]: value,
      },
    }));
  };

  const customizeScanner = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    const payload = {
      customize: settings,
      is_default: true,
      name: `customizeQR-${randomNumber}`,
    };
    dispatch(customizeQR(payload));
    dispatch(getCustomizeQR());
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl p-4 max-w-xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 QR Code Generator</h2>
        <div className="flex justify-end">
          <select
            onChange={handleSeleteQR}
            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">-- Select --</option>
            {customizeQRList?.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div>
            <div className="relative flex items-center justify-center">
              <div
                ref={qrCodeRef}
                className={`flex justify-center flex-col items-center rounded-lg p-4 mb-6 transition-all duration-500 ${
                  isGenerated ? "blur-0" : "blur-sm"
                }`}
              ></div>
              {!isGenerated && (
                <button
                  onClick={handleGenerateClick}
                  className="absolute bg-black text-white px-6 py-4 rounded-md text-sm"
                >
                  Generate QR
                </button>
              )}
            </div>
          </div>

          {isGenerated && (
            <>
              <Accordion title="Logo">
                <div className="grid grid-cols-2 gap-4">
                  {/* <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-1">QR Code Data</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => handleChange("data", e.target.value)}
                  placeholder="Enter data (e.g., URL)"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition duration-200"
                />
              </div> */}

                  <div className="col-span-2">
                    <label className="block text-gray-700 font-medium mb-1">Upload Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
                    />
                    <p className="text-sm text-red-600">{message}</p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Width</label>
                    <input
                      type="number"
                      value={settings?.width}
                      onChange={(e) => handleChange("width", Number(e.target.value))}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Height</label>
                    <input
                      type="number"
                      value={settings?.height}
                      onChange={(e) => handleChange("height", Number(e.target.value))}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Margin</label>
                    <input
                      type="number"
                      value={settings?.margin}
                      onChange={(e) => handleChange("margin", Number(e.target.value))}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                </div>
              </Accordion>

              <Accordion title="Dots Settings">
                <label className="block font-medium mb-1">Dots Style</label>
                <select
                  value={settings?.dotsOptions?.type}
                  onChange={(e) => handleNestedChange("dotsOptions", "type", e.target.value)}
                  className="border rounded-lg px-4 py-2 mb-4 w-full"
                >
                  <option value="square">Square</option>
                  <option value="dots">Dots</option>
                  <option value="rounded">Rounded</option>
                  <option value="classy">Classy</option>
                  <option value="classy-rounded">Classy Rounded</option>
                </select>

                <div className="flex gap-4">
                  <label className="block font-medium mb-1">Color Type</label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="single"
                      checked={qr_setting["colorType"] === "single"}
                      onChange={() => handleColorTypeChange("single")}
                      className="mr-1"
                    />
                    Single Color
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="gradient"
                      checked={qr_setting["colorType"] === "gradient"}
                      onChange={() => handleColorTypeChange("gradient")}
                      className="mr-1"
                    />
                    Color Gradient
                  </label>
                </div>

                {qr_setting["colorType"] === "single" && (
                  <>
                    <div className="flex gap-4">
                      <label className="block text-gray-700 font-medium mb-1">Dots Color</label>
                      <input
                        type="color"
                        value={settings?.dotsOptions?.color}
                        onChange={(e) => handleNestedChange("dotsOptions", "color", e.target.value)}
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                    </div>
                  </>
                )}

                {qr_setting["colorType"] === "gradient" && (
                  <>
                    <div className="flex gap-4 my-2">
                      <label className="block font-medium mb-1">Gradient Type</label>
                      <div className="flex gap-4 ">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="linear"
                            checked={qr_setting["gradientType"] === "linear"}
                            onChange={() => handleGradientTypeChange("linear")}
                            className="mr-1"
                          />
                          Linear
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="radial"
                            checked={qr_setting["gradientType"] === "radial"}
                            onChange={() => handleGradientTypeChange("radial")}
                            className="mr-1"
                          />
                          Radial
                        </label>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <label className="block font-medium mb-1">Dots Gradient</label>
                      <input
                        type="color"
                        value={qr_setting.gradientColors?.startColor}
                        onChange={(e) => handleGradientColorChange("startColor", e.target.value)}
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                      <input
                        type="color"
                        value={qr_setting.gradientColors?.endColor}
                        onChange={(e) => handleGradientColorChange("endColor", e.target.value)}
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                    </div>

                    <label className="block font-medium mb-1">Rotation</label>
                    <input
                      type="number"
                      value={qr_setting["rotation"]}
                      onChange={(e) => handleRotationChange(Number(e.target.value))}
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                  </>
                )}
              </Accordion>

              <Accordion title="Corners Square Options">
                <label className="block font-medium mb-1">Corners Square Style</label>
                <select
                  value={settings?.cornersSquareOptions?.type}
                  onChange={(e) =>
                    handleNestedChangeCorner("cornersSquareOptions", "type", e.target.value)
                  }
                  className="border rounded-lg px-4 py-2 mb-4 w-full"
                >
                  <option value="none">None</option>
                  <option value="square">Square</option>
                  <option value="dot">Dot</option>
                  <option value="extra-rounded">Extra Rounded</option>
                </select>

                <div className="flex gap-4">
                  <label className="block font-medium mb-1">Color Type</label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="single"
                      checked={qr_setting?.["colorTypeCorner"] === "single"}
                      onChange={() => handleColorTypeChangeCorner("single")}
                      className="mr-1"
                    />
                    Single Color
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="gradient"
                      checked={qr_setting?.["colorTypeCorner"] === "gradient"}
                      onChange={() => handleColorTypeChangeCorner("gradient")}
                      className="mr-1"
                    />
                    Color Gradient
                  </label>
                </div>

                {qr_setting?.["colorTypeCorner"] === "single" && (
                  <>
                    <div className="flex gap-4">
                      <label className="block text-gray-700 font-medium mb-1">Dots Color</label>
                      <input
                        type="color"
                        value={settings?.cornersSquareOptions?.color}
                        onChange={(e) =>
                          handleNestedChangeCorner("cornersSquareOptions", "color", e.target.value)
                        }
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                    </div>
                  </>
                )}

                {qr_setting?.["colorTypeCorner"] === "gradient" && (
                  <>
                    <div className="flex gap-4 my-2">
                      <label className="block font-medium mb-1">Gradient Type</label>
                      <div className="flex gap-4 ">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="linear"
                            checked={qr_setting["gradientTypeCorner"] === "linear"}
                            onChange={() => handleGradientTypeChangeCorner("linear")}
                            className="mr-1"
                          />
                          Linear
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="radial"
                            checked={qr_setting["gradientTypeCorner"] === "radial"}
                            onChange={() => handleGradientTypeChangeCorner("radial")}
                            className="mr-1"
                          />
                          Radial
                        </label>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <label className="block font-medium mb-1">Dots Gradient</label>
                      <input
                        type="color"
                        value={qr_setting?.gradientColorsCorner?.startColor}
                        onChange={(e) =>
                          handleGradientColorChangeCorner("startColor", e.target.value)
                        }
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                      <input
                        type="color"
                        value={qr_setting?.gradientColorsCorner?.endColor}
                        onChange={(e) =>
                          handleGradientColorChangeCorner("endColor", e.target.value)
                        }
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                    </div>

                    <label className="block font-medium mb-1">Rotation</label>
                    <input
                      type="number"
                      value={qr_setting?.rotationCorner}
                      onChange={(e) => handleRotationChangeCorner(Number(e.target.value))}
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                  </>
                )}
              </Accordion>

              <Accordion title="Corners Dot Options">
                <label className="block font-medium mb-1">Corners Dot Style</label>
                <select
                  value={settings?.cornersDotOptions?.type}
                  onChange={(e) =>
                    handleNestedChangeCornerDot("cornersDotOptions", "type", e.target.value)
                  }
                  className="border rounded-lg px-4 py-2 mb-4 w-full"
                >
                  <option value="none">None</option>
                  <option value="square">Square</option>
                  <option value="dot">Dot</option>
                </select>

                <div className="flex gap-4">
                  <label className="block font-medium mb-1">Color Type</label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="single"
                      checked={qr_setting?.colorTypeCornerDot === "single"}
                      onChange={() => handleColorTypeChangeCornerDot("single")}
                      className="mr-1"
                    />
                    Single Color
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="gradient"
                      checked={qr_setting?.colorTypeCornerDot === "gradient"}
                      onChange={() => handleColorTypeChangeCornerDot("gradient")}
                      className="mr-1"
                    />
                    Color Gradient
                  </label>
                </div>

                {qr_setting?.colorTypeCornerDot === "single" && (
                  <>
                    <div className="flex gap-4">
                      <label className="block text-gray-700 font-medium mb-1">Dots Color</label>
                      <input
                        type="color"
                        value={settings?.cornersDotOptions?.color}
                        onChange={(e) =>
                          handleNestedChangeCornerDot("cornersDotOptions", "color", e.target.value)
                        }
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                    </div>
                  </>
                )}

                {qr_setting?.colorTypeCornerDot === "gradient" && (
                  <>
                    <div className="flex gap-4 my-2">
                      <label className="block font-medium mb-1">Gradient Type</label>
                      <div className="flex gap-4 ">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="linear"
                            checked={qr_setting?.gradientTypeCornerDot === "linear"}
                            onChange={() => handleGradientTypeChangeCornerDot("linear")}
                            className="mr-1"
                          />
                          Linear
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="radial"
                            checked={qr_setting?.gradientTypeCornerDot === "radial"}
                            onChange={() => handleGradientTypeChangeCornerDot("radial")}
                            className="mr-1"
                          />
                          Radial
                        </label>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <label className="block font-medium mb-1">Dots Gradient</label>
                      <input
                        type="color"
                        value={qr_setting?.gradientColorsCornerDot.startColor}
                        onChange={(e) =>
                          handleGradientColorChangeCornerDot("startColor", e.target.value)
                        }
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                      <input
                        type="color"
                        value={qr_setting?.gradientColorsCornerDot.endColor}
                        onChange={(e) =>
                          handleGradientColorChangeCornerDot("endColor", e.target.value)
                        }
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                    </div>

                    <label className="block font-medium mb-1">Rotation</label>
                    <input
                      type="number"
                      value={qr_setting?.rotationCornerDot}
                      onChange={(e) => handleRotationChangeCornerDot(Number(e.target.value))}
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                  </>
                )}
              </Accordion>

              <Accordion title="Background Options">
                <div className="flex gap-4">
                  <label className="block font-medium mb-1">Color Type</label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="single"
                      checked={qr_setting?.colorTypeBackground === "single"}
                      onChange={() => handleColorTypeChangeBackground("single")}
                      className="mr-1"
                    />
                    Single Color
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="gradient"
                      checked={qr_setting?.colorTypeBackground === "gradient"}
                      onChange={() => handleColorTypeChangeBackground("gradient")}
                      className="mr-1"
                    />
                    Color Gradient
                  </label>
                </div>

                {qr_setting?.colorTypeBackground === "single" && (
                  <>
                    <div className="flex gap-4">
                      <label className="block text-gray-700 font-medium mb-1">Dots Color</label>
                      <input
                        type="color"
                        value={settings?.backgroundOptions?.color}
                        onChange={(e) =>
                          handleNestedChangeBackground("backgroundOptions", "color", e.target.value)
                        }
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                    </div>
                  </>
                )}

                {qr_setting?.colorTypeBackground === "gradient" && (
                  <>
                    <div className="flex gap-4 my-2">
                      <label className="block font-medium mb-1">Gradient Type</label>
                      <div className="flex gap-4 ">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="linear"
                            checked={qr_setting?.gradientTypeBackground === "linear"}
                            onChange={() => handleGradientTypeChangeBackground("linear")}
                            className="mr-1"
                          />
                          Linear
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            value="radial"
                            checked={qr_setting?.gradientTypeBackground === "radial"}
                            onChange={() => handleGradientTypeChangeBackground("radial")}
                            className="mr-1"
                          />
                          Radial
                        </label>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <label className="block font-medium mb-1">Dots Gradient</label>
                      <input
                        type="color"
                        value={qr_setting?.gradientColorsBackground.startColor}
                        onChange={(e) =>
                          handleGradientColorChangeBackground("startColor", e.target.value)
                        }
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                      <input
                        type="color"
                        value={qr_setting?.gradientColorsBackground.endColor}
                        onChange={(e) =>
                          handleGradientColorChangeBackground("endColor", e.target.value)
                        }
                        className="border-2 border-gray-300 cursor-pointer"
                      />
                    </div>

                    <label className="block font-medium mb-1">Rotation</label>
                    <input
                      type="number"
                      value={qr_setting?.rotationBackground}
                      onChange={(e) => handleRotationChangeBackground(Number(e.target.value))}
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                  </>
                )}
              </Accordion>

              <Accordion title="Image Options">
                <div className="flex items-center gap-2 cursor-pointer">
                  <label className="block font-medium">Hide Background Dots</label>
                  <input
                    type="checkbox"
                    checked={settings?.imageOptions?.hideBackgroundDots}
                    onChange={(e) => handleHideBackgroundDots(e.target.checked)}
                    className="border rounded-lg w-5 h-5"
                  />
                </div>

                <label className="block font-medium my-2">ImageSize</label>
                <input
                  type="number"
                  value={settings?.imageOptions?.imageSize}
                  onChange={(e) =>
                    handleChangeHideBackgroundDots("imageSize", Number(e.target.value))
                  }
                  className="border rounded-lg px-4 py-2 w-full"
                  step="0.1"
                  min="0"
                  max="1"
                />
                <label className="block font-medium my-2">Margin</label>
                <input
                  type="number"
                  value={settings?.imageOptions?.margin}
                  onChange={(e) => handleChangeHideBackgroundDots("margin", Number(e.target.value))}
                  className="border rounded-lg px-4 py-2 w-full"
                />
              </Accordion>

              <Accordion title="QR Options">
                {/* <div className="mb-4">
              <label className="block font-medium">Type Number</label>
              <input
                type="number"
                value={settings.qrOptions.typeNumber}
                onChange={(e) => handleChangeQROption("typeNumber", Number(e.target.value))}
                className="border rounded-lg px-4 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Mode</label>
              <select
                value={settings.qrOptions.mode}
                onChange={(e) => handleChangeQROption("mode", e.target.value)}
                className="border rounded-lg px-4 py-2 w-full"
              >
                <option value="Byte">Byte</option>
                <option value="Numeric">Numeric</option>
                <option value="Alphanumeric">Alphanumeric</option>
                <option value="Kanji">Kanji</option>
              </select>
            </div> */}

                <div>
                  <label className="block font-medium">Error Correction Level</label>
                  <select
                    value={settings?.qrOptions?.errorCorrectionLevel}
                    onChange={(e) => handleChangeQROption("errorCorrectionLevel", e.target.value)}
                    className="border rounded-lg px-4 py-2 w-full"
                  >
                    <option value="L">L (Low)</option>
                    <option value="M">M (Medium)</option>
                    <option value="Q">Q (Quartile)</option>
                    <option value="H">H (High)</option>
                  </select>
                </div>
              </Accordion>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => handleDownload("png")}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                >
                  Download PNG
                </button>
                <button
                  onClick={() => handleDownload("svg")}
                  className="px-4 py-2 bg-themeGreen text-black rounded-lg shadow-md hover:bg-green-600"
                >
                  Download SVG
                </button>
              </div>
              {showButton && (
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => customizeScanner()}
                    className="px-4 py-2 border-black text-black rounded-lg shadow-md hover:bg-green-600"
                  >
                    Default Customize QRCode
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCode;
