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
import BookingPage from '@/layouts/Booking/BookingPage';
import SkeletonEventDetail from '@/layouts/Skeleton/EventDetail';

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  query,
}) => {
  const queryClient = new QueryClient();
  const eventAddress = query.booking;
  return {
    props: {
      cookies: req.headers.cookie ?? '',
      dehydratedState: dehydrate(queryClient),
      query: eventAddress,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
const BookingEvent = ({
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { user } = useAuth();
  const { loading: loadingUser, data: dataUser } = useQuery(
    SEARCH_ACCOUNT_BY_ADDRESS,
    {
      variables: {
        address: user,
      },
    }
  );
  const { loading, data } = useQuery(SEARCH_EVENT_METADATA, {
    variables: {
      filter: {
        eventAddress: query,
      },
    },
  });

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
            siteName="Tickifi"
            title="Event Booking Detail"
            description={`Booking Detail | Tickifi Events MarketPlace ${query}`}
          />
          <BookingPage data={data.searchEventMetadata} eventAddress={query} />

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

export default BookingEvent;
