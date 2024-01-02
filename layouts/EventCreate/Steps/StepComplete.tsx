import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

import SendMoneyContract from '@/components/Modal/SendMoneyContract';
import WorkingIcon from 'public/assets/icons/art/working.svg';

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
    onSubmit: async () => {
      //handleSubmit();
    },
    validationSchema: Yup.object({
      mortageTx: Yup.string().required('Transaction Hash cannot be empty'),
      license: Yup.string().required('Lience  cannot be empty'),
    }),
    validateOnChange: true,
  });
  useEffect(() => {
    updateFields({
      mortageTx: formik.values.mortageTx,
      license: formik.values.license,
    });
  }, [formik.values.mortageTx]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box overflow="hidden">
        <Text width="full" textOverflow="ellipsis">
          Now it time to finish , we need you send 5k $ to this organize USDT by
          address
        </Text>

        <Text fontSize={{ md: 'lg', base: 'md' }} fontWeight="bold">
          0x06E3b4Fbc959fD7C800D92CDb865BE077cC86302
        </Text>
        <Text>
          All of this follow our lience and policy I need to paraphase this text
          to more clear.
        </Text>
        <Text fontWeight="bold">Basic Price: 5000$</Text>
        {mortageTx.length ? (
          <>
            <Text fontSize="lg" color="primary.purple.500">
              You pay success!
            </Text>
          </>
        ) : (
          <SendMoneyContract
            setTxHash={content =>
              formik.handleChange({
                target: { name: 'mortageTx', value: content },
              })
            }
          />
        )}
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
            <FormLabel>Liecense Link</FormLabel>
            <Input
              placeholder="Liecense"
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
            <Button
              onClick={onOpen}
              width="full"
              variant="primary"
              isDisabled={!formik.values.mortageTx || !formik.values.license}
            >
              Submit Complete
            </Button>
          </Flex>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent padding={8}>
            <ModalCloseButton />
            <Center flexDir="column" gap={4}>
              <Icon as={WorkingIcon} height="240px" width="240px" />
              <Text>
                We will keep your data , and money refund back after 3 days end
                of events
              </Text>
            </Center>

            <ModalFooter gap={6}>
              <Button
                variant="primary"
                onClick={() => {
                  handleSubmit();
                  onClose();
                }}
              >
                Confirm Create
              </Button>
              <Button colorScheme="red" mr={3} onClick={onClose} paddingX={8}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
};

export default StepComplete;
