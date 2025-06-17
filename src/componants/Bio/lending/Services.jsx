import { t } from 'i18next'
import React from 'react'

const Services = () => {
    return (
      <div className="bg-[#EBFF57] services w-[90%] py-7 md:py-20 ml-auto mr-auto rounded-[20px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <div>
              <h4 className="text-[18px] lg:text-[30px] font-extrabold containe-font">
                {t("lang_simplify_your_online_identity")}
              </h4>
              <p className="text-base lg:text-lg mt-2 lg:mt-3 font-semibold">
                {t("lang_one_link_to_showcase_everything_you_do")}
              </p>
              <span className="text-sm mt-2 lg:mt-3 inline-block">
                {t("lang_connect_all_your_platforms_with_one_personalized_bio_link")}
              </span>
            </div>
            <div>
              <h4 className="text-[18px] lg:text-[30px] font-extrabold containe-font">
                {t("lang_engage_with_Your_Audience_Easily")}{" "}
              </h4>
              <p className="text-base lg:text-lg mt-2 lg:mt-3 font-semibold">
                {t("lang_tarck_optimize_grow")}
              </p>
              <span className="text-sm mt-2 lg:mt-3 inline-block">{t("lang_services_desc")}</span>
            </div>
            <div>
              <h4 className="text-[18px] lg:text-[30px] font-extrabold containe-font">
                {t("lang_designed_for_You_or_Your_Brand")}
              </h4>
              <p className="text-base lg:text-lg mt-2 lg:mt-3 font-semibold">
                {t("lang_customizable_and_mobile_friendly")}
              </p>
              <span className="text-sm mt-2 lg:mt-3 inline-block">
                {t("lang_services_description")}
              </span>
            </div>
          </div>
          {/* <div className='w-full h-[3px] bg-[#333333] rounded-[2px] bg-opacity-10'>
                <div className='w-[33%] h-[100%] rounded-[5px] bg-[#29292B]'></div>
            </div> */}
        </div>
      </div>
    );
}

export default Services