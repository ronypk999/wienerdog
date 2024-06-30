import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-center px-6 -mt-32  pb-6 space-y-6">
        <div className="text-xs space-y-2">
          <h3 className="">{t("disclaimer")}</h3>
          <p>{t("disclaimer_info")}</p>
        </div>
        <p className="text-white">{t("copyright")}</p>
      </div>
    </>
  );
};

export default Footer;
