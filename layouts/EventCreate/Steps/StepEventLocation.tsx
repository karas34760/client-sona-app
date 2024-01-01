import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Input,
  Flex,
  Text,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
export interface ILocationData {
  location: string | undefined;
}
interface IProps {
  location_data: ILocationData;
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<ILocationData>) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}
const StepEventLocation = ({
  location_data,
  updateFields,
  goToNext,
  goToPrevious,
}: IProps) => {
  const [valueLocation, setValueLocation] = useState('physical');
  const formik = useFormik({
    initialValues: {
      location: location_data.location,
    },
    onSubmit: async values => {
      updateFields({ location: values.location });
      goToNext();
    },
    validationSchema: Yup.object({
      location: Yup.string().required('Please Fill Location Of Events'),
    }),
    validateOnChange: true,
  });
  useEffect(() => {
    updateFields({ location: formik.values.location });
  }, [formik.values.location]);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex
          flexDirection="column"
          gap={6}
          height="full"
          minH={{ md: '350px', base: '300px' }}
        >
          <Box
            pb={6}
            borderBottom="0.063rem solid"
            borderBottomColor="primary.gray.300"
            mb={6}
          >
            <Text fontSize="lg" fontWeight="bold">
              Choose Event Type:
            </Text>
            <RadioGroup
              defaultValue={valueLocation}
              onChange={e => setValueLocation(e)}
            >
              <HStack spacing={5} direction="row">
                <Radio colorScheme="red" value="physical">
                  Physical Location
                </Radio>
                <Radio colorScheme="green" value="online">
                  Online Event
                </Radio>
              </HStack>
            </RadioGroup>
          </Box>
          <Box>
            <FormControl
              isRequired
              variant="create_form"
              isInvalid={!!(formik.touched.location && formik.errors.location)}
            >
              <FormLabel>Event Location</FormLabel>
              <Input
                id="location"
                value={location_data.location}
                onChange={e => {
                  updateFields({ location: e.target.value });
                  formik.handleChange(e);
                }}
                placeholder={
                  valueLocation === 'physical'
                    ? 'Enter  Venue Name'
                    : 'Enter Web URL (Optional)'
                }
              />
              {formik.touched.location && formik.errors.location && (
                <FormErrorMessage>
                  <Text> {formik.errors.location}</Text>
                </FormErrorMessage>
              )}
            </FormControl>
          </Box>
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

export default StepEventLocation;
