import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import SubcribeEmail from '@/layouts/Section/SubcribeEmail';
import HowWork from '@/layouts/Section/HowWork';
import FeatureSection from '@/layouts/Section/FeatureSection';
import ArtistSection from '@/layouts/Section/ArtistSection';
import HeroSection from '@/layouts/Section/HeroSection';
import TicketFeature from '@/layouts/Section/TicketFeature';
import InvestorSection from '@/layouts/Section/InvestorSection';
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

      <FeatureSection />
      <InvestorSection />
      <SubcribeEmail />
    </>
  );
}
