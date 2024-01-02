import { useQuery } from '@apollo/client';
import { Container, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import ListEventSkeletons from '../Skeleton/ListEvent';

import CardTicketOne from '@/components/Card/CardTicketOne';
import Carousel from '@/components/Carousel/Carousel';
import TimeReminder from '@/components/Time/TimeReminder';
import { SEARCH_EVENTS } from '@/graphql/query';
import { convertTimestampToDate } from '@/utils/format/date';
// This event just approved
const UpcomingEvent = () => {
  const { t } = useTranslation();
  const { data, loading } = useQuery(SEARCH_EVENTS, {
    variables: {
      page: 1,
      size: 10,
      orderBy: {
        TimeForSell: 'desc',
      },
    },
  });
  const text_color1 = useColorModeValue('"primary.gray.800"', 'white');
  if (loading) {
    return <ListEventSkeletons />;
  }
  return (
    <Container maxWidth="container.xl">
      <HStack justifyContent="space-between">
        <Text variant="type_sub_title">{t('upcomming_schedule')}</Text>
        {/*        <LinkSecondary
          link="/discover"
          label="View All"
          sx={{
            fontWeight: 'bold',
            color: 'primary.purple.300',
          }}
        /> */}
      </HStack>
      <Carousel>
        {data &&
          data.searchEvents.items.map((item: any, index: number) => (
            <>
              {item.TimeForSell > new Date() && (
                <SwiperSlide
                  key={`up-comming-${item.eventId} ${index}`}
                  style={{
                    height: 'auto',
                  }}
                >
                  <Link href={`/event/${item.address}`}>
                    <CardTicketOne image_link={item.image}>
                      <TimeReminder
                        targetDate={item.TimeForSell}
                        text="Open in"
                      />

                      <Text
                        fontWeight="bold"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        color={text_color1}
                      >
                        {item.name}
                      </Text>

                      <Text fontSize="sm" color="primary.gray.500">
                        {convertTimestampToDate(item.StartTime)}
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
    </Container>
  );
};

export default UpcomingEvent;
