import { useQuery } from '@apollo/client';
import { Badge, Grid, GridItem, HStack, Text, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';

import LoadingData from '@/animations/Loading/LoadingData';
import CardTicketOne from '@/components/Card/CardTicketOne';
import EmptyData from '@/components/EmptyData';
import { SEARCH_AVAILABLE_WRAP_USD, SEARCH_EVENTS } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { convertTimestampToDate } from '@/utils/format/date';

const WithDrawOwner = () => {
  const { user, isLoading } = useAuth();
  const { data, loading, refetch } = useQuery(SEARCH_EVENTS, {
    variables: {
      page: 1,
      size: 50,
      filter: {
        organizer: user,
      },
      orderBy: {
        createdTime: 'desc',
      },
    },
  });
  const { data: dataWrapUSD, loading: loadingWrapUSD } = useQuery(
    SEARCH_AVAILABLE_WRAP_USD
  );
  useEffect(() => {
    if (!isLoading) {
      refetch();
    }
  }, [isLoading]);
  if (loading || loadingWrapUSD) {
    return <LoadingData />;
  }

  return (
    <>
      <Text mb={6} fontWeight="bold">
        Total Available to Withdraw USDT: ${dataWrapUSD.searchAvailableWrapUSD}
      </Text>
      {data.searchEvents.items.length && dataWrapUSD.searchAvailableWrapUSD ? (
        <Grid
          templateColumns={{
            lg: 'repeat(4, 1fr)',
            md: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
        >
          {data.searchEvents.items.map((item: any) => (
            <>
              {item.isWithdrawable && (
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
                        <Text
                          fontSize="sm"
                          color="primary.gray.500"
                          fontWeight="bold"
                        >
                          Status:
                        </Text>
                        <Badge>Withdraw</Badge>
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
              )}
            </>
          ))}
        </Grid>
      ) : (
        <EmptyData />
      )}
    </>
  );
};

export default WithDrawOwner;
