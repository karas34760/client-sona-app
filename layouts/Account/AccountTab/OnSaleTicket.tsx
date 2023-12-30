import { useQuery } from '@apollo/client';
import {
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import LoadingData from '@/animations/Loading/LoadingData';
import CardTicketOne from '@/components/Card/CardTicketOne';
import EmptyData from '@/components/EmptyData';
import { SEARCH_TICKET_ON_SALE } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import EyeIcon from 'public/assets/icons/generals/eye.svg';

const OnSaleTicket = () => {
  const { user } = useAuth();
  const { data, loading } = useQuery(SEARCH_TICKET_ON_SALE, {
    variables: {
      page: 1,
      size: 10,
      filter: {
        signer: user,
      },
    },
  });
  if (loading) {
    return <LoadingData />;
  }
  return (
    <>
      {data.searchTicketsOnSales.items.length ? (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.searchTicketsOnSales.items.map((item: any) => (
            <GridItem key={item.eventId} width="full">
              <CardTicketOne image_link={item.asset}>
                <Text
                  width="200px"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  Tier Ticket: {item.tier}
                </Text>
                <HStack justifyContent="space-between">
                  <Text>Sale Price: {item.price}</Text>
                  <Text>Amount: {item.amount}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Link href={`/ticket/${item.eventAddress}/${item.tier}`}>
                    <Button
                      variant="primary"
                      leftIcon={<Icon as={EyeIcon} height={5} width={5} />}
                    >
                      View
                    </Button>
                  </Link>
                </HStack>
              </CardTicketOne>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <EmptyData />
      )}
    </>
  );
};

export default OnSaleTicket;
