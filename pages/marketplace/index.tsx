import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import DiscountTicket from '@/layouts/MarketplaceSection/DiscountTicket';
import EventsExplore from '@/layouts/MarketplaceSection/EventsExplore';
import HeroSection from '@/layouts/MarketplaceSection/HeroSection';
import LiveAuction from '@/layouts/MarketplaceSection/LiveAuction';
import UpcomingEvent from '@/layouts/MarketplaceSection/UpcomingEvent';
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const index = () => {
  return (
    <>
      <Box pb={6}>
        <HeroSection />
        <UpcomingEvent />
        <DiscountTicket />
        <EventsExplore />
        <LiveAuction />
      </Box>
    </>
  );
};

export default index;
