import { Center, Text, Container, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import BgNotFound from '@/animations/404/BgNotFound';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <Container maxW="container.lg">
      <Center flexDirection="column" py={8} gap={5}>
        <BgNotFound />
        <Text variant="type_title" fontSize="28px">
          Opps! you’r on the wrong place.
        </Text>
        <Text>{t('404_content')}</Text>
        <Link href="/">
          <Button variant="primary">Back to Home </Button>
        </Link>
      </Center>
    </Container>
  );
};

export default PageNotFound;
