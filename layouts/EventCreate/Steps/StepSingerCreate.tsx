/* eslint-disable no-unused-vars */
import { Box, Button, Container, Flex, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import SignerCreateStep from '../components/SignerCreateStep';
export interface ISignerType {
  name: string;
  age: number;
  sex: string;
  asset: File | undefined;
}
interface IProps {
  singers: ISignerType[];
  updateFields: (fields: Partial<{ singers: ISignerType[] }>) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}
const initialValue = {
  name: '',
  age: 0,
  sex: 'male',
  asset: undefined,
};
const StepSingerCreate = ({
  singers,
  updateFields,
  goToNext,
  goToPrevious,
}: IProps) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const [listSingers, setListSingers] = useState<ISignerType[]>(singers);
  const [currentSinger, setCurrentSinger] = useState<ISignerType>(initialValue);
  const addSinger = (newTicket: ISignerType) => {
    // Use the spread operator to create a new array with the new ticket
    const updatedList = [...listSingers, newTicket];
    setListSingers(updatedList);
  };
  useEffect(() => {
    updateFields({ singers: listSingers });
  }, [listSingers]);
  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => {
            onOpen();
          }}
        >
          Add Singer
        </Button>
      )}
      {!isOpen &&
        listSingers.map((item, index) => (
          <>
            <Box>{item.name}</Box>
          </>
        ))}
      {isOpen && (
        <SignerCreateStep
          onClose={() => {
            onClose();

            setCurrentSinger(initialValue);
          }}
          onSaveData={addSinger}
          currentSinger={currentSinger}
          setCurrentSinger={setCurrentSinger}
        />
      )}

      {!isOpen && (
        <Flex gap={3}>
          <Button width="full" variant="primary" onClick={() => goToPrevious()}>
            Previous Step
          </Button>
          <Button
            width="full"
            variant="primary"
            onClick={() => {
              goToNext();
            }}
          >
            Next Step
          </Button>
        </Flex>
      )}
    </>
  );
};

export default StepSingerCreate;
