import Banner from "../section/home/Banner";
import Stats from "../section/home/Stats";
import mainBg from "../assets/main-bg.png";
import Youtube from "../section/home/Youtube";
import Follow from "../section/home/Follow";

const Home = () => {
  return (
    <>
      <div
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
      </div>
    </>
  );
};

export default Home;
