import React from "react";

const ConnectionsPlatform = () => {
    return (
        <div className="container max-w-[1530px] mx-auto flex flex-col sm:flex-col container-responsive responsive-section justify-between animate-fade-in-up py-[100px]">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                The Trimmo Connections Platform
            </h2>

            {/* Card Container */}
            <div className="flex flex-col gap-10 w-full">

                {/* Link Shortener Card */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#edf2f1] rounded-xl p-6 md:p-10 shadow-md">

                    {/* Left Section */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                            🔗
                        </div>

                        {/* Short Link & Tooltip */}
                        <div className="relative">
                            <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md text-sm">
                                trimmo.link/short
                                <span className="ml-2 text-xs bg-white text-black px-2 py-0.5 rounded">
                                    1k User
                                </span>
                            </div>
                            {/* Tooltip Example */}
                            <div className="absolute top-12 left-0 bg-white text-gray-700 shadow-lg rounded-md p-2 text-sm w-40">
                                <p>Clicks by Locations</p>
                                <p className="mt-1">01. Share Short Link</p>
                                <p>02. Quick Share</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center md:text-left max-w-xs">
                        <h3 className="text-lg text-center font-semibold mb-2">Link Shortener</h3>
                        <p className="text-gray-600 text-center text-sm">
                            A complete solution aimed at enhancing the potency of each
                            interaction between your content and your audience across all
                            touchpoints.
                        </p>
                    </div>
                    {/* Right Section */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-0">
                        <div className="flex flex-col gap-2">
                            <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-4 py-2 rounded-full text-sm">
                                Get Started - Free
                            </button>
                            <button className="text-gray-700 text-sm hover:underline">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* QR Code Generator Card */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#f8f7f4] rounded-xl p-6 md:p-10 shadow-md">

                    {/* Left Section */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl">
                            🟩
                        </div>

                        {/* QR Code Mockup */}
                        <div className="flex items-center gap-2">
                            <div className="w-24 h-24 bg-white border p-1 flex items-center justify-center">
                                <img src="/images/qr-placeholder.png" alt="QR" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                <div className="w-4 h-4 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="text-center md:text-left max-w-xs">
                        <h3 className="text-lg text-center font-semibold mb-2">QR Code Generator</h3>
                        <p className="text-gray-600 text-center text-sm">
                            A complete solution aimed at enhancing the potency of each
                            interaction between your content and your audience across all
                            touchpoints.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-0">
                        <div className="flex flex-col gap-2">
                            <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-4 py-2 rounded-full text-sm">
                                Get Started - Free
                            </button>
                            <button className="text-gray-700 text-sm hover:underline">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectionsPlatform;
