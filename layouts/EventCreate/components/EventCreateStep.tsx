import {
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import React from 'react';

import { ITicketType } from '../Steps/StepAddTicket';

import ImageUpload from '@/components/Upload/ImageUpload';
import SaveIcon from '@/public/assets/icons/generals/save.svg';
interface IProps {
  currentTicket: ITicketType;
  // eslint-disable-next-line no-unused-vars
  setCurrentTicket: (tick: ITicketType) => void;
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onSaveData: (newTicket: ITicketType) => void;
}

const EventCreateStep = ({
  currentTicket,
  setCurrentTicket,
  onClose,
  onSaveData,
}: IProps) => {
  const toast = useToast();
  return (
    <>
      <Flex justifyContent="flex-end">
        <CloseButton
          onClick={onClose}
          sx={{
            svg: {
              height: 5,
              width: 5,
            },
          }}
          color="secondary.danger.500"
        />
      </Flex>

      <Flex flexDirection="column" gap={3}>
        <FormControl variant="create_form">
          <FormLabel>Ticket Name</FormLabel>
          <Input
            placeholder="Enter Ticket Name"
            name="name"
            value={currentTicket.name}
            onChange={e =>
              setCurrentTicket({ ...currentTicket, name: e.target.value })
            }
          />
        </FormControl>
        <HStack gap={6}>
          <FormControl variant="create_form">
            <FormLabel>Ticket Tier</FormLabel>
            <Input
              placeholder="Enter Ticket Tier Ex:1 ,2 "
              value={currentTicket.tier}
              onChange={e =>
                setCurrentTicket({
                  ...currentTicket,
                  tier: parseFloat(e.target.value) || 0,
                })
              }
            />
          </FormControl>
          <FormControl variant="create_form">
            <FormLabel>Ticket Amount</FormLabel>
            <Input
              placeholder="Enter Ticket Amount"
              value={currentTicket.amount}
              onChange={e =>
                setCurrentTicket({
                  ...currentTicket,
                  amount: parseFloat(e.target.value) || 0,
                })
              }
            />
          </FormControl>
          <FormControl variant="create_form">
            <FormLabel>Ticket Price</FormLabel>
            <Input
              placeholder="Enter Ticket Price"
              value={currentTicket.price}
              onChange={e =>
                setCurrentTicket({
                  ...currentTicket,
                  price: parseFloat(e.target.value) || 0,
                })
              }
            />
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
          <Textarea
            placeholder="Enter Ticket Price"
            value={currentTicket.description}
            onChange={e =>
              setCurrentTicket({
                ...currentTicket,
                description: e.target.value,
              })
            }
          />
        </FormControl>
        <ImageUpload
          background={currentTicket.asset}
          size={'1920px X 1080px'}
          label="Cover Ticket Image"
          setBackground={fields =>
            setCurrentTicket({
              ...currentTicket,
              asset: fields?.image,
            })
          }
        />
        <Button
          width="full"
          leftIcon={<Icon as={SaveIcon} />}
          onClick={() => {
            if (!currentTicket.asset) {
              toast({
                title: 'You Need to import Background Ticket',
                description: "We're need image of each ticket",
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
              return;
            }
            onSaveData(currentTicket);
            onClose();
          }}
        >
          Save
        </Button>
      </Flex>
    </>
  );
};

export default EventCreateStep;
