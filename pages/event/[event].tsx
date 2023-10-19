import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import client from '@/graphql/client';
import { useGetHelloQuery } from '@/graphql/generates';
import EventInfo from '@/layouts/Event/EventInfo';

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
const EventDetail = () => {
  const { data } = useGetHelloQuery(client);

  console.log('hello Data', data);
  return (
    <>
      <SEOHead
        title="Festival Alan Walker in HO CHI MINH "
        description="2023-2024 Alan Walker THE 1ST WORLD Festival [AREA 52] in HO CHI MINH"
      />

      <EventInfo />
    </>
  );
};

export default EventDetail;
