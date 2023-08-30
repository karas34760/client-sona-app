import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import SubcribeEmail from '@/layouts/Section/SubcribeEmail';
import HowWork from '@/layouts/Section/HowWork';
import FeatureSection from '@/layouts/Section/FeatureSection';
import ArtistSection from '@/layouts/Section/ArtistSection';
import HeroSection from '@/layouts/Section/HeroSection';
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
      <ArtistSection />

      <FeatureSection />
      <SubcribeEmail />
    </>
  );
}
