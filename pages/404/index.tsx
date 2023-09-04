import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import BackImgNotFound from 'public/assets/icons/art/404-not-found.svg';
import {
  Center,
  Text,
  keyframes,
  Container,
  Button,
  Icon,
} from '@chakra-ui/react';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
const swingAnimation = keyframes`
  0% { transform: rotate(10deg); }
  100% { transform: rotate(-10deg); }
`;
const swingHairAnimation = keyframes`
  0% { transform: rotate(6deg); }
  100% { transform: rotate(-6deg); }
`;
const PageNotFound = () => {
  return (
    <Container maxW="container.lg">
      <Center flexDirection="column" py={'32px'}>
        <Icon
          as={BackImgNotFound}
          height="full"
          width="full"
          sx={{
            fill: 'red',
            path: {
              '#handboy': {
                fill: 'red',
                animation: `${swingAnimation} ease-in-out 1.3s infinite alternate`,
                transformOrigin: '98% 98%',
                transformBox: 'fill-box',
              },
              '#girllight': {
                animation: `${swingAnimation} ease-in-out 1.3s infinite alternate`,
                transformOrigin: '0% 97%',
                transformBox: 'fill-box',
              },
              '#404-not-found_svg__hairgirl': {
                animation: `${swingHairAnimation} ease-in-out 1.3s infinite alternate`,
                transformOrigin: '60% 0%',
                transformBox: 'fill-box',
                fill: 'red',
              },
            },
          }}
        />

        <Text variant="type_title">Opps! you’r on the wrong place.</Text>
        <Text className="test-2">
          Can not find what you need? Take a moment and do a search below or
          start from our Homepage.
        </Text>
        <Button>Back to Home</Button>
      </Center>
    </Container>
  );
};

export default PageNotFound;
