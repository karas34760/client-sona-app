import { Container, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import CardTicketOne from '@/components/Card/CardTicketOne';
import Carousel from '@/components/Carousel/Carousel';
import LinkSecondary from '@/components/Link/LinkSecondary';
const TrendingFestival = () => {
  const Listest = [
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_25.jpeg',
      type_events: ['club', 'communicatiy events'],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-2',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_26.jpeg',
      type_events: ['festival', 'communicatiy events'],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-1',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_27.jpeg',
    },
    {
      name: 'Escape56 Feat. Paramida (Love On The Rocks / DE), Leland & Anwar',
      oganization: 'Mody Center',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_28.jpeg',
      type_events: ['conference '],
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center--',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_29.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center==',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_30.jpeg',
    },
  ];
  return (
    <Container maxWidth="container.xl">
      <HStack justifyContent="space-between">
        <Text variant="type_sub_title">Trending Festival</Text>
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
                >
                  {item.name}
                </Text>
                <HStack justifyContent="space-between">
                  <Text fontSize="sm">{item.oganization}</Text>
                  <Text fontSize="sm" color="primary.gray.500">
                    {item.time}
                  </Text>
                </HStack>
                {item.type_events && (
                  <HStack gap={1}>
                    {item.type_events.map((item_sub, index) => (
                      <>
                        <Text
                          variant="type_categories"
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

export default TrendingFestival;
