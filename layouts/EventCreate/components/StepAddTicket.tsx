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
  const [listTicket, setListTicket] = useState<ITicketType[]>([]);
  const deleteEvent = (index: any) => {
    const updatedList = listTicket.filter((item, i) => i !== index);
    setListTicket(updatedList);
  };
  const addTicket = (newTicket: ITicketType) => {
    // Use the spread operator to create a new array with the new ticket
    const updatedList = [...listTicket, newTicket];
    setListTicket(updatedList);
  };
  return (
    <>
      <Button onClick={onOpen}>Add Ticket</Button>
      {isOpen && <EventCreateStep />}
    </>
  );
};

export default StepAddTicket;
