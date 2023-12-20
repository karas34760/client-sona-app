import { Flex } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import DiscountTicket from '@/layouts/EventsSection/ActiveEvents';
import EventsExplore from '@/layouts/EventsSection/EventsExplore';
import HeroSection from '@/layouts/EventsSection/HeroSection';
import LiveAuction from '@/layouts/EventsSection/LiveAuction';
import TrendingConcert from '@/layouts/EventsSection/TrendingConcert';
import TrendingConference from '@/layouts/EventsSection/TrendingConference';
import TrendingFestival from '@/layouts/EventsSection/TrendingFestival';
import UpcomingEvent from '@/layouts/EventsSection/UpcomingEvent';
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const Events = () => {
  return (
    <>
      <SEOHead
        siteName="Tickifi"
        description="Tickifi | Events Recently "
        title="Tickifi | Solution Fair Play Ticket Decentralize Application Blockchain "
      />
      <Flex pb={6} flexDirection="column" gap={6}>
        <HeroSection />
        <UpcomingEvent />
        <DiscountTicket />
        <LiveAuction />
        <EventsExplore />

        <TrendingConcert />
        <TrendingFestival />
        <TrendingConference />
      </Flex>
    </>
  );
};

export default Events;
