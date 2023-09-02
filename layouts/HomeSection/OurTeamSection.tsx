import { Container, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
interface IProps {
  name: string;
  content: string;
  image: string;
  social: Array<{
    key: string;
    link: string;
  }>;
}
const OurTeamSection = () => {
  const { t } = useTranslation();
  const ListDeveloper: IProps[] = [
    {
      name: 'brian',
      content: '..',
      image: '..',
      social: [
        {
          key: 'twitter',
          link: '',
        },
        {
          key: 'facebook',
          link: '',
        },
      ],
    },
  ];
  return (
    <Container maxW="container.xl">
      <Text>{t('team')}</Text>
      <HStack justifyContent="space-between"></HStack>
    </Container>
  );
};

export default OurTeamSection;
