import Image from "next/image";
import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full max-w-[1530px] mx-auto my-[100px] px-4">
      <div className="w-full h-auto">
        <Image
          src="/images/app/img_video.svg"
          alt="video placeholder"
          width={1530}
          height={550}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default VideoSection;
