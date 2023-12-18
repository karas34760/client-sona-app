import { Box, Button, Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import { TicketBuy } from './EventTab/TicketInformation';

import { useAuth } from '@/hooks/useAuth';
interface IProps {
  location: string;
  StartDate: string;
  EndDate: string;
  address: string;
  dataTicket: TicketBuy[];
}
const EventBooking = ({
  location,
  StartDate,
  EndDate,
  address,
  dataTicket,
}: IProps) => {
  const attributes = [
    { key: 'Location', value: location },
    { key: 'Start Date', value: StartDate },
    { key: 'End Date', value: EndDate },
    { key: 'Viewing Age', value: 'Over 8 ages' },
  ];
  const { user } = useAuth();
  return (
    <>
      <Box height="full" width="full">
        <Flex
          flexDirection="column"
          position="sticky"
          top="104px"
          zIndex={10}
          gap={6}
        >
          <Flex
            py={6}
            flexDirection="column"
            width="full"
            border="0.063rem solid"
            borderColor="primary.purple.400"
            boxShadow="shadow.100"
            borderRadius="xl"
          >
            <Flex flexDirection="column" padding={5} pt={2} gap={6}>
              <Text fontSize="lg" fontWeight="bold" textAlign="center">
                Overview
              </Text>
              {attributes.map(item => (
                <HStack
                  gap={2}
                  key={item.key}
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Text fontWeight="bold" flex={1}>
                    {item.key}
                  </Text>
                  <Text
                    flex={1}
                    textAlign="right"
                    fontSize="sm"
                    overflowWrap="break-word"
                  >
                    {item.value}
                  </Text>
                </HStack>
              ))}
            </Flex>
            <Flex
              flexDirection="column"
              gap={2}
              borderTop="0.063rem solid"
              borderTopColor="primary.gray.300"
              p={4}
            >
              <Text fontSize="lg" fontWeight="bold">
                Round Time
              </Text>
              <Box
                py={2}
                px={4}
                width="fit-content"
                color="primary.purple.500"
                border="0.063rem solid"
                borderColor="primary.purple.500"
                borderRadius="lg"
                fontWeight="bold"
              >
                Time : 15:00
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                Ticket Remaining
              </Text>
              <HStack justifyContent="space-between">
                {dataTicket.map(item => (
                  <>
                    <Flex gap={1}>
                      <Text fontSize="sm" color="primary.gray.600">
                        {item.name}:
                      </Text>
                      <Text fontWeight="bold" fontSize="sm">
                        {item.remaining}
                      </Text>
                    </Flex>
                  </>
                ))}
              </HStack>
            </Flex>
          </Flex>

          {user ? (
            <>
              <Link href={`/booking/${address}`}>
                <Button width="full" variant="primary">
                  Make a Reservation
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Tooltip label="Please Connect wallet " fontSize="md">
                <Button width="full" variant="primary" isDisabled={true}>
                  Make a Reservation
                </Button>
              </Tooltip>
            </>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default EventBooking;
