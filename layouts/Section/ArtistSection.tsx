import { Container, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const ArtistSection = () => {
  return (
    <Container maxWidth="container.xl">
      <VStack gap={6}>
        <Text color="primary.purple.600">Artist</Text>
        <Text>Leading the charge towards ticketing & music in Web3</Text>
      </VStack>
    </Container>
  );
};

export default ArtistSection;
