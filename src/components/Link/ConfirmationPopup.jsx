import React, { useRef } from "react";
import { X } from "react-bootstrap-icons";

function ConfirmationPopup({
  isOpen,
  onClose,
  title = "Are you sure?",
  subheading = "This action cannot be undone.",
  confirmText = "Yes, Delete",
  onConfirm,
}) {
  const popupRef = useRef(null);

  // Close the popup when clicking outside
  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Attach event listener for outside clicks
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative"
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          {title}
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 my-4" />

        {/* Subheading */}
        <p className="text-sm text-gray-600 text-center mb-6">{subheading}</p>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
