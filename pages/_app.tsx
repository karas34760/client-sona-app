import { ChakraProvider } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import { AppProps } from 'next/app';
import { Work_Sans } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import NextAdapterPages from 'next-query-params';
import { QueryParamProvider } from 'use-query-params';

import DefaultLayout from '@/layouts/DefaultLayout';
import theme from '@/themes/theme';
import connectors from '@/utils/connectors';

const work_sans = Work_Sans({ subsets: ['latin'] });
function Adapter(props: any) {
  return <NextAdapterPages {...props} shallow={true} />;
}

function App({ Component, pageProps }: AppProps) {
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
        <QueryParamProvider
          options={{
            skipUpdateWhenNoChange: true,
            updateType: 'replaceIn',
          }}
          adapter={Adapter}
        >
          <Web3ReactProvider connectors={connectors}>
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </Web3ReactProvider>
        </QueryParamProvider>
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(App);
