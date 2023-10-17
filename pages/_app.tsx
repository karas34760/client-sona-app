import { ChakraProvider } from '@chakra-ui/react';
import { ConnectKitProvider } from 'connectkit';
import { AppProps } from 'next/app';
import { Work_Sans } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import NextAdapterPages from 'next-query-params';
import { useEffect } from 'react';
import { QueryParamProvider } from 'use-query-params';
import { WagmiConfig } from 'wagmi';

import DefaultLayout from '@/layouts/DefaultLayout';
import theme from '@/themes/theme';
import { initGA } from '@/utils/analysis';
import { config } from '@/wallet/wagmi/config';
const work_sans = Work_Sans({ subsets: ['latin'] });
function Adapter(props: any) {
  return <NextAdapterPages {...props} shallow={true} />;
}

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

      <ChakraProvider theme={theme}>
        <WagmiConfig config={config}>
          <ConnectKitProvider mode="light" debugMode>
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
          </ConnectKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(App);
