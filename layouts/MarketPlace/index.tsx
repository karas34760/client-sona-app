import { useQuery } from '@apollo/client';
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import LoadingData from '@/animations/Loading/LoadingData';
import CardTicketOne from '@/components/Card/CardTicketOne';
import EmptyData from '@/components/EmptyData';
import ConfirmBuyTicket from '@/components/Modal/ConfirmBuyTicket';
import {
  SEARCH_ACCOUNT_BY_ADDRESS,
  SEARCH_TICKET_ON_SALE,
} from '@/graphql/query';
interface IProps {
  data: any; //Event Search Data
  address: string;
}
const MarketPlacePage = ({ data, address }: IProps) => {
  const { data: dataHolders, loading } = useQuery(SEARCH_TICKET_ON_SALE, {
    variables: {
      page: 1,
      size: 10,
      filter: {
        eventAddress: address,
      },
    },
  });
  const { loading: loadingOrganizer, data: dataOrganizer } = useQuery(
    SEARCH_ACCOUNT_BY_ADDRESS,
    {
      variables: {
        address: data.organizer,
      },
    }
  );

  if (loading || loadingOrganizer) {
    return <LoadingData />;
  }
  return (
    <Box width="full" height="full">
      <Box
        height={{ lg: '560px', base: '300px' }}
        width="full"
        bgImage={data.image}
        bgSize="cover"
        bgPosition="center"
        backgroundRepeat="no-repeat"
      />
      <Container maxWidth="container.lg" py={8}>
        <Heading fontSize="2rem" textAlign="center">
          Marketpalce for Event: {data.name}
        </Heading>
        <Box>
          Organizer:
          {dataOrganizer.searchAccountByAddress.profile.username || 'No Name'}
        </Box>
        <HStack></HStack>
        {dataHolders.searchTicketsOnSales.items.length ? (
          <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={8}>
            {dataHolders.searchTicketsOnSales.items.map((item: any) => (
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
                    <Text>Price : ${item.price}</Text>
                    <Text>Amount: {item.amount}</Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <ConfirmBuyTicket
                      eventAddress={item.eventAddress}
                      tier={item.tier}
                      amount={item.amount}
                      price={item.price}
                      seller={item.seller}
                      name={item.name}
                      description={item.description}
                      asset={item.asset}
                      signature={item.signature}
                      startTime={item.startTime}
                      deadline={item.deadline}
                    />
                    <Button>View Events</Button>
                  </HStack>
                </CardTicketOne>
              </GridItem>
            ))}
          </Grid>
        ) : (
          <EmptyData />
        )}
      </Container>
    </Box>
  );
};

export default MarketPlacePage;
