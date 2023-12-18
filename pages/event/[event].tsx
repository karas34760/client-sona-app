import { useQuery } from '@apollo/client';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import { SEARCH_EVENTS } from '@/graphql/query';
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
  const { loading, data } = useQuery(SEARCH_EVENTS, {
    variables: {
      page: 1,
      size: 10,
      filter: {
        address: query,
      },
    },
  });
  if (loading) {
    return <SkeletonEventDetail />;
  }
  if (data && !data.searchEvents.items.length) {
    router.push('/404');
  }

  return (
    <>
      {data && data.searchEvents.items[0] && (
        <>
          <SEOHead
            title={`Tickifi Event | ${data.searchEvents.items[0].name}`}
            description={`Tickifi Event Description | ${data.searchEvents.items[0].description}`}
          />

          <EventInfo data={data.searchEvents.items[0]} />
        </>
      )}
    </>
  );
};

export default EventDetail;
