import { useTranslation } from "react-i18next";

const More = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-[#663AA0] text-white text-center py-12 px-3 space-y-6">
        <h1
          dangerouslySetInnerHTML={{ __html: t("more_title") }}
          className="text-2xl md:text-5xl"
        ></h1>
        <p className="max-w-3xl mx-auto">{t("more_info")}</p>
        <button className="btn hover:text-white text-black bg-white px-6">
          {t("more_btn")}
        </button>
      </div>
    </>
  );
};

export default More;
