import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SubcribeEmail from '@/layouts/Section/SubcribeEmail';
import HowWork from '@/layouts/Section/HowWork';
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}

export default function Home() {
  return (
    <>
      <SubcribeEmail />
      <SubcribeEmail />
      <HowWork />
      <SubcribeEmail />
    </>
  );
}
