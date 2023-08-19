import LogoText from '@/components/Logo/LogoText';
import { Container, HStack, Input } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth="container.lg" py={6}>
        <HStack>
          <LogoText />
          <Input placeholder={t('search_place_holder')} />
        </HStack>
      </Container>
    </>
  );
};

export default Header;
