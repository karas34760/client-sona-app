import { Container, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import CardTicketOne from '@/components/Card/CardTicketOne';
import Carousel from '@/components/Carousel/Carousel';
import LinkSecondary from '@/components/Link/LinkSecondary';
import TimeReminder from '@/components/Time/TimeReminder';
// This event just approved
const UpcomingEvent = () => {
  const Listest = [
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-3',
      time: '15 Steptember 30',
      image_link: '/test/banner/banner_5.jpeg',
      type_events: ['club', 'communicatiy events'],
      time_reminder: Date.now() + 2 * 60 * 60 * 1000,
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-2',
      time: '15 Steptember 30',
      image_link: '/test/banner/banner_6.jpeg',
      type_events: ['festival', 'communicatiy events'],
      time_reminder: Date.now() + 3 * 60 * 60 * 1000,
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center-1',
      time: '15 Steptember 30',
      image_link: '/test/banner/banner_7.jpeg',
      time_reminder: Date.now() + 3 * 24 * 60 * 60 * 1000,
    },
    {
      name: 'Escape56 Feat. Paramida (Love On The Rocks / DE), Leland & Anwar',
      oganization: 'Mody Center',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/banner/banner_8.jpeg',
      type_events: ['conference '],
      time_reminder: Date.now() + 3 * 24 * 60 * 60 * 1000,
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center--',
      time: '15 Steptember 30',
      image_link: '/test/nft/nft_7.jpeg',
      time_reminder: Date.now() + 1 * 24 * 60 * 60 * 1000,
    },
    {
      name: 'Artic Monkey',
      oganization: 'Mody Center==',
      time: '2023.7.20 ~ 10.22',
      image_link: '/test/nft/nft_8.jpeg',
      time_reminder: Date.now() + 2 * 24 * 60 * 60 * 1000,
    },
  ];
  return (
    <Container maxWidth="container.xl">
      <HStack justifyContent="space-between">
        <Text variant="type_sub_title">Upcomming Schedule</Text>
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
            <Link href="/event/3">
              <CardTicketOne image_link={item.image_link}>
                {item.time_reminder && (
                  <TimeReminder
                    targetDate={item.time_reminder}
                    text="Open in"
                  />
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
                {item.type_events && (
                  <HStack gap={1}>
                    {item.type_events.map((item_sub, index) => (
                      <>
                        <Text
                          variant="type_categories"
                          key={`type-events-sub${index} $${item.name} ${index}}`}
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

export default UpcomingEvent;
