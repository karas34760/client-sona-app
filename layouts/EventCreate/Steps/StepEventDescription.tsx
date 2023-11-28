import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

import TextEditor from '@/components/TextEditor/TextEditor';
interface IProps {
  description: string;
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<{ description: string }>) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}
const StepEventDescription = ({
  description,
  updateFields,
  goToNext,
  goToPrevious,
}: IProps) => {
  const formik = useFormik({
    initialValues: {
      description: description || '',
    },
    onSubmit: async values => {
      updateFields({ description: values.description });
      goToNext();
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      description: Yup.string().required('Event Name cannot be empty'),
      /* .min(200, 'Event Name need to valid min is 200'), */
    }),
  });
  useEffect(() => {
    updateFields({ description: formik.values.description });
  }, [formik.values.description]);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          variant="create_form"
          mb={6}
          isRequired
          isInvalid={
            !!(formik.touched.description && formik.errors.description)
          }
        >
          <FormLabel fontWeight="bold">Event Description</FormLabel>
          {formik.touched.description && formik.errors.description && (
            <FormErrorMessage mb={6}>
              <Text> {formik.errors.description}</Text>
            </FormErrorMessage>
          )}
          <Box>
            <TextEditor
              convertedContent={formik.values.description}
              setConvertedContent={content =>
                formik.handleChange({
                  target: { name: 'description', value: content },
                })
              }
            />
          </Box>
        </FormControl>

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

export default StepEventDescription;
