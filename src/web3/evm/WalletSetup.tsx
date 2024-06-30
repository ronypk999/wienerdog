import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { bsc, Chain, mainnet, polygon, avalanche } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WalletConnect } from "./WalletConnect";

const queryClient = new QueryClient();
const projectId = "0bdf4e02a318033ac42dd72db0c4c5f4";

const metadata = {
  name: import.meta.env.VITE_NAME,
  description: import.meta.env.VITE_SHORT_INFO,
  url: import.meta.env.VITE_API_URL, // origin must match your domain & subdomain
  icons: [`${import.meta.env.VITE_API_URL}/dexicon.png`],
};

const chains: readonly [Chain, ...Chain[]] = [bsc, mainnet, polygon, avalanche];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
});

export function Web3ModalProvider() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletConnect></WalletConnect>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
