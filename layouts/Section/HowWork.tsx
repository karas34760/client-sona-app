import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  Text,
  keyframes,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import BgHowWork from 'public/assets/bg/bg-how-work.svg';
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
      link: 'https://i.postimg.cc/BQcRL38F/pexels-photo-761963.jpg',
    },
    {
      link: 'https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg',
    },
    {
      link: 'https://i.postimg.cc/CMfHRKfP/woman-2003647-960-720.jpg',
    },
    {
      link: 'https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg',
    },
    {
      link: 'https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg',
    },
    {
      link: 'https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg',
    },
    {
      link: 'https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg',
    },
    {
      link: 'https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg',
    },
    {
      link: 'https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg',
    },
    {
      link: 'https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg',
    },
  ];
  return (
    <>
      <Container maxWidth="container.xl">
        <Center justifyContent="space-between">
          <Box maxWidth="500px">
            <Text
              fontSize="48px"
              color="primary.purple.500"
              fontWeight="extrabold"
            >
              {t('how_work_title')}
            </Text>
            <Text>{t('how_work_content')}</Text>
          </Box>
          <Box position="relative">
            <BgRectangle />
            <Box
              position="absolute"
              top="-20%"
              right="90%"
              transform=" rotateZ(-25deg) "
            >
              <Box
                position="relative"
                sx={{
                  transformStyle: 'preserve-3d',
                }}
                transform="rotate(90deg)"
                width="150px"
                height="150px"
                animation={`${slid} 30s linear infinite`}
                _hover={{
                  animationPlayState: 'paused',
                }}
              >
                {ListImage.map((item, index) => (
                  <>
                    <Box
                      key={`work-ig-${index}`}
                      position="absolute"
                      transformOrigin="center"
                      top={0}
                      left={0}
                      width="full"
                      height="full"
                      sx={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(calc(${index}* 40deg)) translateY(300px) translateZ(220px)` /* rotateX(-25deg)  translateY(calc(${index}*30px)) */,
                      }}
                    >
                      <Image
                        src={item.link}
                        alt={''}
                        borderRadius="15px"
                        width="full"
                        height="full"
                        objectFit="cover"
                      />
                    </Box>
                  </>
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
