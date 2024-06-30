import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TwitterEmbedLoad from "../../components/TwitterEmbedLoad";
import follow from "../../assets/follow.svg";
import { useTranslation } from "react-i18next";
const Follow = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-[1600px] mx-auto py-6 px-3">
        <div className="py-6">
          <h1 className="text-2xl md:text-5xl text-white text-center">
            {t("follow")} @WienerDogAI
          </h1>
          <div className="hidden md:flex md:justify-end -mt-32">
            <img src={follow} className="w-48 rotate-12" />
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1224: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1524: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TwitterEmbedLoad
              tweetId={"1800560901088809124"}
            ></TwitterEmbedLoad>
          </SwiperSlide>
          <SwiperSlide>
            <TwitterEmbedLoad
              tweetId={"1800560901088809124"}
            ></TwitterEmbedLoad>
          </SwiperSlide>
          <SwiperSlide>
            <TwitterEmbedLoad
              tweetId={"1800560901088809124"}
            ></TwitterEmbedLoad>
          </SwiperSlide>
          <SwiperSlide>
            <TwitterEmbedLoad
              tweetId={"1800560901088809124"}
            ></TwitterEmbedLoad>
          </SwiperSlide>
          <SwiperSlide>
            <TwitterEmbedLoad
              tweetId={"1800560901088809124"}
            ></TwitterEmbedLoad>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Follow;
