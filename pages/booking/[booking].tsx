import { useQuery } from '@apollo/client';
import {
  Button,
  Center,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import {
  SEARCH_ACCOUNT_BY_ADDRESS,
  SEARCH_EVENT_METADATA,
} from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import BookingPage from '@/layouts/Booking/BookingPage';
import SkeletonEventDetail from '@/layouts/Skeleton/EventDetail';
import ErrorEmail from 'public/assets/icons/socials/email-error.svg';
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

          {!dataUser.verifiedAt && !loadingUser && (
            <Modal isOpen={true} onClose={() => {}} size="xl" isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalBody
                  padding={8}
                  as={Center}
                  flexDirection="column"
                  gap={5}
                >
                  <Icon
                    as={ErrorEmail}
                    height="200px"
                    width="200px"
                    color="red.400"
                  />
                  <Text>You Need To verify Email to countinue Booking</Text>
                  <HStack gap={6}>
                    <Link href={`/event/${query}`}>
                      <Button variant="primary">Back To Event</Button>
                    </Link>
                    <Link href={`/account/setting`}>
                      <Button variant="primary">Go To Verify Email</Button>
                    </Link>
                  </HStack>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default BookingEvent;
