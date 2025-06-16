"use client";
import React, { useEffect, useState } from "react";
import ColorPicker from "../Color/ColorPicker";

const SeparatorFormComponent = ({ setAddDefaultApp, widgetData }) => {
  const editData = widgetData?.content ? JSON.parse(widgetData?.content) : null;
  const [lineType, setLineType] = useState(editData?.content?.lineType || "solid");
  const [lineColor, setLineColor] = useState(String(editData?.lineColor || "#000000"));
  const [lineWidth, setLineWidth] = useState(editData?.lineWidth || 100);
  const [lineHeight, setLineHeight] = useState(editData?.lineHeight || 5);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const updatedUrl = JSON.stringify({ lineType, lineColor, lineWidth, lineHeight });
    setAddDefaultApp((prev) => ({ ...prev, content: updatedUrl }));
  }, [lineType, lineColor, lineWidth, lineHeight, setAddDefaultApp]);

  const handleLineColorChange = (color) => {
    setLineColor(color);
  };

  const handleColorInputChange = (e) => {
    const input = e.target.value.replace(/[^0-9A-Fa-f]/g, ""); // Keep only hex characters
    setLineColor("#" + input);
  };

  return (
    <div className="bg-white border rounded-lg px-8 py-3 mx-auto my-2 w-full">
      <form>
        {/* Line Style */}
        <div className="mb-4">
          <div className="mt-2 text-start">Separator Style</div>
          <select
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 mt-1"
            value={lineType}
            onChange={(e) => setLineType(e.target.value)}
          >
            <option value="solid">Solid</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
            <option value="double">Double</option>
          </select>
        </div>

        <div className="mt-2 text-start">Separator color</div>
        <div className="flex gap-3 mt-2">
      <div
        className="w-[35px] shadow h-[35px] rounded-[6px] cursor-pointer"
        style={{
          backgroundColor: lineColor,
        }}
        onClick={() => setShowColorPicker(!showColorPicker)}
      ></div>
      <input
        type="text"
        value={typeof lineColor === "string" ? lineColor.replace("#", "") : ""}
        onChange={handleColorInputChange}
        className="cursor-pointer flex items-center border main-border-color w-full pl-1 py-[9px] mb-2 rounded-[6px] space-x-2 text-sm font-medium table-text peer"
        onClick={() => setShowColorPicker(!showColorPicker)}
      />
    </div>
        {showColorPicker && (
          <ColorPicker
            handleChange={handleLineColorChange}
            setting={{ lineColor }}
            handleCloseColor={() => setShowColorPicker(false)}
          />
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mt-2 text-start">Separator width</div>
            <div className="flex items-center gap-2">
              <input
                type="range"
                value={lineWidth}
                onChange={(e) => setLineWidth(Number(e.target.value))}
                min={30}
                max={100}
                step={10}
                className="w-full appearance-none h-2 rounded-full bg-green-200 cursor-pointer accent-green-500 peer"
              />
              <span className="text-sm font-medium text-gray-700">{lineWidth}%</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="mt-2 text-start">Separator height</div>
            <div className="flex items-center gap-2">
              <input
                type="range"
                value={lineHeight}
                onChange={(e) => setLineHeight(Number(e.target.value))}
                min={1}
                max={50}
                className="w-full appearance-none h-2 rounded-full bg-green-200 cursor-pointer accent-green-500 peer"
              />
              <span className="text-sm font-medium text-gray-700">{lineHeight}px</span>
            </div>
          </div>
        </div>
      </form>

      {/* Line Preview */}
      <div className="mt-6 flex justify-center">
        <div
          style={{
            width: `${lineWidth}%`,
            height: `${lineHeight}px`,
            borderTop: `${lineHeight}px ${lineType} ${lineColor}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SeparatorFormComponent;
