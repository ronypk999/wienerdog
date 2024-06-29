import animatedLogo from "../../assets/logo.svg";
import moon from "../../assets/moon.svg";
import { useInfoContext } from "../../hook/ContextHook";
const What = () => {
  const { scrollToTarget } = useInfoContext();
  return (
    <>
      <div className="pt-16 px-3 overflow-hidden">
        <div className="hidden  md:flex md:justify-start -ml-24">
          <img src={moon} className="w-lg" />
        </div>
        <div className="py-6 md:mt-[-36rem]">
          <div className="space-y-3">
            <h1 className="text-2xl md:text-5xl text-white  text-center">
              What is WienerAI ($WAI)?
            </h1>
            <p className="text-white max-w-xl text-center mx-auto">
              Despite its hilarious sausage-y exterior, WienerAI is the pinnacle
              of AI trading technology. With girthy, predictive
              features–WienerAI is a trader’s best friend.
            </p>
          </div>
          <div className="hidden md:flex md:justify-end -mt-32">
            <img src={animatedLogo} className="w-32 rotate-12" />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="text-center px-6 py-12 bg-[#8968B9] rounded-box md:w-80">
              <h2 className="text-xl md:text-2xl text-white">
                AI Enhanced Trading
              </h2>
              <p>
                An AI interface that’s instant, predictive, and noob-friendly
              </p>
            </div>
            <div className="text-center px-6 py-12 bg-[#8968B9] rounded-box md:w-80">
              <h2 className="text-xl md:text-2xl text-white">
                Seamless Sausage Swaps
              </h2>
              <p>Never miss a golden opportunity again</p>
            </div>
            <div className="text-center px-6 py-12 bg-[#8968B9] rounded-box md:w-80">
              <h2 className="text-xl md:text-2xl text-white">Zero Fees</h2>
              <p>WienerAI does not charge any fees. Good doggie!</p>
            </div>
            <div className="text-center px-6 py-12 bg-[#8968B9] rounded-box md:w-80">
              <h2 className="text-xl md:text-2xl text-white">MEV Protection</h2>
              <p>
                Slap down your Wiener and never get frontrun by a MEV bot again
              </p>
            </div>
          </div>
          <div className="py-12 text-center space-y-6">
            <p className="max-w-xl mx-auto text-white">
              Not just a bot, nor a simple sausage–but an AI-powered crypto
              trading partner designed to give YOU the advantage you’ve been
              searching for
            </p>
            <button
              onClick={scrollToTarget}
              className="btn hover:text-white text-[#6c42a8] bg-white px-6"
            >
              Buy $coin presale
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default What;
