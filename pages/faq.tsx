import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import FAQPage from '@/layouts/FAQ';
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
        description="Tickifi | FAQ Introduction "
        title="Tickifi | Solution Fair Play Ticket Decentralize Application Blockchain "
      />
      <FAQPage />
    </>
  );
};

export default FAQ;
