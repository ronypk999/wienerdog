import sausage from "../../assets/sausage.png";
import eth from "../../assets/ethereum.png";
import avx from "../../assets/avalanche.png";
import bnb from "../../assets/bnb.png";
import matic from "../../assets/matic.png";
import bannerBg from "../../assets/hero.gif";
import dog from "../../assets/dog.svg";
import Timer from "../../components/Timer";
const Banner = () => {
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
              <h1 className="text-5xl text-white max-w-4xl leading-tight">
                WienerAI
                <br /> Part Dog, Part Sausage, Part <br />
                AI Trading Bot
              </h1>
              <img src={sausage} className="max-w-40" />
            </div>

            <div className="bg-linear text-white text-center space-y-3 p-3 rounded-box max-w-sm">
              <p>Next Price Increase In</p>
              <Timer></Timer>
              <p> USDT Raised: $6,453,862.57 / $6,743,190</p>
              <div className="relative">
                <progress
                  className="progress progress-[#ba8bf9] w-56 h-6"
                  value="70"
                  max="100"
                ></progress>
                <p className="absolute top-0 left-[50%] translate-x-[-50%] text-white">
                  Until price increase
                </p>
              </div>

              <p>Your purchased $WAI = 0</p>
              <div className="flex justify-around items-center">
                <div className="w-full flex-1">
                  <hr />
                </div>
                <p className="px-6">1 $WAI = $0.000722</p>
                <div className="w-full flex-1">
                  <hr />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <button className="btn bg-theme-1  px-6 md:px-12">
                    <img src={eth} className="w-7" /> ETH
                  </button>
                </div>
                <div>
                  <button className="btn bg-theme-1  px-6 md:px-12">
                    <img src={bnb} className="w-7" /> BNB
                  </button>
                </div>
                <div>
                  <button className="btn bg-theme-1  px-4 md:px-10">
                    <img src={matic} className="w-7" /> MATIC
                  </button>
                </div>
                <div>
                  <button className="btn bg-theme-1  px-6 md:px-12">
                    <img src={avx} className="w-7" /> AVX
                  </button>
                </div>
              </div>
              <div className="flex text-left justify-between text-white">
                <div>
                  <p className="text-xs ">ETH you pay</p>
                  <label className="input bg-transparent border-2 border-white rounded-box flex items-center gap-2">
                    <input
                      type="text"
                      className="grow w-full max-w-20"
                      placeholder="0"
                    />
                    <img src={eth} className="w-7" />
                  </label>
                </div>
                <div className="space-x-3">
                  <p className="text-xs pl-3">$COIN you receive</p>
                  <label className="input bg-transparent border-2 border-white rounded-box flex items-center gap-2">
                    <input
                      type="text"
                      className="grow w-full max-w-20"
                      placeholder="0"
                    />
                    <img src={eth} className="w-7" />
                  </label>
                </div>
              </div>
              <div>
                <button className="btn bg-theme-1 text-base px-6">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>

          <img src={dog} className="w-full max-w-xl md:-ml-24 md:-mt-64" />
        </div>
      </div>
    </>
  );
};

export default Banner;
