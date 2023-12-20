import { useQuery } from '@apollo/client';
import { Button, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import LoadingData from '@/animations/Loading/LoadingData';
import AlertVerifyEmail from '@/components/Modal/AlertVerifyEmail';
import SEOHead from '@/components/SEO/SEOHead';
import { SEARCH_ACCOUNT_BY_ADDRESS } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import EventCreatePage from '@/layouts/EventCreate';

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const CreateEvent = () => {
  const { user } = useAuth();
  const { loading: loadingUser, data: dataUser } = useQuery(
    SEARCH_ACCOUNT_BY_ADDRESS,
    {
      variables: {
        address: user,
      },
    }
  );
  if (loadingUser) {
    return <LoadingData />;
  }
  return (
    <>
      <SEOHead
        title="Create New Events"
        description="Tickifi Provide The Solutions can create new events"
      />
      <EventCreatePage />
      <AlertVerifyEmail isOpen={!dataUser.searchAccountByAddress.verifiedAt}>
        <HStack gap={6}>
          <Link href={`/`}>
            <Button variant="primary">Back To HomePage</Button>
          </Link>
          <Link href={`/account/setting`}>
            <Button variant="primary">Go To Verify Email</Button>
          </Link>
        </HStack>
      </AlertVerifyEmail>
    </>
  );
};

export default CreateEvent;
