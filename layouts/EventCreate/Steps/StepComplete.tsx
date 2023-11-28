import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import SendMoneyContract from '@/components/Modal/SendMoneyContract';

interface IProps {
  mortageTx: string;
  license: string;

  updateFields: (
    // eslint-disable-next-line no-unused-vars
    fields: Partial<{ mortageTx: string; license: string }>
  ) => void;
  goToPrevious: () => void;
  handleSubmit: () => void;
}
const StepComplete = ({
  mortageTx,
  updateFields,
  license,
  goToPrevious,
  handleSubmit,
}: IProps) => {
  const formik = useFormik({
    initialValues: {
      mortageTx: mortageTx,
      license: license,
    },
    onSubmit: async values => {
      updateFields({ mortageTx: values.mortageTx, license: values.license });
      handleSubmit();
    },
    validationSchema: Yup.object({
      mortageTx: Yup.string().required('Transaction Hash cannot be empty'),
      license: Yup.string().required('Lience  cannot be empty'),
    }),
    validateOnChange: true,
  });

  return (
    <>
      <Box overflow="hidden">
        <Text width="full" textOverflow="ellipsis">
          Now it time to finish , we need you send 5k $ to this organize USDT by
          address:
        </Text>

        <Text fontSize={{ md: 'lg', base: 'md' }} fontWeight="bold">
          0x06E3b4Fbc959fD7C800D92CDb865BE077cC86302
        </Text>
        <Text>
          All of this follow our lience and policy I need to paraphase this text
          to more clear.
        </Text>
        <Text fontWeight="bold">Basic Price: 5000$</Text>
        <SendMoneyContract
          setTxHash={content =>
            formik.handleChange({
              target: { name: 'mortageTx', value: content },
            })
          }
        />
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <Flex flexDirection="column" gap={6}>
          <FormControl
            isRequired
            variant="create_form"
            isInvalid={!!(formik.touched.mortageTx && formik.errors.mortageTx)}
          >
            <FormLabel>Transaction Hash</FormLabel>
            <Input
              placeholder="Tx-Hash"
              name="mortageTx"
              value={formik.values.mortageTx}
              onChange={formik.handleChange}
            />
            {formik.touched.mortageTx && formik.errors.mortageTx && (
              <FormErrorMessage mb={6}>
                <Text> {formik.errors.mortageTx}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired
            variant="create_form"
            isInvalid={!!(formik.touched.license && formik.errors.license)}
          >
            <FormLabel>Lience Link</FormLabel>
            <Input
              placeholder="Lience"
              name="license"
              value={formik.values.license}
              onChange={formik.handleChange}
            />
            {formik.touched.license && formik.errors.license && (
              <FormErrorMessage mb={6}>
                <Text> {formik.errors.license}</Text>
              </FormErrorMessage>
            )}
          </FormControl>
          <Flex gap={3}>
            <Button
              width="full"
              variant="primary"
              onClick={() => goToPrevious()}
            >
              Previous Step
            </Button>
            <Button width="full" variant="primary" type="submit">
              Submit Complete
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default StepComplete;
