import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import TicketDetailPage from '@/layouts/Ticket';
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
const TicketDetail = () => {
  return (
    <>
      <SEOHead
        siteName="Tickifi"
        title="Ticket Detail"
        description="Ticket Detail | Tickifi NFT Place"
      />
      <TicketDetailPage />
    </>
  );
};

export default TicketDetail;
