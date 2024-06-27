import { TwitterTweetEmbed } from "react-twitter-embed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Follow = () => {
  return (
    <>
      <div className=" py-6 px-3">
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
            <div className="w-full">
              <TwitterTweetEmbed tweetId={"1800560901088809124"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <TwitterTweetEmbed tweetId={"1800560901088809124"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <TwitterTweetEmbed tweetId={"1800560901088809124"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <TwitterTweetEmbed tweetId={"1800560901088809124"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <TwitterTweetEmbed tweetId={"1800560901088809124"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <TwitterTweetEmbed tweetId={"1800560901088809124"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <TwitterTweetEmbed tweetId={"1800560901088809124"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <TwitterTweetEmbed tweetId={"1800560901088809124"} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Follow;
