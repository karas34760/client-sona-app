import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import { DatePicker } from '@/components/Calendar/CalendarReservation/DatePicker';

const EventBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const currentSeat = [
    {
      label: 'Vip seat',
      quantity: 12,
    },
    {
      label: 'R seat',
      quantity: 30,
    },
    ,
    {
      label: 'A seat',
      quantity: 10,
    },
    ,
    {
      label: 'S seat',
      quantity: 10,
    },
  ];

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
            flexDirection="column"
            width="full"
            border="0.063rem solid"
            borderColor="primary.purple.400"
            boxShadow="shadow.100"
            borderRadius="xl"
          >
            <Text p={4} fontSize="lg" fontWeight="bold">
              Booking Date
            </Text>
            <VStack>
              <DatePicker
                value={startDate}
                onChange={(date: any) => setStartDate(date)}
              />
            </VStack>
            <Flex
              flexDirection="column"
              gap={2}
              borderTop="0.063rem solid"
              borderTopColor={'primary.gray.300'}
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
              {/**
               * Select Rountime base on current Date
               */}
              <HStack justifyContent="space-between">
                {currentSeat.map(item => (
                  <>
                    <Flex>
                      <Text fontSize="sm" color="primary.gray.600">
                        {item?.label}:
                      </Text>
                      <Text fontWeight="bold" fontSize="sm">
                        {item?.quantity}
                      </Text>
                    </Flex>
                  </>
                ))}
              </HStack>
            </Flex>
          </Flex>

          <Button width="full" variant="primary">
            Make a Reservation
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default EventBooking;
