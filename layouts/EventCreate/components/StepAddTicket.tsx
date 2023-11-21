/* eslint-disable no-unused-vars */
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import EventCreateStep from './EventCreateStep';
export interface ITicketType {
  amount: number;
  name: string;
  asset: string;
  description: string; // Ticket Description
  price: number;
  tier: number;
  uri: string;
  minBooking: number; // Min Per Booking
  maxBooking: number; // Max Per Booking
}
interface IProps {
  tickets: ITicketType[];
  updateFields: (fields: Partial<{ tickets: ITicketType[] }>) => void;
}
const StepAddTicket = ({ tickets, updateFields }: IProps) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const [listTicket, setListTicket] = useState<ITicketType[]>(tickets);
  const [currentTicket, setCurrentTicket] = useState<ITicketType>({
    name: '',
    amount: 0,
    description: '',
    price: 0,
    tier: 0,
    uri: '',
    asset: '',
    minBooking: 0,
    maxBooking: 0,
  });

  const deleteEvent = (index: any) => {
    const updatedList = listTicket.filter((item, i) => i !== index);
    setListTicket(updatedList);
  };
  const addTicket = (newTicket: ITicketType) => {
    // Use the spread operator to create a new array with the new ticket
    const updatedList = [...listTicket, newTicket];
    setListTicket(updatedList);
  };
  useEffect(() => {
    updateFields({ tickets: listTicket });
  }, [listTicket]);
  return (
    <>
      {isOpen ? (
        <Button variant="primary" onClick={() => addTicket(currentTicket)}>
          Save Ticket
        </Button>
      ) : (
        <Button onClick={onOpen}>Add Ticket</Button>
      )}
      {listTicket.map((item, index) => (
        <>
          <Box key={`${index}-tickets-create`}>{item.name}</Box>
        </>
      ))}
      {isOpen && (
        <EventCreateStep
          currentTicket={currentTicket}
          setCurrentTicket={setCurrentTicket}
        />
      )}
    </>
  );
};

export default StepAddTicket;
