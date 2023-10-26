import { Container } from '@chakra-ui/react';
import React from 'react';

import DiscoverHead from './DiscoverHead';

const DiscoverPage = () => {
  return (
    <>
      <Container maxWidth="container.xl" py={8}>
        <DiscoverHead />
      </Container>
    </>
  );
};

export default DiscoverPage;
