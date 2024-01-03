import { useQuery } from '@apollo/client';
import {
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';

import LoadingData from '@/animations/Loading/LoadingData';
import EmptyData from '@/components/EmptyData';
import OnSaleMyTicket from '@/components/Modal/OnSaleMyTicket';
import RefundTicketMoney from '@/components/Modal/RefundTicketMoney';
import { SEARCH_TICKET_OF_USER } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import EyeIcon from 'public/assets/icons/generals/eye.svg';
const TicketTab = () => {
  const { data, loading, refetch } = useQuery(SEARCH_TICKET_OF_USER, {
    variables: {
      page: 1,
      size: 10,
    },
  });
  const { isLoading } = useAuth();
  useEffect(() => {
    if (!isLoading) {
      refetch();
    }
  }, [isLoading]);
  if (loading) {
    return <LoadingData />;
  }
  return (
    <>
      {data.searchTicketsOfUser.items.length ? (
        <>
          <Flex flexDirection="column" gap={6}>
            {data.searchTicketsOfUser.items.map((item: any) => (
              <HStack
                key={`${item.eventId} -tier ${item.tier}`}
                gap={4}
                boxShadow="lg"
              >
                <Box height={'100px'} width={'100px'}>
                  <Image
                    alt={`Ticket ${item.tier} ${item.eventId}`}
                    src={item.asset}
                    height="full"
                    width="full"
                    objectFit="cover"
                  />
                </Box>
                <Box fontWeight="bold">
                  <Text>Tier Ticket: {item.tier}</Text>
                  <Text>Amount: {item.amount}</Text>{' '}
                  <Text>Pricing List : {item.price}</Text>
                </Box>
                <HStack gap={2}>
                  {item.isExpired && (
                    <Badge colorScheme="red">Event Expired</Badge>
                  )}
                  {!item.isExpired && (
                    <OnSaleMyTicket
                      short={true}
                      tier={item.tier}
                      amount={item.amount}
                      eventAddress={item.eventAddress}
                      asset={item.asset}
                      priceListing={item.price}
                    />
                  )}
                  {!item.isExpired && (
                    <RefundTicketMoney
                      short={true}
                      tier={item.tier}
                      amount={item.amount}
                      eventAddress={item.eventAddress}
                    />
                  )}
                  {!item.isExpired && (
                    <Link href={`/event/${item.eventAddress}`}>
                      <Tooltip placement="top" label="View Events">
                        <IconButton
                          variant="primary"
                          icon={<Icon as={EyeIcon} height={5} width={5} />}
                          aria-label="View"
                        />
                      </Tooltip>
                    </Link>
                  )}
                </HStack>
              </HStack>
            ))}
          </Flex>
        </>
      ) : (
        <EmptyData />
      )}
    </>
  );
};

export default TicketTab;
