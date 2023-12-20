import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import SEOHead from '@/components/SEO/SEOHead';
import ArtistSection from '@/layouts/HomeSection/ArtistSection';
import FeatureSection from '@/layouts/HomeSection/FeatureSection';
import HeroSection from '@/layouts/HomeSection/HeroSection';
import HowWork from '@/layouts/HomeSection/HowWork';
import InvestorSection from '@/layouts/HomeSection/InvestorSection';
import LearnUse from '@/layouts/HomeSection/LearnUse';
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
      <SEOHead
        siteName="Tickifi"
        description="Tickifi | Solution Fair Play Ticket Decentralize Application Blockchain"
        title="Tickifi | Solution Fair Play Ticket Decentralize Application Blockchain "
      />
      <Box>
        <HeroSection />
        <HowWork />
        <TicketFeature />
        <ArtistSection />
        <OrganizeSection />
        <FeatureSection />
        <LearnUse />
        <InvestorSection />
        <SubcribeEmail />
      </Box>
    </>
  );
}
