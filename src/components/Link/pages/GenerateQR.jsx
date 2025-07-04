import React, { useState } from "react";
import QRCode from "../QRCode";

const GenerateQR = ({ settings, setSettings, destination, handleGenerateClick, isGenerated }) => {
  const [isToggled, setIsToggled] = useState(false);
  console.log({ settings, setSettings, destination }, "{ settings, setSettings, destination }");
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <div className="min-h-[200px] overflow-y-auto bg-gray-100 w-full">
        <section className="text-gray-600 body-font relative">
          <QRCode
            settings={settings}
            setSettings={setSettings}
            showButton={true}
            destination={destination}
            handleGenerateClick={handleGenerateClick}
            isGenerated={isGenerated}
          />
        </section>
      </div>
    </div>
  );
};

export default GenerateQR;
