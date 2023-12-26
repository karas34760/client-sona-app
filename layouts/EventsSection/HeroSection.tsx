import { useQuery } from '@apollo/client';
import { Box, Button, Container, HStack, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import HeroEventSkeleton from '../Skeleton/ListEvent/HeroEventSkeleton';

import AvatarTypeOne from '@/components/Avatar/AvatarTypeOne';
import Carousel from '@/components/Carousel/Carousel';
import { SEARCH_EVENTS } from '@/graphql/query';

const HeroSection = () => {
  const { t } = useTranslation();
  const { data, loading } = useQuery(SEARCH_EVENTS, {
    variables: {
      page: 1,
      size: 10,
      orderBy: {
        DeadlineForSell: 'asc',
      },
    },
  });
  if (loading) {
    return <HeroEventSkeleton />;
  }
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
          {data &&
            data.searchEvents.items.map((item: any, index: number) => {
              return (
                <SwiperSlide key={`${item.eventId}-${index}-hero`}>
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
                      <Box
                        position="absolute"
                        height="full"
                        width="full"
                        overflow="hidden"
                      >
                        <Image
                          src={item.image}
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
                          <AvatarTypeOne link={item.image} />
                          <Text
                            color="white"
                            fontSize={{ md: '24px', base: '18px' }}
                            fontWeight="bold"
                          >
                            {item.name}
                          </Text>

                          <Text
                            color="white"
                            fontWeight="bold"
                            fontSize={{ md: 'md', base: 'sm' }}
                          >
                            Total {item.tickets.length} kind of tickets
                          </Text>
                        </Box>
                        <Box>
                          <Button>{t('view_event')}</Button>
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
