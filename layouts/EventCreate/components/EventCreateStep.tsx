import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

const EventCreateStep = () => {
  return (
    <>
      <Flex flexDirection="column" gap={3}>
        <FormControl variant="create_form">
          <FormLabel>Ticket Name</FormLabel>
          <Input placeholder="Enter Ticket Name" />
        </FormControl>
        <HStack gap={6}>
          <FormControl variant="create_form">
            <FormLabel>Ticket Quantity</FormLabel>
            <Input placeholder="Enter Ticket Quantity" />
          </FormControl>
          <FormControl variant="create_form">
            <FormLabel>Ticket Amount</FormLabel>
            <Input placeholder="Enter Ticket Amount" />
          </FormControl>
          <FormControl variant="create_form">
            <FormLabel>Ticket Price</FormLabel>
            <Input placeholder="Enter Ticket Price" />
          </FormControl>
        </HStack>
        <HStack gap={6}>
          <FormControl variant="create_form">
            <FormLabel>Minimum Per Booking</FormLabel>
            <Input type="number" value={1} />
          </FormControl>
          <FormControl variant="create_form">
            <FormLabel>Max Per Booking</FormLabel>
            <Input type="number" value={10} />
          </FormControl>
        </HStack>
        <FormControl variant="create_form">
          <FormLabel>Ticket Description</FormLabel>
          <Textarea placeholder="Enter Ticket Price" />
        </FormControl>
      </Flex>
    </>
  );
};

export default EventCreateStep;
