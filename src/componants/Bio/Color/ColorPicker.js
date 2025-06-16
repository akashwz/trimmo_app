import Chrome from "@uiw/react-color-chrome";
import React, { useState, useEffect, useRef } from "react";

const ColorPicker = ({ handleChange, setting, handleCloseColor }) => {
  const [rgba, setRgba] = useState(setting || "rgba(255, 0, 0, 1)");
  const colorPickerRef = useRef(null);

  useEffect(() => {
    handleChange(rgba);
  }, [rgba]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        handleCloseColor();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseColor]);

  return (
    <div ref={colorPickerRef} className="absolute z-50 bg-white p-2 shadow-lg rounded-lg">
      <Chrome
        color={rgba}
        onChange={(color) => setRgba(color.hexa)} // Now supports opacity
      />
    </div>
  );
};

export default ColorPicker;
