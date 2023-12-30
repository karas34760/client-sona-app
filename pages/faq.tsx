import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import GuidePage from '@/layouts/Guide';

// FAQ Page common frequently question
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const FAQ = () => {
  return (
    <>
      <SEOHead
        siteName="Tickifi"
        description="Tickifi | Guide Using Events "
        title="Tickifi | Guide How To Use and Improve Performance to create events in blockchains "
      />
      <GuidePage />
    </>
  );
};

export default FAQ;
