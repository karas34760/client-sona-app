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
  tier: 1,
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
  const {
    onClose: onCloseUpdate,
    onOpen: onOpenUpdate,
    isOpen: isOpenUpdate,
  } = useDisclosure();
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
  const updateTicket = (index: number, updatedTicket: ITicketType) => {
    const updatedList = [...listTicket];
    updatedList[index] = updatedTicket;
    setListTicket(updatedList);
  };
  useEffect(() => {
    updateFields({ tickets: listTicket });
  }, [listTicket]);

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
          listTicket.length != 0 &&
          listTicket.map((item, index) => (
            <>
              {!isOpenUpdate && (
                <CardCreatedTicket
                  key={`${index}-tickets-create`}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  tier={item.tier}
                  description={item.description}
                  image={item.asset}
                  deleteTicket={() => deleteTicket(index)}
                  updateTicket={async () => {
                    await setCurrentTicket(item);
                    onOpenUpdate();
                  }}
                />
              )}

              {isOpenUpdate && (
                <EventCreateStep
                  onClose={() => {
                    onCloseUpdate();

                    setCurrentTicket(initialValue);
                  }}
                  currentIndex={index}
                  onUpdateData={updateTicket}
                  currentTicket={currentTicket}
                />
              )}
            </>
          ))}
        {!isOpen && !isOpenUpdate && listTicket.length != 0 && (
          <Button
            onClick={() => {
              onOpen();
            }}
          >
            Add Another Ticket
          </Button>
        )}
        {!isOpen && !isOpenUpdate && (
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
