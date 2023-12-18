import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import TicketDetailPage from '@/layouts/Ticket';
export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  query,
}) => {
  const queryClient = new QueryClient();
  const address = query.address;
  const tier = query.tier;
  return {
    props: {
      cookies: req.headers.cookie ?? '',
      dehydratedState: dehydrate(queryClient),
      address,
      tier,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
const TicketDetail = ({
  address,
  tier,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SEOHead
        siteName="Tickifi"
        title="Ticket Detail"
        description="Ticket Detail | Tickifi NFT Place"
      />
      <TicketDetailPage address={address} tier={tier} />
    </>
  );
};

export default TicketDetail;
