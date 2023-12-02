import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import EnterCode from '../Custom/EnterCodeVerify';

import { client } from '@/graphql/httplink';
import { VEIRYF_EMAIL } from '@/graphql/query';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}
const VerifyCodeModal = ({ isOpen, onClose, email }: IProps) => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast({
    position: 'top-right',
  });
  const [code, setCode] = useState('');

  const handleCodeSubmit = async () => {
    const response = await client.mutate({
      mutation: VEIRYF_EMAIL,
      variables: {
        email: email,
        code: code,
      },
    });
    console.log('Now Response', response);
    if (response.data.verifyEmail) {
      toast({
        title: 'Verify  Success.',
        description: 'Your email is verify sucess',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Verify  error occurred.',
        description: 'Unable to verify your code ',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding={8}>
            <VStack width="full">
              <Box display="inline-flex" gap={2}>
                Please Check Your Email , Code verify sent to:
                <Text fontWeight="bold"> ${email} </Text>
              </Box>
              <EnterCode isLoading={isLoading} callback={setCode} />
              <Button onClick={handleCodeSubmit}>Authentication Verify</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VerifyCodeModal;
