import { Container, Text } from '@chakra-ui/react';
import React from 'react';
const GuidePage = () => {
  return (
    <>
      <Container maxWidth="container.xl" py={8}>
        <Text variant="type_title" textAlign="center" fontWeight="extrabold">
          User Guide
        </Text>
      </Container>
    </>
  );
};

export default GuidePage;
