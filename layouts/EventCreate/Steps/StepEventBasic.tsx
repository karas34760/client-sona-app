import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { ONE_DAY, calculateMinEndTime } from '@/utils/format/date';
// Step Basic Event Info
export interface IEventDetailData {
  name: string;

  StartTime: string;
  EndTime: string;
  TimeForSell: string;
  DeadlineForSell: string;
}
interface IProps {
  // eslint-disable-next-line no-unused-vars
  event_data: IEventDetailData;
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<IEventDetailData>) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}
const StepEventBasic = ({
  event_data,
  updateFields,
  goToNext,
  goToPrevious,
}: IProps) => {
  const formik = useFormik({
    initialValues: {
      name: event_data.name,
      StartTime: event_data.StartTime,
      EndTime: event_data.EndTime,
      TimeForSell: event_data.TimeForSell,
      DeadlineForSell: event_data.DeadlineForSell,
    },
    onSubmit: async values => {
      updateFields({
        name: values.name,
        StartTime: values.StartTime,
        EndTime: values.EndTime,
        DeadlineForSell: values.DeadlineForSell,
        TimeForSell: values.TimeForSell,
      });
      goToNext();
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Event Name cannot be empty')
        .min(4, 'Event Name need to valid min is 4'),
      StartTime: Yup.date().required('Start Time is required'),
      EndTime: Yup.date().required('End Time is required'),
      TimeForSell: Yup.date().required('Time For Sell is required'),
      DeadlineForSell: Yup.date().required('Deadline For Sell is required'),
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex flexDirection="column" gap={3} py={6}>
          <FormControl
            isRequired
            variant="create_form"
            isInvalid={!!(formik.touched.name && formik.errors.name)}
          >
            <FormLabel>Event Name</FormLabel>
            <Input
              placeholder="Event name"
              id="name"
              step="any"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name && (
              <FormErrorMessage>
                <Text> {formik.errors.name}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          <HStack gap={5} flexWrap={{ md: 'nowrap', base: 'wrap' }}>
            <FormControl variant="create_form" isRequired>
              <FormLabel>Event Start </FormLabel>
              <Flex gap={2} alignItems="center">
                <Input
                  size="md"
                  type="datetime-local"
                  id="StartTime"
                  value={formik.values.StartTime}
                  onChange={formik.handleChange}
                  min={new Date().toISOString().slice(0, 16)}
                />
              </Flex>
            </FormControl>
            <FormControl variant="create_form" isRequired>
              <FormLabel>Event End</FormLabel>
              <Flex gap={2} alignItems="center">
                <Input
                  size="md"
                  type="datetime-local"
                  id="EndTime"
                  value={formik.values.EndTime}
                  onChange={formik.handleChange}
                  min={calculateMinEndTime(formik.values.StartTime, ONE_DAY)}
                />
              </Flex>
            </FormControl>
          </HStack>
          <HStack gap={5} flexWrap={{ md: 'nowrap', base: 'wrap' }}>
            <FormControl variant="create_form" isRequired>
              <FormLabel>Time For Sale</FormLabel>
              <Flex gap={2} alignItems="center">
                <Input
                  size="md"
                  type="datetime-local"
                  id="TimeForSell"
                  value={formik.values.TimeForSell}
                  onChange={formik.handleChange}
                  min={new Date().toISOString().slice(0, 16)}
                  max={formik.values.StartTime}
                />
              </Flex>
            </FormControl>
            <FormControl variant="create_form" isRequired>
              <FormLabel>Deadline for Sale</FormLabel>
              <Flex gap={2} alignItems="center">
                <Input
                  size="md"
                  type="datetime-local"
                  id="DeadlineForSell"
                  value={formik.values.DeadlineForSell}
                  onChange={formik.handleChange}
                  min={formik.values.TimeForSell}
                  max={formik.values.StartTime}
                />
              </Flex>
            </FormControl>
          </HStack>
        </Flex>
        <Flex gap={3}>
          <Button width="full" variant="primary" onClick={() => goToPrevious()}>
            Previous Step
          </Button>
          <Button width="full" variant="primary" type="submit">
            Next Step
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default StepEventBasic;
