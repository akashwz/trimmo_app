import Image from "next/image";
import React from "react";

const VideoSection = () => {
  return (
<div className="w-[1530px] h-[550px] ml-[195px] mt-[100px]">
        <Image
          src="/images/app/img_video.svg"
          alt="video placeholder"
          width={1530}
          height={550}
          className="w-full h-full"
        />
      </div>
  );
};

export default VideoSection;
