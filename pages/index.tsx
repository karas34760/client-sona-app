import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ArtistSection from '@/layouts/HomeSection/ArtistSection';
import FeatureSection from '@/layouts/HomeSection/FeatureSection';
import HeroSection from '@/layouts/HomeSection/HeroSection';
import HowWork from '@/layouts/HomeSection/HowWork';
import InvestorSection from '@/layouts/HomeSection/InvestorSection';
import OrganizeSection from '@/layouts/HomeSection/OrganizeSection';
import SubcribeEmail from '@/layouts/HomeSection/SubcribeEmail';
import TicketFeature from '@/layouts/HomeSection/TicketFeature';
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Box>
        <HeroSection />
        <HowWork />
        <TicketFeature />
        <ArtistSection />
        <OrganizeSection />
        <FeatureSection />
        <InvestorSection />

        <SubcribeEmail />
      </Box>
    </>
  );
}
