import { useTranslation } from "react-i18next";
import divider from "../../assets/divider.svg";
import loader from "../../assets/loader.svg";
const TokenPlan = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-[1600px] mx-auto relative text-white py-12 px-3 space-y-6">
        <div className="lg:absolute mx-auto text-base md:text-xl top-48 left-12 space-y-6 bg-[rgba(0,0,0,.2)] p-6 rounded-box w-full md:w-[30rem]">
          <h1 className="text-2xl md:text-5xl">{t("tokenomics")}</h1>
          <div className="space-y-2">
            <p>{t("tokenomics_item_1")}</p>
            <p>{t("tokenomics_item_2")}</p>
            <p>{t("tokenomics_item_3")}</p>
            <p>{t("tokenomics_item_4")}</p>
            <p>{t("tokenomics_item_5")}</p>
          </div>
          <div className="pt-6">
            <p>{t("token_supply")}</p>
          </div>
        </div>
        <div className="lg:absolute mx-auto text-base md:text-xl right-12 top-64 space-y-6 bg-[rgba(0,0,0,.2)] p-6 rounded-box w-full md:w-[30rem]">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-5xl">{t("masterplan")}</h1>
            <div className="space-y-3">
              <h1 className="text-xl md:text-2xl">{t("step_1")}</h1>
              <ul className="list-disc pl-6 space-y-2 overflow-hidden">
                <li>{t("step_1_item_1")}</li>
                <li>{t("step_1_item_2")}</li>
                <li>{t("step_1_item_3")}</li>
                <li>{t("step_1_item_4")}</li>
                <li>{t("step_1_item_5")}</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h1 className="text-xl md:text-2xl">{t("step_2")}</h1>
              <ul className="list-disc pl-6 space-y-2 overflow-hidden">
                <li>{t("step_2_item_1")}</li>
                <li>{t("step_2_item_2")}</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h1 className="text-xl md:text-2xl">{t("step_3")}</h1>
              <ul className="list-disc pl-6 space-y-2 overflow-hidden">
                <li>{t("step_3_item_1")}</li>
                <li>{t("step_3_item_2")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={divider} alt="divider" />
        </div>
        <div className="hidden lg:absolute lg:block -top-24 right-24">
          <img src={loader} alt="loader" className="w-64 rotate-12" />
        </div>
      </div>
    </>
  );
};

export default TokenPlan;
