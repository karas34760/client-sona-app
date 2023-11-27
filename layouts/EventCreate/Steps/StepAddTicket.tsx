/* eslint-disable no-unused-vars */
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import CardCreatedTicket from '../components/CardCreatedTicket';
import EventCreateStep from '../components/EventCreateStep';
export interface ITicketType {
  amount: number;
  name: string;
  asset: File | undefined;
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
  setIsOpenNew: (data: boolean) => void;
}
// Manage By initial Value
const initialValue = {
  name: '',
  amount: 0,
  description: '',
  price: 0,
  tier: 0,
  uri: '',
  asset: undefined,
  minBooking: 0,
  maxBooking: 0,
};

const StepAddTicket = ({ tickets, updateFields, setIsOpenNew }: IProps) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const [listTicket, setListTicket] = useState<ITicketType[]>(tickets);
  const [currentTicket, setCurrentTicket] = useState<ITicketType>(initialValue);

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
  console.log('List TIcket', listTicket);
  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => {
            onOpen();
            setIsOpenNew(true);
          }}
        >
          Add Ticket
        </Button>
      )}
      {!isOpen &&
        listTicket.map((item, index) => (
          <>
            <CardCreatedTicket
              key={`${index}-tickets-create`}
              name={item.name}
              amount={item.amount}
              price={item.price}
              tier={item.tier}
            />
          </>
        ))}
      {isOpen && (
        <EventCreateStep
          onClose={() => {
            onClose();
            setIsOpenNew(false);
            setCurrentTicket(initialValue);
          }}
          onSaveData={addTicket}
          currentTicket={currentTicket}
          setCurrentTicket={setCurrentTicket}
        />
      )}
    </>
  );
};

export default StepAddTicket;
