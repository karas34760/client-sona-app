import DefaultLayout from '@/layouts/DefaultLayout';
import theme from '@/themes/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import 'nprogress/nprogress.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <style jsx global>
        {`
          :root {
            --font-public: ${public_sans.style.fontFamily};
          }
        `}
      </style> */}

      <ChakraProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </>
  );
}

export default App;
