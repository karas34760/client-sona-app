import { Box, Container } from '@chakra-ui/react';
import React from 'react';

import DesktopHeader from './components/DesktopHeader';

const Header = () => {
  return (
    <>
      <Box as="header">
        <Container maxWidth="container.xl" py={6}>
          <DesktopHeader />
        </Container>
      </Box>
    </>
  );
};

export default Header;
