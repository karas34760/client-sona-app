import {
  Box,
  Center,
  Container,
  Icon,
  Image,
  Text,
  keyframes,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

import BgRectangle from 'public/assets/bg/bg-rectangle-work.svg';
const slid = keyframes`

  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  100% {
    transform: perspective(1000px) rotateY(360deg);
  }

`;
const HowWork = () => {
  const { t } = useTranslation();
  const ListImage = [
    {
      link: 'https://images.squarespace-cdn.com/content/v1/641a832cd4167e73e6d2e927/e42ccb85-2821-4779-8eb7-26b1e9207702/ezgif-5-8a9acce601.gif?format=500w',
      alt: 'Tickifi | Content 1',
    },
    {
      link: 'https://images.squarespace-cdn.com/content/v1/641a832cd4167e73e6d2e927/d3eb2b89-c781-41ff-b578-ce45e5ebf125/5zef+-+420+%28Uz%CC%8C+je+c%CC%8Cas%29.gif?format=500w',
      alt: 'Tickifi | Content 2',
    },
    {
      link: 'https://images.squarespace-cdn.com/content/v1/641a832cd4167e73e6d2e927/9d9b8b24-c27a-4f87-87f8-3dcc96431b9c/tumblr_26e6cb0c69630312ea8312717a447ab3_51084b0d_540.gif?format=500w',
      alt: 'Tickifi | Content 3',
    },

    {
      link: 'https://images.squarespace-cdn.com/content/v1/641a832cd4167e73e6d2e927/d9400a4c-57a9-479b-8fbc-b593f1339628/original_dc71e7d45c6c08f8decfe881e61ce46a.gif?format=500w',
      alt: 'Tickifi | Content 4',
    },
    {
      link: 'https://i.postimg.cc/CMfHRKfP/woman-2003647-960-720.jpg',
      alt: 'Tickifi | Content 5',
    },
    {
      link: 'https://images.squarespace-cdn.com/content/v1/641a832cd4167e73e6d2e927/bca602f4-786f-49b7-a28a-2151f9cd68a6/Apr-13-2023+23-51-32.gif?format=2500w',
      alt: 'Tickifi | Content 6',
    },
    {
      link: 'https://i.postimg.cc/CMfHRKfP/woman-2003647-960-720.jpg',
      alt: 'Tickifi | Content 7',
    },
    {
      link: 'https://i.postimg.cc/BQcRL38F/pexels-photo-761963.jpg',
      alt: 'Tickifi | Content 8',
    },
  ];
  return (
    <>
      <Container maxWidth="container.xl" py={16}>
        <Center
          justifyContent={{
            lg: 'space-between',
            md: 'center',
            base: 'space-between',
          }}
          flexWrap="wrap"
          rowGap={6}
        >
          <Box maxWidth="31.25rem">
            <Text variant="type_title">{t('how_work_title')}</Text>
            <Text>{t('how_work_content')}</Text>
          </Box>
          <Box position="relative">
            <Icon as={BgRectangle} width="full" height="full" />
            <Box
              position="absolute"
              top={{ md: '-20%', base: '-60%' }}
              right={{ md: '90%', base: '80%' }}
              transform=" rotateZ(-25deg)"
            >
              <Box
                position="relative"
                sx={{
                  transformStyle: 'preserve-3d',
                }}
                width="9.375rem"
                height="9.375rem"
                animation={`${slid} 30s linear infinite`}
                /*   _hover={{
                  animationPlayState: 'paused',
                }} */
              >
                {ListImage.map((item, index) => (
                  <Box
                    key={`work-ig-${index}`}
                    position="absolute"
                    transformOrigin="center"
                    top={0}
                    left={0}
                    width={{ md: '9.375rem', base: '5rem' }}
                    height={{ md: '9.375rem', base: '5rem' }}
                    sx={{
                      transformStyle: 'preserve-3d',
                      transform: {
                        md: `rotateY(calc(${index}* 45deg)) translateY(300px) translateZ(200px)`,
                        base: `rotateY(calc(${index}* 45deg)) translateY(300px) translateZ(120px)`,
                      },
                    }}
                  >
                    <Image
                      src={item.link}
                      alt={item.alt}
                      borderRadius="15px"
                      width="full"
                      height="full"
                      objectFit="cover"
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default HowWork;
