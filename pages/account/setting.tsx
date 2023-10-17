import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import SEOHead from '@/components/SEO/SEOHead';
import AccountSettingPage from '@/layouts/AccountSetting';

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
// This is Setting page for profile
const AccountSetting = () => {
  return (
    <>
      <SEOHead
        title="Profile Detail"
        description="2023-2024 Alan Walker THE 1ST WORLD Festival [AREA 52] in HO CHI MINH"
      />
      <AccountSettingPage />
    </>
  );
};

export default AccountSetting;
