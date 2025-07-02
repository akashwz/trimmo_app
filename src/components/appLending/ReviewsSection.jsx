import Image from "next/image";
import React from "react";

const ReviewsSection = () => {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between gap-10">
        {/* Review 1 */}
        <div className="flex flex-col items-center w-[140px] sm:w-[160px] md:w-[170px]">
          <Image
            src="/images/app/img_image_5.png"
            alt="review platform"
            width={170}
            height={31}
            className="w-full h-auto"
          />
          <div className="flex space-x-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={
                  i < 4
                    ? "/images/app/img_frame_black_900_18x18.svg"
                    : "/images/app/img_frame_18x18.svg"
                }
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>
          <span className="text-base sm:text-lg font-polysans font-semibold text-global-3 mt-4">
            4.5/<span className="text-[#f1680e]">5</span>
          </span>
        </div>

        {/* Review 2 */}
        <div className="flex flex-col items-center w-[140px] sm:w-[160px] md:w-[170px]">
          <Image
            src="/images/app/img_image_6.png"
            alt="review platform"
            width={163}
            height={40}
            className="w-full h-auto"
          />
          <div className="flex space-x-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={
                  i < 4
                    ? "/images/app/img_frame_black_900_18x18.svg"
                    : "/images/app/img_frame_18x18.svg"
                }
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>
          <span className="text-base sm:text-lg font-polysans font-semibold text-global-3 mt-4">
            4.5/<span className="text-[#f1680e]">5</span>
          </span>
        </div>

        {/* Review 3 */}
        <div className="flex flex-col items-center w-[140px] sm:w-[150px] md:w-[160px]">
          <Image
            src="/images/app/img_image_44x133.png"
            alt="review platform"
            width={133}
            height={44}
            className="w-full h-auto"
          />
          <div className="flex space-x-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={
                  i < 4
                    ? "/images/app/img_frame_black_900_18x18.svg"
                    : "/images/app/img_frame_18x18.svg"
                }
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>
          <span className="text-base sm:text-lg font-polysans font-semibold text-global-3 mt-4">
            4.5/<span className="text-[#f1680e]">5</span>
          </span>
        </div>

        {/* Review 4 */}
        <div className="flex flex-col items-center w-[140px] sm:w-[160px] md:w-[170px]">
          <Image
            src="/images/app/img_image_5.png"
            alt="review platform"
            width={170}
            height={31}
            className="w-full h-auto"
          />
          <div className="flex space-x-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={
                  i < 4
                    ? "/images/app/img_frame_black_900_18x18.svg"
                    : "/images/app/img_frame_18x18.svg"
                }
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>
          <span className="text-base sm:text-lg font-polysans font-semibold text-global-3 mt-4">
            4.5/<span className="text-[#f1680e]">5</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
