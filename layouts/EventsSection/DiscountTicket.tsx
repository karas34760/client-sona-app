import {
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import CardTicketOne from '@/components/Card/CardTicketOne';
import Carousel from '@/components/Carousel/Carousel';
import TimeReminder from '@/components/Time/TimeReminder';
// su kien co ve dang giam gia
const DiscountTicket = () => {
  const Listest = [
    {
      name: 'Nia Roska Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_4.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      time_reminder: Date.now() + 24 * 60 * 60 * 1000,
      type_tickets: ['normal', 'seat-ss'],
    },
    {
      name: 'Nighty Present',
      oganization: 'Mody Center-2',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_5.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      type_tickets: ['all', 'updated-fall'],
      time_reminder: Date.now() + 3 * 24 * 60 * 60 * 1000,
    },
    {
      name: 'Medium Rate',
      oganization: 'Mody Center-1',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_8.jpeg',
      type_tickets: ['normal', 'seat-ss'],
    },
    {
      name: 'Escape56 Feat. Paramida (Love On The Rocks / DE), Leland & Anwar',
      oganization: 'Mody Center',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_8.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      type_tickets: ['normal', 'conference'],
      time_reminder: Date.now() + 24 * 60 * 60 * 1000,
    },
    {
      name: 'Riku Fantansi',
      oganization: 'Mody Center--',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_7.jpeg',
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center==',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_22.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      time_reminder: Date.now() + 24 * 60 * 60 * 1000,
    },
    {
      name: 'Nia Roska Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_4.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      time_reminder: Date.now() + 24 * 60 * 60 * 1000,
      type_tickets: ['normal', 'seat-ss'],
    },
    {
      name: 'Nia Roska Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_15.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      type_tickets: ['normal', 'seat-ss'],
      time_reminder: Date.now() + 24 * 60 * 60 * 1000,
    },
    {
      name: 'Nia Roska Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_23.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      type_tickets: ['normal', 'seat-ss'],
      time_reminder: Date.now() + 24 * 60 * 60 * 1000,
    },
    {
      name: 'Nia Roska Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_20.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      type_tickets: ['normal', 'seat-ss'],
      time_reminder: Date.now() + 24 * 60 * 60 * 1000,
    },
    {
      name: 'Nia Roska Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_2.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      time_reminder: Date.now() + 3 * 24 * 60 * 60 * 1000,
    },
    {
      name: 'Nia Roska Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_14.jpeg',
      discount: '40%',
      current_prices: '30',
      previous_prices: '55',
      time_reminder: Date.now() + 24 * 60 * 60 * 1000,
    },
  ];
  return (
    <Container maxWidth="container.xl">
      <Center>
        <Text variant="type_sub_title">Discount Ticket</Text>
      </Center>
      <Carousel
        options={
          Listest.length > 7
            ? {
                breakpoints: {
                  360: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                    grid: {
                      rows: 1,
                      fill: 'row',
                    },
                  },
                  630: {
                    slidesPerView: 2,
                    grid: {
                      rows: 2,
                      fill: 'row',
                    },
                  },
                  920: {
                    slidesPerView: 3,
                    grid: {
                      rows: 2,
                      fill: 'row',
                    },
                  },

                  1280: {
                    slidesPerView: 4,
                    grid: {
                      rows: 2,
                      fill: 'row',
                    },
                  },
                },
              }
            : {
                spaceBetween: 20,
                slidesPerView: 4,
              }
        }
      >
        {Listest.map((item, index) => (
          <SwiperSlide
            key={`dicount-section-${item.image_link} ${index}`}
            style={{
              height: 'auto',
            }}
          >
            <Link href="#">
              <CardTicketOne image_link={item.image_link}>
                {item.type_tickets && (
                  <HStack>
                    {item.type_tickets.map(item_type_ticket => (
                      <>
                        <Text
                          px={2}
                          py={1}
                          fontSize="sm"
                          textTransform="capitalize"
                          borderRadius="lg"
                          color="primary.purple.600"
                          border="0.063rem solid"
                          borderColor="primary.pruple.400"
                          key={`type-ticket-discount ${item_type_ticket} ${item.image_link}}`}
                        >
                          {item_type_ticket}
                        </Text>
                      </>
                    ))}
                  </HStack>
                )}
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
                {item.discount && (
                  <>
                    <HStack justifyContent="space-between">
                      <Flex alignItems="center" gap={1}>
                        <Text>Save:</Text>
                        <Text fontSize="lg" color="red" fontWeight="bold">
                          {item.discount}
                        </Text>
                      </Flex>
                      <Flex gap={1} alignItems="center">
                        <Text>From:</Text>
                        <Text
                          textDecorationLine="line-through"
                          fontSize="sm"
                          color="primary.gray.500"
                        >
                          {item.previous_prices}$
                        </Text>
                        <Text fontSize="lg" fontWeight="bold">
                          {item.current_prices}$
                        </Text>
                      </Flex>
                    </HStack>
                  </>
                )}
                {item.time_reminder && (
                  <TimeReminder targetDate={item.time_reminder} text="End in" />
                )}
              </CardTicketOne>
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
      <Center>
        <Button variant="primary">View More</Button>
      </Center>
    </Container>
  );
};

export default DiscountTicket;
