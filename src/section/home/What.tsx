import { useTranslation } from "react-i18next";
import animatedLogo from "../../assets/logo.svg";
import moon from "../../assets/moon.svg";
import { useInfoContext } from "../../hook/ContextHook";
const What = () => {
  const { scrollToTarget, WhatisRef } = useInfoContext();
  const { t } = useTranslation();
  return (
    <>
      <div ref={WhatisRef} className="pt-16 px-3 overflow-hidden">
        <div className="hidden  md:flex md:justify-start -ml-24">
          <img src={moon} className="w-lg" />
        </div>
        <div className="py-6 md:mt-[-36rem]">
          <div className="space-y-3">
            <h1 className="text-2xl md:text-5xl text-white  text-center">
              {t("what_title")}
            </h1>
            <p className="text-white max-w-xl text-center mx-auto">
              {t("what_info")}
            </p>
          </div>
          <div className="hidden md:flex md:justify-end -mt-32">
            <img src={animatedLogo} className="w-32 rotate-12" />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="text-center px-6 py-12 bg-[#8968B9] rounded-box md:w-80">
              <h2 className="text-xl md:text-2xl text-white">
                {t("what_item_1")}
              </h2>
              <p>{t("what_item_1_info")}</p>
            </div>
            <div className="text-center px-6 py-12 bg-[#8968B9] rounded-box md:w-80">
              <h2 className="text-xl md:text-2xl text-white">
                {t("what_item_2")}
              </h2>
              <p>{t("what_item_2_info")}</p>
            </div>
            <div className="text-center px-6 py-12 bg-[#8968B9] rounded-box md:w-80">
              <h2 className="text-xl md:text-2xl text-white">
                {t("what_item_3")}
              </h2>
              <p>{t("what_item_3_info")}</p>
            </div>
            <div className="text-center px-6 py-12 bg-[#8968B9] rounded-box md:w-80">
              <h2 className="text-xl md:text-2xl text-white">
                {t("what_item_4")}
              </h2>
              <p>{t("what_item_4_info")}</p>
            </div>
          </div>
          <div className="py-12 text-center space-y-6">
            <p className="max-w-xl mx-auto text-white">
              {t("what_bottom_info")}
            </p>
            <button
              onClick={scrollToTarget}
              className="btn hover:text-white text-[#6c42a8] bg-white px-6"
            >
              {t("what_buy_btn")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default What;
