import { Container, Text } from '@chakra-ui/react';
import React from 'react';

const AboutUsPage = () => {
  return (
    <Container maxWidth="container.xl" py={8}>
      <Text variant="type_title" textAlign="center" fontWeight="extrabold">
        About Us
      </Text>
    </Container>
  );
};

export default AboutUsPage;
