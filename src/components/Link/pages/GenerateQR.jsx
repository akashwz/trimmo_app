import React, { useState } from "react";
import QRCode from "../QRCode";

const GenerateQR = ({ settings, setSettings, destination }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <div className="min-h-[200px] overflow-y-auto bg-gray-100 w-full">
        <section className="text-gray-600 body-font relative">
          <div className="container py-10 mx-auto">
            <div className="w-full mx-auto bg-white p-5 rounded shadow-sm ">
              <div className="flex justify-between">
                <h2 className="text-2xl text-primarycolor font-semibold font-montserrat">
                  QR code
                </h2>
                <div
                  className={`w-12 h-6 flex items-center rounded-full ${
                    !isToggled && "p-1"
                  } cursor-pointer transition-colors duration-300 ${
                    isToggled ? "bg-green" : "bg-gray-300"
                  }`}
                  onClick={handleToggle}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      isToggled ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
              <p className="text-[13px] mt-2">
                Generate a QR Code to share anywhere people can see it
              </p>
              {isToggled && (
                <QRCode
                  settings={settings}
                  setSettings={setSettings}
                  showButton={true}
                  destination={destination}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GenerateQR;
