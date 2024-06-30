import { useTranslation } from "react-i18next";
import bg from "../../assets/howtobuybg.svg";
import { useInfoContext } from "../../hook/ContextHook";
const HowToBuy = () => {
  const { t } = useTranslation();
  const { howToBuyRef } = useInfoContext();
  return (
    <>
      <div
        ref={howToBuyRef}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-24 px-3 md:px-12 space-y-12"
      >
        <h1 className="text-2xl md:text-5xl text-white  text-center">
          {t("howToBuy")}
        </h1>
        <div className="max-w-[1600px] mx-auto text-white text-center flex flex-col md:flex-row gap-4">
          <div className="p-3 space-y-3 bg-[rgba(255,255,255,.2)] rounded-box">
            <div className="bg-theme-1 mx-auto rounded-full w-12 py-3 text-xl">
              {t("01")}
            </div>
            <h3 className="text-xl md:text-2xl">{t("01_title")}</h3>
            <p>{t("01_info")}</p>
          </div>
          <div className="p-3 space-y-3 bg-[rgba(255,255,255,.2)] rounded-box">
            <div className="bg-theme-1 mx-auto rounded-full w-12 py-3 text-xl">
              {t("02")}
            </div>
            <h3 className="text-xl md:text-2xl">{t("02_title")}</h3>
            <p>{t("02_info")}</p>
          </div>
          <div className="p-3 space-y-3 bg-[rgba(255,255,255,.2)] rounded-box">
            <div className="bg-theme-1 mx-auto rounded-full w-12 py-3 text-xl">
              {t("03")}
            </div>
            <h3 className="text-xl md:text-2xl">{t("03_title")}</h3>
            <p>{t("03_info")}</p>
          </div>
          <div className="p-3 space-y-3 bg-[rgba(255,255,255,.2)] rounded-box">
            <div className="bg-theme-1 mx-auto rounded-full w-12 py-3 text-xl">
              {t("04")}
            </div>
            <h3 className="text-xl md:text-2xl">{t("04_title")}</h3>
            <p>{t("04_info")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToBuy;
