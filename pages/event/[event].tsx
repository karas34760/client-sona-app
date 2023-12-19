import { useQuery } from '@apollo/client';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import { SEARCH_EVENT_METADATA } from '@/graphql/query';
import EventInfo from '@/layouts/Event/EventInfo';
import SkeletonEventDetail from '@/layouts/Skeleton/EventDetail';

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  query,
}) => {
  const queryClient = new QueryClient();
  const eventAddress = query.event;
  return {
    props: {
      cookies: req.headers.cookie ?? '',
      dehydratedState: dehydrate(queryClient),
      query: eventAddress,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
const EventDetail = ({
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { loading, data } = useQuery(SEARCH_EVENT_METADATA, {
    variables: {
      filter: {
        eventAddress: query,
      },
    },
  });
  if (loading) {
    return <SkeletonEventDetail />;
  }
  if (data && !data.searchEventMetadata) {
    router.push('/404');
  }

  return (
    <>
      {data && data.searchEventMetadata && (
        <>
          <SEOHead
            title={`Tickifi Event | ${data.searchEventMetadata.name}`}
            description={`Tickifi Event Description | ${data.searchEventMetadata.description}`}
          />

          <EventInfo data={data.searchEventMetadata} address={query} />
        </>
      )}
    </>
  );
};

export default EventDetail;
