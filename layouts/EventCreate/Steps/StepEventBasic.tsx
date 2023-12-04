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
import { Select } from 'chakra-react-select';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { categoryEvent, optionEventType } from '@/utils/constants/constants';
import { ONE_DAY, ONE_HOUR, calculateMinEndTime } from '@/utils/format/date';
// Step Basic Event Info

export interface IEventDetailData {
  name: string;
  category: optionEventType;
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
      category: event_data.category,
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
      EndTime: Yup.date()
        .required('End Time is required')
        .test(
          'is-later-than',
          'End Time must be at least 1 hour later than Time For Sell',
          function (value) {
            const { StartTime } = this.parent;

            if (!StartTime || !value) {
              // If either value is missing, let Yup handle the required validation
              return true;
            }

            const oneHourLater = new Date(StartTime);
            oneHourLater.setHours(oneHourLater.getHours() + 1);

            return value >= oneHourLater;
          }
        ),
      TimeForSell: Yup.date().required('Time For Sell is required'),
      DeadlineForSell: Yup.date().required('Deadline For Sell is required'),
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex flexDirection="column" gap={3} py={6}>
          <HStack gap={5}>
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
                onChange={e => {
                  formik.handleChange(e);

                  updateFields({
                    name: e.target.value,
                  });
                }}
              />
              {formik.touched.name && formik.errors.name && (
                <FormErrorMessage>
                  <Text> {formik.errors.name}</Text>
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isRequired
              variant="create_form"
              isInvalid={!!(formik.touched.name && formik.errors.name)}
            >
              <FormLabel>Event Category</FormLabel>
              <Select
                placeholder="Event Category"
                name="category"
                options={categoryEvent}
                value={formik.values.category}
                onChange={e =>
                  formik.handleChange({
                    target: {
                      name: 'category',
                      value: e,
                    },
                  })
                }
              />
            </FormControl>
          </HStack>

          <HStack gap={5} flexWrap={{ md: 'nowrap', base: 'wrap' }}>
            <FormControl variant="create_form" isRequired>
              <FormLabel>Event Start </FormLabel>
              <Flex gap={2} alignItems="center">
                <Input
                  size="md"
                  type="datetime-local"
                  id="StartTime"
                  value={formik.values.StartTime}
                  onChange={e => {
                    formik.handleChange(e);
                    updateFields({
                      StartTime: e.target.value,
                    });
                  }}
                  min={new Date().toISOString().slice(0, 16)}
                />
              </Flex>
            </FormControl>
            <FormControl
              variant="create_form"
              isRequired
              isInvalid={!!(formik.touched.EndTime && formik.errors.EndTime)}
            >
              <FormLabel>Event End</FormLabel>
              <Flex gap={2} alignItems="center">
                <Input
                  size="md"
                  type="datetime-local"
                  id="EndTime"
                  value={formik.values.EndTime}
                  onChange={e => {
                    formik.handleChange(e);
                    updateFields({
                      EndTime: e.target.value,
                    });
                  }}
                  min={calculateMinEndTime(formik.values.StartTime, ONE_HOUR)}
                />
              </Flex>
              {formik.touched.EndTime && formik.errors.EndTime && (
                <FormErrorMessage>
                  <Text> {formik.errors.EndTime}</Text>
                </FormErrorMessage>
              )}
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
                  onChange={e => {
                    formik.handleChange(e);
                    updateFields({
                      TimeForSell: e.target.value,
                    });
                  }}
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
                  onChange={e => {
                    formik.handleChange(e);
                    updateFields({
                      DeadlineForSell: e.target.value,
                    });
                  }}
                  min={calculateMinEndTime(formik.values.TimeForSell, ONE_DAY)}
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
