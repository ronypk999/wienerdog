import {
  useAccount,
  useChainId,
  useDisconnect,
  useSendTransaction,
  useSwitchChain,
} from "wagmi";

import dexicon from "../../assets/bnb.png";
import { useBalance } from "wagmi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { parseEther } from "viem";
import axios from "axios";
import Success from "../../components/modal/Success";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useInfoContext } from "../../hook/ContextHook";
import { useTranslation } from "react-i18next";

export const WalletConnect = () => {
  const { t } = useTranslation();
  const {
    updateData,
    addressStore,
    amountSender,
    amount,
    selectedCoin,
    amountValidate,
  } = useInfoContext();

  const [buyBtnTxt, setBuyBtnTxt] = useState(
    `${t("widget_buy")} ${selectedCoin.name}`
  );
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const [openModal, setOpenModal] = useState(false);

  const {
    sendTransaction,
    data: SendTransactionData,
    error: SendTransactionErrorType,
  } = useSendTransaction();
  const balance = useBalance({
    address: address,
  });

  useEffect(() => {
    if (address) {
      addressStore(address);
      updateData();
    }
  }, [address]);

  const chainId = useChainId();
  const {
    switchChain,
    error: SwitchChainErrorType,
    data: SwitchChainData,
  } = useSwitchChain();

  useEffect(() => {
    if (SwitchChainErrorType) {
      toast.error(t("widget_cancelled"), {
        theme: "dark",
      });
    }
  }, [SwitchChainErrorType]);

  const proceed = () => {
    const check = amountValidate(
      typeof balance?.data?.formatted === "string"
        ? parseFloat(balance.data.formatted)
        : balance?.data?.formatted || 0
    );

    if (check) {
      toast.error(check, { theme: "dark" });
    } else {
      setBuyBtnTxt("Processing");

      sendTransaction({
        to: `0x${selectedCoin.receiver.substring(2)}`,
        value: parseEther(amountSender.toString()),
        data: "0x",
      });
    }
  };
  useEffect(() => {
    if (SwitchChainData) {
      proceed();
    }
  }, [SwitchChainData]);
  useEffect(() => {
    // switchChain({ chainId: selectedCoin.chainId });

    setBuyBtnTxt(`Buy with ${selectedCoin.name}`);
  }, [selectedCoin]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (
  //       isConnected &&a
  //       selectedCoin.chainId &&
  //       selectedCoin.chainId !== chainId
  //     ) {
  //       const coin = coins.find((coin) => coin.chainId === chainId);
  //       setSelectedCoin(coin);
  //       setBuyBtnTxt(`Buy with ${coin.name}`);
  //     }
  //   }, 3000);
  // }, [chainId, isConnected, selectedCoin]);

  const buyWithBnb = () => {
    if (chainId === selectedCoin.chainId) {
      proceed();
    } else {
      switchChain({ chainId: selectedCoin.chainId });
    }
  };

  useEffect(() => {
    if (SendTransactionErrorType) {
      setBuyBtnTxt(`${t("widget_buy")} ${selectedCoin.name}`);
      toast.error(t("widget_failed"), {
        theme: "dark",
      });
    }
  }, [SendTransactionErrorType]);

  useEffect(() => {
    if (SendTransactionData) {
      setBuyBtnTxt(t("widget_success"));
      setOpenModal(true);
      const apiObj = JSON.stringify({
        coinAmount: amountSender,
        dxeAmount: amount,
        address: address,
        refId: localStorage.getItem("refId") || null,
        hash: SendTransactionData,
        receiver: selectedCoin.receiver,
        coinName: selectedCoin.name,
      });

      //send data to database
      axios
        .post(`${import.meta.env.VITE_API_URL}/api.php`, apiObj)
        .then(() => {
          setBuyBtnTxt(`${t("widget_buy_more")} ${selectedCoin.name}`);
          updateData();
        })
        .catch(() => {
          setBuyBtnTxt(`${t("widget_buy")} ${selectedCoin.name}`);
        });
    }
  }, [SendTransactionData]);

  useEffect(() => {
    updateData();
  }, [isConnected]);

  return (
    <>
      <Success
        purchase={{
          amountInBNB: amountSender,
          amountInDXE: amount,
          address: `${address}`,
          hash: `0x${SendTransactionData}`,
          dxeicon: dexicon,
          coin: selectedCoin,
        }}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></Success>
      <div>
        {isConnected ? (
          <div className="flex flex-col gap-2">
            <button
              onClick={buyWithBnb}
              className="btn bg-theme-1 text-base px-6"
            >
              {buyBtnTxt}
              <img src={selectedCoin.icon} className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                disconnect();
              }}
              className="btn bg-theme-1 text-base px-6"
            >
              {t("widget_disconnect")}
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              open({ view: "Connect" });
            }}
            className="btn bg-theme-1 text-base px-6"
          >
            {t("widget_connect")}
          </button>
        )}
      </div>
    </>
  );
};
