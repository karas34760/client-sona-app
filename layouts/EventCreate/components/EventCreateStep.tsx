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
import { useFormik } from 'formik';
import React from 'react';

import { ITicketType } from '../Steps/StepAddTicket';

import ImageUpload from '@/components/Upload/ImageUpload';
import SaveIcon from '@/public/assets/icons/generals/save.svg';
interface IProps {
  currentTicket: ITicketType;

  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onSaveData: (newTicket: ITicketType) => void;
}

const EventCreateStep = ({ currentTicket, onClose, onSaveData }: IProps) => {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      amount: currentTicket.amount,
      name: currentTicket.name,
      asset: currentTicket.asset,
      description: currentTicket.description,
      price: currentTicket.price,
      tier: currentTicket.tier,
      uri: currentTicket.uri,
    },
    onSubmit: async values => {
      if (!values.asset) {
        toast({
          title: 'You Need to import Background Ticket',
          description: "We're need image of each ticket",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
      console.log('Now Value', values);
      onSaveData(values);
      onClose();
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
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
          <FormControl variant="create_form" isRequired>
            <FormLabel>Ticket Name</FormLabel>
            <Input
              placeholder="Enter Ticket Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </FormControl>
          <HStack gap={6}>
            <FormControl variant="create_form" isRequired>
              <FormLabel>Ticket Tier</FormLabel>
              <Input
                placeholder="Enter Ticket Tier Ex:1 ,2 "
                value={formik.values.tier}
                onChange={e =>
                  formik.handleChange({
                    target: {
                      name: 'tier',
                      value: parseFloat(e.target.value) || 0,
                    },
                  })
                }
              />
            </FormControl>
            <FormControl variant="create_form" isRequired>
              <FormLabel>Ticket Amount</FormLabel>
              <Input
                placeholder="Enter Ticket Amount"
                value={formik.values.amount}
                onChange={e =>
                  formik.handleChange({
                    target: {
                      name: 'amount',
                      value: parseFloat(e.target.value) || 0,
                    },
                  })
                }
              />
            </FormControl>
            <FormControl variant="create_form" isRequired>
              <FormLabel>Ticket Price</FormLabel>
              <Input
                placeholder="Enter Ticket Price"
                value={formik.values.price}
                onChange={e =>
                  formik.handleChange({
                    target: {
                      name: 'price',
                      value: parseFloat(e.target.value) || 0,
                    },
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
          <FormControl variant="create_form" isRequired>
            <FormLabel>Ticket Description</FormLabel>
            <Textarea
              placeholder="Enter Ticket Price"
              value={formik.values.description}
              onChange={e =>
                formik.handleChange({
                  target: {
                    name: 'description',
                    value: e.target.value,
                  },
                })
              }
            />
          </FormControl>
          <ImageUpload
            background={formik.values.asset}
            size={'1920px X 1080px'}
            label="Cover Ticket Image"
            setBackground={content => {
              formik.handleChange({
                target: { name: 'asset', value: content.image },
              });
            }}
          />
          <Button width="full" leftIcon={<Icon as={SaveIcon} />} type="submit">
            Save
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default EventCreateStep;
