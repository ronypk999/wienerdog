import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="border-y-4 border-[#8968b9] ">
        <div className="max-w-[1600px] mx-auto grid py-6 gap-3 place-items-center text-white grid-cols-2 bg-transparent md:grid-cols-4 shadow">
          <div className="">
            <div className="stat-title text-white">{t("stats1")}</div>
            <div className="stat-value">{t("stats1_info")}</div>
          </div>

          <div className="">
            <div className="stat-title text-white">{t("stats2")}</div>
            <div className="stat-value">{t("stats2_info")}</div>
          </div>

          <div className="">
            <div className="stat-title text-white">{t("stats3")}</div>
            <div className="stat-value">{t("stats3_info")}</div>
          </div>
          <div className="">
            <div className="stat-title text-white">{t("stats4")}</div>
            <div className="stat-value">{t("stats4_info")}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
