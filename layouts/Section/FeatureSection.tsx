import { Box, Button, Container, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import FlexIcon from 'public/assets/icons/generals/flexibility.svg';
import MarketIcon from 'public/assets/icons/generals/marketplace.svg';
import ShieldIcon from 'public/assets/icons/generals/shield.svg';
import CardFeature from '@/components/Card/CardFeature';
import { useTranslation } from 'next-i18next';

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
      <Container maxW="container.xl">
        <Box mb={12}>
          <Text fontSize="3rem" color="primary.purple.500" fontWeight="bold">
            {t('ticket_section_title')}
          </Text>
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
