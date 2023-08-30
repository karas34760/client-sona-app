import { Container, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';

const ArtistSection = () => {
  const { t } = useTranslation();
  const ListArtist = [{}];
  return (
    <Container maxWidth="container.xl">
      <VStack>
        <Text
          color="primary.purple.500"
          fontSize={{ md: '3rem', base: '2rem' }}
          fontWeight="semibold"
        >
          {t('artist')}
        </Text>
        <Text fontSize="lg">{t('artist_section_content')}</Text>
      </VStack>
    </Container>
  );
};

export default ArtistSection;
