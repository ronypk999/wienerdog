import { useTranslation } from "react-i18next";
import { useInfoContext } from "../../hook/ContextHook";

const Faq = () => {
  const { t } = useTranslation();
  const { faqRef } = useInfoContext();
  return (
    <>
      <div ref={faqRef} className="pt-24 pb-64 px-3 text-white">
        <div className="mx-auto max-w-xl space-y-6">
          <div className="collapse bg-[#663AA0]">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              What is the WienerAI Presale?
            </div>
            <div className="collapse-content border-t-2">
              <div className="p-3">
                <p>
                  WienerAI is the world’s most advanced consumer AI trading bot.
                  It is the first Sausage/Dog/Artificial Intelligence ever
                  created and the universe’s most powerful cybernetic being.
                  This weenie is gunning for “top dog” on the charts. WienerAI
                  ($WAI) is currently in the private PRESALE stage when the
                  price is at its lowest. When it goes public, the listing price
                  will be much higher.
                </p>
              </div>
            </div>
          </div>
          <div className="collapse bg-[#663AA0]">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              {t("faq1")}
            </div>
            <div className="collapse-content border-t-2">
              <div className="p-3">
                <p>{t("faq1_info")}</p>
              </div>
            </div>
          </div>
          <div className="collapse bg-[#663AA0]">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              {t("faq2")}
            </div>
            <div className="collapse-content border-t-2">
              <div className="p-3">
                <p>{t("faq2_info")}</p>
              </div>
            </div>
          </div>
          <div className="collapse bg-[#663AA0]">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              {t("faq3")}
            </div>
            <div className="collapse-content border-t-2">
              <div className="p-3">
                <p>{t("faq3_info")}</p>
              </div>
            </div>
          </div>
          <div className="collapse bg-[#663AA0]">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              {t("faq4")}
            </div>
            <div className="collapse-content border-t-2">
              <div className="p-3">
                <p>{t("faq4_info")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
