import sausage from "../../assets/sausage.png";

import bannerBg from "../../assets/hero.gif";
import dog from "../../assets/dog.svg";
import MainConnect from "../../web3/MainConnect";
import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="hero pt-[100px]"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-linear-banner"></div>
        <div className="hero-content flex flex-col justify-around ">
          <div className="flex justify-around flex-col md:flex-row gap-12">
            <div className="space-y-6 flex-1 ">
              <h1
                dangerouslySetInnerHTML={{ __html: t("headline") }}
                className="text-5xl text-white max-w-4xl leading-tight"
              ></h1>
              <img src={sausage} className="max-w-40" />
            </div>
            <MainConnect></MainConnect>
          </div>

          <img src={dog} className="w-full max-w-xl md:-ml-24 md:-mt-64" />
        </div>
      </div>
    </>
  );
};

export default Banner;
