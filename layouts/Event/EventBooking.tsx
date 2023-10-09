import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const EventBooking = () => {
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
            py={6}
            flexDirection="column"
            width="full"
            border="0.063rem solid"
            borderColor="primary.purple.400"
            boxShadow="shadow.100"
            borderRadius="xl"
          >
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
