import React from "react";

const FinalCTASectionBg = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#e8f6ea] to-[#d4f0d8] overflow-hidden">
      
      {/* Floating Icons */}
      <img src="/images/app/Trimmo-Link.svg" alt="icon" className="absolute top-[25%] left-[20%] w-12 h-12 hidden lg:block" />
      <img src="/images/app/Trimmo-App.svg" alt="icon" className="absolute top-[15%] left-[48%] w-12 h-12 hidden lg:block" />
      <img src="/images/app/Trimmo-Social.svg" alt="icon" className="absolute top-[25%] right-[20%] w-12 h-12 hidden lg:block" />
      <img src="/images/app/Trimmo-Chat.svg" alt="icon" className="absolute bottom-[30%] left-[25%] w-12 h-12 hidden lg:block" />
      <img src="/images/app/Trimmo-Bio.svg" alt="icon" className="absolute bottom-[30%] right-[25%] w-12 h-12 hidden lg:block" />

      {/* Center Content */}
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-black mb-4 !leading-normal">
          Why juggle 5 different tools, <br />
          when 1 does it all?
        </h1>
        <p className="text-gray-700 mb-6">
          Trimmo turns chaos into control — so you can focus on content, not logistics.
        </p>
        <button className="px-6 py-3 bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-full transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FinalCTASectionBg;
