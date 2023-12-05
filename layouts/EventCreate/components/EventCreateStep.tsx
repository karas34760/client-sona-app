/* eslint-disable no-unused-vars */
import {
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  Textarea,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { ITicketType } from '../Steps/StepAddTicket';

import ImageUpload from '@/components/Upload/ImageUpload';
import SaveIcon from '@/public/assets/icons/generals/save.svg';
interface IProps {
  currentTicket: ITicketType;

  onClose: () => void;
  currentIndex?: number;
  // eslint-disable-next-line no-unused-vars
  onSaveData?: (newTicket: ITicketType) => void;
  onUpdateData?: (index: number, newTicket: ITicketType) => void;
}

const EventCreateStep = ({
  currentTicket,
  onClose,
  onSaveData,
  currentIndex,
  onUpdateData,
}: IProps) => {
  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .required('Amount is required')
      .min(1, 'Amount must be greater than 0'),
    asset: Yup.mixed().required('Image Ticket is required'),
    tier: Yup.string().required('Tier is required').min(1, 'Tier can not be 0'),
  });
  const formik = useFormik({
    initialValues: {
      amount: currentTicket.amount,
      name: currentTicket.name,
      asset: currentTicket.asset,
      description: currentTicket.description,
      price: currentTicket.price,
      tier: currentTicket.tier,
    },
    onSubmit: async values => {
      if (onSaveData) {
        // use for add ticket
        onSaveData(values);
      }
      if (onUpdateData && currentIndex) {
        onUpdateData(currentIndex, values);
      }
      onClose();
    },
    validateOnChange: true,
    validationSchema: validationSchema,
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
            <FormControl
              variant="create_form"
              isRequired
              isInvalid={!!(formik.touched.tier && formik.errors.tier)}
            >
              <FormLabel>Ticket Tier</FormLabel>
              <Input
                placeholder="Enter Ticket Tier Ex:1 ,2 "
                value={formik.values.tier}
                min={1}
                onChange={e =>
                  formik.handleChange({
                    target: {
                      name: 'tier',
                      value: parseFloat(e.target.value) || 1,
                    },
                  })
                }
              />
              {formik.touched.tier && formik.errors.tier && (
                <FormErrorMessage>
                  <Text> {formik.errors.tier}</Text>
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              variant="create_form"
              isRequired
              isInvalid={!!(formik.touched.amount && formik.errors.amount)}
            >
              <FormLabel>Ticket Amount</FormLabel>
              <Input
                placeholder="Enter Ticket Amount"
                value={formik.values.amount}
                min={1}
                onChange={e =>
                  formik.handleChange({
                    target: {
                      name: 'amount',
                      value: parseFloat(e.target.value) || 0,
                    },
                  })
                }
              />
              {formik.touched.amount && formik.errors.amount && (
                <FormErrorMessage>
                  <Text> {formik.errors.amount}</Text>
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl variant="create_form" isRequired>
              <FormLabel>Ticket Price</FormLabel>
              <Input
                placeholder="Enter Ticket Price"
                min={0}
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
            <FormLabel>Ticket Description (max: 50 characters)</FormLabel>
            <Textarea
              maxLength={50}
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
          <FormControl
            isInvalid={!!(formik.touched.asset && formik.errors.asset)}
          >
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
            {formik.touched.asset && formik.errors.asset && (
              <FormErrorMessage>
                <Text> {formik.errors.asset}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          {}
          <Button width="full" leftIcon={<Icon as={SaveIcon} />} type="submit">
            {onSaveData ? 'Save' : 'Update'}
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default EventCreateStep;
