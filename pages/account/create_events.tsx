import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import EventCreatePage from '@/layouts/EventCreate';
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const CreateEvent = () => {
  return (
    <>
      <SEOHead
        title="Create New Events"
        description="Tickifi Provide The Solutions can create new events"
      />
      <EventCreatePage />
    </>
  );
};

export default CreateEvent;
