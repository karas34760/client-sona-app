import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { useAuth } from '@/hooks/useAuth';
import OganizeIcon from 'public/assets/icons/art/organize-art.svg';
const OrganizeSection = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Container maxWidth="container.xl" py={16}>
      <HStack
        width="full"
        flexWrap={{ md: 'nowrap', base: 'wrap' }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Icon as={OganizeIcon} width="full" height="full" />
        </Box>

        <Flex maxWidth="500px" flexDir="column" gap={6}>
          <Text variant="type_title">{t('oganization_title')}</Text>
          <Text>{t('oganization_content_1')}</Text>

          <Text>{t('oganization_content_2')}</Text>
          <HStack>
            {user ? (
              <Link href={'/account/create_events'}>
                <Button>{t('create_events')}</Button>
              </Link>
            ) : (
              <Button onClick={onOpen}>{t('create_events')}</Button>
            )}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent padding={8}>
                <ModalCloseButton />

                <Text> Please connect your Wallet First</Text>
              </ModalContent>
            </Modal>
            <Button variant="dark">{t('contact_us')}</Button>
          </HStack>
        </Flex>
      </HStack>
    </Container>
  );
};

export default OrganizeSection;
