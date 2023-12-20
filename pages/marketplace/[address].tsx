import { useQuery } from '@apollo/client';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import {
  SEARCH_ACCOUNT_BY_ADDRESS,
  SEARCH_EVENT_METADATA,
} from '@/graphql/query';
import MarketPlacePage from '@/layouts/MarketPlace';
import SkeletonEventDetail from '@/layouts/Skeleton/EventDetail';

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  query,
}) => {
  const queryClient = new QueryClient();
  const eventAddress = query.address;
  return {
    props: {
      cookies: req.headers.cookie ?? '',
      dehydratedState: dehydrate(queryClient),
      query: eventAddress,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
// Marketplace detail for event holder
const MarketPlaceDetail = ({
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
  const { loading: loadingOrganizer, data: dataOrganizer } = useQuery(
    SEARCH_ACCOUNT_BY_ADDRESS,
    {
      variables: {
        address: data.organizer,
      },
    }
  );
  console.log(dataOrganizer);
  if (loading || loadingOrganizer) {
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
            title={`Tickifi Marketplace for Event | ${data.searchEventMetadata.name}`}
            description={`Tickifi Marketplace Event Description | ${data.searchEventMetadata.description}`}
          />

          <MarketPlacePage data={data.searchEventMetadata} address={query} />
        </>
      )}
    </>
  );
};

export default MarketPlaceDetail;
