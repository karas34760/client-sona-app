import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
// profile account detail
const AccountDetail = () => {
  return <div>AccountDetail</div>;
};

export default AccountDetail;
