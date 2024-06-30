import { useEffect } from "react";

import eth from "../assets/ethereum.png";

import Timer from "../components/Timer";
import { ToastContainer } from "react-toastify";
import { useInfoContext } from "../hook/ContextHook";
import { useTranslation } from "react-i18next";

const MainConnect = () => {
  const {
    dxePrice,
    setAmountSender,
    selectedCoin,
    setSelectedCoin,
    setAmount,
    usdPrice,
    collectedDXE,
    targetDXE,
    coins,
    amount,
    myPurchase,
    sendCoinRef,
    widget,
  } = useInfoContext();
  const { t } = useTranslation();

  const handleSelectCoin = (selectedName: string) => {
    const coin = coins.find(({ name }) => name === selectedName);
    if (coin) {
      setSelectedCoin(coin);
    } else {
      console.log("coin find error");
    }
  };

  const updateDXE = () => {
    if (selectedCoin.price && dxePrice && sendCoinRef.current) {
      const val =
        typeof sendCoinRef.current.value === "string"
          ? parseFloat(sendCoinRef.current.value) || 0
          : sendCoinRef.current.value || 0;

      const amountInUSD = val * selectedCoin.price;

      const newAmountDxe = amountInUSD * dxePrice;

      setAmount(
        newAmountDxe.toString().length > 8
          ? parseFloat(newAmountDxe.toFixed(8))
          : newAmountDxe
      );
      setAmountSender(val);
    }
  };

  useEffect(() => {
    updateDXE();
  }, [selectedCoin]);

  // const format = (am: number) => {
  //   return Number(am).toFixed(2);
  // };

  const formatUSD = (am: number) => {
    return am.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <div
        ref={widget}
        className="bg-linear z-10 mx-auto text-white text-center space-y-3 p-3 rounded-box max-w-sm"
      >
        <p>{t("widget_title")}</p>
        <Timer></Timer>
        <p>
          {" "}
          {t("widget_raised")}{" "}
          {collectedDXE && usdPrice && formatUSD(collectedDXE * usdPrice)} /{" "}
          {targetDXE && usdPrice && formatUSD(targetDXE * usdPrice)}
        </p>
        <div className="relative">
          <progress
            className="progress progress-[#ba8bf9] w-56 h-6"
            value={collectedDXE}
            max={targetDXE}
          ></progress>
          <p className="absolute top-0 left-[50%] translate-x-[-50%] text-white">
            {t("widget_progress_text")}
          </p>
        </div>

        <p>
          {t("widget_purchase_text")} {myPurchase && myPurchase | 0}
        </p>
        <div className="flex justify-around items-center">
          <div className="w-full flex-1">
            <hr />
          </div>
          <p className="px-6">1 $WAI = ${usdPrice}</p>
          <div className="w-full flex-1">
            <hr />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {coins?.map(({ name, icon }, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  handleSelectCoin(name);
                }}
                className={`btn   ${
                  selectedCoin.name === name
                    ? "bg-white text-black"
                    : "bg-[#ba8bf9] text-white"
                }`}
              >
                <div className="flex gap-2 items-center">
                  <img src={icon} className="w-7" />
                  <span>{name}</span>
                </div>
              </button>
            );
          })}
        </div>
        <div className="flex text-left justify-between text-white">
          <div>
            <p className="text-xs ">
              {selectedCoin?.name} {t("widget_pay")}
            </p>
            <label className="input bg-transparent border-2 border-white rounded-box flex items-center gap-2">
              <input
                type="text"
                className="grow w-full max-w-20"
                placeholder="0"
                onChange={updateDXE}
                ref={sendCoinRef}
              />
              <img src={selectedCoin?.icon} className="w-7" />
            </label>
          </div>
          <div className="space-x-3">
            <p className="text-xs pl-3">$COIN {t("widget_receive")}</p>
            <label className="input bg-transparent border-2 border-white rounded-box flex items-center gap-2">
              <input
                type="text"
                className="grow w-full max-w-20"
                placeholder="0"
                readOnly={true}
                value={amount}
              />
              <img src={eth} className="w-7" />
            </label>
          </div>
        </div>
        <div>{selectedCoin?.wallet}</div>
      </div>
    </>
  );
};

export default MainConnect;
