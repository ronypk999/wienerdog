import bitcoin from "../../assets/featured/bitcoin.png";
import cyptonews from "../../assets/featured/cyptonews.png";
import finbold from "../../assets/featured/finbold.png";
import inside from "../../assets/featured/inside.png";
import newsbtc from "../../assets/featured/newsbtc.png";
import techno from "../../assets/featured/techno.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
const Featured = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-6">
        <h4 className="text-white text-center">{t("featured_title")}</h4>
      </div>
      <div className="max-w-[1700px] mx-auto px-12 pb-12 hidden md:flex justify-around gap-6">
        <div className="w-64 mx-auto">
          <img src={bitcoin} className="w-full" />
        </div>
        <div className="w-64 mx-auto">
          <img src={inside} className="w-full" />
        </div>
        <div className="w-64 mx-auto">
          <img src={cyptonews} className="w-full" />
        </div>
        <div className="w-64 mx-auto">
          <img src={newsbtc} className="w-full" />
        </div>
        <div className="w-64 mx-auto">
          <img src={finbold} className="w-full" />
        </div>
        <div className="w-64 mx-auto">
          <img src={techno} className="w-full" />
        </div>
      </div>
      <div className="md:hidden py-6 px-3">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-64 mx-auto">
              <img src={bitcoin} className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-64 mx-auto">
              <img src={inside} className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-64 mx-auto">
              <img src={cyptonews} className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-64 mx-auto">
              <img src={finbold} className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-64 mx-auto">
              <img src={newsbtc} className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-64 mx-auto">
              <img src={techno} className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Featured;
