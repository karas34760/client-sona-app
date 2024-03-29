import { Box, Container, Grid, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

import CardFeature from '@/components/Card/CardFeature';
import FlexIcon from 'public/assets/icons/generals/flexibility.svg';
import MarketIcon from 'public/assets/icons/generals/marketplace.svg';
import ShieldIcon from 'public/assets/icons/generals/shield.svg';

const FeatureSection = () => {
  const ListFeature = [
    {
      icon: MarketIcon,
      title: 'feature_title_1',
      content: 'feature_content_1',
    },
    {
      icon: FlexIcon,
      title: 'feature_title_2',
      content: 'feature_content_2',
    },
    {
      icon: FlexIcon,
      title: 'feature_title_3',
      content: 'feature_content_3',
    },
    {
      icon: ShieldIcon,
      title: 'feature_title_4',
      content: 'feature_content_4',
    },
  ];
  const { t } = useTranslation();
  return (
    <>
      <Container maxW="container.xl" py={16}>
        <Box mb={12}>
          <Text variant="type_title">{t('ticket_section_title')}</Text>
          <Text>{t('ticket_section_content')}</Text>
        </Box>
        <Grid
          gridTemplateColumns={{ lg: 'repeat(2,1fr)', md: 'repeat(1,1fr)' }}
          gap={6}
        >
          {ListFeature.map(item => (
            <CardFeature
              key={`feature-sec-${item.title}`}
              title={t(item.title)}
              icon={item.icon}
              content={t(item.content)}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default FeatureSection;
