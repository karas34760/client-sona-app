import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';

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
  });
  return (
    <>
      <Box>
        Now it time to finish , we need you send 5k $ to this organize USDT by
        address:
        <Text fontSize="lg" fontWeight="bold">
          0x06E3b4Fbc959fD7C800D92CDb865BE077cC86302
        </Text>
        All of this follow our lience and policy I need to paraphase this text
        to more clear.
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <Box mb={6}>
          <FormControl isRequired variant="create_form">
            <FormLabel>Transaction Hash</FormLabel>
            <Input
              placeholder="Tx-Hash"
              name="mortageTx"
              value={formik.values.mortageTx}
              onChange={formik.handleChange}
            />
          </FormControl>
          <FormControl isRequired variant="create_form">
            <FormLabel>Lience Link</FormLabel>
            <Input
              placeholder="Lience"
              name="license"
              value={formik.values.license}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Box>
        <Flex gap={3}>
          <Button width="full" variant="primary" onClick={() => goToPrevious()}>
            Previous Step
          </Button>
          <Button width="full" variant="primary" type="submit">
            Submit Complete
          </Button>
        </Flex>{' '}
      </form>
    </>
  );
};

export default StepComplete;
