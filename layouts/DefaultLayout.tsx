import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import React, { PropsWithChildren, useEffect } from 'react';
import 'nprogress/nprogress.css';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      easing: 'linear',
      speed: 500,
      trickleSpeed: 500,
      parent: '#progress-navigation',
    });

    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router]);

  return (
    <>
      <Box
        sx={{
          '#nprogress': {
            '& .bar': {
              bg: 'linear-gradient(90deg, #7533DB 0%, #B774FF 100%)',
              height: '0.1875rem',
            },
            '& .peg': {
              boxShadow: 'unset',
            },
          },
        }}
        id="progress-navigation"
        position="fixed"
        width="100%"
        height="0.1875rem"
        zIndex="banner"
      />

      <Box
      /*  backgroundImage={`url(assets/bg/bg-type-1.svg)`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        transform="translate3D(0,0,0)" */
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Box>
    </>
  );
};

export default DefaultLayout;
