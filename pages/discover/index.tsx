import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import DiscoverPage from '@/layouts/Discover';
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
/// Discover Page will use for filter already Page exist
const Discover = () => {
  return (
    <>
      <SEOHead
        title="Tickifi | Discover Ticket"
        description="Tickifi Discover sort all the valid ticket follow requirement of system"
      />
      <DiscoverPage />
    </>
  );
};

export default Discover;
