import { Box, Container, HStack, Text } from '@chakra-ui/react';
import React from 'react';
// su kien theo the loai
const EventsExplore = () => {
  const ListEvents = [];
  return (
    <Container maxWidth="container.xl">
      <Text variant="type_sub_title">Events</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus
        facilisi ultrices sed faucibus proin cum ut.
      </Text>
      <HStack width="full" justifyContent="space-between"></HStack>
    </Container>
  );
};

export default EventsExplore;
