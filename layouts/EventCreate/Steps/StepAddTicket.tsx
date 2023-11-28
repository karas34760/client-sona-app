/* eslint-disable no-unused-vars */
import { Button, Flex, useDisclosure, useToast } from '@chakra-ui/react';
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
}
interface IProps {
  tickets: ITicketType[];
  updateFields: (fields: Partial<{ tickets: ITicketType[] }>) => void;

  goToPrevious: () => void;
  goToNext: () => void;
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

const StepAddTicket = ({
  tickets,
  updateFields,

  goToNext,
  goToPrevious,
}: IProps) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const [listTicket, setListTicket] = useState<ITicketType[]>(tickets);
  const [currentTicket, setCurrentTicket] = useState<ITicketType>(initialValue);

  const deleteTicket = (index: any) => {
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
  const toast = useToast();
  return (
    <>
      <Flex flexDirection="column" gap={6}>
        {!isOpen && !listTicket.length && (
          <Button
            onClick={() => {
              onOpen();
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
                deleteTicket={() => deleteTicket(index)}
              />
            </>
          ))}
        {!isOpen && listTicket.length && (
          <Button
            onClick={() => {
              onOpen();
            }}
          >
            Add Another Ticket
          </Button>
        )}
        {!isOpen && (
          <Flex gap={3}>
            <Button
              width="full"
              variant="primary"
              onClick={() => goToPrevious()}
            >
              Previous Step
            </Button>
            <Button
              width="full"
              variant="primary"
              onClick={() => {
                if (!listTicket.length) {
                  toast({
                    title: 'You Need to import Ticket Your Event',
                    description: 'It is neccesary',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  });
                  return;
                }
                goToNext();
              }}
            >
              Next Step
            </Button>
          </Flex>
        )}
        {isOpen && (
          <EventCreateStep
            onClose={() => {
              onClose();

              setCurrentTicket(initialValue);
            }}
            onSaveData={addTicket}
            currentTicket={currentTicket}
          />
        )}
      </Flex>
    </>
  );
};

export default StepAddTicket;
