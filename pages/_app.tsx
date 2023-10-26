import { ChakraProvider } from '@chakra-ui/react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 60000,
        cacheTime: 60000,
      },
    },
  });
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
            <QueryClientProvider client={queryClient}>
              <QueryParamProvider
                options={{
                  skipUpdateWhenNoChange: true,
                  updateType: 'replaceIn',
                }}
                adapter={Adapter}
              >
                <Hydrate state={pageProps.dehydratedState}>
                  <DefaultLayout>
                    <Component {...pageProps} />
                  </DefaultLayout>
                </Hydrate>
              </QueryParamProvider>
            </QueryClientProvider>
          </ConnectKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(App);
