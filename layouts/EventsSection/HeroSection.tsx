import { Box, Button, Container, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import AvatarTypeOne from '@/components/Avatar/AvatarTypeOne';
import Carousel from '@/components/Carousel/Carousel';

const HeroSection = () => {
  const ListTopCollection = [
    {
      name: 'Octorber London',
      creator: 'Gala',
      is_verifiled: true,
      logo_url:
        'https://i.seadn.io/gcs/files/c40b45c205f2b1e00a82eaa33f243700.png?auto=format&dpr=1&w=3840',
      banner_url:
        'https://i.seadn.io/gcs/files/7863ae104cb8bfa207137131a53047c3.png?auto=format&dpr=1&w=3840',
      ticket: 500,
      events: 'octorber-london',
      average_price: 0.08,
    },
    {
      name: 'Hope x Gala',
      creator: 'Gala',
      is_verifiled: false,
      logo_url:
        'https://i.seadn.io/gcs/files/86fd383dd7a42fe696b13b1896767a33.png?auto=format&dpr=1&w=3840',
      banner_url: '/test/banner/banner_1.jpeg',
      ticket: 300,
      events: 'octorber-london',
      average_price: 0.08,
    },
    {
      name: 'LoudPunx',
      creator: 'Gala',
      is_verifiled: true,
      logo_url:
        'https://i.seadn.io/gcs/files/ad9b7cdca7bb0956644ae1ef3832ad8f.png?auto=format&dpr=1&w=384',
      banner_url:
        ' https://i.seadn.io/gcs/files/ee5c835ca7927237f4dbac8270dc4c0f.png?auto=format&dpr=1&w=3840',
      ticket: 300,
      events: 'octorber-london',
      average_price: 0.08,
    },
  ];
  return (
    <Box>
      <Container maxWidth="container.xl">
        <Carousel
          options={{
            slidesPerView: 1,
            breakpoints: {
              360: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              630: {
                slidesPerView: 1,
              },
              920: {
                slidesPerView: 1,
              },

              1280: {
                slidesPerView: 1,
              },
            },
          }}
        >
          {ListTopCollection.map(item => {
            return (
              <SwiperSlide key={item.name}>
                <Box
                  height={{ md: '500px', base: '300px' }}
                  position="relative"
                  overflow="hidden"
                  borderRadius="lg"
                >
                  <Box
                    position="relative"
                    overflow="hidden"
                    width="full"
                    height="full"
                  >
                    <Box position="absolute" height="full" width="full">
                      <Image
                        src={item.banner_url}
                        minWidth="full"
                        minH="full"
                        objectFit="cover"
                        alt=""
                      />
                    </Box>
                  </Box>
                  <Box position="absolute" bottom="5%" width="full">
                    <HStack px="24px" justifyContent="space-between">
                      <Box>
                        <AvatarTypeOne link={item.logo_url} />
                        <Text
                          color="white"
                          fontSize={{ md: '24px', base: '18px' }}
                          fontWeight="bold"
                        >
                          {item.name}
                        </Text>
                        <Text
                          fontSize={{ md: 'md', base: 'sm' }}
                          fontWeight="bold"
                          color="white"
                        >
                          By {item.creator}
                        </Text>
                        <Text color="white" fontSize={{ md: 'md', base: 'sm' }}>
                          Total {item.ticket} Tickets * {item.average_price}
                        </Text>
                      </Box>
                      <Box>
                        <Button>View Events</Button>
                      </Box>
                    </HStack>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Carousel>
      </Container>
    </Box>
  );
};

export default HeroSection;
