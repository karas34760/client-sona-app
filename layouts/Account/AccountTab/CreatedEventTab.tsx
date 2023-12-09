import { useQuery } from '@apollo/client';
import { Grid, GridItem, HStack, Text, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import LoadingData from '@/animations/Loading/LoadingData';
import CardTicketOne from '@/components/Card/CardTicketOne';
import EmptyData from '@/components/EmptyData';
import { SEARCH_EVENTS } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { convertTimestampToDate } from '@/utils/format/date';

const CreatedEventTab = () => {
  const { user } = useAuth();
  const { data, loading } = useQuery(SEARCH_EVENTS, {
    variables: {
      page: 1,
      size: 10,
      filter: {
        organizer: user,
      },
      orderBy: {
        createdTime: 'desc',
      },
    },
  });

  if (loading) {
    return <LoadingData />;
  }

  return (
    <>
      {data.searchEvents.items.length ? (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.searchEvents.items.map((item: any) => (
            <GridItem key={item.eventId} width="full">
              <Link href={`/event/${item.address}`}>
                <CardTicketOne image_link={item.image}>
                  <Tooltip
                    label={item.name}
                    aria-label="Tooltip name event tickifi "
                  >
                    <Text
                      width="200px"
                      fontWeight="bold"
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {item.name}
                    </Text>
                  </Tooltip>
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
            </GridItem>
          ))}
        </Grid>
      ) : (
        <EmptyData />
      )}
    </>
  );
};

export default CreatedEventTab;
