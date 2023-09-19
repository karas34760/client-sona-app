import { Flex } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import DiscountTicket from '@/layouts/MarketplaceSection/DiscountTicket';
import EventsExplore from '@/layouts/MarketplaceSection/EventsExplore';
import HeroSection from '@/layouts/MarketplaceSection/HeroSection';
import LiveAuction from '@/layouts/MarketplaceSection/LiveAuction';
import TrendingConcert from '@/layouts/MarketplaceSection/TrendingConcert';
import TrendingConference from '@/layouts/MarketplaceSection/TrendingConference';
import TrendingFestival from '@/layouts/MarketplaceSection/TrendingFestival';
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
      <Flex pb={6} flexDirection="column" gap={4}>
        <HeroSection />
        <UpcomingEvent />
        <DiscountTicket />
        <EventsExplore />
        <LiveAuction />
        <TrendingConcert />
        <TrendingFestival />
        <TrendingConference />
      </Flex>
    </>
  );
};

export default index;
