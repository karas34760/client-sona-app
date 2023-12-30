import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import AboutUsPage from '@/layouts/AboutUs';
// about us page
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const AboutUs = () => {
  return (
    <>
      <SEOHead
        siteName="Tickifi"
        description="Tickifi | About Us Tickifi"
        title="Tickifi | About Us What We Want or What We Build"
      />
      <AboutUsPage />
    </>
  );
};

export default AboutUs;
