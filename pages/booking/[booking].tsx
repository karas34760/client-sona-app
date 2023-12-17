import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import BookingPage from '@/layouts/Booking/BookingPage';

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
  return (
    <>
      <SEOHead
        siteName="Tickifi"
        title="Event Booking Detail"
        description={`Booking Detail | Tickifi Events MarketPlace ${query}`}
      />
      <BookingPage />
    </>
  );
};

export default BookingEvent;
