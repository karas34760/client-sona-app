import { useQuery } from '@apollo/client';
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

import ListEventSkeletons from '../Skeleton/ListEvent';

import CardTicketOne from '@/components/Card/CardTicketOne';
import Carousel from '@/components/Carousel/Carousel';
import TimeReminder from '@/components/Time/TimeReminder';
import { SEARCH_EVENTS } from '@/graphql/query';
import { convertTimestampToDate, timeAgo } from '@/utils/format/date';

const ActiveEvents = () => {
  const { data, loading } = useQuery(SEARCH_EVENTS, {
    variables: {
      page: 1,
      size: 50,
      orderBy: {
        DeadlineForSell: 'asc',
      },
    },
  });
  if (loading) {
    return (
      <Flex flexDirection="column" gap={4}>
        <ListEventSkeletons />
        <ListEventSkeletons />
      </Flex>
    );
  }
  return (
    <Container maxWidth="container.xl">
      <Center>
        <Text variant="type_sub_title">Active Events Ticket</Text>
      </Center>
      <Carousel
        options={
          data && data.searchEvents.items.length > 7
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
        {data &&
          data.searchEvents.items.map((item: any, index: number) => (
            <>
              {new Date(item.DeadlineForSell) > new Date() &&
                new Date(item.TimeForSell) < new Date() && (
                  <SwiperSlide
                    key={`up-comming-${item.eventId} ${index}`}
                    style={{
                      height: 'auto',
                    }}
                  >
                    <Link href={`/event/${item.address}`}>
                      <CardTicketOne image_link={item.image}>
                        <TimeReminder
                          targetDate={item.DeadlineForSell}
                          text="End Sale in"
                        />

                        <Text
                          fontWeight="bold"
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          {item.name}
                        </Text>
                        <Text fontSize="sm" color="primary.gray.500">
                          {`Sale :
                        ${timeAgo(new Date(item.TimeForSell))} ago`}
                        </Text>
                        <Text fontSize="sm" color="primary.gray.500">
                          {`  Event Start:
                        ${convertTimestampToDate(item.StartTime)}`}
                        </Text>

                        {item.category && (
                          <HStack gap={1}>
                            {item.category.map(
                              (item_sub: string, index: number) => (
                                <>
                                  <Text
                                    variant="type_categories"
                                    key={`up-comming-events-sub${index} $${item.name} ${index}}`}
                                  >
                                    {item_sub}
                                  </Text>
                                </>
                              )
                            )}
                          </HStack>
                        )}
                      </CardTicketOne>
                    </Link>
                  </SwiperSlide>
                )}
            </>
          ))}
      </Carousel>
      <Center>
        <Link href="/discover">
          <Button variant="primary">View More</Button>
        </Link>
      </Center>
    </Container>
  );
};

export default ActiveEvents;
