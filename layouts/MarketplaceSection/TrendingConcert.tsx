import { Container, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import CardTicketOne from '@/components/Card/CardTicketOne';
import Carousel from '@/components/Carousel/Carousel';
import LinkSecondary from '@/components/Link/LinkSecondary';
const TrendingConcert = () => {
  const Listest = [
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_1_1.jpeg',
      type_events: ['club', 'communicatiy events'],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-2',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_1_4.jpeg',
      type_events: ['festival', 'communicatiy events'],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-1',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_2_3.jpeg',
    },
    {
      name: 'Escape56 Feat. Paramida (Love On The Rocks / DE), Leland & Anwar',
      oganization: 'Mody Center',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_1_6.jpeg',
      type_events: ['conference '],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center--',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_1_2.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center==',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_1_2.jpeg',
    },
  ];
  return (
    <Container maxWidth="container.xl">
      <HStack justifyContent="space-between">
        <Text variant="type_sub_title">Trending Concert</Text>
        <LinkSecondary
          link="#"
          label="View All"
          sx={{
            color: 'primary.gray.600',
          }}
        />
      </HStack>
      <Carousel>
        {Listest.map((item, index) => (
          <SwiperSlide
            key={`up-comming-${item.image_link} ${index}`}
            style={{
              height: 'auto',
            }}
          >
            <Link href="#">
              <CardTicketOne image_link={item.image_link}>
                <Text
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  color="primary.gray.800"
                >
                  {item.name}
                </Text>
                <HStack justifyContent="space-between">
                  <Text fontSize="sm" color="primary.gray.800">
                    {item.oganization}
                  </Text>
                  <Text fontSize="sm" color="primary.gray.500">
                    {item.time}
                  </Text>
                </HStack>
                {item.type_events && (
                  <HStack gap={1}>
                    {item.type_events.map((item_sub, index) => (
                      <>
                        <Text
                          px={2}
                          py={1}
                          fontSize="sm"
                          textTransform="capitalize"
                          borderRadius="lg"
                          color="primary.gray.600"
                          border="0.063rem solid"
                          borderColor="primary.gray.400"
                          key={`type-events ${index} $}`}
                        >
                          {item_sub}
                        </Text>
                      </>
                    ))}
                  </HStack>
                )}
              </CardTicketOne>
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </Container>
  );
};

export default TrendingConcert;
