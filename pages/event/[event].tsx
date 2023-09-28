import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import BannerEventDetail from '@/layouts/Event/BannerEventDetail';
import EventInfo from '@/layouts/Event/EventInfo';
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const EventDetail = () => {
  return (
    <Box>
      <BannerEventDetail />
      <EventInfo />
    </Box>
  );
};

export default EventDetail;
