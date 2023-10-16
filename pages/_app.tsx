import { ChakraProvider } from '@chakra-ui/react';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { AppProps } from 'next/app';
import { Work_Sans } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import NextAdapterPages from 'next-query-params';
import { useEffect } from 'react';
import { QueryParamProvider } from 'use-query-params';
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';

import DefaultLayout from '@/layouts/DefaultLayout';
import theme from '@/themes/theme';
import { initGA } from '@/utils/analysis';
/* import { config } from '@/wallet/wagmi/config'; */
const work_sans = Work_Sans({ subsets: ['latin'] });
function Adapter(props: any) {
  return <NextAdapterPages {...props} shallow={true} />;
}
const config = createConfig(
  getDefaultConfig({
    appName: 'Tickifi App',
    infuraId: process.env.REACT_APP_INFURA_KEY,
    alchemyId: process.env.REACT_ALCHEMY_KEY,
    chains: [mainnet, polygon, optimism, arbitrum],
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,
  })
);
function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || 'G-BWWLJY48PD');
  }, []);
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-work: ${work_sans.style.fontFamily};
          }
        `}
      </style>

      <WagmiConfig config={config}>
        <ConnectKitProvider theme="auto" mode="light" debugMode>
          <ChakraProvider theme={theme}>
            <QueryParamProvider
              options={{
                skipUpdateWhenNoChange: true,
                updateType: 'replaceIn',
              }}
              adapter={Adapter}
            >
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </QueryParamProvider>
          </ChakraProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default appWithTranslation(App);
