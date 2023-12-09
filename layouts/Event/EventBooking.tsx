import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
interface IProps {
  location: string;
  StartDate: string;
  EndDate: string;
}
const EventBooking = ({ location, StartDate, EndDate }: IProps) => {
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
  const attributes = [
    { key: 'Location', value: location },
    { key: 'Start Date', value: StartDate },
    { key: 'End Date', value: EndDate },
    { key: 'Viewing Age', value: 'Over 8 ages' },
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
