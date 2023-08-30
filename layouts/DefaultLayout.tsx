import React, { PropsWithChildren, useEffect } from 'react';
import NProgress from 'nprogress';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
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
  const bgImageLink = 'url(assets/bg/bg-type-1.svg)';
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
        backgroundImage={bgImageLink}
        /* backgroundRepeat={'repeat'} */
        /*     overflowX="hidden" */
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Box>
    </>
  );
};

export default DefaultLayout;
