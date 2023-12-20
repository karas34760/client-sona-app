import {
  Center,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import ErrorEmail from 'public/assets/icons/socials/email-error.svg';
interface IProps {
  isOpen: boolean;
  children?: React.ReactNode;
}
const AlertVerifyEmail = ({ isOpen, children }: IProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => {}} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody padding={8} as={Center} flexDirection="column" gap={5}>
          <Icon as={ErrorEmail} height="200px" width="200px" color="red.400" />
          <Text>You Need To verify Email to countinue Action</Text>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AlertVerifyEmail;
