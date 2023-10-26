import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import MarketPlacePage from '@/layouts/MarketPlace';
export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
}) => {
  const queryClient = new QueryClient();

  return {
    props: {
      cookies: req.headers.cookie ?? '',
      dehydratedState: dehydrate(queryClient),

      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
// Market place use for normal user sell the current ticket
const MarketPlace = () => {
  return (
    <>
      <SEOHead
        title="Tickifi | MarketPlace Ticket"
        description="Tickifi Marketplace where user free to exchange and sell the ticke† "
      />
      <MarketPlacePage />
    </>
  );
};

export default MarketPlace;
