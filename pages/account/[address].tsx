import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useAccount, useEnsName } from 'wagmi';

import SEOHead from '@/components/SEO/SEOHead';
import AccountPage from '@/layouts/Account';
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
// profile account detail
const AccountDetail = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  return (
    <>
      {isConnected ? (
        <SEOHead
          title={`Your Profile`}
          description={`Tickifi Profile Detail of Account ${address}`}
        />
      ) : (
        <SEOHead
          title={` ${ensName ? ensName : address}`}
          description={`Tickifi Profile Detail of Account ${address}`}
        />
      )}

      <AccountPage />
    </>
  );
};

export default AccountDetail;
