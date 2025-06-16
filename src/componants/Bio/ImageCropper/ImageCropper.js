// components/ImageCropper.js
import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../CropImage/CropImage";
import { Slider } from "@mui/material";
import { X } from "react-bootstrap-icons";

const ImageCropper = ({ imageSrc, onClose, onCropComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleDone = async () => {
    const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
    onCropComplete(croppedBlob);
    onClose();
  };

  function dataURLtoBlob(dataURL) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new Blob([u8arr], { type: mime });
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-md">
        <div className="text-right">
          <button type="button" onClick={() => onClose()} className="text-gray-600">
            <X width={24} height={24}/>
          </button>
        </div>
        <div className="relative w-full h-64">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={handleCropComplete}
          />
        </div>
        <div className="mt-4">
          <Slider value={zoom} min={1} max={3} step={0.1} onChange={(e, val) => setZoom(val)} />
          <div className="flex justify-end mt-4 gap-2">
            <button
              // className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => {
                const blob = dataURLtoBlob(imageSrc);
                onCropComplete(blob);
                onClose();
              }}
            >
              Skip
            </button>
            <button
              type="button"
              onClick={() => handleDone()}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Crop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
