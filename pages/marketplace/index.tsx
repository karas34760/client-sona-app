import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import HeroSection from '@/layouts/MarketplaceSection/HeroSection';
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const index = () => {
  return (
    <>
      <Box pb={6}>
        <HeroSection />
      </Box>
    </>
  );
};

export default index;
