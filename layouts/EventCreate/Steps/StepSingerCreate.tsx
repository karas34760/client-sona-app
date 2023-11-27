/* eslint-disable no-unused-vars */
import { Box, Button, Container, useDisclosure } from '@chakra-ui/react';
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
  setIsOpenNew: (data: boolean) => void;
}
const initialValue = {
  name: '',
  age: 0,
  sex: 'male',
  asset: undefined,
};
const StepSingerCreate = ({ singers, updateFields, setIsOpenNew }: IProps) => {
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
            setIsOpenNew(true);
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
            setIsOpenNew(false);
            setCurrentSinger(initialValue);
          }}
          onSaveData={addSinger}
          currentSinger={currentSinger}
          setCurrentSinger={setCurrentSinger}
        />
      )}
    </>
  );
};

export default StepSingerCreate;
