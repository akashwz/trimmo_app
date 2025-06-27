"use client";
import React, { useEffect, useState } from "react";
import {
  ChatLeftDots,
  Check2,
  CheckCircleFill,
  Google,
  Instagram,
  Telegram,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";

function SharePopup({ openSharePopup, setOpenSharePopup, shortCode }) {
  const [checkMsg, setCheckMsg] = useState({
    whatsapp: false,
    msg: false,
  });
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = document.querySelector("#copy-input").value; // Get the input value
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  const closePopup = () => setOpenSharePopup(false);

  const handleOverlayClick = (e) => {
    // Close the popup if the overlay is clicked
    if (e.target.id === "popup-overlay") {
      closePopup();
    }
  };

  const icons = [
    {
      component: <Whatsapp className="h-8 w-8 text-white" />,
      bgColor: "bg-[#25d366]",
    },
    {
      component: <ChatLeftDots className="h-8 w-8 text-white" />,
      bgColor: "bg-gray-400",
    },

    {
      component: <Google className="h-8 w-8 text-white" />,
      bgColor: "bg-[#DB4437]",
    },
    {
      component: <Instagram className="h-8 w-8 text-white" />,
      bgColor: "bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888]",
    },
    {
      component: <Telegram className="h-8 w-8 text-white" />,
      bgColor: "bg-[#0088cc]",
    },
  ];

  return (
    openSharePopup && (
      <div
        id="popup-overlay"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={handleOverlayClick}
      >
        <div
          className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-sm md:max-w-md lg:max-w-lg text-center"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside popup from closing it
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-2 right-3 text-primarycolor text-lg hover:text-gray-700"
          >
            ✕
          </button>

          <div className="p-5  flex flex-col gap-4">
            <div className="flex items-center justify-between text-xl font-medium">
              <h4>Share Your Trimmo Link </h4>
            </div>
            <hr className="main-border-color" />
            <div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center cursor-pointer ${icon.bgColor} rounded-full h-16 w-16`}
                  >
                    {icon.component}
                  </div>
                ))}
              </div>

              <div className="border rounded border-primarycolor mt-10 w-full">
                <div className="relative">
                  <input
                    id="copy-input"
                    type="email"
                    defaultValue={shortCode}
                    readOnly
                    className="w-full rounded-lg bg-white text-primarycolor p-4 text-sm shadow-sm focus:outline-none pr-16 md:pr-24"
                    placeholder="Example: http://super-long-link.com/shorten-it"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-1">
                    {/* Copy Button */}
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="group inline-block rounded-lg bg-primarycolor hover:bg-opacity-80 px-1 md:px-5 py-3 text-[10px] md:text-sm font-medium text-white relative"
                    >
                      <span className="inline-block">
                        {isCopied ? "Copied" : "Copy"}
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SharePopup;
