import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import BannerEventDetail from '@/layouts/Event/BannerEventDetail';
import EventInfo from '@/layouts/Event/EventInfo';
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const EventDetail = () => {
  return (
    <>
      <SEOHead
        title="Festival Alan Walker in HO CHI MINH "
        description="2023-2024 Alan Walker THE 1ST WORLD Festival [AREA 52] in HO CHI MINH"
      />
      <BannerEventDetail />
      <EventInfo />
    </>
  );
};

export default EventDetail;
