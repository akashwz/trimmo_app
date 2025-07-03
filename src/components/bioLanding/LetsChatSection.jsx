import React from "react";

const LetsChatSection = () => {
    return (
        <div className="container mx-auto flex flex-col sm:flex-row container-responsive responsive-section justify-between animate-fade-in-up py-20 px-4">

            <div className="flex flex-wrap items-center justify-between bg-lime-300 rounded-2xl w-full px-6 sm:px-12 lg:px-20 py-10 sm:py-16 lg:py-20 gap-6">

                <div className="flex-1 min-w-[250px]">
                    <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-semibold text-black leading-tight">
                        Let's Connect
                    </h1>
                    <p className="text-sm sm:text-base text-black mt-4 max-w-md">
                        Trimmo turns chaos into control — so you can focus on content, not logistics.
                    </p>
                </div>

                <button className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
                    <svg className="w-6 h-6 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

            </div>

        </div>
    );
};

export default LetsChatSection;
