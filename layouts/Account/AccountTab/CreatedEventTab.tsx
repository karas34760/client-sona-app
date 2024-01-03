import { useQuery } from '@apollo/client';
import { Grid, GridItem, HStack, Icon, Text, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';

import LoadingData from '@/animations/Loading/LoadingData';
import CardTicketOne from '@/components/Card/CardTicketOne';
import EmptyData from '@/components/EmptyData';
import {
  SEARCH_EVENTS,
  SEARCH_EVENTS_NOT_APPROVE_BY_USER,
} from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { convertTimestampToDate } from '@/utils/format/date';
import PendingIcon from 'public/assets/icons/generals/track-of-time.svg';
const CreatedEventTab = () => {
  const { user, isLoading } = useAuth();

  const { data, loading, refetch } = useQuery(SEARCH_EVENTS, {
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
  const {
    data: dataNotApprove,
    loading: loadingDataNotAprrove,
    refetch: refetchNotApprove,
  } = useQuery(SEARCH_EVENTS_NOT_APPROVE_BY_USER, {
    variables: {
      page: 1,
      size: 10,
      orderBy: {
        createdTime: 'desc',
      },
    },
  });
  useEffect(() => {
    if (!isLoading) {
      refetch();
      refetchNotApprove();
    }
  }, [isLoading]);
  if (loading || loadingDataNotAprrove) {
    return <LoadingData />;
  }

  return (
    <>
      <Text mb={6} fontWeight="bold">
        Total My Created Events:{' '}
        {dataNotApprove.searchEventNotApproveByUser.items.length +
          data.searchEvents.items.length}
      </Text>
      {dataNotApprove.searchEventNotApproveByUser.items.length ||
      data.searchEvents.items.length ? (
        <Grid
          templateColumns={{
            lg: 'repeat(4, 1fr)',
            md: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
        >
          {data.searchEvents.items.map((item: any) => (
            <GridItem key={item.eventId} width="full">
              <Link
                href={`${item.address ? `/event/${item.address}` : ''}`}
                onClick={e => {
                  if (!item.address) {
                    e.preventDefault();
                  }
                }}
              >
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
                      Status:
                    </Text>
                    {new Date(item.EndTime) > new Date() ? (
                      <>
                        <Text>Active</Text>
                      </>
                    ) : (
                      <Text>Expired</Text>
                    )}
                  </HStack>
                  <Text fontSize="sm" color="primary.gray.500">
                    {`  Start:
                    ${convertTimestampToDate(item.StartTime)}`}
                  </Text>
                  <Text fontSize="sm" color="primary.gray.500">
                    {`End: ${convertTimestampToDate(item.EndTime)}`}
                  </Text>
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
          {dataNotApprove.searchEventNotApproveByUser.items.map((item: any) => (
            <GridItem key={item.eventId} width="full">
              <Link
                href={`${item.address ? `/event/${item.address}` : ''}`}
                onClick={e => {
                  if (!item.address) {
                    e.preventDefault();
                  }
                }}
              >
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
                    <Text>Status:</Text>
                    <HStack color="blue">
                      <Text fontSize="sm" fontWeight="bold">
                        Waitting Approve
                      </Text>
                      <Icon as={PendingIcon} />
                    </HStack>
                  </HStack>
                  <Text fontSize="sm" color="primary.gray.500">
                    {`  Start:
                    ${convertTimestampToDate(item.StartTime)}`}
                  </Text>
                  <Text fontSize="sm" color="primary.gray.500">
                    {`End: ${convertTimestampToDate(item.EndTime)}`}
                  </Text>
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
