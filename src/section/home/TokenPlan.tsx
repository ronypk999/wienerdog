import divider from "../../assets/divider.svg";
import loader from "../../assets/loader.svg";
const TokenPlan = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto relative text-white py-12 px-3 space-y-6">
        <div className="lg:absolute mx-auto text-base md:text-xl top-48 left-12 space-y-6 bg-[rgba(0,0,0,.2)] p-6 rounded-box w-full md:w-[30rem]">
          <h1 className="text-2xl md:text-5xl">Tokenomics</h1>
          <div className="space-y-2">
            <p>30% - Presale</p>
            <p>30% - Presale</p>
            <p>30% - Presale</p>
            <p>30% - Presale</p>
            <p>30% - Presale</p>
          </div>
          <div className="pt-6">
            <p>Token Supply: 69.000.000.000</p>
          </div>
        </div>
        <div className="lg:absolute mx-auto text-base md:text-xl right-12 top-64 space-y-6 bg-[rgba(0,0,0,.2)] p-6 rounded-box w-full md:w-[30rem]">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-5xl">The WienerAI Masterplan</h1>
            <div className="space-y-3">
              <h1 className="text-xl md:text-2xl">STEP 1.</h1>
              <ul className="list-disc pl-6 space-y-2 overflow-hidden">
                <li>Sausage Army Launch</li>
                <li>Sausage Army Launch</li>
                <li>Sausage Army Launch</li>
                <li>Sausage Army Launch</li>
                <li>Sausage Army Launch</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h1 className="text-xl md:text-2xl">STEP 1.</h1>
              <ul className="list-disc pl-6 space-y-2 overflow-hidden">
                <li>Sausage Army Launch</li>
                <li>Sausage Army Launch</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h1 className="text-xl md:text-2xl">STEP 1.</h1>
              <ul className="list-disc pl-6 space-y-2 overflow-hidden">
                <li>
                  Token Listing: The LONG wait is over. WienerAI launches on
                  Global Exchange Platforms. This is the public $WAI launch.
                </li>
                <li>
                  WienerAI Trading Bot Launch: Not just a bot; but an AI-powered
                  crypto trading partner designed to give YOU the advantage
                  you’ve been searching for.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={divider} alt="divider" />
        </div>
        <div className="hidden lg:absolute lg:block -top-24 right-24">
          <img src={loader} alt="loader" className="w-64 rotate-12" />
        </div>
      </div>
    </>
  );
};

export default TokenPlan;
