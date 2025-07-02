import React from "react";

const CmsSection = () => {
  return (
    <div class="relative my-[100px] flex flex-col items-center justify-center overflow-hidden">
      <div class="text-center z-8">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          The Ultimate Creator Toolkit
          <br />
          <span class="block">All-in-One Powerful Platform.</span>
        </h1>
        <p class="mt-4 text-gray-600 max-w-md mx-auto">
          Trimmo empowers creators and small businesses to grow smarter and faster,
          <br class="hidden sm:block" />— From mini sites to smart links, chats to social
          scheduling.
        </p>
        <button class="mt-6 bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-6 rounded-full shadow-md transition">
          Try Trimmo Free
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full mt-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          <div className="h-48 bg-amber-50 rounded-lg"></div>
          <div className="h-48 bg-sky-50 rounded-lg"></div>
          <div className="h-48 bg-amber-50 rounded-lg"></div>
          <div className="h-48 bg-sky-50 rounded-lg"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className="h-48 bg-amber-50 rounded-lg"></div>
          <div className="h-48 bg-sky-50 rounded-lg"></div>
          <div className="h-48 bg-amber-50 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default CmsSection;
