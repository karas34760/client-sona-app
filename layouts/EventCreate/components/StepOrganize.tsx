import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { useAuth } from '@/hooks/useAuth';
import { countries } from '@/utils/country';
// Organize Information Detail
export interface IOrganizeData {
  organizer: string;
}
interface IProps {
  // eslint-disable-next-line no-unused-vars
  handleRegisterOrganize: (organize: IOrganizeData) => void;
  goToNext: () => void;
}
const StepOrganize = ({ handleRegisterOrganize, goToNext }: IProps) => {
  const { user } = useAuth();
  const formik = useFormik({
    initialValues: {
      organize: user || '',
    },
    validationSchema: Yup.object({
      organize: Yup.string().required('Email Address cannot be empty'),
    }),
    onSubmit: async values => {
      if (values.organize) {
        handleRegisterOrganize({ organizer: values.organize });
      }
    },
    validateOnChange: true,
  });

  return (
    <>
      <Text>
        Before you start, Knowing your information will help us customize report
        in sales
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Flex flexDirection="column" gap={3} py={6}>
          <FormControl isRequired variant="create_form">
            <FormLabel>Oganizer</FormLabel>
            <Input
              name="organize"
              value={formik.values.organize}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl variant="create_form">
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country">
              {countries.map(item => (
                <option key={item.value} value={item.text}>
                  {item.text}
                </option>
              ))}
            </Select>
          </FormControl>
          <Flex justifyContent="space-between" alignItems="center">
            <FormControl>
              <FormLabel
                fontSize="sm"
                fontWeight="bold"
                color="primary.gray.800"
              >
                GST Register Status
              </FormLabel>
              <RadioGroup defaultValue="register">
                <HStack spacing="24px">
                  <Radio value="register">Registered</Radio>
                  <Radio value="not-register">Not Registered</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl variant="create_form">
              <FormLabel>State</FormLabel>
              <Select placeholder="Select State">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Flex>
          <FormControl variant="create_form">
            <FormLabel>GSTIN Number</FormLabel>
            <Input placeholder="GSTIN Number" />
          </FormControl>
        </Flex>
        <Button
          type="submit"
          width="full"
          variant="primary"
          onClick={() => goToNext()}
        >
          Next Step
        </Button>
      </form>
    </>
  );
};

export default StepOrganize;
