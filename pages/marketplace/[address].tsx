import { useQuery } from '@apollo/client';
import { Button, HStack } from '@chakra-ui/react';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import AlertVerifyEmail from '@/components/Modal/AlertVerifyEmail';
import SEOHead from '@/components/SEO/SEOHead';
import {
  SEARCH_ACCOUNT_BY_ADDRESS,
  SEARCH_EVENT_METADATA,
} from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
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
  const { user } = useAuth();
  const { loading: loadingUser, data: dataUser } = useQuery(
    SEARCH_ACCOUNT_BY_ADDRESS,
    {
      variables: {
        address: user,
      },
    }
  );
  if (loading || loadingUser) {
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
          <AlertVerifyEmail
            isOpen={!dataUser.searchAccountByAddress.verifiedAt}
          >
            <HStack gap={6}>
              <Link href={`/event/${query}`}>
                <Button variant="primary">Back To Event</Button>
              </Link>
              <Link href={`/account/setting`}>
                <Button variant="primary">Go To Verify Email</Button>
              </Link>
            </HStack>
          </AlertVerifyEmail>
        </>
      )}
    </>
  );
};

export default MarketPlaceDetail;
