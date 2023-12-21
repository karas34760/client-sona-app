import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';

// FAQ Page common frequently question
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const Term = () => {
  return (
    <>
      <SEOHead
        siteName="Tickifi"
        description="Tickifi | Term of Tickifi  "
        title="Tickifi | Pricvacy using your data in Tickifi "
      />
    </>
  );
};

export default Term;
