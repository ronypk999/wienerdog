import Banner from "../section/home/Banner";
import Stats from "../section/home/Stats";
import mainBg from "../assets/main-bg.png";
import Youtube from "../section/home/Youtube";
import Follow from "../section/home/Follow";
import Featured from "../section/home/Featured";
import What from "../section/home/What";

const Home = () => {
  return (
    <>
      <div
        className="max-w-[1600px] mx-auto"
        style={{
          backgroundImage: `url(${mainBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Banner></Banner>
        <Stats></Stats>
        <Youtube></Youtube>
        <Follow></Follow>
        <Featured></Featured>
        <What></What>
      </div>
    </>
  );
};

export default Home;
