import { polygonMumbai } from 'viem/chains';
import { createConfig, configureChains } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({
      apiKey:
        process.env.REACT_ALCHEMY_KEY || 'JXwU6Y9q6W62R3-TY3KzLKd-uGV-jJF4',
    }),
    publicProvider(),
  ]
);

// Set up wagmi config
export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),

    new WalletConnectConnector({
      chains,
      options: {
        projectId:
          process.env.WALLETCONNECT_PROJECT_ID ||
          '45ef6b3bd25f3ca92fb81b0ab7a93a0d',
        showQrModal: false,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
  ],
  publicClient,
});

// Pass config to React Context Provider
