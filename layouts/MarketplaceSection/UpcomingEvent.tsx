import { Box, Container, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import CardTicketOne from '@/components/Card/CardTicketOne';
import Carousel from '@/components/Carousel/Carousel';

const UpcomingEvent = () => {
  const Listest = [
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center',
      time: '15 Steptember 30',
      image_link: '/test/banner/banner_5.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center',
      time: '15 Steptember 30',
      image_link: '/test/banner/banner_6.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center',
      time: '15 Steptember 30',
      image_link: '/test/banner/banner_7.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/banner/banner_8.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_7.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_8.jpeg',
    },
  ];
  return (
    <Box>
      <Container maxWidth="container.xl">
        <HStack justifyContent="space-between">
          <Text variant="type_sub_title">Upcomming Schedule</Text>
          <Text cursor="pointer">View All</Text>
        </HStack>
        <Carousel>
          {Listest.map((item, index) => (
            <SwiperSlide key={`up-comming-${index}-${item.image_link}`}>
              <Link href="#">
                <CardTicketOne
                  name={item.name}
                  image_link={item.image_link}
                  oganization={item.oganization}
                  time={item.time}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default UpcomingEvent;
