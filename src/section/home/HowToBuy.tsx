import bg from "../../assets/howtobuybg.svg";
const HowToBuy = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-24 px-3 md:px-12 space-y-12"
      >
        <h1 className="text-2xl md:text-5xl text-white  text-center">
          How To Buy $WAI
        </h1>
        <div className="max-w-[1600px] mx-auto text-white text-center flex flex-col md:flex-row gap-4">
          <div className="p-3 space-y-3 bg-[rgba(255,255,255,.2)] rounded-box">
            <div className="bg-theme-1 mx-auto rounded-full w-12 py-3 text-xl">
              01
            </div>
            <h3 className="text-xl md:text-2xl">Connect Your Wallet</h3>
            <p>
              Connect your MetaMask or other wallet to this website using the
              widget at the top of the page. From there you can easily buy $WAI
              tokens using ETH, BNB, MATIC or AVX.
            </p>
          </div>
          <div className="p-3 space-y-3 bg-[rgba(255,255,255,.2)] rounded-box">
            <div className="bg-theme-1 mx-auto rounded-full w-12 py-3 text-xl">
              01
            </div>
            <h3 className="text-xl md:text-2xl">Connect Your Wallet</h3>
            <p>
              Connect your MetaMask or other wallet to this website using the
              widget at the top of the page. From there you can easily buy $WAI
              tokens using ETH, BNB, MATIC or AVX.
            </p>
          </div>
          <div className="p-3 space-y-3 bg-[rgba(255,255,255,.2)] rounded-box">
            <div className="bg-theme-1 mx-auto rounded-full w-12 py-3 text-xl">
              01
            </div>
            <h3 className="text-xl md:text-2xl">Connect Your Wallet</h3>
            <p>
              Connect your MetaMask or other wallet to this website using the
              widget at the top of the page. From there you can easily buy $WAI
              tokens using ETH, BNB, MATIC or AVX.
            </p>
          </div>
          <div className="p-3 space-y-3 bg-[rgba(255,255,255,.2)] rounded-box">
            <div className="bg-theme-1 mx-auto rounded-full w-12 py-3 text-xl">
              01
            </div>
            <h3 className="text-xl md:text-2xl">Connect Your Wallet</h3>
            <p>
              Connect your MetaMask or other wallet to this website using the
              widget at the top of the page. From there you can easily buy $WAI
              tokens using ETH, BNB, MATIC or AVX.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToBuy;
