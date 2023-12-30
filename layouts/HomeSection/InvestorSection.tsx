import { Center, Container, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

const InvestorSection = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="container.xl" py={16}>
      <Center flexDir="column" mb={6}>
        <Text variant="type_title">{t('our_investors')}</Text>
        <Text>{t('our_investors_content')}</Text>
      </Center>
    </Container>
  );
};

export default InvestorSection;
