import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

import OganizeIcon from 'public/assets/icons/art/organize-art.svg';
const OrganizeSection = () => {
  const { t } = useTranslation();
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
            <Button>Create Events</Button>
            <Button>Contact Us</Button>
          </HStack>
        </Flex>
      </HStack>
    </Container>
  );
};

export default OrganizeSection;
