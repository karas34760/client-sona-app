/* eslint-disable no-unused-vars */
import { Button, Flex, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import CardCreatedSinger from '../components/CardCreatedSinger';
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
  const {
    onClose: onCloseUpdate,
    onOpen: onOpenUpdate,
    isOpen: isOpenUpdate,
  } = useDisclosure();
  const addSinger = (newSinger: ISignerType) => {
    const updatedList = [...listSingers, newSinger];
    setListSingers(updatedList);
  };
  useEffect(() => {
    updateFields({ singers: listSingers });
  }, [listSingers]);

  const deleteSinger = (index: any) => {
    const updatedList = listSingers.filter((item, i) => i !== index);
    setListSingers(updatedList);
  };
  const updateSinger = (index: number, updatedSinger: ISignerType) => {
    const updatedList = [...listSingers];
    updatedList[index] = updatedSinger;
    setListSingers(updatedList);
  };
  const toast = useToast();
  return (
    <>
      <Flex flexDirection="column" gap={6}>
        {!isOpen && !listSingers.length && (
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
              {!isOpenUpdate && (
                <CardCreatedSinger
                  name={item.name}
                  image={item.asset}
                  sex={item.sex}
                  deleteSinger={() => deleteSinger(index)}
                  updateSinger={async () => {
                    await setCurrentSinger(item);
                    onOpenUpdate();
                  }}
                />
              )}
              {isOpenUpdate && currentSinger.name === item.name && (
                <SignerCreateStep
                  onClose={() => {
                    onCloseUpdate();
                    setCurrentSinger(initialValue);
                  }}
                  currentIndex={index}
                  onUpdateData={updateSinger}
                  currentSinger={currentSinger}
                />
              )}
            </>
          ))}
        {!isOpen && !isOpenUpdate && listSingers.length != 0 && (
          <Button
            onClick={() => {
              onOpen();
            }}
          >
            Add Another Singer
          </Button>
        )}
        {isOpen && (
          <SignerCreateStep
            onClose={() => {
              onClose();
              setCurrentSinger(initialValue);
            }}
            onSaveData={addSinger}
            currentIndex={listSingers.length}
            currentSinger={currentSinger}
          />
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
                if (!listSingers.length) {
                  toast({
                    title: 'You Need to import Singer in Your Event',
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
      </Flex>
    </>
  );
};

export default StepSingerCreate;
