import DefaultLayout from '@/layouts/DefaultLayout';
import theme from '@/themes/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';
import { Work_Sans } from 'next/font/google';
import { Inter } from 'next/font/google';

const work_sans = Work_Sans({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
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
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(App);
