/* eslint-disable no-unused-vars */
import { Button, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

import EventCreateStep from './EventCreateStep';
export interface ITicketType {
  amount: number;
  name: string;
  description: string; // Ticket Description
  price: string;
  tier: string;
  uri: string;
  minBooking: number; // Min Per Booking
  maxBooking: number; // Max Per Booking
}
const StepAddTicket = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const [listTicket, setListTicket] = useState([]);

  return (
    <>
      <Button onClick={onOpen}>Add Ticket</Button>
      {isOpen && <EventCreateStep />}
    </>
  );
};

export default StepAddTicket;
