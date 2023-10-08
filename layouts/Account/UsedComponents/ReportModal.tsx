import {
  Button,
  CloseButton,
  ComponentWithAs,
  HStack,
  Icon,
  IconProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import React from 'react';

import { CustomOption } from '@/components/Custom/CustomOption';
import FlagIcon from 'public/assets/icons/generals/flag.svg';
export interface ReportDataProps {
  label: string;
  value: string;
  icon?: ComponentWithAs<'svg', IconProps>;
}
const ReportModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ListReport: ReportDataProps[] = [
    {
      label: 'Fake collection or possible scam',
      value: 'scam_report',
    },
    {
      label: 'Explict and Sensitive content',
      value: 'content_report',
    },
    {
      label: 'Spam',
      value: 'spam_report',
    },
    {
      label: 'Other',
      value: 'other_report',
    },
  ];

  return (
    <>
      <HStack onClick={onOpen}>
        <Icon
          as={FlagIcon}
          height={5}
          width={5}
          aria-label="Tickifi Report Icon"
        />
        <Text fontSize="sm">Report Account</Text>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent display="flex" flexDirection="column" gap={20} bg="none">
          <ModalBody
            pt={6}
            pb={12}
            bg="white"
            borderRadius="xl"
            display="flex"
            flexDirection="column"
            gap={4}
            textColor="primary.gray.800"
          >
            <HStack justifyContent="space-between">
              <Text fontWeight="bold" fontSize="2xl">
                Report this account
              </Text>
              <CloseButton onClick={onClose} />
            </HStack>
            <Text fontWeight="bold">I think this account is...</Text>
            <Select
              focusBorderColor="primary.gray.300"
              options={ListReport}
              placeholder="Select a Reason"
              size="lg"
              components={CustomOption}
              variant="primary_select"
            />
          </ModalBody>
          <Button width="100%" bg="secondary.info.300" color="white">
            Report
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReportModal;
