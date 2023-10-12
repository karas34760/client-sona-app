import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import Setting from '@/layouts/Account/Setting';
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
      <Setting />
    </>
  );
};

export default AccountSetting;
