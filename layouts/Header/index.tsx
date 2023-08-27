import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import DesktopHeader from './components/DesktopHeader';

const Header = () => {
  const bgHeader = useColorModeValue('white', 'dark.200');
  return (
    <>
      <Box
        as="header"
        zIndex="dropdown"
        position="sticky"
        top={0}
        right={0}
        bg={bgHeader}
      >
        <Container maxWidth="container.xl" py={6}>
          <DesktopHeader />
        </Container>
      </Box>
    </>
  );
};

export default Header;
