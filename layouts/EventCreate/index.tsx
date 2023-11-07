import { Box, Container, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const EventCreatePage = () => {
  return (
    <>
      <Container maxWidth="2xl" py={8}>
        <Text textAlign="center" variant="type_sub_title">
          Lets Create Your Events
        </Text>
        <Box py={6}>
          <HStack></HStack>
        </Box>
      </Container>
    </>
  );
};

export default EventCreatePage;
