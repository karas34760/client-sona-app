import { useQuery } from '@apollo/client';
import { Button, Grid, GridItem, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import LoadingData from '@/animations/Loading/LoadingData';
import CardTicketOne from '@/components/Card/CardTicketOne';
import EmptyData from '@/components/EmptyData';
import OnSaleMyTicket from '@/components/Modal/OnSaleMyTicket';
import RefundTicketMoney from '@/components/Modal/RefundTicketMoney';
import { SEARCH_TICKET_OF_USER } from '@/graphql/query';
import EyeIcon from 'public/assets/icons/generals/eye.svg';

const MyTicket = () => {
  const { data, loading } = useQuery(SEARCH_TICKET_OF_USER, {
    variables: {
      page: 1,
      size: 10,
    },
  });
  if (loading) {
    return <LoadingData />;
  }
  return (
    <>
      {data.searchTicketsOfUser.items.length ? (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.searchTicketsOfUser.items.map((item: any) => (
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
                  <Text>Pricing List : {item.price}</Text>
                  <Text>Amount: {item.amount}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <OnSaleMyTicket
                    tier={item.tier}
                    amount={item.amount}
                    eventAddress={item.eventAddress}
                    asset={item.asset}
                    priceListing={item.price}
                  />
                  <RefundTicketMoney
                    tier={item.tier}
                    amount={item.amount}
                    eventAddress={item.eventAddress}
                  />
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

export default MyTicket;
