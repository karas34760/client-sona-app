import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const EventDetail = () => {
  return <div>EventDetail</div>;
};

export default EventDetail;
