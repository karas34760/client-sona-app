import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
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
      <Box>Creatwe</Box>
    </>
  );
};

export default CreateEvent;
