import { useQuery } from '@apollo/client';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import LoadingData from '@/animations/Loading/LoadingData';
import CardTicketOne from '@/components/Card/CardTicketOne';
import EmptyData from '@/components/EmptyData';
import { SEARCH_TICKET_HOLDER } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';

const MyTicket = () => {
  const { user } = useAuth();
  const { data, loading } = useQuery(SEARCH_TICKET_HOLDER, {
    variables: {
      page: 1,
      size: 10,
      filter: {
        userAddress: user,
      },
    },
  });
  if (loading) {
    return <LoadingData />;
  }
  return (
    <>
      {data.searchTicketHolders.items.length ? (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.searchTicketHolders.items.map((item: any) => (
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
                  <Text
                    width="200px"
                    fontWeight="bold"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {item.tier}
                  </Text>
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

export default MyTicket;
