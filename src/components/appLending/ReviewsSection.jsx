import Image from "next/image";
import React from "react";

const ReviewsSection = () => {
  return (
<div className="flex flex-row w-[1530px] h-[114px] ml-[195px] mt-[100px] space-x-[360px]">
        {/* Review 1 */}
        <div className="flex flex-col w-[170px] h-[101px] items-center">
          <Image src="/images/app/img_image_5.png" alt="review platform" width={170} height={31} />
          <div className="flex space-x-1 mt-[15px]">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={i < 4 ? "/images/app/img_frame_black_900_18x18.svg" : "/images/app/img_frame_18x18.svg"}
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>
          <span className="text-lg font-polysans font-semibold text-global-3 mt-[15px]">
            <span>4.5/</span><span className="text-[#f1680e]">5</span>
          </span>
        </div>
        {/* Review 2 */}
        <div className="flex flex-col w-[170px] h-[110px] items-center">
          <Image src="/images/app/img_image_6.png" alt="review platform" width={163} height={40} />
          <div className="flex space-x-1 mt-[15px]">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={i < 4 ? "/images/app/img_frame_black_900_18x18.svg" : "/images/app/img_frame_18x18.svg"}
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>
          <span className="text-lg font-polysans font-semibold text-global-3 mt-[15px]">
            <span>4.5/</span><span className="text-[#f1680e]">5</span>
          </span>
        </div>
        {/* Review 3 */}
        <div className="flex flex-col w-[133px] h-[114px] items-center">
          <Image src="/images/app/img_image_44x133.png" alt="review platform" width={133} height={44} />
          <div className="flex space-x-1 mt-[15px]">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={i < 4 ? "/images/app/img_frame_black_900_18x18.svg" : "/images/app/img_frame_18x18.svg"}
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>
          <span className="text-lg font-polysans font-semibold text-global-3 mt-[15px]">
            <span>4.5/</span><span className="text-[#f1680e]">5</span>
          </span>
        </div>
        {/* Review 4 */}
        <div className="flex flex-col w-[170px] h-[101px] items-center">
          <Image src="/images/app/img_image_5.png" alt="review platform" width={170} height={31} />
          <div className="flex space-x-1 mt-[15px]">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={i < 4 ? "/images/app/img_frame_black_900_18x18.svg" : "/images/app/img_frame_18x18.svg"}
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>
          <span className="text-lg font-polysans font-semibold text-global-3 mt-[15px]">
            <span>4.5/</span><span className="text-[#f1680e]">5</span>
          </span>
        </div>
      </div>
  );
};

export default ReviewsSection;
