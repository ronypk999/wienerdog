import Banner from "../section/home/Banner";
import Stats from "../section/home/Stats";
import mainBg from "../assets/main-bg.png";
import Youtube from "../section/home/Youtube";
import Follow from "../section/home/Follow";
import Featured from "../section/home/Featured";
import What from "../section/home/What";
import More from "../section/home/More";
import TokenPlan from "../section/home/TokenPlan";
import HowToBuy from "../section/home/HowToBuy";
import Faq from "../section/home/Faq";

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
        <Featured></Featured>
        <What></What>
        <More></More>
        <TokenPlan></TokenPlan>
        <HowToBuy></HowToBuy>
        <Faq></Faq>
      </div>
    </>
  );
};

export default Home;
