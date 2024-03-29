import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ConnectKitProvider } from 'connectkit';
import { AppProps } from 'next/app';
import { Work_Sans } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import NextAdapterPages from 'next-query-params';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryParamProvider } from 'use-query-params';
import { WagmiConfig } from 'wagmi';

import AuthProvider from '@/components/Providers/AuthProvider';
import { client } from '@/graphql/httplink';
import DefaultLayout from '@/layouts/DefaultLayout';
import { persistor, store } from '@/redux/store';
import theme from '@/themes/theme';
import { initGA } from '@/utils/analysis';
import { config } from '@/wallet/wagmi/config';
import '../themes/style/index.css';
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <ChakraProvider theme={theme}>
              <WagmiConfig config={config}>
                <ConnectKitProvider mode="light">
                  <QueryParamProvider
                    options={{
                      skipUpdateWhenNoChange: true,
                      updateType: 'replaceIn',
                    }}
                    adapter={Adapter}
                  >
                    <AuthProvider>
                      <DefaultLayout>
                        <Component {...pageProps} />
                      </DefaultLayout>
                    </AuthProvider>
                  </QueryParamProvider>
                </ConnectKitProvider>
              </WagmiConfig>
            </ChakraProvider>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default appWithTranslation(App);
