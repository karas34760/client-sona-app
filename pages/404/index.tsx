import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const PageNotFound = () => {
  return <div>PageNotFound</div>;
};

export default PageNotFound;
