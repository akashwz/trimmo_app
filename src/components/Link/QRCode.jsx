"use client";

import { customizeQR, getCustomizeQR } from "@/store/slices/customSlice";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Accordion from "./Accordion";

const QRCode = ({ settings, setSettings, showButton, destination }) => {
  const qrCodeRef = useRef(null);
  const qrCodeInstance = useRef(null);
  const dispatch = useDispatch();

  const [colorType, setColorType] = useState("single");
  const [gradientType, setGradientType] = useState("linear");
  const [gradientColors, setGradientColors] = useState({
    startColor: "#6B2A61",
    endColor: "#6B2A61",
  });
  const [rotation, setRotation] = useState(0);
  const [colorTypeCorner, setColorTypeCorner] = useState("single");
  const [gradientTypeCorner, setGradientTypeCorner] = useState("linear");
  const [gradientColorsCorner, setGradientColorsCorner] = useState({
    startColor: "#6B2A61",
    endColor: "#6B2A61",
  });
  const [rotationCorner, setRotationCorner] = useState(0);

  const [colorTypeCornerDot, setColorTypeCornerDot] = useState("single");
  const [gradientTypeCornerDot, setGradientTypeCornerDot] = useState("linear");
  const [gradientColorsCornerDot, setGradientColorsCornerDot] = useState({
    startColor: "#6B2A61",
    endColor: "#6B2A61",
  });
  const [rotationCornerDot, setRotationCornerDot] = useState(0);

  const [colorTypeBackground, setColorTypeBackground] = useState("single");
  const [gradientTypeBackground, setGradientTypeBackground] = useState("linear");
  const [gradientColorsBackground, setGradientColorsBackground] = useState({
    startColor: "#6B2A61",
    endColor: "#6B2A61",
  });
  const [rotationBackground, setRotationBackground] = useState(0);

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
    setColorType(type);
    if (type === "single") {
      handleNestedChange("dotsOptions", "color", gradientColors.startColor);
      handleNestedChange("dotsOptions", "gradient", null);
    } else {
      handleNestedChange("dotsOptions", "gradient", {
        type: gradientType,
        rotation,
        colorStops: [
          { offset: 0, color: gradientColors.startColor },
          { offset: 1, color: gradientColors.endColor },
        ],
      });
    }
  };

  const handleGradientColorChange = (key, value) => {
    setGradientColors((prev) => ({
      ...prev,
      [key]: value,
    }));

    handleNestedChange("dotsOptions", "gradient", {
      type: gradientType,
      rotation,
      colorStops: [
        { offset: 0, color: key === "startColor" ? value : gradientColors.startColor },
        { offset: 1, color: key === "endColor" ? value : gradientColors.endColor },
      ],
    });
  };

  const handleRotationChange = (value) => {
    setRotation(value);
    handleNestedChange("dotsOptions", "gradient", {
      type: gradientType,
      rotation: value,
      colorStops: [
        { offset: 0, color: gradientColors.startColor },
        { offset: 1, color: gradientColors.endColor },
      ],
    });
  };

  const handleGradientTypeChange = (type) => {
    setGradientType(type);

    setSettings((prev) => ({
      ...prev,
      dotsOptions: {
        ...prev.dotsOptions,
        gradient: {
          ...prev.dotsOptions.gradient,
          type,
          rotation,
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
    setColorTypeCorner(type);
    if (type === "single") {
      handleNestedChangeCorner("cornersSquareOptions", "color", gradientColorsCorner.startColor);
      handleNestedChangeCorner("cornersSquareOptions", "gradient", null);
    } else {
      handleNestedChangeCorner("cornersSquareOptions", "gradient", {
        type: gradientTypeCorner,
        rotation,
        colorStops: [
          { offset: 0, color: gradientColorsCorner.startColor },
          { offset: 1, color: gradientColorsCorner.endColor },
        ],
      });
    }
  };

  const handleGradientColorChangeCorner = (key, value) => {
    setGradientColorsCorner((prev) => ({
      ...prev,
      [key]: value,
    }));

    handleNestedChangeCorner("cornersSquareOptions", "gradient", {
      type: gradientTypeCorner,
      rotation,
      colorStops: [
        { offset: 0, color: key === "startColor" ? value : gradientColorsCorner.startColor },
        { offset: 1, color: key === "endColor" ? value : gradientColorsCorner.endColor },
      ],
    });
  };

  const handleRotationChangeCorner = (value) => {
    setRotationCorner(value);
    handleNestedChangeCorner("cornersSquareOptions", "gradient", {
      type: gradientTypeCorner,
      rotation: value,
      colorStops: [
        { offset: 0, color: gradientColorsCorner.startColor },
        { offset: 1, color: gradientColorsCorner.endColor },
      ],
    });
  };

  const handleGradientTypeChangeCorner = (type) => {
    setGradientTypeCorner(type);

    setSettings((prev) => ({
      ...prev,
      cornersSquareOptions: {
        ...prev.cornersSquareOptions,
        gradient: {
          ...prev.cornersSquareOptions.gradient,
          type,
          rotation,
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
    setColorTypeCornerDot(type);
    if (type === "single") {
      handleNestedChangeCornerDot("cornersDotOptions", "color", gradientColorsCornerDot.startColor);
      handleNestedChangeCornerDot("cornersDotOptions", "gradient", null);
    } else {
      handleNestedChangeCornerDot("cornersDotOptions", "gradient", {
        type: gradientTypeCornerDot,
        rotation,
        colorStops: [
          { offset: 0, color: gradientColorsCornerDot.startColor },
          { offset: 1, color: gradientColorsCornerDot.endColor },
        ],
      });
    }
  };

  const handleGradientColorChangeCornerDot = (key, value) => {
    setGradientColorsCornerDot((prev) => ({
      ...prev,
      [key]: value,
    }));

    handleNestedChangeCornerDot("cornersDotOptions", "gradient", {
      type: gradientTypeCornerDot,
      rotation,
      colorStops: [
        { offset: 0, color: key === "startColor" ? value : gradientColorsCornerDot.startColor },
        { offset: 1, color: key === "endColor" ? value : gradientColorsCornerDot.endColor },
      ],
    });
  };

  const handleRotationChangeCornerDot = (value) => {
    setRotationCornerDot(value);
    handleNestedChangeCornerDot("cornersDotOptions", "gradient", {
      type: gradientTypeCornerDot,
      rotation: value,
      colorStops: [
        { offset: 0, color: gradientColorsCornerDot.startColor },
        { offset: 1, color: gradientColorsCornerDot.endColor },
      ],
    });
  };

  const handleGradientTypeChangeCornerDot = (type) => {
    setGradientTypeCornerDot(type);

    setSettings((prev) => ({
      ...prev,
      cornersDotOptions: {
        ...prev.cornersDotOptions,
        gradient: {
          ...prev.cornersDotOptions.gradient,
          type,
          rotation,
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
    setColorTypeBackground(type);
    if (type === "single") {
      handleNestedChangeBackground(
        "backgroundOptions",
        "color",
        gradientColorsBackground.startColor,
      );
      handleNestedChangeBackground("backgroundOptions", "gradient", null);
    } else {
      handleNestedChangeBackground("backgroundOptions", "gradient", {
        type: gradientTypeBackground,
        rotation,
        colorStops: [
          { offset: 0, color: gradientColorsBackground.startColor },
          { offset: 1, color: gradientColorsBackground.endColor },
        ],
      });
    }
  };

  const handleGradientColorChangeBackground = (key, value) => {
    setGradientColorsBackground((prev) => ({
      ...prev,
      [key]: value,
    }));

    handleNestedChangeBackground("backgroundOptions", "gradient", {
      type: gradientTypeBackground,
      rotation,
      colorStops: [
        { offset: 0, color: key === "startColor" ? value : gradientColorsBackground.startColor },
        { offset: 1, color: key === "endColor" ? value : gradientColorsBackground.endColor },
      ],
    });
  };

  const handleRotationChangeBackground = (value) => {
    setRotationBackground(value);
    handleNestedChangeBackground("backgroundOptions", "gradient", {
      type: gradientTypeBackground,
      rotation: value,
      colorStops: [
        { offset: 0, color: gradientColorsBackground.startColor },
        { offset: 1, color: gradientColorsBackground.endColor },
      ],
    });
  };

  const handleGradientTypeChangeBackground = (type) => {
    setGradientTypeBackground(type);

    setSettings((prev) => ({
      ...prev,
      backgroundOptions: {
        ...prev.backgroundOptions,
        gradient: {
          ...prev.backgroundOptions.gradient,
          type,
          rotation,
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

        <div>
          <div
            ref={qrCodeRef}
            className="flex justify-center flex-col items-center rounded-lg p-4 mb-6"
          ></div>

          <Accordion title="Dots Settings">
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
                  checked={colorType === "single"}
                  onChange={() => handleColorTypeChange("single")}
                  className="mr-1"
                />
                Single Color
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="gradient"
                  checked={colorType === "gradient"}
                  onChange={() => handleColorTypeChange("gradient")}
                  className="mr-1"
                />
                Color Gradient
              </label>
            </div>

            {colorType === "single" && (
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

            {colorType === "gradient" && (
              <>
                <div className="flex gap-4 my-2">
                  <label className="block font-medium mb-1">Gradient Type</label>
                  <div className="flex gap-4 ">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="linear"
                        checked={gradientType === "linear"}
                        onChange={() => handleGradientTypeChange("linear")}
                        className="mr-1"
                      />
                      Linear
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="radial"
                        checked={gradientType === "radial"}
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
                    value={gradientColors.startColor}
                    onChange={(e) => handleGradientColorChange("startColor", e.target.value)}
                    className="border-2 border-gray-300 cursor-pointer"
                  />
                  <input
                    type="color"
                    value={gradientColors.endColor}
                    onChange={(e) => handleGradientColorChange("endColor", e.target.value)}
                    className="border-2 border-gray-300 cursor-pointer"
                  />
                </div>

                <label className="block font-medium mb-1">Rotation</label>
                <input
                  type="number"
                  value={rotation}
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
                  checked={colorTypeCorner === "single"}
                  onChange={() => handleColorTypeChangeCorner("single")}
                  className="mr-1"
                />
                Single Color
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="gradient"
                  checked={colorTypeCorner === "gradient"}
                  onChange={() => handleColorTypeChangeCorner("gradient")}
                  className="mr-1"
                />
                Color Gradient
              </label>
            </div>

            {colorTypeCorner === "single" && (
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

            {colorTypeCorner === "gradient" && (
              <>
                <div className="flex gap-4 my-2">
                  <label className="block font-medium mb-1">Gradient Type</label>
                  <div className="flex gap-4 ">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="linear"
                        checked={gradientTypeCorner === "linear"}
                        onChange={() => handleGradientTypeChangeCorner("linear")}
                        className="mr-1"
                      />
                      Linear
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="radial"
                        checked={gradientTypeCorner === "radial"}
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
                    value={gradientColorsCorner.startColor}
                    onChange={(e) => handleGradientColorChangeCorner("startColor", e.target.value)}
                    className="border-2 border-gray-300 cursor-pointer"
                  />
                  <input
                    type="color"
                    value={gradientColorsCorner.endColor}
                    onChange={(e) => handleGradientColorChangeCorner("endColor", e.target.value)}
                    className="border-2 border-gray-300 cursor-pointer"
                  />
                </div>

                <label className="block font-medium mb-1">Rotation</label>
                <input
                  type="number"
                  value={rotationCorner}
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
                  checked={colorTypeCornerDot === "single"}
                  onChange={() => handleColorTypeChangeCornerDot("single")}
                  className="mr-1"
                />
                Single Color
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="gradient"
                  checked={colorTypeCornerDot === "gradient"}
                  onChange={() => handleColorTypeChangeCornerDot("gradient")}
                  className="mr-1"
                />
                Color Gradient
              </label>
            </div>

            {colorTypeCornerDot === "single" && (
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

            {colorTypeCornerDot === "gradient" && (
              <>
                <div className="flex gap-4 my-2">
                  <label className="block font-medium mb-1">Gradient Type</label>
                  <div className="flex gap-4 ">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="linear"
                        checked={gradientTypeCornerDot === "linear"}
                        onChange={() => handleGradientTypeChangeCornerDot("linear")}
                        className="mr-1"
                      />
                      Linear
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="radial"
                        checked={gradientTypeCornerDot === "radial"}
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
                    value={gradientColorsCornerDot.startColor}
                    onChange={(e) =>
                      handleGradientColorChangeCornerDot("startColor", e.target.value)
                    }
                    className="border-2 border-gray-300 cursor-pointer"
                  />
                  <input
                    type="color"
                    value={gradientColorsCornerDot.endColor}
                    onChange={(e) => handleGradientColorChangeCornerDot("endColor", e.target.value)}
                    className="border-2 border-gray-300 cursor-pointer"
                  />
                </div>

                <label className="block font-medium mb-1">Rotation</label>
                <input
                  type="number"
                  value={rotationCornerDot}
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
                  checked={colorTypeBackground === "single"}
                  onChange={() => handleColorTypeChangeBackground("single")}
                  className="mr-1"
                />
                Single Color
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="gradient"
                  checked={colorTypeBackground === "gradient"}
                  onChange={() => handleColorTypeChangeBackground("gradient")}
                  className="mr-1"
                />
                Color Gradient
              </label>
            </div>

            {colorTypeBackground === "single" && (
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

            {colorTypeBackground === "gradient" && (
              <>
                <div className="flex gap-4 my-2">
                  <label className="block font-medium mb-1">Gradient Type</label>
                  <div className="flex gap-4 ">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="linear"
                        checked={gradientTypeBackground === "linear"}
                        onChange={() => handleGradientTypeChangeBackground("linear")}
                        className="mr-1"
                      />
                      Linear
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="radial"
                        checked={gradientTypeBackground === "radial"}
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
                    value={gradientColorsBackground.startColor}
                    onChange={(e) =>
                      handleGradientColorChangeBackground("startColor", e.target.value)
                    }
                    className="border-2 border-gray-300 cursor-pointer"
                  />
                  <input
                    type="color"
                    value={gradientColorsBackground.endColor}
                    onChange={(e) =>
                      handleGradientColorChangeBackground("endColor", e.target.value)
                    }
                    className="border-2 border-gray-300 cursor-pointer"
                  />
                </div>

                <label className="block font-medium mb-1">Rotation</label>
                <input
                  type="number"
                  value={rotationBackground}
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
              onChange={(e) => handleChangeHideBackgroundDots("imageSize", Number(e.target.value))}
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
              className="px-4 py-2 bg-green text-black rounded-lg shadow-md hover:bg-green-600"
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
        </div>
      </div>
    </div>
  );
};

export default QRCode;
