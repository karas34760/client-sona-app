import { useQuery } from '@apollo/client';
import { Container, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import ListEventSkeletons from '../Skeleton/ListEvent';

import CardTicketOne from '@/components/Card/CardTicketOne';
import Carousel from '@/components/Carousel/Carousel';
import LinkSecondary from '@/components/Link/LinkSecondary';
import TimeReminder from '@/components/Time/TimeReminder';
import { SEARCH_EVENTS } from '@/graphql/query';
import { convertTimestampToDate } from '@/utils/format/date';

const TrendingConcert = () => {
  const { data, loading } = useQuery(SEARCH_EVENTS, {
    variables: {
      page: 1,
      size: 10,
      filter: {
        category: ['concert'],
      },
    },
  });
  if (loading) {
    return <ListEventSkeletons />;
  }
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
        {data &&
          data.searchEvents.items.map((item: any, index: number) => (
            <SwiperSlide
              key={`trending-concert-${item.eventId} ${index}`}
              style={{
                height: 'auto',
              }}
            >
              <Link href={`/event/${item.address}`}>
                <CardTicketOne image_link={item.image}>
                  <TimeReminder targetDate={item.EndTime} text="End in" />

                  <Text
                    fontWeight="bold"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {item.name}
                  </Text>
                  <HStack justifyContent="space-between">
                    <Text fontSize="sm" color="primary.gray.500">
                      {convertTimestampToDate(item.StartTime)}
                    </Text>
                  </HStack>
                  {item.category && (
                    <HStack gap={1}>
                      {item.category.map((item_sub: any, index: number) => (
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

export default TrendingConcert;
