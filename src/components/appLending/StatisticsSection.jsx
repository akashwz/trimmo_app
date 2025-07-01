import React from "react";

const StatisticsSection = () => {
  return (
<div className="flex flex-col sm:flex-row container-responsive responsive-section gap-8 sm:gap-[120px] animate-fade-in-up">
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-[60px] sm:text-[70px] lg:text-[90px] font-polysans font-normal leading-[70px] sm:leading-[85px] lg:leading-[109px] text-global-1">450k</span>
          <p className="text-sm sm:text-base font-inter font-normal leading-6 text-global-1 mt-2">
            Creators in the Trimmo Community,<br />From influencers to indie brands.
          </p>
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-[60px] sm:text-[70px] lg:text-[90px] font-polysans font-normal leading-[70px] sm:leading-[85px] lg:leading-[109px] text-global-1">2.3m</span>
          <p className="text-sm sm:text-base font-inter font-normal leading-6 text-global-1 mt-2">
            Smarter Links, Stronger Reach,<br />Every click counts.
          </p>
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-[60px] sm:text-[70px] lg:text-[90px] font-polysans font-normal leading-[70px] sm:leading-[85px] lg:leading-[109px] text-global-1">91%</span>
          <p className="text-sm sm:text-base font-inter font-normal leading-6 text-global-1 mt-2">
            Business Growth Tracked<br />Boosted Growth, No Missed DMs.
          </p>
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-[60px] sm:text-[70px] lg:text-[90px] font-polysans font-normal leading-[70px] sm:leading-[85px] lg:leading-[109px] text-global-1">7.5m</span>
          <p className="text-sm sm:text-base font-inter font-normal leading-6 text-global-1 mt-2">
            Productivity Unlocked with<br />Trimmo-Social Post Scheduling.
          </p>
        </div>
      </div>
  );
};

export default StatisticsSection;
