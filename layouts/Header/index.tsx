import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import DesktopHeader from './components/DesktopHeader';
import { convertHex, debounce, throttle } from '@/utils/utils';
import { colors } from '@/themes/theme';

const Header = () => {
  const [transparency, setTransparency] = useState(0.0);
  const bgHeader = useColorModeValue(
    convertHex(colors.primary.gray[50], transparency * 0.85),
    convertHex(colors.dark[200], transparency * 0.85)
  );

  function handleScroll() {
    /* if (window.pageYOffset > 50) {
      setNavbarExpanded(false);
    } else if (window.pageYOffset < 50) {
      setNavbarExpanded(true);
    } */

    if (window.pageYOffset > 500) {
      setTransparency(1);
    } else {
      setTransparency(window.pageYOffset / 500.0);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(debounce(handleScroll)));
    return () =>
      window.removeEventListener('scroll', throttle(debounce(handleScroll)));
  }, []);
  return (
    <>
      <Box
        as="header"
        zIndex="dropdown"
        position="sticky"
        top={0}
        right={0}
        bg={bgHeader}
        backdropFilter={`blur(${transparency * 8}px)`}
      >
        <Container maxWidth="container.xl" py={6}>
          <DesktopHeader />
        </Container>
      </Box>
    </>
  );
};

export default Header;
