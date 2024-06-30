import axios from "axios";
import React, { createContext, useState, ReactNode, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import ethImage from "../assets/ethereum.png";
import bnbImage from "../assets/bnb.png";
import maticImage from "../assets/matic.png";
import avaxImage from "../assets/avalanche.png";
import { Web3ModalProvider } from "../web3/evm/WalletSetup";
import { useTranslation } from "react-i18next";
interface coinx {
  bnbPrice?: number;
  ethPrice?: number;
  maticPrice?: number;
  avaxPrice?: number;
  dxePrice?: number;
  usdPrice?: number;
  collectedDXE?: number;
  targetDXE?: number;
  myPurchase?: number;
  presaleEndTime?: number;
}

interface PurchaseData extends coinx {
  data: coinx;
}

interface Coin {
  name: string;
  icon: string;
  price?: number;
  wallet: ReactNode; // Or JSX.Element if you're sure it's a React component
  chainId: number;
  scanUrl: string;
  receiver: string;
}

interface ContextProps {
  children: ReactNode;
}

export interface ContextValue extends PurchaseData {
  updateData: () => void;
  coins: Coin[];
  setSelectedCoin: (coin: Coin) => void;
  selectedCoin: Coin;
  amount: number;
  amountSender: number;
  setAmountSender: (amount: number) => void;
  setAmount: (amount: number) => void;
  addressStore: (address?: string | null) => string[] | null;
  amountValidate: (balance: number) => string | false;
  sendCoinRef: React.MutableRefObject<HTMLInputElement | null>;
  faqRef: React.MutableRefObject<HTMLInputElement | null>;
  widget: React.MutableRefObject<HTMLInputElement | null>;
  howToBuyRef: React.MutableRefObject<HTMLInputElement | null>;
  WhatisRef: React.MutableRefObject<HTMLInputElement | null>;
  scrollToTarget: () => void;
  scrollToFaq: () => void;
  scrollToWhat: () => void;
  scrollToHow: () => void;
}

export const InfoContext = createContext<ContextValue | undefined>(undefined);

const ContextProvider = ({ children }: ContextProps) => {
  const { t } = useTranslation();
  const { data: datax } = useLoaderData() as PurchaseData; // Ensure type of loader data
  const [data, setData] = useState<coinx>(datax || {});
  const sendCoinRef = useRef<HTMLInputElement>(null);
  const faqRef = useRef<HTMLInputElement>(null);
  const howToBuyRef = useRef<HTMLInputElement>(null);
  const WhatisRef = useRef<HTMLInputElement>(null);
  const widget = useRef<HTMLInputElement>(null);
  const addressStore = (address: string | null = null): string[] | null => {
    if (address) {
      const check = localStorage.getItem("addressArray") || "[]";
      const addresses = JSON.parse(check);
      if (!addresses.includes(address)) {
        const newAddresses = [...addresses, address];
        localStorage.setItem("addressArray", JSON.stringify(newAddresses));
      }
    }
    return JSON.parse(localStorage.getItem("addressArray") || "null");
  };

  const updateData = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api.php`, {
        info: 1,
        address: addressStore(),
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  const coins: Coin[] = [
    {
      name: "BNB",
      icon: bnbImage,
      price: data?.bnbPrice,
      wallet: <Web3ModalProvider />,
      chainId: 56,
      scanUrl: "https://bscscan.com/tx/",
      receiver: "0xe6D5270c076Fe42e5896be4edeF26a33CDe96eAD",
    },
    {
      name: "ETH",
      icon: ethImage,
      price: data?.ethPrice,
      wallet: <Web3ModalProvider />,
      chainId: 1,
      scanUrl: "https://etherscan.io/tx/",
      receiver: "0xe6D5270c076Fe42e5896be4edeF26a33CDe96eAD",
    },
    {
      name: "MATIC",
      icon: maticImage,
      price: data?.maticPrice,
      wallet: <Web3ModalProvider />,
      chainId: 137,
      scanUrl: "https://polygonscan.com/tx/",
      receiver: "0xe6D5270c076Fe42e5896be4edeF26a33CDe96eAD",
    },
    {
      name: "AVAX",
      icon: avaxImage,
      price: data?.avaxPrice,
      wallet: <Web3ModalProvider />,
      chainId: 43114,
      scanUrl: "https://subnets.avax.network/c-chain/tx/",
      receiver: "0xe6D5270c076Fe42e5896be4edeF26a33CDe96eAD",
    },
  ];

  const [selectedCoin, setSelectedCoin] = useState<Coin>(coins[0]);
  const [amount, setAmount] = useState<number>(0);
  const [amountSender, setAmountSender] = useState<number>(0);

  const amountValidate = (balance: number): string | false => {
    if (isNaN(amountSender)) {
      return t("widget_error_number");
    }

    if (amountSender === 0) {
      return t("widget_error_type_amount");
    }

    if (amountSender < 0) {
      return t("widget_error_amount");
    }

    if (selectedCoin.name === "MATIC" && amountSender < 1) {
      return `${t("widget_min_buy")} 1 ${selectedCoin.name}`;
    } else if (amountSender < 0.001) {
      return `${t("widget_min_buy")} 0.001 ${selectedCoin.name}`;
    }

    if (amountSender > balance) {
      return t("widget_error_balance");
    }

    return false; // Explicitly return false if no validation errors
  };

  const scrollToTarget = () => {
    if (widget.current) {
      widget.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToFaq = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToWhat = () => {
    if (WhatisRef.current) {
      WhatisRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHow = () => {
    if (howToBuyRef.current) {
      howToBuyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dataObject: ContextValue = {
    ...data,
    data: data,
    updateData,
    coins,
    setSelectedCoin,
    selectedCoin,
    amount,
    amountSender,
    setAmountSender,
    setAmount,
    addressStore,
    widget,
    scrollToFaq,
    sendCoinRef,
    faqRef,
    WhatisRef,
    howToBuyRef,
    scrollToWhat,
    scrollToHow,
    scrollToTarget,
    amountValidate,
  };

  return (
    <InfoContext.Provider value={dataObject}>{children}</InfoContext.Provider>
  );
};

export default ContextProvider;
