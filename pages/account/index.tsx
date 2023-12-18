import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useAccount } from 'wagmi';

import SEOHead from '@/components/SEO/SEOHead';
import AccountDetailPage from '@/layouts/Account';
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
// profile account detail
const AccountDetail = () => {
  const { address } = useAccount();
  return (
    <>
      <SEOHead
        title={`Your Profile`}
        description={`Tickifi Profile Detail of Account ${address}`}
      />

      <AccountDetailPage />
    </>
  );
};

export default AccountDetail;
