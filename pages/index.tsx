import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import SubcribeEmail from '@/layouts/HomeSection/SubcribeEmail';
import HowWork from '@/layouts/HomeSection/HowWork';
import FeatureSection from '@/layouts/HomeSection/FeatureSection';
import ArtistSection from '@/layouts/HomeSection/ArtistSection';
import HeroSection from '@/layouts/HomeSection/HeroSection';
import TicketFeature from '@/layouts/HomeSection/TicketFeature';
import InvestorSection from '@/layouts/HomeSection/InvestorSection';
import OrganizeSection from '@/layouts/HomeSection/OrganizeSection';
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
      <HeroSection />
      <HowWork />
      <TicketFeature />
      <ArtistSection />
      <OrganizeSection />
      <FeatureSection />
      <InvestorSection />
      <SubcribeEmail />
    </>
  );
}
